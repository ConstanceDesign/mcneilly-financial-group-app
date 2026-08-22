import React from 'react';
import { motion } from 'framer-motion';
import {
  FaUsers,
  FaCheckCircle,
  FaLightbulb,
} from 'react-icons/fa';

const reveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const Reveal: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => (
  <motion.div
    className={className}
    variants={reveal}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.22 }}
    transition={{ duration: 0.55, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

const Divider = () => (
  <div className="my-8 h-px bg-black/10" aria-hidden="true" />
);

const card =
  'rounded-xl border border-black/10 bg-white/60 backdrop-blur-sm shadow-sm';

const insightCard =
  'rounded-xl border border-[#8cbe3f] bg-[#f1f7ea] p-5 shadow-sm';

const GroupInsurance: React.FC = () => {
  return (
    <section
      aria-labelledby="group-insurance-heading"
      className="text-[#333333]"
    >
      <Reveal className="grid gap-8 lg:grid-cols-2 lg:gap-10 items-start">
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
              <FaUsers className="h-[18px] w-[18px]" />
            </span>

            <h2
              id="group-insurance-heading"
              className="
                font-sans
                text-3xl
                font-semibold
                tracking-tight
                leading-[1.12]
                text-[#0f5028]
              "
            >
              Group Insurance Plans
            </h2>
          </div>

          <p className="leading-relaxed">
            A strong group plan is one of the most effective ways to attract and retain top talent. Offering health,
            life, and disability coverage signals stability, care, and long-term commitment to your team.
          </p>

          <p className="leading-relaxed">
            We work with a wide range of carriers to help businesses implement plans that are cost-effective, flexible,
            and sustainable — designed to evolve as your company grows.
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
              Benefits of Group Coverage
            </h3>

            <ul className="space-y-2">
              {[
                'Boosts employee satisfaction, engagement, and retention',
                'Can include health, dental, vision, life, and disability coverage',
                'Premiums may be tax-deductible for employers (depending on structure)',
                'Cost-sharing and customization options for small businesses',
                'Coverage can extend to dependents and family members',
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
              Why Work With Us
            </h3>

            <p className="leading-relaxed">
              Whether you have two employees or two hundred, we help you compare options, understand tradeoffs, and
              implement coverage that supports retention and day-to-day confidence.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="rounded-lg border border-black/10 bg-white/55 p-4">
                <h4 className="text-base font-semibold text-[#0f5028]">
                  Support Your People
                </h4>

                <p className="mt-2 text-sm text-[#1f2937]/70 leading-relaxed">
                  Benefits help employees feel supported — and reduce turnover risk.
                </p>
              </div>

              <div className="rounded-lg border border-black/10 bg-white/55 p-4">
                <h4 className="text-base font-semibold text-[#0f5028]">
                  Protect Your Business
                </h4>

                <p className="mt-2 text-sm text-[#1f2937]/70 leading-relaxed">
                  A plan that balances cost control and real coverage strengthens resilience.
                </p>
              </div>
            </div>
          </div>

          <div className={insightCard}>
            <div className="flex items-center gap-2 mb-2">
              <FaLightbulb
                className="h-4 w-4 shrink-0 text-[#2f7a2e]"
                aria-hidden="true"
              />

              <span className="text-xs font-semibold tracking-wide uppercase text-[#0f5028]">
                Expert Tip
              </span>
            </div>

            <p className="text-sm sm:text-base text-[#0f5028] font-medium leading-relaxed">
              Employers offering even a thoughtfully designed basic benefits package gain a competitive hiring edge.
              It’s a clear signal of stability, care, and long-term vision.
            </p>
          </div>
        </div>
      </Reveal>

      <Divider />

      <Reveal>
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
          How Group Plans Typically Come Together
        </h3>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'Discovery',
              body: 'We review your team size, goals, budget range, and the types of coverage that matter most.',
            },
            {
              title: 'Compare Options',
              body: 'We shortlist carrier options and structures that align with your priorities and workforce.',
            },
            {
              title: 'Implement & Evolve',
              body: 'We coordinate setup and help ensure the plan evolves as your company grows.',
            },
          ].map((step) => (
            <div
              key={step.title}
              className={`${card} p-5`}
            >
              <h4 className="text-base font-semibold text-[#0f5028] leading-snug">
                {step.title}
              </h4>

              <p className="mt-2 text-sm text-[#1f2937]/75 leading-relaxed">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default GroupInsurance;