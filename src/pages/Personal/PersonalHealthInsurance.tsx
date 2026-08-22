health

import React from 'react';
import {
  FaHeartbeat,
  FaCheckCircle,
  FaLightbulb,
} from 'react-icons/fa';

const PersonalHealthInsurance: React.FC = () => (
  <section
    aria-labelledby="personal-health-heading"
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
          <FaHeartbeat className="h-[18px] w-[18px]" />
        </span>

        <h1
          id="personal-health-heading"
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
          Private Health Insurance
        </h1>
      </div>

      <p className="leading-[1.65]">
        While Canada&apos;s public health care system covers many services, it does not include
        dental, vision, or most prescription drugs. Private health insurance helps fill those gaps,
        offering peace of mind for everyday and unexpected medical expenses.
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
          Who Needs It?
        </h2>

        <ul className="space-y-2 mb-4">
          {[
            'Self-employed individuals or contractors without group benefits',
            'Families seeking coverage for prescriptions, dental, and vision',
            'Retirees or part-time workers looking for additional protection',
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

    {/* Right Column – Coverage & Tips */}
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
        Common Coverage Options
      </h2>

      <ul className="space-y-2 mb-4">
        {[
          'Prescription medications',
          'Dental cleanings and major procedures',
          'Vision care including glasses and exams',
          'Paramedical services (e.g., physiotherapy, massage)',
          'Catastrophic or critical illness coverage',
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

      <div className="rounded-xl border border-[#8cbe3f] bg-[#f1f7ea] p-5 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <FaLightbulb
            className="h-4 w-4 shrink-0 text-[#2f7a2e]"
            aria-hidden="true"
          />
          <span className="text-xs font-semibold tracking-wide uppercase text-[#0f5028]">
            Eligibility &amp; Enrollment Tips
          </span>
        </div>

        <p className="leading-[1.65] text-sm sm:text-base text-[#0f5028] font-medium">
          Most insurers require that you&apos;re a Canadian resident covered under your provincial
          plan. Enrolling while you&apos;re healthy helps avoid exclusions for pre-existing
          conditions. If you&apos;re part of a couple or family, look for bundled options to save on
          premiums.
        </p>
      </div>

      <p className="text-sm text-[#666666] italic leading-[1.65]">
        Customizable health insurance can complement your government coverage and reduce
        out-of-pocket costs. Discuss your health needs and budget with a licensed advisor to choose
        the right plan.
      </p>
    </div>
  </section>
);

export default PersonalHealthInsurance;