import React from 'react';

const Disclaimer: React.FC = () => {
  return (
    <main className="bg-[#f4f2ec] text-[#1f2937]">
      <div className="mx-auto max-w-5xl px-9 py-14 md:py-18 lg:py-20">
        <div
          className="
            rounded-xl
            border border-black/[0.06]
            bg-white/45
            px-6 py-8
            shadow-[0_18px_50px_rgba(0,0,0,0.045)]
            sm:px-8 sm:py-10
            md:px-10
            lg:px-12 lg:py-12
          "
        >
          <header className="max-w-3xl">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#4b9328]">
              McNeilly Financial Group
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-[#0f5028] sm:text-4xl">
              Website Disclaimer
            </h1>

            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#1f2937]/65 sm:text-base">
              Important information regarding the use of content provided on this website.
            </p>

            <div className="mt-6 h-px w-full bg-black/10" />
          </header>

          <article className="mt-8 max-w-3xl">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-[#102019]">
                  General Information
                </h2>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#1f2937]/80 sm:text-base">
                  The information provided on this website is for general informational
                  purposes only and is not intended to constitute personalized financial,
                  investment, insurance, tax, or legal advice.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#102019]">
                  Accuracy and Availability
                </h2>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#1f2937]/80 sm:text-base">
                  While McNeilly Financial Group makes reasonable efforts to provide
                  accurate and current information, no representation or warranty is made
                  regarding the completeness, accuracy, reliability, suitability, or
                  availability of website content, products, services, or related
                  information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#102019]">
                  Financial Decisions
                </h2>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#1f2937]/80 sm:text-base">
                  Any reliance placed on information available through this website is at
                  your own discretion. You should obtain advice appropriate to your
                  circumstances from a qualified professional before making financial,
                  investment, insurance, tax, or legal decisions.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#102019]">
                  Limitation of Liability
                </h2>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#1f2937]/80 sm:text-base">
                  To the extent permitted by applicable law, McNeilly Financial Group
                  will not be liable for loss or damage arising from or connected with
                  access to, reliance on, or use of this website or its content.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#102019]">
                  External Websites
                </h2>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#1f2937]/80 sm:text-base">
                  This website may contain links to websites operated by third parties.
                  McNeilly Financial Group does not control those websites and is not
                  responsible for their content, availability, security, privacy
                  practices, or accuracy. The inclusion of a link does not necessarily
                  imply endorsement.
                </p>
              </section>
            </div>

            <div className="mt-10 border-t border-black/10 pt-5">
              <p className="text-xs text-[#1f2937]/50">
                Last updated: August 23, 2026
              </p>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
};

export default Disclaimer;