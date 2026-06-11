"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./components/Icon";
import NoiseOverlay from "./components/NoiseOverlay";

const appStoreUrl =
  "https://apps.apple.com/us/app/habit-tracker-sona/id6758967586";
const feedbackUrl = "https://sonahabitsapp.userjot.com/";

const proofPoints = [
  "One missed day ruins your motivation.",
  "You keep carrying the same goal into another month.",
  "You want structure, but not another guilt dashboard.",
];

const systemSteps = [
  {
    label: "Name the life area",
    title: "Turn the big thing into a place.",
    copy: "Health, learning, recovery, morning, writing, home. Sona starts with the reason, not a random checklist.",
  },
  {
    label: "Add the repeated promises",
    title: "Build the habits inside it.",
    copy: "Daily, weekly, and monthly habits can live together because real goals do not all run on the same schedule.",
  },
  {
    label: "Return after real life",
    title: "Watch consistency recover.",
    copy: "A missed day is a dip, not a reset. The score keeps the long run visible without turning it into a verdict.",
  },
];

const screenshotTour = [
  {
    src: "/dark-home-morning.png",
    alt: "Sona morning routine home screen",
    title: "A home for each goal",
    copy: "Open directly into the area you are building, with the habits that matter today.",
  },
  {
    src: "/dark-area-picker.png",
    alt: "Sona area picker screen",
    title: "Create purpose containers",
    copy: "Keep habits organized by the life they support: health, learning, home, fitness, or anything you choose.",
  },
  {
    src: "/dark-progress.png",
    alt: "Sona progress consistency screen",
    title: "See the long run",
    copy: "Consistency trends make progress visible without the all-or-nothing pressure of a reset counter.",
  },
  {
    src: "/dark-home-italian.png",
    alt: "Sona habit card resting state",
    title: "Rest without losing the thread",
    copy: "Rest periods are part of the system, so a hard day does not have to become a failed goal.",
  },
  {
    src: "/dark-stats.png",
    alt: "Sona stats screen",
    title: "Understand what is working",
    copy: "Review history, rhythm, and momentum when you need insight, then get back to living.",
  },
];

const outcomes = [
  "Stop treating one bad week like a failed identity.",
  "Turn vague intentions into a calm daily system.",
  "Become someone who returns, not someone who restarts.",
];

function DownloadButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={appStoreUrl}
      target="_blank"
      rel="noreferrer"
      className={`download-button ${className}`}
      aria-label="Download Sona on the App Store"
    >
      <Icon icon="solar:download-minimalistic-bold" className="h-5 w-5" />
      <span>Download Sona</span>
    </a>
  );
}

