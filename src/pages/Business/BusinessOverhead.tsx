import React from 'react';
import { motion } from 'framer-motion';
import {
  FaBuilding,
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

const BusinessOverhead: React.FC = () => {
  return (
    <section
      aria-labelledby="business-overhead-heading"
      className="text-[#333333]"
    >
      {/* TOP SECTION */}
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
              <FaBuilding className="h-[18px] w-[18px]" />
            </span>

            <h2
              id="business-overhead-heading"
              className="
                font-sans
                text-3xl
                font-semibold
                tracking-tight
                leading-[1.12]
                text-[#0f5028]
              "
            >
              Business Overhead Insurance
            </h2>
          </div>

          <p className="leading-relaxed">
            Business Overhead Insurance helps keep a business running if the owner becomes unable to work
            due to illness or injury.
          </p>

          <p className="leading-relaxed">
            It’s designed to reimburse eligible operating costs — like rent, utilities, admin costs, and certain wages —
            during a recovery period after an elimination period (often 30/60/90 days).
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
              Key Coverage Highlights
            </h3>

            <ul className="space-y-2">
              {[
                'Premiums may be tax-deductible (confirm with your accountant)',
                'Options for partial disability and recurring conditions (policy-dependent)',
                'Waiver of premium after an extended disability period (policy-dependent)',
                'Some contracts include a death benefit payable to your estate (policy-dependent)',
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
              How It Works
            </h3>

            <p className="leading-relaxed">
              Business Overhead Insurance is most valuable for incorporated professionals, clinic owners, partners, and
              small business operators. Eligible expenses often include commercial rent, utilities, certain wages,
              property taxes, insurance premiums, and contracted services (policy-dependent).
            </p>

            <p className="mt-4 leading-relaxed">
              Business Overhead Insurance does not replace personal income and typically excludes inventory, start-up
              expenses, and cost of goods sold.
            </p>
          </div>

          <div className={insightCard}>
            <div className="flex items-center gap-2 mb-2">
              <FaLightbulb
                className="h-4 w-4 shrink-0 text-[#2f7a2e]"
                aria-hidden="true"
              />

              <span className="text-xs font-semibold tracking-wide uppercase text-[#0f5028]">
                Advisor Tip
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#0f5028] font-medium leading-relaxed">
              A strong BOE plan is built around real overhead numbers. Review your fixed costs and confirm which expense
              categories are considered eligible before setting coverage.
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
          Additional Protections to Look For
        </h3>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: 'Recurrence of Disability',
              b: 'If you return to work and relapse within a set window, benefits may continue without a new waiting period (policy-dependent).',
            },
            {
              t: 'Waiver of Premium',
              b: 'After an extended disability period, premiums may be waived for the duration of the claim (policy-dependent).',
            },
            {
              t: 'Death Benefit',
              b: 'Some contracts pay a lump sum (often 1–3 months of overhead) to the estate (policy-dependent).',
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

export default BusinessOverhead;