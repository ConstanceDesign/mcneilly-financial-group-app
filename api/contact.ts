import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

type ApiOk = {
  success: true;
  ok: true;
  message: string;
};

type ApiErr = {
  success: false;
  ok: false;
  code: string;
  message: string;
};

const ok = (res: VercelResponse, message: string) =>
  res.status(200).json({
    success: true,
    ok: true,
    message,
  } satisfies ApiOk);

const fail = (
  res: VercelResponse,
  status: number,
  code: string,
  message: string
) =>
  res.status(status).json({
    success: false,
    ok: false,
    code,
    message,
  } satisfies ApiErr);

const isEmail = (value?: string) =>
  !!value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const clamp = (value: string, maxLength: number) =>
  value.length > maxLength
    ? value.slice(0, maxLength)
    : value;

/* -------------------------------------------------------------------------- */
/* RATE LIMITING                                                               */
/* -------------------------------------------------------------------------- */

const buckets = new Map<
  string,
  {
    count: number;
    resetAt: number;
  }
>();

function rateLimit(
  key: string,
  limit = 6,
  windowMs = 10 * 60_000
) {
  const now = Date.now();
  const bucket = buckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(key, {
      count: 1,
      resetAt: now + windowMs,
    });

    return { allowed: true };
  }

  if (bucket.count >= limit) {
    return { allowed: false };
  }

  bucket.count += 1;

  return { allowed: true };
}

function getIp(req: VercelRequest) {
  const forwarded = req.headers['x-forwarded-for'];

  return (
    (
      typeof forwarded === 'string'
        ? forwarded
        : Array.isArray(forwarded)
          ? forwarded[0]
          : ''
    )
      ?.split(',')[0]
      ?.trim() ||
    req.socket?.remoteAddress ||
    'unknown'
  );
}

const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

/* -------------------------------------------------------------------------- */
/* EMAIL                                                                       */
/* -------------------------------------------------------------------------- */

function makeTransporter() {
  const host = (process.env.EMAIL_HOST || '').trim();
  const port = Number(process.env.EMAIL_PORT || 465);

  const secure =
    String(process.env.EMAIL_SECURE || 'true').toLowerCase() === 'true';

  const user = (process.env.SMTP_USER || '').trim();
  const pass = process.env.SMTP_PASS || '';

  if (!host) {
    throw new Error('EMAIL_HOST is not configured.');
  }

  if (!user) {
    throw new Error('SMTP_USER is not configured.');
  }

  if (!pass) {
    throw new Error('SMTP_PASS is not configured.');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

async function sendWithRetry(send: () => Promise<void>) {
  try {
    await send();
  } catch (err: any) {
    const code = String(err?.code || '');

    if (
      code === 'EBUSY' ||
      code === 'EAI_AGAIN' ||
      code === 'ENOTFOUND'
    ) {
      await sleep(350);
      await send();
      return;
    }

    throw err;
  }
}

/* -------------------------------------------------------------------------- */
/* HANDLER                                                                     */
/* -------------------------------------------------------------------------- */

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'POST') {
    return fail(
      res,
      405,
      'METHOD_NOT_ALLOWED',
      'Method not allowed.'
    );
  }

  const ip = getIp(req);

  const rl = rateLimit(
    `contact:${ip}`,
    6,
    10 * 60_000
  );

  if (!rl.allowed) {
    return fail(
      res,
      429,
      'RATE_LIMITED',
      'Too many requests. Please try again in 10 minutes.'
    );
  }

  try {
    const {
      name,
      email,
      message,
      phone,
    } = (req.body ?? {}) as {
      name?: string;
      email?: string;
      message?: string;
      phone?: string;
    };

    const safeName = (name || '').trim();
    const safeEmail = (email || '').trim();
    const safeMessage = (message || '').trim();
    const safePhone = (phone || '').trim();

    /* ---------------------------------------------------------------------- */
    /* VALIDATION                                                              */
    /* ---------------------------------------------------------------------- */

    if (!safeName) {
      return fail(
        res,
        400,
        'MISSING_NAME',
        'Please enter your name.'
      );
    }

    if (!isEmail(safeEmail)) {
      return fail(
        res,
        400,
        'BAD_EMAIL',
        'Please enter a valid email address.'
      );
    }

    if (!safeMessage) {
      return fail(
        res,
        400,
        'MISSING_MESSAGE',
        'Please enter a message.'
      );
    }

    /* ---------------------------------------------------------------------- */
    /* MESSAGE                                                                 */
    /* ---------------------------------------------------------------------- */

    const createdAtUTC = new Date().toISOString();

    const userAgent = String(
      req.headers['user-agent'] || ''
    );

    const subject =
      `[Website Lead] Contact Form — ${clamp(
        safeName,
        80
      )}`;

    const text = `LEAD SOURCE: Website Contact Form
DATE (UTC): ${createdAtUTC}

NAME: ${clamp(safeName, 120)}
EMAIL: ${clamp(safeEmail, 160)}
PHONE: ${clamp(safePhone, 60)}

MESSAGE:
${clamp(safeMessage, 5000)}

TECHNICAL
IP: ${ip}
USER AGENT: ${userAgent}
`;

    /* ---------------------------------------------------------------------- */
    /* EMAIL CONFIG                                                            */
    /* ---------------------------------------------------------------------- */

    const from =
      (process.env.EMAIL_FROM || '').trim() ||
      (process.env.SMTP_USER || '').trim();

    const to =
      (process.env.EMAIL_TO || '').trim() ||
      (process.env.EMAIL_RECEIVER || '').trim();

    if (!from) {
      throw new Error(
        'EMAIL_FROM is not configured.'
      );
    }

    if (!to) {
      throw new Error(
        'EMAIL_TO is not configured.'
      );
    }

    const transporter = makeTransporter();

    await sendWithRetry(async () => {
      await transporter.sendMail({
        from,
        to,
        subject,

        replyTo: safeEmail,

        text,
      });
    });

    return ok(
      res,
      'Message sent! We’ll get back to you shortly.'
    );
  } catch (err) {
    console.error('Contact error:', err);

    return fail(
      res,
      500,
      'EMAIL_SEND_FAILED',
      'Message failed to send. Please try again in a moment.'
    );
  }
}