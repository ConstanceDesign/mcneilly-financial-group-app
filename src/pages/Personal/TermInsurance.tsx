term

import React from 'react';
import {
  FaHourglassHalf,
  FaCheckCircle,
  FaLightbulb,
} from 'react-icons/fa';

const TermInsurance: React.FC = () => (
  <section
    aria-labelledby="term-insurance-heading"
    className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start text-[#333333] min-w-0"
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
          <FaHourglassHalf className="h-[18px] w-[18px]" />
        </span>

        <h1
          id="term-insurance-heading"
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
          Term Life Insurance
        </h1>
      </div>

      <p className="leading-[1.65]">
        Term life insurance offers affordable, temporary protection for a set number of years
        (e.g., 10, 20, or 30 years). It’s an ideal option for individuals and families wanting to
        cover financial responsibilities during key life stages, such as paying off a mortgage
        or raising children.
      </p>

      <p className="leading-[1.65]">
        Understanding your insurance needs—including how long you require coverage and how those
        needs might change over time—is essential. A financial needs analysis helps determine
        the right coverage amount and term length.
      </p>

      <div className="pt-4 border-t border-[#d4d4d4]">
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
          Key Considerations
        </h2>

        <ul className="space-y-2 mb-4">
          {[
            'Ideal for debt coverage, income replacement, and education funding during working years',
            'Lower premiums compared to whole life insurance',
            'Renewable and convertible options provide future flexibility',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 min-w-0">
              <FaCheckCircle
                className="mt-1 h-4 w-4 shrink-0 text-[#2f7a2e]"
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

    {/* Right Column – Pitfalls & Strategy */}
    <div className="w-full lg:w-1/2 min-w-0 space-y-5">
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
        Avoiding Common Pitfalls
      </h2>

      <ul className="space-y-2 mb-4">
        <li className="flex items-start gap-2 min-w-0">
          <FaCheckCircle
            className="mt-1 h-4 w-4 shrink-0 text-[#2f7a2e]"
            aria-hidden="true"
          />
          <span className="min-w-0 flex-1 leading-[1.65]">
            <strong>Expiring Coverage:</strong> Renewing term policies can be costly. Plan ahead for
            your long-term needs and consider conversion options before your term ends.
          </span>
        </li>

        <li className="flex items-start gap-2 min-w-0">
          <FaCheckCircle
            className="mt-1 h-4 w-4 shrink-0 text-[#2f7a2e]"
            aria-hidden="true"
          />
          <span className="min-w-0 flex-1 leading-[1.65]">
            <strong>Preferred Underwriting Confusion:</strong> Health classifications such as
            &quot;preferred&quot; or &quot;standard&quot; can influence your premium. Work with a
            qualified advisor to navigate the process.
          </span>
        </li>
      </ul>

      <p className="leading-[1.65]">
        Riders like waiver of premium, accidental death, and child protection can enhance your
        policy. Be sure to explore all available options before selecting your plan.
      </p>

      <div className="rounded-xl border border-[#8cbe3f] bg-[#f1f7ea] p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <FaLightbulb
            className="h-4 w-4 shrink-0 text-[#2f7a2e]"
            aria-hidden="true"
          />
          <span className="text-xs font-semibold tracking-wide uppercase text-[#0f5028]">
            Let us help you
          </span>
        </div>

        <p className="text-sm sm:text-base text-[#0f5028] font-medium leading-[1.65]">
          Term life insurance works best when combined with a tailored strategy. Let us help
          you craft a plan that balances affordability, flexibility, and peace of mind across all
          stages of life.
        </p>
      </div>
    </div>
  </section>
);

export default TermInsurance;