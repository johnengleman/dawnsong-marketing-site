"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "./components/Icon";
import NoiseOverlay from "./components/NoiseOverlay";
import { ParallaxPill } from "./components/Pill";

/**
 * VERSION 1: Light & Airy
 * - Warm cream palette matching app's light mode
 * - Parallax floating pills with app's actual colors
 * - Focus on the app's visual language
 * - Friendly, welcoming tone
 */

const highlights = [
  {
    title: "Consistency over streaks",
    desc: "A rolling score rewards real progress instead of all‑or‑nothing streaks.",
  },
  {
    title: "Rest days that protect momentum",
    desc: "Take a break when you need it without losing momentum.",
  },
];

export default function Version1() {
  const feedbackUrl = "https://sonahabitsapp.userjot.com/";
  const appStoreUrl =
    "https://apps.apple.com/us/app/habit-tracker-sona/id6758967586";
  const appStoreBadgeUrl =
    "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83";

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text)] font-sans selection:bg-[var(--primary-light)] overflow-x-hidden">
      <NoiseOverlay />
      {/* Warm background gradients */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute -top-[10%] right-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle_at_center,rgba(212,131,91,0.25),transparent_60%)]" />
        <div className="absolute top-[15%] left-[-5%] w-[50%] h-[50%] bg-[radial-gradient(circle_at_center,rgba(46,138,122,0.2),transparent_60%)]" />
        <div className="absolute -bottom-[15%] left-[20%] w-[65%] h-[65%] bg-[radial-gradient(circle_at_center,rgba(227,161,95,0.2),transparent_60%)]" />
      </div>

      {/* Parallax Pills Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <ParallaxPill
          color="blue"
          variant="filled"
          size="xl"
          speed={-0.3}
          rotate={-15}
          opacity={0.15}
          className="absolute top-[15%] left-[8%]"
        />
        <ParallaxPill
          color="green"
          variant="filled"
          size="lg"
          speed={0.4}
          rotate={20}
          opacity={0.12}
          className="absolute top-[25%] right-[10%]"
        />
        <ParallaxPill
          color="amber"
          variant="filled"
          size="md"
          speed={-0.5}
          rotate={10}
          opacity={0.2}
          className="absolute top-[60%] left-[5%]"
        />
        <ParallaxPill
          color="blue"
          variant="faded"
          size="lg"
          speed={0.3}
          rotate={-10}
          opacity={0.1}
          className="absolute top-[70%] right-[15%]"
        />
        <ParallaxPill
          color="green"
          variant="filled"
          size="sm"
          speed={-0.2}
          rotate={25}
          opacity={0.25}
          className="absolute top-[40%] right-[5%]"
        />
      </div>

      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[rgba(247,241,232,0.82)] backdrop-blur-xl border-b border-[color:var(--hairline)]">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 min-h-14 sm:min-h-16 py-2 sm:py-0 flex flex-row items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-9 h-9">
              <Image
                src="/icon.png"
                alt="Sona logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="flex flex-col justify-center leading-none">
              <span className="font-bold text-lg">Sona</span>
              <span className="hidden sm:block text-[11px] uppercase tracking-[0.22em] text-[var(--text-tertiary)] font-semibold">
                the no‑streak habit tracker
              </span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--text-secondary)]">
            <a
              href="#why"
              className="hover:text-[var(--text)] transition-colors"
            >
              Why it works
            </a>
            <a
              href="#stats"
              className="hover:text-[var(--text)] transition-colors"
            >
              Stats
            </a>
            <a
              href="#screens"
              className="hover:text-[var(--text)] transition-colors"
            >
              Screens
            </a>
          </nav>
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-xl transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] focus-visible:ring-offset-4"
            aria-label="Download Sona on the App Store"
          >
            <img
              src={appStoreBadgeUrl}
              alt="Download on the App Store"
              className="block h-9 w-auto sm:h-10"
            />
          </a>
        </div>
      </header>

      <main className="relative z-10 pt-14 sm:pt-16">
        {/* Hero */}
        <section className="pt-10 sm:pt-24 pb-16 sm:pb-32">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-left"
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[color:var(--hairline)] bg-[var(--surface)] text-[11px] uppercase tracking-[0.28em] text-[var(--text-tertiary)] mb-6">
                  <span className="w-2 h-2 rounded-full bg-[var(--primary)] shadow-[0_0_0_4px_rgba(212,131,91,0.18)]" />
                  Now available on iPhone
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-[1.03] mb-6 tracking-tight">
                  Consistency without
                  <span className="ml-2 inline-flex items-baseline whitespace-nowrap">
                    <span className="relative inline-block">
                      <span className="relative z-10">the guilt</span>
                      <span className="absolute inset-x-0 -bottom-1 h-[6px] bg-[var(--primary-light)] -z-0 rounded-full" />
                    </span>
                    <span>.</span>
                  </span>
                  <br />
                  <span className="block mt-5 sm:mt-6">
                    A habit tracker built for{" "}
                    <span className="relative inline-block whitespace-nowrap">
                      <span className="relative z-10">real life</span>
                      <svg
                        className="absolute -bottom-2 left-0 w-full"
                        viewBox="0 0 200 12"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M2 8 Q 100 2 198 8"
                          stroke="#2d6c7c"
                          strokeWidth="4"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                    .
                  </span>
                </h1>

                <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-10 max-w-xl">
                  Sona replaces fragile streaks with a rolling consistency score
                  and built‑in rest days—so a missed day doesn&rsquo;t erase
                  your progress and you keep showing up.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={appStoreUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] focus-visible:ring-offset-4"
                    aria-label="Download Sona on the App Store"
                  >
                    <img
                      src={appStoreBadgeUrl}
                      alt="Download on the App Store"
                      className="block h-16 sm:h-[72px] w-auto"
                    />
                  </a>
                  <div className="inline-flex items-center px-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-tertiary)] sm:px-2">
                    Android coming soon
                  </div>
                </div>
                <p className="mt-4 text-sm text-[var(--text-tertiary)]">
                  Available now for iPhone with premium features and stats.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start justify-center lg:justify-end"
              >
                <div className="w-full max-w-none">
                  <img
                    src="/daily.png"
                    alt="Sona daily view"
                    className="block w-full h-auto max-h-[75vh] object-contain"
                    loading="eager"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why it works */}
        <section
          id="why"
          className="py-20 border-t border-[color:var(--hairline)]"
        >
          <div className="mx-auto w-full max-w-5xl px-0 sm:px-6">
            <div className="text-left md:text-center mb-12 px-6 sm:px-0">
              <p className="text-sm font-semibold text-[var(--accent-blue)] uppercase tracking-[0.3em] mb-3">
                Why it works
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Built to help you follow through
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-6 pb-0 sm:p-8 sm:pb-0 rounded-[2rem] bg-[var(--surface-secondary)] border border-[color:var(--hairline)] shadow-[0_18px_40px_rgba(32,26,22,0.08)]"
                >
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">
                    {item.desc}
                  </p>
                  {item.title === "Consistency over streaks" ? (
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <img
                        src="/consistency-1.png"
                        alt="Consistency over streaks screenshot 1"
                        className="w-full sm:w-[90%] h-auto object-contain mx-auto"
                      />
                      <img
                        src="/consistency-2.png"
                        alt="Consistency over streaks screenshot 2"
                        className="w-full sm:w-[90%] h-auto object-contain mx-auto translate-y-[3px]"
                      />
                    </div>
                  ) : item.title === "Rest days that protect momentum" ? (
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <img
                        src="/rest-1.png"
                        alt="Rest days screenshot 1"
                        className="w-full sm:w-[90%] h-auto object-contain mx-auto self-end"
                        style={{
                          WebkitMaskImage:
                            "linear-gradient(to bottom, transparent 0%, black 30%)",
                          maskImage:
                            "linear-gradient(to bottom, transparent 0%, black 30%)",
                        }}
                      />
                      <img
                        src="/rest-2.png"
                        alt="Rest days screenshot 2"
                        className="w-full sm:w-[90%] h-auto object-contain mx-auto"
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section
          id="stats"
          className="py-20 border-t border-[color:var(--hairline)]"
        >
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-left md:text-center mb-12">
              <p className="text-sm font-semibold text-[var(--primary)] uppercase tracking-[0.3em] mb-3">
                Statistics
              </p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                See your progress clearly
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl md:mx-auto">
                Track consistency trends and spot what&rsquo;s working at a
                glance.
              </p>
            </div>

            <div className="grid md:grid-cols-[minmax(0,30%)_minmax(0,30%)] md:justify-center gap-10">
              {[
                { src: "/stats-1.png", label: "Statistics screenshot 1" },
                { src: "/stats-2.png", label: "Statistics screenshot 2" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="mx-auto w-full max-w-[280px] sm:max-w-[420px]">
                    <Image
                      src={item.src}
                      alt={item.label}
                      width={720}
                      height={480}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section
          id="screens"
          className="py-20 border-t border-[color:var(--hairline)]"
        >
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="text-left md:text-center mb-12">
              <p className="text-sm font-semibold text-[var(--accent-blue)] uppercase tracking-[0.3em] mb-3">
                See it at a glance
              </p>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
                A calm, clear view of your habits
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl md:mx-auto">
                Daily, weekly, or monthly—choose what fits your life and keep
                moving forward without the pressure to be perfect.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[repeat(3,minmax(0,30%))] md:justify-center gap-10">
              {[
                { src: "/daily.png", label: "Daily" },
                { src: "/weekly.png", label: "Weekly" },
                { src: "/monthly.png", label: "Monthly" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center w-full"
                >
                  <div className="mb-4 text-lg font-bold tracking-wide text-[var(--text)]">
                    {item.label}
                  </div>
                  <div
                    style={{ aspectRatio: "10 / 16" }}
                    className="relative w-full rounded-[2rem] overflow-hidden"
                  >
                    <Image
                      src={item.src}
                      alt={`${item.label} habits view`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          id="download"
          className="py-20 md:py-24 border-t border-[color:var(--hairline)]"
        >
          <div className="mx-auto w-full max-w-5xl px-6">
            <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-[linear-gradient(135deg,rgba(212,131,91,0.14),rgba(46,108,124,0.1),rgba(227,161,95,0.2))] border border-[color:var(--hairline)] p-8 sm:p-10 md:p-16 text-center shadow-[0_28px_60px_rgba(32,26,22,0.12)]">
              <div className="absolute top-4 left-4 w-20 h-20 rounded-full bg-[rgba(46,108,124,0.15)] blur-xl" />
              <div className="absolute bottom-4 right-4 w-32 h-32 rounded-full bg-[rgba(212,131,91,0.18)] blur-xl" />

              <div className="relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                  Ready to feel consistent
                  <br />
                  without the pressure?
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] mb-8 sm:mb-10 max-w-lg mx-auto">
                  Build habits that last in real life with a tracker designed to
                  keep missed days from wiping out your momentum.
                </p>
                <a
                  href={appStoreUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] focus-visible:ring-offset-4"
                  aria-label="Download Sona on the App Store"
                >
                  <img
                    src={appStoreBadgeUrl}
                    alt="Download on the App Store"
                    className="block h-14 sm:h-16 w-auto"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-[color:var(--hairline)]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/icon.png"
                alt="Sona logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="flex flex-col leading-tight">
              <span className="font-bold">Sona</span>
              <span className="text-[11px] uppercase tracking-[0.22em] text-[var(--text-tertiary)] font-semibold">
                the no‑streak habit tracker
              </span>
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2 text-sm text-[var(--text-secondary)]">
            <Link href="/privacy" className="hover:text-[var(--text)]">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[var(--text)]">
              Terms
            </Link>
            <Link href="/support" className="hover:text-[var(--text)]">
              Support
            </Link>
            <a href={feedbackUrl} className="hover:text-[var(--text)]">
              Feedback
            </a>
            <div className="flex w-full justify-center md:w-auto md:justify-end gap-6 mt-2 sm:mt-0">
              <a
                href="https://www.reddit.com/r/SonaHabits/"
                className="inline-flex items-center hover:text-[var(--text)] align-middle"
                target="_blank"
                rel="noreferrer"
                aria-label="Sona Habits on Reddit"
              >
                <Icon icon="simple-icons:reddit" className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/sonahabits"
                className="inline-flex items-center hover:text-[var(--text)] align-middle"
                target="_blank"
                rel="noreferrer"
                aria-label="Sona Habits on X"
              >
                <Icon icon="simple-icons:x" className="w-4 h-4" />
              </a>
            </div>
          </div>
          <p className="text-[var(--text-tertiary)] text-sm">© 2026 Sona.</p>
        </div>
      </footer>
    </div>
  );
}