function PhoneShot({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={`phone-shot ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 700px) 76vw, 340px"
        className="object-cover object-top"
      />
    </div>
  );
}

function SectionLabel({
  children,
  tone = "warm",
}: {
  children: ReactNode;
  tone?: "warm" | "night";
}) {
  return (
    <p className={`section-label ${tone === "night" ? "section-label-night" : ""}`}>
      {children}
    </p>
  );
}

function HeroScreens() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="hero-stage" aria-label="Sona app screenshots">
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24, rotate: -4 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: -7 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="hero-phone hero-phone-back-left"
      >
        <PhoneShot
          src="/dark-progress.png"
          alt="Sona progress view showing consistency score"
        />
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="hero-phone hero-phone-main"
      >
        <PhoneShot
          src="/dark-home-morning.png"
          alt="Sona routine builder home screen"
          priority
        />
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 24, rotate: 4 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 6 }}
        transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
        className="hero-phone hero-phone-back-right"
      >
        <PhoneShot
          src="/dark-area-picker.png"
          alt="Sona area picker for organizing habits"
        />
      </motion.div>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="consistency-float"
      >
        <span className="float-number">70%</span>
        <span className="float-label">consistency, not a reset</span>
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--paper)] text-[var(--ink)] selection:bg-[var(--honey)] selection:text-[var(--forest)]">
      <NoiseOverlay />

      <header className="site-header">
        <Link href="/" className="brand-lockup" aria-label="Sona home">
          <Image
            src="/icon.png"
            alt=""
            width={38}
            height={38}
            className="brand-icon"
          />
          <span>Sona</span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-bold text-[var(--forest)] md:flex">
          <a href="#fit">Is it for you?</a>
          <a href="#system">How it works</a>
          <a href="#screens">Screens</a>
        </nav>
        <DownloadButton className="hidden sm:inline-flex" />
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-light" aria-hidden="true" />
          <div className="hero-grid">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="hero-copy"
            >
              <SectionLabel>Goal and routine builder</SectionLabel>
              <h1>Sona helps you stop restarting the same goal.</h1>
              <p className="hero-subhead">
                Build goals from small habits, track consistency instead of
                punishing streaks, and return after real life gets messy.
              </p>
              <div className="hero-actions">
                <DownloadButton />
                <a href="#fit" className="text-link">
                  See if Sona is for you
                </a>
              </div>
              <p className="hero-note">
                Made for people who want to follow through from calm, not panic.
              </p>
            </motion.div>

            <HeroScreens />
          </div>
        </section>

        <section id="fit" className="fit-section">
          <div className="section-wrap">
            <div className="fit-intro">
              <SectionLabel>It is probably for you if</SectionLabel>
              <h2>You are not lazy. You are tired of starting over.</h2>
            </div>
            <div className="proof-list">
              {proofPoints.map((point, index) => (
                <motion.article
                  key={point}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="proof-card"
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{point}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="difference-section">
          <div className="section-wrap difference-grid">
            <div className="difference-copy">
              <SectionLabel>Consistency, not punishment</SectionLabel>
              <h2>A missed day is a dip, not a reset.</h2>
              <p>
                The old model asks you to protect a fragile number. Sona helps
                you build a long run of returning. Your score can bend, recover,
                and still tell the truth about your progress.
              </p>
            </div>
            <div className="score-panel">
              <div className="score-ring" aria-hidden="true">
                <span>82%</span>
                <small>long-run consistency</small>
              </div>
              <div className="score-lines">
                <div>
                  <span>Old streak apps</span>
                  <strong>Miss one day, start over.</strong>
                </div>
                <div>
                  <span>Sona</span>
                  <strong>Miss, learn, return.</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="system" className="system-section">
          <div className="section-wrap">
            <div className="center-heading">
              <SectionLabel>How Sona changes the loop</SectionLabel>
              <h2>Give the goal a system you can emotionally tolerate opening.</h2>
              <p>
                Sona stays focused on the thing that actually changes a life:
                returning to small promises for a long time.
              </p>
            </div>

            <div className="step-grid">
              {systemSteps.map((step, index) => (
                <motion.article
                  key={step.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="step-card"
                >
                  <span className="step-label">{step.label}</span>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="screens" className="tour-section">
          <div className="section-wrap">
            <div className="tour-heading">
              <SectionLabel tone="night">Actual app screens</SectionLabel>
              <h2>Beautiful enough to reopen after a hard week.</h2>
              <p>
                The visuals are not decoration. They lower the cost of coming
                back, while the system keeps your next action clear.
              </p>
            </div>

            <div className="tour-grid">
              {screenshotTour.map((screen, index) => (
                <motion.article
                  key={screen.src}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.24 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  className="tour-card"
                >
                  <div className="tour-image">
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      fill
                      sizes="(max-width: 900px) 88vw, 420px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div>
                    <h3>{screen.title}</h3>
                    <p>{screen.copy}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="outcome-section">
          <div className="section-wrap outcome-grid">
            <div>
              <SectionLabel>The transformation</SectionLabel>
              <h2>Become someone who keeps returning.</h2>
              <p>
                Sona is for building an extraordinary life the ordinary way:
                through small days repeated, protected rest, honest progress,
                and a system that does not punish you for being human.
              </p>
            </div>
            <div className="outcome-list">
              {outcomes.map((outcome) => (
                <div key={outcome} className="outcome-item">
                  <Icon icon="solar:leaf-bold" className="h-5 w-5" />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="final-section">
          <div className="final-backdrop" aria-hidden="true" />
          <div className="final-content">
            <SectionLabel>Start the long run</SectionLabel>
            <h2>One goal. A few habits. A place you can come back to.</h2>
            <p>
              Download Sona and build the first routine that can survive your
              real life.
            </p>
            <DownloadButton />
          </div>
        </section>
      </main>

      <footer className="footer">
        <Link href="/" className="brand-lockup" aria-label="Sona home">
          <Image
            src="/icon.png"
            alt=""
            width={34}
            height={34}
            className="brand-icon"
          />
          <span>Sona</span>
        </Link>
        <div className="footer-links">
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/support">Support</Link>
          <a href={feedbackUrl}>Feedback</a>
          <a
            href="https://www.reddit.com/r/SonaHabits/"
            target="_blank"
            rel="noreferrer"
            aria-label="Sona Habits on Reddit"
          >
            <Icon icon="simple-icons:reddit" className="h-4 w-4" />
          </a>
          <a
            href="https://x.com/sonahabits"
            target="_blank"
            rel="noreferrer"
            aria-label="Sona Habits on X"
          >
            <Icon icon="simple-icons:x" className="h-4 w-4" />
          </a>
        </div>
        <p>© 2026 Sona.</p>
      </footer>
    </div>
  );
}
