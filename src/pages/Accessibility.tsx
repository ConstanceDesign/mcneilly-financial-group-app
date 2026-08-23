import React from 'react';
import { NavLink } from 'react-router-dom';

const Accessibility: React.FC = () => {
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
              Accessibility Statement
            </h1>

            <div className="mt-6 h-px w-full bg-black/10" />
          </header>

          <article className="mt-8 max-w-3xl">
            <div className="space-y-7 text-[15px] leading-[1.8] text-[#1f2937]/80 sm:text-base">
              <p>
                McNeilly Financial Group is committed to providing a website that is
                accessible to people of all abilities. We work to improve the user
                experience for everyone and to apply recognized accessibility practices
                throughout our digital content.
              </p>

              <p>
                Our website is designed for use with modern browsers and common assistive
                technologies. We aim to support the Web Content Accessibility Guidelines
                (WCAG) 2.2 Level AA wherever reasonably possible.
              </p>

              <section aria-labelledby="accessibility-features">
                <h2
                  id="accessibility-features"
                  className="mb-3 text-xl font-semibold text-[#102019]"
                >
                  Our approach
                </h2>

                <p>
                  We consider accessibility in areas such as keyboard navigation, colour
                  contrast, readable typography, meaningful page structure, form labels,
                  focus states, alternative text, and compatibility with assistive
                  technologies.
                </p>
              </section>

              <section aria-labelledby="accessibility-feedback">
                <h2
                  id="accessibility-feedback"
                  className="mb-3 text-xl font-semibold text-[#102019]"
                >
                  Accessibility feedback
                </h2>

                <p>
                  If you encounter a barrier while using this website or have a suggestion
                  for improvement, please let us know. Feedback helps us identify areas
                  where the experience can be improved.
                </p>

                <p className="mt-4">
                  You can reach us through our{' '}
                  <NavLink
                    to="/contact"
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
                    Contact page
                  </NavLink>
                  , and we will make reasonable efforts to address accessibility concerns
                  promptly.
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

export default Accessibility;