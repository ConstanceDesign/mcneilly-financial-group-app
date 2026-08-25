import React, { useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import heroDesktop from '../images/contact-hero-desktop.jpg';
import heroTablet from '../images/contact-hero-tablet.jpg';
import heroMobile from '../images/contact-hero-mobile.jpg';

const Contact: React.FC = () => {
  const OFFICE_FAX =
    (import.meta.env.VITE_OFFICE_FAX as string | undefined) ||
    '(519) 979 5432';

  const OFFICE_PHONE =
    (import.meta.env.VITE_OFFICE_PHONE as string | undefined) ||
    '(519) 979-5396';

  const OFFICE_PHONE_TEL = '+15199795396';
  const OFFICE_FAX_TEL = '+15199795432';

  const today = useMemo(() => {
    const d = new Date();

    return d.toLocaleDateString('en-CA', {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
  }, []);

  const reduceMotion = useReducedMotion();

  const cardIn = reduceMotion
    ? {}
    : {
        initial: {
          opacity: 0,
          y: 14,
        },
        whileInView: {
          opacity: 1,
          y: 0,
        },
        viewport: {
          once: true,
          amount: 0.2,
        },
        transition: {
          duration: 0.55,
          ease: 'easeOut' as const,
        },
      };

  const colIn = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: {
            opacity: 0,
            y: 10,
          },
          whileInView: {
            opacity: 1,
            y: 0,
          },
          viewport: {
            once: true,
            amount: 0.2,
          },
          transition: {
            duration: 0.45,
            ease: 'easeOut' as const,
            delay,
          },
        };

  const pageBg = 'bg-[#f4f2ec]';

  const softCard =
    'rounded-xl border border-black/10 bg-white/60 backdrop-blur-sm shadow-sm ' +
    'p-5 sm:p-6 h-full';

  const h2 =
    'font-sans text-2xl font-semibold tracking-tight text-[#0f5028]';

  const label =
    'block text-[15px] font-semibold tracking-[0.01em] text-[#0f5028]';

  const mapBtn =
    'btn inline-flex items-center justify-center gap-2 w-full ' +
    'px-4 py-3 rounded-xs ' +
    'bg-white/70 hover:bg-white/90 ' +
    'border border-black/10 ' +
    'text-[#0f5028] text-sm font-bold uppercase tracking-wide ' +
    'shadow-sm hover:shadow-md transition ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5028]/25';

  const destinationEncoded =
    '1608%20Sylvestre%20Dr%20%232D%2C%20Tecumseh%2C%20ON%20N8N%202L9';

  const googleMapsUrl =
    `https://www.google.com/maps/dir/?api=1&destination=${destinationEncoded}`;

  const appleMapsUrl =
    `https://maps.apple.com/?daddr=${destinationEncoded}`;

  /*
    HYBRID VIEW:
    t=h gives the aerial/satellite imagery with road/place labels,
    matching the Google Maps version shown in your screenshot.
  */
  const googleMapEmbedUrl =
    `https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=${destinationEncoded}&t=h&z=16&output=embed`;

  return (
    <div className={`${pageBg} text-[#1f2937] font-inter`}>
      <section aria-label="Contact page hero" className="relative">
        {/* DESKTOP / TABLET HERO — UNCHANGED */}
        <div className="relative overflow-hidden hidden sm:block">
          <picture>
            <source
              media="(max-width: 1024px)"
              srcSet={heroTablet}
            />

            <img
              src={heroDesktop}
              alt="A warm conversation across generations"
              loading="eager"
              decoding="async"
              className="
                w-full
                sm:h-[clamp(280px,36vw,420px)]
                lg:h-[clamp(280px,28vw,420px)]
                object-cover
                sm:object-[70%_34%]
                lg:object-[74%_36%]
                xl:object-[78%_34%]
                saturate-[0.98]
                contrast-[1.02]
              "
            />
          </picture>

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(244,242,236,0.96),rgba(244,242,236,0.84),rgba(15,80,40,0.08))]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_82%_38%,rgba(0,0,0,0.12),transparent_56%)]"
          />

          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.14),transparent)]"
          />

          <div className="absolute inset-0">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
              <div className="h-full flex items-center">
                <div className="relative -translate-y-3 sm:-translate-y-6 lg:-translate-y-4">
                  <div className="rounded-2xl bg-white/35 backdrop-blur-sm border border-black/5 px-4 py-4 sm:p-0 sm:bg-transparent sm:backdrop-blur-0 sm:border-0">
                    <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0f5028]">
                      Consultation • Planning • Protection
                    </p>

                    <h1 className="mt-2.5 sm:mt-3 font-sans font-medium tracking-tight text-[#102019] leading-[1.05] text-[2.05rem] sm:text-5xl lg:text-6xl">
                      Let&apos;s Talk About
                      <br />

                      <span className="whitespace-nowrap">
                        Your Financial Plan
                      </span>
                    </h1>

                    <p className="mt-3 text-[16px] sm:text-[16px] text-[#1f2937]/80 leading-relaxed max-w-[52ch]">
                      Clear, conservative guidance for retirement, insurance, and
                      long-term planning, in person or virtually.
                    </p>

                    <a
                      href="#main-content"
                      className="sr-only focus:not-sr-only focus:inline-flex focus:mt-4 focus:bg-white/85 focus:px-3 focus:py-2 focus:rounded-xs focus:outline-none focus:ring-2 focus:ring-[#0f5028]/30"
                    >
                      Skip to main content
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE HERO */}
        <div className="sm:hidden bg-[#f4f2ec]">
          <div className="px-9 pt-5">
            <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#0f5028]">
              Consultation • Planning • Protection
            </p>

            <h1 className="mt-3 font-sans text-[1.95rem] font-semibold tracking-tight text-[#102019] leading-[1.08]">
              Let&apos;s Talk About
              <br />
              Your Financial Plan
            </h1>
          </div>

          <figure className="relative mt-5 w-full overflow-hidden">
            <img
              src={heroMobile}
              alt="A warm conversation across generations"
              loading="eager"
              decoding="async"
              className="
                block
                w-full
                h-52.5
                object-cover
                object-[72%_30%]
                saturate-[0.98]
                contrast-[1.02]
              "
            />

            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                bg-[linear-gradient(90deg,rgba(244,242,236,0.7),rgba(244,242,236,0.50),rgba(244,242,236,0.05))]
              "
            />
          </figure>

          <div className="px-9">
            <p className="mt-4 pb-8 text-[15px] text-[#1f2937]/80 leading-[1.65] max-w-[52ch]">
              Clear, conservative guidance for retirement, insurance, and
              long-term planning, in person or virtually.
            </p>
          </div>
        </div>

        <div className="h-10 sm:h-12 bg-[linear-gradient(to_bottom,rgba(244,242,236,0.0),rgba(244,242,236,1))]" />
      </section>

      <main
  id="main-content"
  className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-11 md:pb-13"
      >

        <main
  id="main-content"
  className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-11 md:pb-13"
