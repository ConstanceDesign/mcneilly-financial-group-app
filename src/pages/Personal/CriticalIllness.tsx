import React from 'react';
import {
  FaStethoscope,
  FaCheckCircle,
  FaLightbulb,
} from 'react-icons/fa';

const CriticalIllness: React.FC = () => (
  <section
    aria-labelledby="critical-illness-heading"
    className="flex flex-col lg:flex-row gap-7 lg:gap-12 items-start text-[#333333] min-w-0"
  >
    {/* Left Column – Overview */}
    <div className="w-full lg:w-1/2 min-w-0 space-y-5">

      {/* PRIMARY PAGE HEADING */}
      <div className="flex items-start gap-3 mb-3 min-w-0">
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
          <FaStethoscope className="h-[18px] w-[18px]" />
        </span>

        <h1
          id="critical-illness-heading"
          className="
            min-w-0
            font-sans
            text-3xl
            font-semibold
            tracking-tight
            leading-[1.12]
            text-[#0f5028]
          "
        >
          Critical Illness Insurance
        </h1>
      </div>

      <p className="leading-[1.65]">
        Critical illness insurance provides a tax-free lump-sum payment if you&apos;re diagnosed
        with a covered life-altering condition. Unlike disability insurance, the benefit is paid
        even if you&apos;re still able to work.
      </p>

      <p className="leading-[1.65]">
        This coverage helps you handle medical expenses, travel for treatment, supplement income,
        or simply focus on recovery without financial stress. There are no restrictions on how you
        use the benefit.
      </p>

      <div className="pt-6 border-t border-[#d4d4d4]">
        <h2
          className="
            font-sans
            text-2xl
            font-semibold
            tracking-tight
            leading-[1.2]
            text-[#0f5028]
            mb-4
          "
        >
          Why Choose Critical Illness Coverage?
        </h2>

        <ul className="space-y-2">
          {[
            'Receive funds upon diagnosis of a covered condition',
            'Use the money however you choose — no receipts required',
            'Coverage typically includes cancer, heart attack, stroke, and more',
            'Return-of-premium options may refund your payments if you remain healthy',
          ].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 min-w-0"
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

              <span className="min-w-0 flex-1 leading-[1.65]">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Right Column – Additional Insights */}
    <div className="w-full lg:w-1/2 min-w-0 space-y-5 border-t border-[#d4d4d4] pt-6 lg:border-t-0 lg:pt-0">
      <div className="rounded-xl border border-[#8cbe3f] bg-[#f1f7ea] p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <FaLightbulb
            className="h-4 w-4 shrink-0 text-[#2f7a2e]"
            aria-hidden="true"
          />

          <span className="text-xs font-semibold tracking-wide uppercase text-[#0f5028]">
            Added Value
          </span>
        </div>

        <p className="leading-[1.65] text-sm sm:text-base text-[#0f5028] font-medium">
          If you pass away while the policy is in force, some plans offer a refund of premiums to
          your beneficiary. This added feature enhances value for long-term peace of mind.
        </p>
      </div>

      <p className="leading-[1.65]">
        Whether you want to explore alternative treatments, seek out-of-country care, or hire
        additional support during recovery, critical illness coverage puts you in control at a
        time when options matter most.
      </p>
    </div>
  </section>
);

export default CriticalIllness;