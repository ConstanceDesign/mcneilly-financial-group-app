import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHandshake,
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

const BuySell: React.FC = () => {
  return (
    <section
      aria-labelledby="buy-sell-heading"
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
              <FaHandshake className="h-[18px] w-[18px]" />
            </span>

            <h2
              id="buy-sell-heading"
              className="
                font-sans
                text-3xl
                font-semibold
                tracking-tight
                leading-[1.12]
                text-[#0f5028]
              "
            >
              Funding Buy–Sell Agreements
            </h2>
          </div>

          <p className="leading-relaxed">
            A buy–sell agreement funded with life insurance helps ensure business continuity if a partner dies or can no
            longer participate in the business.
          </p>

          <p className="leading-relaxed">
            In practice, it works like a “business will” — outlining how ownership transfers and how the transaction is
            funded, so partners and families aren’t forced into difficult decisions under pressure.
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
                'Creates a clear, pre-arranged ownership transition',
                'Provides liquidity so surviving owners can purchase shares immediately',
                "Protects the deceased partner’s heirs from uncertainty and forced negotiations",
                'Reduces the risk of disputes, delays, or legal challenges',
                'Helps preserve operational and financial stability',
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
              How We Help
            </h3>

            <p className="leading-relaxed">
              We coordinate with your legal and accounting advisors to align the insurance funding with your ownership
              structure — so the agreement can function exactly as intended when it’s needed most.
            </p>
          </div>

          <div className={insightCard}>
            <div className="flex items-center gap-2 mb-2">
              <FaLightbulb
                className="h-4 w-4 shrink-0 text-[#2f7a2e]"
                aria-hidden="true"
              />

              <span className="text-xs font-semibold tracking-wide uppercase text-[#0f5028]">
                Planning Tip
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#0f5028] font-medium leading-relaxed">
              Funding depends on eligibility. Waiting can increase premiums — or reduce the ability to secure coverage.
              Plan while options are widest.
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
          How a Buy–Sell Plan Typically Comes Together
        </h3>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: 'Define Terms',
              b: 'Owners define triggers, valuation method, and purchase terms with legal counsel.',
            },
            {
              t: 'Select Funding',
              b: 'Insurance amount aligns to valuation approach and ownership structure.',
            },
            {
              t: 'Implement & Review',
              b: 'Policies are placed, beneficiaries aligned, and reviewed as the business grows.',
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

export default BuySell;