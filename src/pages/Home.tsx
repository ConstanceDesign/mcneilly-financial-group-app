import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  Suspense,
} from 'react';
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

const FinancialCalculator = React.lazy(
  () => import('../components/FinancialCalculator')
);

const Home: React.FC = () => {
  const navigate = useNavigate();
  const printRef = useRef<HTMLDivElement>(null);
  const [heroOffset, setHeroOffset] = useState(0);

  const handleContactClick = () => {
    navigate('/contact');
  };

  /*
   * SEO
   * Sets page-specific title and description without adding a dependency.
   * Canonical URL, OG image and structured data should be finalized once
   * the production domain is confirmed.
   */
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      'McNeilly Financial Group | Financial Planning & Wealth Strategies';

    let description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]'
    );

    const descriptionWasCreated = !description;
    const previousDescription = description?.getAttribute('content') ?? '';

    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }

    description.content =
      'McNeilly Financial Group provides practical financial planning, wealth strategies, insurance guidance, investment planning and retirement support for individuals, families and business owners across Ontario.';

    return () => {
      document.title = previousTitle;

      if (descriptionWasCreated) {
        description?.remove();
      } else if (description) {
        description.content = previousDescription;
      }
    };
  }, []);

  /*
   * Desktop-only parallax.
   * Motion is disabled for users who request reduced motion.
   */
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const isDesktop = window.matchMedia('(min-width: 768px)').matches;

    if (prefersReducedMotion || !isDesktop) return;

    let animationFrame: number | null = null;

    const updateHero = () => {
      setHeroOffset(window.scrollY * 0.12);
      animationFrame = null;
    };

    const onScroll = () => {
      if (animationFrame !== null) return;

      animationFrame = window.requestAnimationFrame(updateHero);
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const services = useMemo(
    () => [
      {
        title: 'Retirement Planning',
        icon: <FaPiggyBank className="h-[18px] w-[18px]" />,
        desc: 'Disciplined strategies built around your goals and timeline.',
      },
      {
        title: 'Education Savings',
        icon: <FaGraduationCap className="h-[18px] w-[18px]" />,
        desc: 'Practical RESP planning to support your child’s future.',
      },
      {
        title: 'Estate Planning',
        icon: <FaFileAlt className="h-[18px] w-[18px]" />,
        desc: 'Clear, coordinated planning to protect your legacy.',
      },
      {
        title: 'Investments',
        icon: <FaChartLine className="h-[18px] w-[18px]" />,
        desc: 'Diversification and guidance aligned to risk and purpose.',
      },
      {
        title: 'Life Insurance',
        icon: <FaHeartbeat className="h-[18px] w-[18px]" />,
        desc: 'Coverage designed to protect family, lifestyle, and obligations.',
      },
      {
        title: 'Disability Insurance',
        icon: <FaWheelchair className="h-[18px] w-[18px]" />,
        desc: 'Income protection if injury or illness interrupts work.',
      },
      {
        title: 'Health Insurance',
        icon: <FaHeartbeat className="h-[18px] w-[18px]" />,
        desc: 'Support for unexpected health costs and real-world disruptions.',
      },
      {
        title: 'Tax Planning',
        icon: <FaFileInvoiceDollar className="h-[18px] w-[18px]" />,
        desc: 'Smarter structure to reduce drag and keep more of what you earn.',
      },
    ],
    []
  );

  const pageBg = 'bg-[#f4f2ec]';

  const softCard =
    'rounded-xl border border-black/10 bg-white/60 backdrop-blur-sm shadow-sm ' +
    'p-5 sm:p-6 h-full';

  const h2 =
    'font-sans text-[1.5rem] sm:text-3xl font-semibold tracking-tight text-[#0f5028]';

  return (
    <div
      className={`min-h-screen flex flex-col ${pageBg} text-[#1f2937] font-inter`}
    >
      {/* ACCESSIBILITY: SKIP LINK */}
      <a
        href="#main-content"
        className="
          sr-only
          focus:not-sr-only
          focus:fixed
          focus:left-4
          focus:top-4
          focus:z-[100]
          focus:inline-flex
          focus:rounded-md
          focus:bg-white
          focus:px-4
          focus:py-3
          focus:text-sm
          focus:font-semibold
          focus:text-[#0f5028]
          focus:shadow-lg
          focus:outline-none
          focus:ring-2
          focus:ring-[#0f5028]
          focus:ring-offset-2
        "
      >
        Skip to main content
      </a>

      {/* HERO */}
      <section
        aria-labelledby="home-hero-title"
        className="
          relative
          w-screen
          left-1/2
          right-1/2
          -ml-[50vw]
          -mr-[50vw]
          overflow-hidden
        "
      >
        <div
          className="
            relative
            bg-[#f4f2ec]

            min-h-0
            h-auto

            sm:h-[calc(100vh-92px)]
            sm:max-h-[860px]
            sm:min-h-[620px]
          "
        >
          {/* DESKTOP / TABLET BACKGROUND IMAGE */}
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="
              hidden
              sm:block

              absolute
              inset-0
              h-full
              w-full
              object-cover

              sm:[object-position:63%_54%]
              lg:[object-position:58%_52%]
              xl:[object-position:55%_52%]

              motion-reduce:transform-none
            "
            style={{
              transform: `translateY(${heroOffset}px) scale(1.06)`,
            }}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />

          {/* DESKTOP / TABLET OVERLAYS */}
          <div
            aria-hidden="true"
            className="
              hidden
              sm:block

              absolute
              inset-0

              bg-[linear-gradient(90deg,rgba(244,242,236,0.94),rgba(244,242,236,0.82),rgba(15,80,40,0.14))]
            "
          />

          <div
            aria-hidden="true"
            className="
              hidden
              sm:block

              absolute
              inset-0

              bg-[radial-gradient(circle_at_85%_35%,rgba(0,0,0,0.10),transparent_55%)]
            "
          />

          {/* HERO COPY */}
          <div
            className="
              relative
              z-10
              mx-auto
              max-w-7xl

              px-4
              sm:px-6
              lg:px-8

              pt-7
              sm:py-0
              sm:h-full
            "
          >
            <div
              className="
                flex
                items-start

                sm:h-full
                sm:items-center
              "
            >
              <div className="w-full max-w-2xl">
                {/* MOBILE EYEBROW + HEADLINE */}
                <div className="sm:hidden px-5">
                  <p
                    className="
                      text-[12px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#0f5028]
                      leading-[1.55]
                    "
                  >
                    Wealth Strategies • Protection
                  </p>

                  <h1
                    id="home-hero-title"
                    className="
                      mt-3
                      font-sans
                      text-[1.95rem]
                      leading-[1.08]
                      font-semibold
                      tracking-tight
                      text-[#102019]
                    "
                  >
                    Plan with purpose.
                    <br />
                    Protect what matters.
                    <br />
                    Grow with confidence.
                  </h1>
                </div>

                {/* DESKTOP / TABLET EYEBROW */}
                <p
                  className="
                    hidden
                    sm:block

                    text-[12px]

                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#0f5028]
                    leading-[1.55]
                  "
                >
                  <span className="block sm:inline">
                    Financial Planning
                  </span>

                  <span
                    className="hidden sm:inline"
                    aria-hidden="true"
                  >
                    {' '}
                    •{' '}
                  </span>

                  <span className="block sm:inline">
                    Wealth Strategies
                  </span>

                  <span
                    className="hidden sm:inline"
                    aria-hidden="true"
                  >
                    {' '}
                    •{' '}
                  </span>

                  <span className="block sm:inline">
                    Protection
                  </span>
                </p>

                {/* DESKTOP / TABLET HEADLINE */}
                <h1
                  className="
                    hidden
                    sm:block

                    mt-3
                    font-sans

                    sm:text-5xl
                    sm:leading-[1.05]

                    lg:text-6xl

                    font-semibold
                    tracking-tight
                    text-[#102019]
                  "
                >
                  Plan with purpose.
                  <br />
                  Protect what matters.
                  <br />
                  Grow with confidence.
                </h1>

                {/* MOBILE HERO IMAGE — FULL BLEED */}
                <figure
                  className="
                    relative
                    sm:hidden

                    mt-5
                    -mx-4

                    overflow-hidden
                  "
                >
                  <img
                    src={heroImage}
                    alt="Sailboat on calm water at sunrise"
                    className="
                      block
                      w-full
                      h-52.5

                      object-cover
                      [object-position:58%_58%]
                    "
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />

                  {/* MOBILE IMAGE FILTER */}
                  <div
                    aria-hidden="true"
                    className="
                      absolute
                      inset-0

                      bg-[linear-gradient(90deg,rgba(244,242,236,0.7),rgba(244,242,236,0.50),rgba(244,242,236,0.05))]
                    "
                  />
                </figure>

                {/* MOBILE PARAGRAPH */}
                <div className="sm:hidden px-5">
                  <p
                    className="
                      mt-4
                      max-w-[58ch]

                      text-[15px]

                      text-[#1f2937]/80
                      leading-[1.65]
                    "
                  >
                    Trusted guidance for individuals, families, and business
                    owners across Ontario, built on clear strategy, practical
                    protection, and long-term discipline.
                  </p>

                  {/* MOBILE SERVICE HIGHLIGHTS */}
                  <ul
                    className="
                      mt-5

                      flex
                      flex-col
                      gap-2

                      text-[14px]
                      font-semibold
                      text-[#102019]/80
                    "
                  >
                    <li className="inline-flex items-center gap-2">
                      <FaCheckCircle
                        className="h-4 w-4 shrink-0 text-[#2f7a2e]"
                        aria-hidden="true"
                      />

                      <span>Clear, documented planning</span>
                    </li>

                    <li className="inline-flex items-center gap-2">
                      <FaCheckCircle
                        className="h-4 w-4 shrink-0 text-[#2f7a2e]"
                        aria-hidden="true"
                      />

                      <span>Ontario-licensed support</span>
                    </li>

                    <li className="inline-flex items-center gap-2">
                      <FaCheckCircle
                        className="h-4 w-4 shrink-0 text-[#2f7a2e]"
                        aria-hidden="true"
                      />

                      <span>Regulated, transparent guidance</span>
                    </li>
                  </ul>
                </div>

                {/* DESKTOP / TABLET PARAGRAPH */}
                <p
                  className="
                    hidden
                    sm:block

                    mt-4
                    max-w-[58ch]

                    text-[16px]

                    text-[#1f2937]/80
                    leading-[1.65]
                  "
                >
                  Trusted guidance for individuals, families, and business
                  owners across Ontario, built on clear strategy, practical
                  protection, and long-term discipline.
                </p>

                {/* CTA BUTTONS */}
                <div
                  className="
                    mt-6

                    grid
                    grid-cols-1
                    gap-3

                    sm:flex
                    sm:flex-wrap
                  "
                >
                  <button
                    type="button"
                    onClick={handleContactClick}
                    className="
                      inline-flex
                      min-h-[48px]
                      items-center
                      justify-center
                      gap-2

                      px-5
                      py-3

                      rounded-sm

                      bg-[#2f7a2e]
                      hover:bg-[#3a8b34]

                      text-white
                      text-[14px]
                      font-bold
                      uppercase
                      tracking-wide

                      shadow-sm
                      hover:shadow-md

                      transition

                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#0f5028]
                      focus-visible:ring-offset-2
                    "
                  >
                    <FaComments
                      className="h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />

                    Free Consultation
                  </button>

                  <a
                    href="#calculator"
                    className="
                      inline-flex
                      min-h-[48px]
                      items-center
                      justify-center
                      gap-2

                      px-5
                      py-3

                      rounded-sm

                      bg-white/70
                      hover:bg-white

                      border
                      border-black/10

                      text-[#102019]
                      text-[14px]
                      font-extrabold
                      uppercase
                      tracking-wide

                      shadow-sm
                      hover:shadow-md

                      transition

                      sm:bg-white/40
                      sm:hover:bg-white/50
                      sm:border-white/70
                      sm:backdrop-blur-sm

                      focus:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#0f5028]
                      focus-visible:ring-offset-2
                    "
                  >
                    <FaCalculator
                      className="h-4 w-4 shrink-0"
                      aria-hidden="true"
                    />

                    Investment Calculator
                  </a>
                </div>

                {/* DESKTOP / TABLET SERVICE HIGHLIGHTS */}
                <ul
                  className="
                    hidden

                    mt-5
                    pb-6

                    sm:flex
                    sm:pb-0
                    sm:flex-row
                    sm:flex-wrap
                    sm:gap-x-6
                    sm:gap-y-2

                    text-sm
                    font-semibold
                    text-[#102019]/80

                    lg:flex-nowrap
                    lg:gap-x-8
                    lg:whitespace-nowrap
                  "
                >
                  <li className="inline-flex items-center gap-2">
                    <FaCheckCircle
                      className="h-4 w-4 shrink-0 text-[#2f7a2e]"
                      aria-hidden="true"
                    />

                    <span>Clear, documented planning</span>
                  </li>

                  <li className="inline-flex items-center gap-2">
                    <FaCheckCircle
                      className="h-4 w-4 shrink-0 text-[#2f7a2e]"
                      aria-hidden="true"
                    />

                    <span>Ontario-licensed support</span>
                  </li>

                  <li className="inline-flex items-center gap-2">
                    <FaCheckCircle
                      className="h-4 w-4 shrink-0 text-[#2f7a2e]"
                      aria-hidden="true"
                    />

                    <span>Regulated, transparent guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <main
        id="main-content"
        tabIndex={-1}
        className="outline-none"
      >
        {/* SERVICES + CALCULATOR */}
        <section
          className="
            px-4
            sm:px-6
            lg:px-8

            py-8
            sm:py-10
            md:py-12

            bg-[#f4f2ec]
          "
          aria-labelledby="services-tools-heading"
        >
          <h2
            id="services-tools-heading"
            className="sr-only"
          >
            Financial planning services and investment tools
          </h2>

          <div
            className="
              mx-auto
              max-w-7xl

              rounded-2xl
              border
              border-black/10

              bg-white/75
              backdrop-blur-md

              shadow-[0_22px_70px_rgba(0,0,0,0.10)]

              p-4
              sm:p-6
              lg:p-7
            "
          >
            <div
              className="
                grid
                grid-cols-1
                gap-5

                lg:grid-cols-2
                lg:items-stretch
                lg:gap-6
              "
            >
              {/* SERVICES */}
              <section
                className={`${softCard} flex flex-col`}
                aria-labelledby="services-heading"
              >
                <Reveal>
                  <header>
                    <h2
                      id="services-heading"
                      className={h2}
                    >
                      Our Services
                    </h2>

                    <p
                      className="
                        mt-2
                        max-w-prose

                        text-[15px]
                        sm:text-[16px]

                        text-[#1f2937]/75
                        leading-relaxed
                      "
                    >
                      Practical, well-structured guidance built around your
                      goals, your family, and your timeline.
                    </p>
                  </header>
                </Reveal>

                <div
                  aria-hidden="true"
                  className="mt-5 h-px w-full bg-black/10"
                />

                <div
                  className="
                    grid
                    flex-1

                    grid-cols-1
                    gap-4

                    pt-5

                    sm:grid-cols-2
                    sm:gap-5
                  "
                >
                  {services.map((service) => {
                    const base = service.title
                      .replace(/\s+/g, '-')
                      .toLowerCase();

                    const titleId = `${base}-title`;
                    const descId = `${base}-desc`;

                    return (
                      <Reveal
                        key={service.title}
                        delay={0.05}
                      >
                        <article
                          className="
                            group
                            relative
                            h-full
                            overflow-hidden

                            rounded-xl
                            border
                            border-black/10

                            bg-white/70
                            backdrop-blur-sm

                            p-4

                            shadow-sm

                            transition

                            hover:bg-white
                            hover:shadow-[0_14px_42px_rgba(0,0,0,0.10)]
                            hover:-translate-y-0.5

                            motion-reduce:transform-none
                            motion-reduce:transition-none
                          "
                          aria-labelledby={titleId}
                          aria-describedby={descId}
                        >
                          <div className="flex items-center gap-3 mb-2">
                            <span
                              className="
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
                              {service.icon}
                            </span>

                            <h3
                              id={titleId}
                              className="
                                text-[16px]
                                font-semibold
                                text-[#0f5028]
                                leading-snug
                              "
                            >
                              {service.title}
                            </h3>
                          </div>

                          <p
                            id={descId}
                            className="
                              text-[15px]
                              text-[#1f2937]/75
                              leading-relaxed
                            "
                          >
                            {service.desc}
                          </p>
                        </article>
                      </Reveal>
                    );
                  })}
                </div>
              </section>

              {/* CALCULATOR */}
              <section
                id="calculator"
                ref={printRef}
                className={`${softCard} flex flex-col scroll-mt-24`}
                aria-labelledby="calculator-heading"
              >
                <Reveal>
                  <header>
                    <h2
                      id="calculator-heading"
                      className={h2}
                    >
                      Investment Calculator
                    </h2>

                    <p
                      className="
                        mt-2
                        text-[15px]
                        sm:text-[16px]
                        text-[#1f2937]/75
                        leading-relaxed
                      "
                    >
                      Estimate future value and compare contribution scenarios
                      before speaking with an advisor.
                    </p>
                  </header>
                </Reveal>

                <div
                  aria-hidden="true"
                  className="mt-5 h-px w-full bg-black/10"
                />

                <div
                  className="
                    mt-5

                    rounded-xl
                    border
                    border-black/10

                    bg-white/70

                    shadow-sm

                    p-4
                    sm:p-5

                    [&_label]:text-[14px]
                    [&_label]:font-semibold

                    [&_input]:text-[16px]
                    [&_select]:text-[16px]

                    [&_button]:text-[14px]

                    [&_input]:min-h-[44px]
                    [&_select]:min-h-[44px]
                    [&_button]:min-h-[44px]
                  "
                >
                  <Suspense
                    fallback={
                      <div
                        className="p-6"
                        role="status"
                        aria-live="polite"
                        aria-busy="true"
                      >
                        <p className="animate-pulse text-gray-600 motion-reduce:animate-none">
                          Loading calculator…
                        </p>
                      </div>
                    }
                  >
                    <FinancialCalculator />
                  </Suspense>
                </div>

                <div className="mt-auto pt-4">
                  <p
                    className="
                      text-[14px]
                      text-[#1f2937]/70
                      leading-relaxed
                    "
                  >
                    Estimates are for illustration only and may not reflect
                    actual results. For a personalized plan, request a free
                    consultation.
                  </p>

                  <div className="mt-3">
                    <Link
                      to="/disclaimer"
                      className="
                        inline-flex
                        min-h-[44px]
                        items-center

                        rounded-sm

                        px-1
                        py-1

                        text-[14px]
                        font-semibold
                        text-[#0f5028]

                        hover:underline

                        focus:outline-none
                        focus-visible:ring-2
                        focus-visible:ring-[#0f5028]
                        focus-visible:ring-offset-2
                      "
                    >
                      Read the disclaimer
                    </Link>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;