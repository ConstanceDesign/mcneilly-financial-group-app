import React from 'react';

const TermsOfUse: React.FC = () => {
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
              Terms of Use
            </h1>

            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#1f2937]/65 sm:text-base">
              These Terms of Use govern your access to and use of the McNeilly Financial
              Group website.
            </p>

            <div className="mt-6 h-px w-full bg-black/10" />
          </header>

          <article className="mt-8 max-w-3xl">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold text-[#102019]">
                  1. Acceptance of Terms
                </h2>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#1f2937]/80 sm:text-base">
                  By accessing or using the McNeilly Financial Group website, you agree
                  to be bound by these Terms of Use and all applicable laws and
                  regulations. If you do not agree with these terms, please do not use
                  the website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#102019]">
                  2. Use of Website
                </h2>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#1f2937]/80 sm:text-base">
                  This website is intended to provide general financial and insurance
                  information. Content is provided for informational purposes only and
                  should not be considered individualized financial, investment, tax,
                  legal, or insurance advice.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#102019]">
                  3. Intellectual Property
                </h2>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#1f2937]/80 sm:text-base">
                  Unless otherwise stated, the content, branding, graphics, design, and
                  materials appearing on this website are owned by or licensed to
                  McNeilly Financial Group. Unauthorized reproduction, distribution, or
                  use is prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#102019]">
                  4. Links to Third-Party Sites
                </h2>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#1f2937]/80 sm:text-base">
                  This website may contain links to third-party websites for convenience
                  or reference. McNeilly Financial Group does not control those websites
                  and is not responsible for their content, availability, privacy
                  practices, or accuracy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#102019]">
                  5. Limitation of Liability
                </h2>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#1f2937]/80 sm:text-base">
                  To the extent permitted by applicable law, McNeilly Financial Group
                  will not be liable for direct, indirect, incidental, consequential, or
                  other damages arising from access to, use of, or inability to use this
                  website or any linked content.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#102019]">
                  6. Modifications
                </h2>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#1f2937]/80 sm:text-base">
                  We may revise these Terms of Use from time to time. Updated terms will
                  be posted on this page, and continued use of the website following an
                  update constitutes acceptance of the revised terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#102019]">
                  7. Governing Law
                </h2>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#1f2937]/80 sm:text-base">
                  These Terms of Use are governed by the laws of the Province of Ontario
                  and the applicable federal laws of Canada.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-[#102019]">
                  8. Contact Information
                </h2>

                <p className="mt-3 text-[15px] leading-[1.8] text-[#1f2937]/80 sm:text-base">
                  For questions regarding these Terms of Use, please contact:
                </p>

                <address className="mt-5 not-italic text-[15px] leading-relaxed text-[#1f2937]/75 sm:text-base">
                  <p className="font-semibold text-[#102019]">
                    McNeilly Financial Group
                  </p>

                  <p className="mt-2">
                    1608 Sylvestre Drive, Suite 2D
                    <br />
                    Tecumseh, Ontario N8N 2L9
                  </p>

                  <p className="mt-3">
                    <a
                      href="mailto:pmcneilly@sterlingmutuals.com"
                      className="
                        rounded-sm
                        font-semibold text-[#0f5028]
                        underline decoration-[#0f5028]/25 underline-offset-4
                        transition
                        hover:decoration-[#0f5028]
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[#0f5028]/30
                      "
                    >
                      pmcneilly@sterlingmutuals.com
                    </a>
                  </p>

                  <p className="mt-2">
                    <a
                      href="tel:+15199795396"
                      className="
                        rounded-sm
                        font-semibold text-[#0f5028]
                        underline decoration-[#0f5028]/25 underline-offset-4
                        transition
                        hover:decoration-[#0f5028]
                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[#0f5028]/30
                      "
                    >
                      (519) 979-5396
                    </a>
                  </p>
                </address>
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

export default TermsOfUse;