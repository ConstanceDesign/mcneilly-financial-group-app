import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUserTie,
  FaCheckCircle,
  FaLightbulb,
} from 'react-icons/fa';
import Reveal from '../../components/motion/Reveal';

const Divider = () => (
  <div className="my-8 h-px bg-black/10" aria-hidden="true" />
);

const card =
  'rounded-xl border border-black/10 bg-white/60 backdrop-blur-sm shadow-sm';

const insightCard =
  'rounded-xl border border-[#8cbe3f] bg-[#f1f7ea] p-5 shadow-sm';

const KeyPerson: React.FC = () => {
  return (
    <section
      aria-labelledby="key-person-heading"
      className="text-[#333333]"
    >
      <Reveal
        variant="up"
        className="grid gap-8 lg:grid-cols-2 lg:gap-10 items-start"
      >
        <div className="space-y-5">
          <div className="flex items-start gap-3 mb-3">
            <span
              className="
                mt-0.5
                inline-flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-lg
                bg-[#f0f6ea]
                text-[#2f7a2e]
                shadow-sm
              "
              aria-hidden="true"
            >
              <FaUserTie className="h-[18px] w-[18px]" />
            </span>

            <h2
              id="key-person-heading"
              className="
                font-sans
                text-3xl
                font-semibold
                tracking-tight
                leading-[1.12]
                text-[#0f5028]
              "
            >
              Key Person Insurance
            </h2>
          </div>

          <p className="leading-relaxed">
            Key Person Insurance helps protect a business from the financial shock of losing a vital contributor due to
            death or disability.
          </p>

          <p className="leading-relaxed">
            Whether the person is a founder, executive, top producer, or technical specialist, the loss can disrupt
            revenue, operations, and growth. Coverage provides time and resources to stabilize and rebuild.
          </p>

          <div className="pt-4 border-t border-[#d4d4d4]">
            <h3
              className="
                font-sans
                text-2xl
                font-semibold
                tracking-tight
                leading-tight
                text-[#0f5028]
                mb-4
              "
            >
              Why It Matters
            </h3>

            <ul className="space-y-2">
              {[
                'Helps maintain revenue continuity during a transition',
                'Supports recruiting, onboarding, and training a replacement',
                'Can reduce lender or investor concern during change',
                'Signals long-term planning and strengthens retention strategy',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <FaCheckCircle
                    className="mt-1 h-4 w-4 shrink-0 text-[#2f7a2e]"
                    aria-hidden="true"
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-5">
          <div className={`${card} p-5 sm:p-6`}>
            <h3
              className="
                font-sans
                text-2xl
                font-semibold
                tracking-tight
                leading-tight
                text-[#0f5028]
                mb-4
              "
            >
              Protecting People and Performance
            </h3>

            <p className="leading-relaxed">
              Key person coverage is often underestimated until it’s needed. Proactive planning helps preserve
              operations and confidence while leadership navigates change.
            </p>

            <p className="mt-4 leading-relaxed">
              Some plans can be structured to support the business while also providing benefits to the insured person
              or their family, depending on ownership and design.
            </p>
          </div>

          <div className={insightCard}>
            <div className="flex items-center gap-2 mb-2">
              <FaLightbulb
                className="h-4 w-4 shrink-0 text-[#2f7a2e]"
                aria-hidden="true"
              />

              <span className="text-xs font-semibold tracking-wide uppercase text-[#0f5028]">
                Advisor Insight
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#0f5028] font-medium leading-relaxed">
              Map coverage to the roles that would be hardest to replace — and quantify the cost of disruption (lost
              sales, delays, recruiting time, and transition expenses).
            </p>
          </div>
        </div>
      </Reveal>

      <Divider />

      <Reveal variant="softUp">
        <h3
          className="
            font-sans
            text-2xl
            font-semibold
            tracking-tight
            leading-tight
            text-[#0f5028]
            mb-4
          "
        >
          How Key Person Coverage Is Usually Planned
        </h3>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: 'Identify Key Roles',
              b: 'Determine which roles create the biggest operational or revenue risk.',
            },
            {
              t: 'Quantify Impact',
              b: 'Estimate disruption costs and time-to-replace — then align benefit amount.',
            },
            {
              t: 'Choose Structure',
              b: 'Confirm ownership/beneficiary structure and align with advisors.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.t}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                ease: 'easeOut',
                delay: index * 0.05,
              }}
              className={`${card} p-5`}
            >
              <h4 className="text-base font-semibold text-[#0f5028] leading-snug">
                {item.t}
              </h4>

              <p className="mt-2 text-sm text-[#1f2937]/75 leading-relaxed">
                {item.b}
              </p>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default KeyPerson;