mortgage

import React from 'react';
import {
  FaHome,
  FaCheckCircle,
} from 'react-icons/fa';

const MortgageInsurance: React.FC = () => (
  <section
    aria-labelledby="mortgage-insurance-heading"
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
          <FaHome className="h-[18px] w-[18px]" />
        </span>

        <h1
          id="mortgage-insurance-heading"
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
          Mortgage Insurance Options
        </h1>
      </div>

      <p className="leading-[1.65]">
        Mortgage insurance protects your loved ones by paying off your mortgage if you pass away.
        There are two common approaches: lender-provided mortgage insurance or personally owned
        term life insurance.
      </p>

      <p className="leading-[1.65]">
        While bank-issued mortgage insurance may seem convenient, individually owned policies often
        provide better value, more flexibility, and greater control over your coverage and
        beneficiaries.
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
          Bank Mortgage Insurance – Pros &amp; Cons
        </h2>

        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2 min-w-0">
            <FaCheckCircle
              className="mt-1 h-4 w-4 shrink-0 text-[#2f7a2e]"
              aria-hidden="true"
            />
            <span className="min-w-0 flex-1 leading-[1.65]">
              <strong>Pros:</strong> Easy to obtain, no medical exam upfront, bundled with mortgage
              payments
            </span>
          </li>

          <li className="flex items-start gap-2 min-w-0">
            <FaCheckCircle
              className="mt-1 h-4 w-4 shrink-0 text-[#2f7a2e]"
              aria-hidden="true"
            />
            <span className="min-w-0 flex-1 leading-[1.65]">
              <strong>Cons:</strong> Lender owns the policy, decreasing coverage, limited
              portability, beneficiary is always the bank
            </span>
          </li>
        </ul>
      </div>
    </div>

    {/* Right Column – Term Option */}
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
        Personally Owned Term Life Insurance
      </h2>

      <ul className="space-y-2 mb-4">
        {[
          'You own the policy and name your own beneficiary',
          'Coverage amount stays level and can be tailored to your needs',
          'Policy stays with you even if you change lenders or pay off your mortgage early',
          'Can include options like conversion to permanent insurance and living benefit riders',
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

      <p className="leading-[1.65]">
        Choosing the right mortgage protection strategy can make a lasting difference in your
        family&apos;s financial security. We can help you compare options and make an informed
        choice that balances flexibility, cost, and control.
      </p>
    </div>
  </section>
);

export default MortgageInsurance;