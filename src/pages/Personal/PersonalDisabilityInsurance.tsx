import React from 'react';
import {
  FaWheelchair,
  FaCheckCircle,
  FaLightbulb,
} from 'react-icons/fa';

const PersonalDisabilityInsurance: React.FC = () => (
  <section
    aria-labelledby="personal-disability-heading"
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
          <FaWheelchair className="h-[18px] w-[18px]" />
        </span>

        <h1
          id="personal-disability-heading"
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
          Personal Disability Insurance
        </h1>
      </div>

      <p className="leading-[1.65]">
        Your ability to earn an income is one of your most valuable assets. Personal disability
        insurance protects your income if you&apos;re unable to work due to injury or illness. It
        ensures you can continue meeting financial obligations while focusing on your recovery.
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
          How It Works
        </h2>

        <p className="leading-[1.65]">
          Disability insurance replaces a portion of your income through monthly payments while
          you&apos;re disabled. Policies vary based on definitions like &quot;own occupation&quot;
          vs. &quot;any occupation,&quot; waiting periods, and benefit duration.
        </p>
      </div>
    </div>

    {/* Right Column – Importance & Key Considerations */}
    <div className="w-full lg:w-1/2 min-w-0 space-y-5">
      <div>
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
          Why It&apos;s Important
        </h2>

        <ul className="space-y-2">
          {[
            'Disabilities are more likely than premature death during working years',
            'Protects your lifestyle and financial independence',
            'Benefits can be used for daily expenses, medical bills, or savings preservation',
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

      <div>
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

        <ul className="space-y-2">
          {[
            'Choose a waiting period that aligns with your emergency savings',
            'Understand benefit duration—some policies cover until age 65',
            'Ask about recurrence and waiver of premium clauses',
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

      <div className="rounded-xl border border-[#8cbe3f] bg-[#f1f7ea] p-5 shadow-sm mt-4">
        <div className="flex items-center gap-2 mb-2">
          <FaLightbulb
            className="h-4 w-4 shrink-0 text-[#2f7a2e]"
            aria-hidden="true"
          />
          <span className="text-xs font-semibold tracking-wide uppercase text-[#0f5028]">
            Advisor Insight
          </span>
        </div>

        <p className="text-sm sm:text-base text-[#0f5028] font-medium leading-[1.65]">
          Disability insurance can be tailored to your profession, budget, and risk tolerance. Work
          with us to find a protection plan that fits your income and lifestyle.
        </p>
      </div>
    </div>
  </section>
);

export default PersonalDisabilityInsurance;