></main>
        <div
          className="
            -mt-14 sm:-mt-16 lg:-mt-20
            rounded-2xl
            border border-black/10
            bg-white/75
            backdrop-blur-md
            shadow-[0_22px_70px_rgba(0,0,0,0.10)]
            p-5 sm:p-6 lg:p-7
            xl:max-w-5xl xl:mx-auto
          "
        >
          <motion.section
            {...cardIn}
            className="grid gap-5 lg:gap-6"
          >
            <motion.article
              {...colIn(0)}
              className={`${softCard} mx-auto w-full`}
            >
              <div
                className="
                  grid
                  gap-6
                  md:grid-cols-12
                  md:gap-5
                  lg:gap-7
                  xl:gap-8
                  md:items-stretch
                "
              >
                {/* LEFT COLUMN */}
                <div className="md:col-span-5 flex flex-col">
                  <header>
                    <h2 className={h2}>
                      Call or visit our office
                    </h2>

                    <p className="mt-2 text-[15px] sm:text-[16px] text-[#1f2937]/75 leading-relaxed">
                      Appointments by request.
                    </p>
                  </header>

                  {/* LEFT COLUMN DIVIDER ONLY */}
                  <div className="mt-4 h-px w-full bg-black/10" />

                  <div className="mt-5 text-[15px] sm:text-[16px] text-[#1f2937]/80 leading-relaxed">
                    <p className="font-semibold text-lg text-[#0f5028]">
                      McNeilly Financial Group
                    </p>

                    <p className="mt-2">
                      1608 Sylvestre Drive, Suite 2D
                    </p>

                    <p>
                      Tecumseh, Ontario N8N 2L9
                    </p>

                    <div className="mt-5 space-y-4">
                      <div>
                        <span className={label}>
                          Phone
                        </span>

                        <a
                          href={`tel:${OFFICE_PHONE_TEL}`}
                          className="block underline underline-offset-4"
                        >
                          {OFFICE_PHONE}
                        </a>
                      </div>

                      <div>
                        <span className={label}>
                          Fax
                        </span>

                        <a
                          href={`tel:${OFFICE_FAX_TEL}`}
                          className="block underline underline-offset-4"
                        >
                          {OFFICE_FAX}
                        </a>
                      </div>

                      <div>
                        <span className={label}>
                          Hours
                        </span>

                        <span className="block">
                          Monday–Friday, 9:00 AM – 5:00 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="md:col-span-7 flex flex-col">
                  {/* GOOGLE HYBRID MAP */}
                  <div
                    className="
                      overflow-hidden
                      rounded-xl
                      border border-black/10
                      bg-white/70
                      shadow-sm
                      md:flex-1
                    "
                  >
                    <iframe
                      title="McNeilly Financial Group office location"
                      src={googleMapEmbedUrl}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="
                        block
                        w-full
                        h-[260px]

                        md:h-full
                        md:min-h-[190px]

                        lg:min-h-[220px]

                        xl:min-h-[240px]

                        border-0
                      "
                    />
                  </div>

                  {/* MAP BUTTONS */}
                  <div
                    className="
                      mt-3
                      grid
                      grid-cols-1
                      gap-3
                      xl:grid-cols-2
                    "
                  >
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={mapBtn}
                    >
                      <FaMapMarkerAlt aria-hidden="true" />
                      OPEN IN GOOGLE MAPS
                    </a>

                    <a
                      href={appleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={mapBtn}
                    >
                      <FaMapMarkerAlt aria-hidden="true" />
                      OPEN IN APPLE MAPS
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          </motion.section>
        </div>
      </main>

      <div className="hidden print:block p-6 text-xs text-gray-700">
        This page was printed on {today}. For security, do not include sensitive
        information in printed copies.
      </div>
    </div>
  );
};

export default Contact;