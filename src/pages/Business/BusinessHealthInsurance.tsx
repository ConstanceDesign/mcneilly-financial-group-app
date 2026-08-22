import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHeartbeat,
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

const BusinessHealthInsurance: React.FC = () => {
  return (
    <section
      aria-labelledby="health-insurance-heading"
      className="text-[#333333]"
    >
      {/* TOP SECTION */}
      <Reveal
        variant="up"
        className="grid gap-8 lg:grid-cols-2 lg:gap-10 items-start"
      >
        {/* LEFT */}
        <div className="space-y-5">
          {/* PRIMARY HEADING */}
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
              <FaHeartbeat className="h-[18px] w-[18px]" />
            </span>

            <h2
              id="health-insurance-heading"
              className="
                font-sans
                text-3xl
                font-semibold
                tracking-tight
                leading-[1.12]
                text-[#0f5028]
              "
            >
              Health Insurance
            </h2>
          </div>

          <p className="leading-relaxed">
            Health insurance helps protect you from unexpected medical costs — and for business owners, it can also be a
            tax-smart strategy depending on structure.
          </p>

          <p className="leading-relaxed">
            The strongest plans prioritize meaningful lifetime limits, practical day-to-day coverage, and enrollment
            while you’re still healthy — before exclusions become a problem.
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
              Key Advantages
            </h3>

            <ul className="space-y-2">
              {[
                'Comprehensive lifetime coverage limits (often $1M+ or unlimited, depending on plan design)',
                'Premiums may be tax-deductible for self-employed Canadians (structure-dependent)',
                'Helps reduce financial stress from future illness or injury',
                'Coverage options for families, including full-time students under age 25 (plan-dependent)',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2"
                >
                  <FaCheckCircle
                    className="
                      mt-1
                      h-4
                      w-4
                      shrink-0
                      text-[#2f7a2e]
                    "
                    aria-hidden="true"
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT */}
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
              Best Practices for Enrollment
            </h3>

            <p className="leading-relaxed">
              The most effective strategy is to apply proactively — before diagnoses create exclusions or limitations.
              Even if exclusions apply, coverage can still be valuable for future, unrelated events.
            </p>

            <ul className="mt-5 space-y-2">
              {[
                'Apply while healthy to reduce exclusions and surcharges.',
                'Explore group or association options — sometimes with as few as two people.',
                'Ask about cost-plus reimbursement structures where appropriate.',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2"
                >
                  <FaCheckCircle
                    className="
                      mt-1
                      h-4
                      w-4
                      shrink-0
                      text-[#2f7a2e]
                    "
                    aria-hidden="true"
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* PERSONAL-STYLE INSIGHT BOX */}
          <div className={insightCard}>
            <div className="flex items-center gap-2 mb-2">
              <FaLightbulb
                className="
                  h-4
                  w-4
                  shrink-0
                  text-[#2f7a2e]
                "
                aria-hidden="true"
              />

              <span className="text-xs font-semibold tracking-wide uppercase text-[#0f5028]">
                Pro Tips
              </span>
            </div>

            <ul className="space-y-2 text-sm sm:text-base text-[#0f5028] font-medium leading-relaxed">
              {[
                'Prioritize strong lifetime maximums and practical day-to-day coverage.',
                'Ask how exclusions work — and what’s covered immediately vs. later.',
                'If you’re a business owner, confirm tax treatment with your accountant based on structure.',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2"
                >
                  <FaCheckCircle
                    className="
                      mt-1
                      h-4
                      w-4
                      shrink-0
                      text-[#2f7a2e]
                    "
                    aria-hidden="true"
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <Divider />

      {/* ELIGIBILITY */}
      <Reveal
        variant="left"
        className="grid gap-8 lg:grid-cols-2 lg:gap-10 items-start"
      >
        <div>
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
            Eligibility Overview
          </h3>

          <p className="leading-relaxed">
            Eligibility typically requires Canadian residency and enrollment in a provincial or territorial government
            health plan. Dependent children may qualify under age limits and student status rules (plan-dependent).
          </p>
        </div>

        <div className={`${card} p-5 sm:p-6`}>
          <h3
            className="
              font-sans
              text-xl
              font-semibold
              tracking-tight
              leading-tight
              text-[#0f5028]
              mb-3
            "
          >
            Eligibility Reminder
          </h3>

          <p className="leading-relaxed">
            Dependent children are often eligible if they’re under 21, or up to 25 if full-time students and
            financially dependent (plan-dependent).
          </p>
        </div>
      </Reveal>

      <Divider />

      {/* STRUCTURE */}
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
          How Health Coverage Is Typically Structured
        </h3>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: 'Plan Type',
              b: 'Individual, group, association, or cost-plus style arrangements.',
            },
            {
              t: 'Core Coverage',
              b: 'Prescription drugs, paramedical services, vision/dental options (plan-dependent).',
            },
            {
              t: 'Limits & Maximums',
              b: 'Annual and lifetime limits — the ceiling matters long-term.',
            },
            {
              t: 'Exclusions',
              b: 'Pre-existing conditions may be excluded or limited, especially if applying late.',
            },
            {
              t: 'Employer Strategy',
              b: 'Cost control and retention: structure coverage to support people and budgets.',
            },
            {
              t: 'Review Cadence',
              b: 'Plans should evolve as your team changes and claims experience shifts.',
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
                delay: index * 0.04,
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

export default BusinessHealthInsurance;