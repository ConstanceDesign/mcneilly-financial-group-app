import React, { useEffect, useMemo, useRef, useState, Suspense } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaPiggyBank,
  FaFileAlt,
  FaFileInvoiceDollar,
  FaChartLine,
  FaHeartbeat,
  FaWheelchair,
  FaGraduationCap,
  FaComments,
  FaCalculator,
  FaCheckCircle,
} from 'react-icons/fa';
import heroImage from '../images/home-hero.jpg';

import Reveal from '../components/motion/Reveal';

const FinancialCalculator = React.lazy(() => import('../components/FinancialCalculator'));

const Home: React.FC = () => {
  const navigate = useNavigate();
  const printRef = useRef<HTMLDivElement>(null);
  const [heroOffset, setHeroOffset] = useState(0);

  const handleContactClick = () => {
    navigate('/contact');
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (prefersReducedMotion || !isDesktop) return;

    const onScroll = () => setHeroOffset(window.scrollY * 0.12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const services = useMemo(
    () => [
      {
        title: 'Retirement Planning',
        icon: <FaPiggyBank />,
        desc: 'Disciplined strategies built around your goals and timeline.',
      },
      {
        title: 'Education Savings',
        icon: <FaGraduationCap />,
        desc: 'Practical RESP planning to support your child’s future.',
      },
      {
        title: 'Estate Planning',
        icon: <FaFileAlt />,
        desc: 'Clear, coordinated planning to protect your legacy.',
      },
      {
        title: 'Investments',
        icon: <FaChartLine />,
        desc: 'Diversification and guidance aligned to risk and purpose.',
      },
      {
        title: 'Life Insurance',
        icon: <FaHeartbeat />,
        desc: 'Coverage designed to protect family, lifestyle, and obligations.',
      },
      {
        title: 'Disability Insurance',
        icon: <FaWheelchair />,
        desc: 'Income protection if injury or illness interrupts work.',
      },
      {
        title: 'Health Insurance',
        icon: <FaHeartbeat />,
        desc: 'Support for unexpected health costs and real-world disruptions.',
      },
      {
        title: 'Tax Planning',
        icon: <FaFileInvoiceDollar />,
        desc: 'Smarter structure to reduce drag and keep more of what you earn.',
      },
    ],
    []
  );

  const pageBg = 'bg-[#f4f2ec]';

  const softCard =
    'rounded-xl border border-black/10 bg-white/60 backdrop-blur-sm shadow-sm ' +
    'p-5 sm:p-6 h-full';

  const h2 = 'font-sans text-2xl sm:text-3xl font-semibold tracking-tight text-[#0f5028]';

  return (
    <div className={`min-h-screen flex flex-col ${pageBg} text-[#1f2937] font-inter`}>
      {/* HERO */}
      <section
        aria-label="McNeilly Financial Group homepage hero"
        className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden"
      >
        <div
          className="
            relative
            min-h-[100svh]
            sm:min-h-0
            sm:h-[calc(100vh-92px)]
            sm:max-h-[860px]
            sm:min-h-[620px]
          "
        >
          <img
            src={heroImage}
            alt="Sailboat at sunrise on calm water"
            className="
              absolute inset-0 h-full w-full object-cover
              [object-position:68%_56%]
              sm:[object-position:63%_54%]
              lg:[object-position:58%_52%]
              xl:[object-position:55%_52%]
            "
            style={{
              transform: `translateY(${heroOffset}px) scale(1.06)`,
            }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />

          <div
            aria-hidden="true"
            className="
              absolute inset-0
              bg-[linear-gradient(90deg,rgba(244,242,236,0.94),rgba(244,242,236,0.82),rgba(15,80,40,0.14))]
            "
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_85%_35%,rgba(0,0,0,0.10),transparent_55%)]"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
            <div className="h-full flex items-center">
              <div className="w-full max-w-2xl">
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#0f5028]">
                  <span className="block sm:inline">Financial Planning</span>
                  <span className="hidden sm:inline"> • </span>
                  <span className="block sm:inline">Wealth Strategies</span>
                  <span className="hidden sm:inline"> • </span>
                  <span className="block sm:inline">Protection</span>
                </p>

                <h1 className="mt-3 font-sans text-[2.05rem] sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#102019] leading-[1.05]">
                  Plan with purpose.
                  <br />
                  Protect what matters.
                  <br />
                  Grow with confidence.
                </h1>

                <p className="mt-4 text-[16px] sm:text-[16px] text-[#1f2937]/80 leading-relaxed max-w-[58ch]">
                  Trusted guidance for individuals, families, and business owners across Ontario, built on clear strategy,
                  practical protection, and long-term discipline.
                </p>

                <div className="mt-10 sm:mt-6 grid grid-cols-1 sm:flex sm:flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={handleContactClick}
                    className="
                      inline-flex items-center justify-center gap-2
                      px-5 py-3.5 rounded-xs
                      bg-[#2f7a2e] hover:bg-[#3a8b34]
                      text-white font-bold uppercase tracking-wide
                      shadow-sm hover:shadow-md
                      transition
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5028]/30
                    "
                    aria-label="Schedule a free consultation"
                  >
                    <FaComments aria-hidden="true" />
                    Free Consultation
                  </button>

                  <a
                    href="#calculator"
                    className="
                      inline-flex items-center justify-center gap-2
                      px-5 py-3.5 rounded-xs
                      bg-white/40 hover:bg-white/50
                      backdrop-blur-sm
                      border border-white/70
                      text-[#102019] font-extrabold uppercase tracking-wide
                      whitespace-nowrap sm:whitespace-normal
                      shadow-sm hover:shadow-md
                      transition
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5028]/30
                    "
                    aria-label="Jump to the investment calculator"
                  >
                    <FaCalculator aria-hidden="true" />
                    Investment Calculator
                  </a>
                </div>

                <ul
                  className="
                    mt-6
                    flex flex-col gap-2
                    text-[15px] sm:text-sm font-semibold text-[#102019]/80
                    sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2
                    lg:flex-nowrap lg:gap-x-8 lg:whitespace-nowrap
                  "
                  aria-label="Service highlights"
                >
                  <li className="inline-flex items-center gap-2">
                    <FaCheckCircle className="text-[#2f7a2e]" aria-hidden="true" />
                    Clear, documented planning
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <FaCheckCircle className="text-[#2f7a2e]" aria-hidden="true" />
                    Ontario-licensed support
                  </li>
                  <li className="inline-flex items-center gap-2">
                    <FaCheckCircle className="text-[#2f7a2e]" aria-hidden="true" />
                    Regulated, transparent guidance
                  </li>
                </ul>

                <a
                  href="#main-content"
                  className="sr-only focus:not-sr-only focus:inline-flex focus:mt-4 focus:bg-white/80 focus:px-3 focus:py-2 focus:rounded-xs focus:outline-none focus:ring-2 focus:ring-[#0f5028]/30"
                >
                  Skip to main content
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES + CALCULATOR */}
      <main id="main-content">
        <section className="px-4 sm:px-6 lg:px-8 py-11 md:py-13 bg-[#f4f2ec]" aria-label="Our services and financial tools">
          <div
            className="
              mx-auto max-w-7xl
              rounded-2xl
              border border-black/10
              bg-white/75
              backdrop-blur-md
              shadow-[0_22px_70px_rgba(0,0,0,0.10)]
              p-5 sm:p-6 lg:p-7
            "
          >
            <div className="grid gap-5 lg:gap-6 lg:grid-cols-2 items-start">
              <Reveal>
                <section className={softCard} aria-label="Financial planning services">
                  <header>
                    <h2 className={h2}>Our Services</h2>
                    <p className="mt-2 text-[15px] sm:text-[16px] text-[#1f2937]/75 leading-relaxed max-w-prose">
                      Practical, well-structured guidance built around your goals, your family, and your timeline.
                    </p>
                  </header>

                  <div className="mt-5 h-px w-full bg-black/10" />

                  <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 pt-5" role="list" aria-label="Service list">
                    {services.map((service) => {
                      const base = service.title.replace(/\s+/g, '-').toLowerCase();
                      const titleId = `${base}-title`;
                      const descId = `${base}-desc`;

                      return (
                        <Reveal key={service.title} delay={0.05}>
                          <article
                            className="
                              group relative overflow-hidden
                              rounded-xl border border-black/10
                              bg-white/70 backdrop-blur-sm
                              p-4 shadow-sm
                              transition
                              hover:bg-white hover:shadow-[0_14px_42px_rgba(0,0,0,0.10)]
                              hover:-translate-y-0.5
                              focus-within:ring-2 focus-within:ring-[#0f5028]/25
                            "
                            role="listitem"
                            aria-labelledby={titleId}
                            aria-describedby={descId}
                          >
                            <div className="flex items-center gap-3 mb-2">
                              <span
                                className="
                                  inline-flex items-center justify-center
                                  h-10 w-10 rounded-lg bg-[#f0f6ea]
                                  text-[#2f7a2e] text-xl shadow-sm
                                "
                                aria-hidden="true"
                              >
                                {service.icon}
                              </span>

                              <h3 id={titleId} className="text-[17px] font-semibold text-[#0f5028] leading-snug">
                                {service.title}
                              </h3>
                            </div>

                            <p id={descId} className="text-[15px] text-[#1f2937]/75 leading-relaxed">
                              {service.desc}
                            </p>
                          </article>
                        </Reveal>
                      );
                    })}
                  </div>
                </section>
              </Reveal>

              <Reveal>
                <section id="calculator" aria-label="Investment calculator" ref={printRef} className={softCard}>
                  <header>
                    <h2 className={h2}>Investment Calculator</h2>
                    <p className="mt-2 text-[15px] sm:text-[16px] text-[#1f2937]/75 leading-relaxed">
                      Estimate future value and compare contribution scenarios before speaking with an advisor.
                    </p>
                  </header>

                  <div className="mt-5 h-px w-full bg-black/10" />

                  <div className="mt-5 rounded-xl border border-black/10 bg-white/70 shadow-sm p-4 sm:p-5">
                    <Suspense
                      fallback={
                        <div className="p-6" aria-live="polite" aria-busy="true" aria-label="Loading calculator">
                          <p className="animate-pulse text-gray-600">Loading calculator…</p>
                        </div>
                      }
                    >
                      <FinancialCalculator />
                    </Suspense>
                  </div>

                  <p className="mt-4 text-sm text-[#1f2937]/70 leading-relaxed">
                    Estimates are for illustration only and may not reflect actual results. For a personalized plan, request
                    a free consultation.
                  </p>

                  <div className="mt-4">
                    <Link
                      to="/disclaimer"
                      className="text-sm font-semibold text-[#0f5028] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0f5028]/40 rounded-xs px-1 py-1 inline-block"
                      aria-label="Read the disclaimer"
                    >
                      Read the disclaimer
                    </Link>
                  </div>
                </section>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;