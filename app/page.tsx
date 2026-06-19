"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Dust from "./components/Dust";
import { Icon } from "./components/Icon";
import NoiseOverlay from "./components/NoiseOverlay";
import { Placeholder, SpaceTile, SpaceTileCustom } from "./components/Placeholder";
import SmoothScroll from "./components/SmoothScroll";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const appStoreUrl =
  "https://apps.apple.com/us/app/habit-tracker-sona/id6758967586";
const feedbackUrl = "https://sonahabitsapp.userjot.com/";

/**
 * FAQ — written to match the questions people actually ask AI assistants
 * ("is it bad to miss a day of a habit?"). The Q&A format is the most
 * citable/quotable by answer engines, and it ships as FAQPage schema below.
 */
const faqs = [
  {
    q: "What happens when I miss a day in Daybreak?",
    a: "Nothing breaks. There is no streak counter that resets to zero. A missed day is a small dip in your consistency score, which keeps counting with you. You just return the next day, and your long-run progress stays intact.",
  },
  {
    q: "Is it bad to miss a day of a habit?",
    a: "No. Missing a day is normal and human. What actually breaks habits is the all-or-nothing shame that makes one miss feel like total failure. Daybreak is built around the idea that returning after a miss is the real skill, so a single missed day costs you almost nothing.",
  },
  {
    q: "How is Daybreak different from a normal habit tracker?",
    a: "Two ways. First, it has no punishing streaks; your progress is a forgiving consistency score, not a fragile chain. Second, every goal becomes a personal AI-painted world that holds its habits, so opening the app feels like stepping into the life you're building instead of checking a gray list.",
  },
  {
    q: "What are Spaces?",
    a: "A Space is a painted world that groups related habits, like a morning routine, getting stronger, or better sleep. You describe what you're building in a few words and Daybreak paints a personal scene for it, which you can regenerate and restyle until you love it. Your habits live inside that Space.",
  },
  {
    q: "Can I take a rest day without losing progress?",
    a: "Yes. You can rest an individual habit for sickness, travel, or a hard week. Its progress is protected while you rest and it resumes automatically. Rest is designed into the system, not treated as a failure.",
  },
  {
    q: "Is Daybreak free, and what platforms does it support?",
    a: "Daybreak is free to download on iOS, with an Android version coming soon. It's private by design: everything lives on your device, with no account and no cloud.",
  },
];

/**
 * Structured data describing the app itself, so search engines and AI answer
 * engines understand what Daybreak is. No rating/review count (pre-launch) —
 * adding fake aggregateRating would be a violation; omit until real reviews.
 */
const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Daybreak",
  applicationCategory: "LifestyleApplication",
  operatingSystem: "iOS",
  description:
    "A beautiful, forgiving habit app. No streaks to break: a missed day is a dip in your consistency score, not a reset to zero. Turn each goal into a personal AI-painted world that holds the habits building it.",
  url: "https://daybreakhabits.com",
  installUrl: appStoreUrl,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@type": "Organization", name: "Daybreak" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const becomingLines = [
  <>
    You stop negotiating with yourself every morning. The walk is just{" "}
    <em>what you do</em>.
  </>,
  <>
    A bad week arrives, and for the first time, it doesn&rsquo;t take
    everything down with it.
  </>,
  <>
    And one ordinary evening you notice the life you kept postponing.{" "}
    <em>You&rsquo;re living it</em>.
  </>,
];

/**
 * The "wall of worlds": common, relatable spaces a person might build. These
 * stand in for the AI-painted scenes. Every name is custom and steerable, not
 * a baked-in preset. Keep the list broad (no niche) so every visitor sees
 * theirs. Split across two marquee rows below.
 */
// Each space maps to a painted scene in /public/spaces/<slug>-light.webp and
// -dark.webp (the clean AI paintings, no name/UI overlaid). Top row shows the
// light paintings, bottom row the dark ones, so visitors see both palettes.
const spaceGallery = [
  { name: "Morning Routine", slug: "morning-routine" },
  { name: "Better Sleep", slug: "better-sleep" },
  { name: "Get Strong", slug: "get-strong" },
  { name: "Eat Well", slug: "eat-well" },
  { name: "Move More", slug: "move-more" },
  { name: "Quiet Mind", slug: "quiet-mind" },
  { name: "Read More", slug: "read-more" },
  { name: "Save Money", slug: "save-money" },
  { name: "A Tidy Home", slug: "tidy-home" },
  { name: "Time With Family", slug: "time-with-family" },
  { name: "Deep Work", slug: "deep-work" },
  { name: "Time Outside", slug: "time-outside" },
];
const galleryRowA = spaceGallery.slice(0, 6);
const galleryRowB = spaceGallery.slice(6);

/**
 * The painting-iteration story, grounded in the app's real EditSpaceModal flow
 * and i18n strings. Each step's `shot` names the exact screen to capture.
 */
const paintSteps = [
  {
    n: "01",
    title: "Describe it",
    copy: "A few words is all it takes. Keep Daybreak's signature watercolor look, or switch to “exact words” for anime, oil paint, or neon. Whatever you picture.",
    shot: "Describe input · Watercolor / Exact words toggle",
    ratio: "1170 / 2532",
  },
  {
    n: "02",
    title: "Watch it paint",
    copy: "Daybreak lays in the atmosphere and the final brushstrokes. A few seconds later, your world appears.",
    shot: "Generating state · “Adding the final brushstrokes”",
    ratio: "1170 / 2532",
  },
  {
    n: "03",
    title: "Pick a direction",
    copy: "Not one option, but several. Daybreak offers a handful of takes and asks the only question that matters: which one speaks to you?",
    shot: "Direction picker · “Which speaks to you?”",
    ratio: "1170 / 2532",
  },
  {
    n: "04",
    title: "Tweak until you love it",
    copy: "Nudge it calmer or warmer, try a whole new scene, repaint the same idea, or describe exactly what you see. When it's right, save it. It's yours.",
    shot: "Review controls · Tweak / New scene / Repaint / Save",
    ratio: "1170 / 2532",
  },
];

type Step = {
  id?: string;
  eyebrow: string;
  title: React.ReactNode;
  copy: React.ReactNode;
  /** what screenshot/state belongs in this row's slot */
  shot: string;
  ratio: string;
  shape: "phone" | "card";
  chip?: string;
};

const steps: Step[] = [
  {
    id: "spaces",
    eyebrow: "Your routines, your art",
    title: (
      <>
        Describe it in a few words. <em>Watch a world appear.</em>
      </>
    ),
    copy: "Tell Daybreak what you're building, like “soft light, slow mornings” or “a stronger body by spring,” and it paints a personal scene for it. Don't love the first one? Regenerate it, restyle it, or describe exactly what you see, and keep adjusting until it's a place you can't wait to open. Then your habits live inside that space, building the life it pictures.",
    shot: "Painting review · Tweak / New scene / Describe controls",
    ratio: "1170 / 2532",
    shape: "phone",
    chip: "✨ painted by Daybreak",
  },
  {
    eyebrow: "A place, not a checklist",
    title: (
      <>
        Step into the space you <em>made</em>.
      </>
    ),
    copy: "Each space opens onto its own painting, with the habits that belong to it living right beneath. You don't open a to-do list. You return to a world you want to be in.",
    shot: "Space painted header + habit list (Morning Routine)",
    ratio: "1170 / 2532",
    shape: "phone",
    chip: "a world per goal",
  },
  {
    eyebrow: "One day, many times",
    title: (
      <>
        Some habits aren&rsquo;t <em>once</em> a day.
      </>
    ),
    copy: "Drink water eight times. Stretch twice. Set how many completions a day needs, and tap them off one by one as the ring quietly fills.",
    shot: "Habit card · multi-completion in progress (e.g. 2/3 ring)",
    ratio: "734 / 520",
    shape: "card",
    chip: "0 / 3 → done",
  },
  {
    eyebrow: "Daily · weekly · monthly",
    title: (
      <>
        Every habit at its <em>own</em> rhythm.
      </>
    ),
    copy: "A morning stretch is daily. A long run lives in your week. A budget review lives in your month. Daybreak respects each one's natural cadence instead of forcing it into a daily checkbox, and every one strengthens the space it belongs to.",
    shot: "Space with Today / Week / Month cadence tabs",
    ratio: "1170 / 2532",
    shape: "phone",
    chip: "Today · Week · Month",
  },
  {
    eyebrow: "Rest is part of the practice",
    title: (
      <>
        A hard week shouldn&rsquo;t <em>cost</em> you everything.
      </>
    ),
    copy: "Sick, traveling, or just spent? Rest a habit and nothing breaks. Its score holds, and Daybreak resumes with you when you're ready. Rest isn't a loophole here. It's the system working as designed.",
    shot: "Habit resting state (night sky · “Resume”) + rest sheet",
    ratio: "734 / 560",
    shape: "card",
    chip: "your score stays steady",
  },
  {
    id: "progress",
    eyebrow: "A score, not a streak",
    title: (
      <>
        A missed day is a <em>dip</em>, not a reset.
      </>
    ),
    copy: "No counter crashes to zero here. A gentle consistency score absorbs the misses and keeps counting with you. Every space gets a progress reveal of its own: one calm trend line, the month's consistency, every habit at a glance.",
    shot: "Per-space Progress reveal (consistency % + trend + breakdown)",
    ratio: "1170 / 2532",
    shape: "phone",
    chip: "no resets, ever",
  },
  {
    eyebrow: "Private by design",
    title: (
      <>
        Yours alone. <em>On your device.</em>
      </>
    ),
    copy: "Everything lives on your phone. No account, no cloud, no one watching over your shoulder. Just you, your worlds, and the quiet evidence that you're becoming someone who follows through.",
    shot: "Settings · local backup (Export / Import) · light",
    ratio: "1170 / 2532",
    shape: "phone",
    chip: "no account · no cloud",
  },
];

function DownloadButton({
  className = "",
  label = "Download on the App Store",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={appStoreUrl}
      target="_blank"
      rel="noreferrer"
      className={`cta-button ${className}`}
      aria-label="Download Daybreak on the App Store"
    >
      <Icon icon="simple-icons:apple" className="h-[18px] w-[18px]" />
      <span>{label}</span>
    </a>
  );
}

/** Android isn't out yet — a soft, non-clickable "coming soon" companion. */
function AndroidSoon({ className = "" }: { className?: string }) {
  return (
    <span
      className={`android-soon ${className}`}
      role="note"
      aria-label="Android version coming soon"
    >
      <Icon icon="simple-icons:android" className="h-[18px] w-[18px]" />
      <span>
        Android <em>coming soon</em>
      </span>
    </span>
  );
}

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const dark = theme === "dark";

  useEffect(() => {
    if (document.documentElement.dataset.theme !== "dark") return;
    const id = setTimeout(() => setTheme("dark"), 0);
    return () => clearTimeout(id);
  }, []);

  const toggleTheme = () => {
    const next = dark ? "light" : "dark";
    setTheme(next);
    if (next === "dark") {
      document.documentElement.dataset.theme = "dark";
    } else {
      delete document.documentElement.dataset.theme;
    }
    try {
      localStorage.setItem("ds-theme", next);
    } catch {
      /* storage unavailable; theme still applies for this visit */
    }
    setTimeout(() => ScrollTrigger.refresh(), 80);
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const mm = gsap.matchMedia();
    const $ = gsap.utils.selector(root);

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      /* hero entrance */
      gsap.from($(".hero-line"), {
        opacity: 0,
        y: 50,
        duration: 1.15,
        ease: "power3.out",
        stagger: 0.13,
        delay: 0.08,
      });
      gsap.from(
        $(".hero-copy .eyebrow, .hero-copy .lede, .hero-actions, .hero-note"),
        {
          opacity: 0,
          y: 26,
          duration: 1,
          ease: "power3.out",
          stagger: 0.09,
          delay: 0.5,
        },
      );
      gsap.from($(".hero-stage"), {
        opacity: 0,
        y: 80,
        duration: 1.3,
        ease: "power3.out",
        delay: 0.25,
      });
      gsap.from($(".hero-float"), {
        opacity: 0,
        y: 26,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.16,
        delay: 1.05,
      });
      gsap.to($(".hero-stage"), {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: $(".hero")[0],
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      /* generic reveals */
      gsap.utils.toArray<HTMLElement>($("[data-reveal]")).forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 44,
          duration: 1.05,
          ease: "power3.out",
          delay: Number(el.dataset.revealDelay ?? 0),
          scrollTrigger: { trigger: el, start: "top 86%" },
        });
      });

      /* becoming: parallax painting + lines */
      gsap.fromTo(
        $(".becoming-bg"),
        { yPercent: -7 },
        {
          yPercent: 7,
          ease: "none",
          scrollTrigger: {
            trigger: $(".becoming")[0],
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
      gsap.utils.toArray<HTMLElement>($(".becoming-line")).forEach((line) => {
        gsap.from(line, {
          opacity: 0,
          y: 34,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: { trigger: line, start: "top 82%" },
        });
      });
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SmoothScroll />
      <NoiseOverlay />

      <header className="site-header">
        <Link href="/" className="brand-lockup" aria-label="Daybreak home">
          <Image
            src="/brand-icon.png"
            alt=""
            width={34}
            height={34}
            className="brand-icon"
          />
          <span>Daybreak</span>
        </Link>
        <nav className="site-nav" aria-label="Sections">
          <a href="#spaces">Your worlds</a>
          <a href="#features">How it works</a>
          <a href="#progress">Progress</a>
          <Link href="/articles">Articles</Link>
        </nav>
        <div className="header-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-pressed={dark}
            aria-label={
              dark ? "Switch to light theme" : "Switch to dark theme"
            }
          >
            <Icon
              icon={dark ? "solar:sun-2-bold" : "solar:moon-bold"}
              className="h-5 w-5"
            />
          </button>
          <DownloadButton className="cta-button-sm" label="Download" />
        </div>
      </header>

      <main>
        {/* ------------------------------------------------ hero */}
        <section className="hero">
          <Dust
            key={`hero-${theme}`}
            rgb={dark ? "232, 190, 122" : "171, 122, 48"}
          />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">For people tired of starting over</p>
              <h1 className="display">
                <span className="hero-line">The only habit app</span>
                <span className="hero-line">
                  as beautiful as <em>your goals.</em>
                </span>
              </h1>
              <p className="lede">
                You&rsquo;re not lazy. You&rsquo;re tired of starting over.
                Daybreak gives every goal a beautiful world to live in, and a
                consistency score that survives the days you miss. So this time,
                you actually keep going.
              </p>
              <div className="hero-actions">
                <DownloadButton />
                <AndroidSoon />
                <a href="#spaces" className="ghost-link">
                  See how it works
                  <Icon icon="solar:arrow-down-linear" className="h-4 w-4" />
                </a>
              </div>
              <p className="hero-note">Free to download · iOS now, Android coming soon</p>
            </div>

            <div className="hero-stage">
              <div className="hero-glow" aria-hidden="true" />
              <Placeholder
                label="Hero · Spaces gallery (painted worlds)"
                ratio="1170 / 2532"
                shape="phone"
                className="hero-phone"
              />
              <div className="hero-float hero-float-score">
                <strong>93%</strong>
                <span>consistency that survives missed days</span>
              </div>
              <div className="hero-float hero-float-rest">
                <strong>
                  <Icon
                    icon="solar:magic-stick-3-bold"
                    className="inline h-6 w-6 text-[var(--gold)]"
                  />
                </strong>
                <span>painted from a few words</span>
              </div>
            </div>
          </div>
          <div className="hero-fade" aria-hidden="true" />
        </section>

        {/* ------------------------------------------------ trust strip */}
        {/* No social proof: the app is pre-launch. These are true,
            no-claims signals only. Do not add fabricated reviews/ratings. */}
        <section className="trust" aria-label="Why Daybreak is safe to try">
          <div className="wrap trust-inner" data-reveal>
            <span className="trust-item">
              <Icon icon="solar:lock-keyhole-minimalistic-bold" className="h-[18px] w-[18px]" />
              Private by design. No account, no cloud
            </span>
            <span className="trust-dot" aria-hidden="true" />
            <span className="trust-item">
              <Icon icon="solar:download-minimalistic-bold" className="h-[18px] w-[18px]" />
              Free to download
            </span>
            <span className="trust-dot" aria-hidden="true" />
            <span className="trust-item">
              <Icon icon="simple-icons:apple" className="h-[16px] w-[16px]" />
              <Icon icon="simple-icons:android" className="h-[16px] w-[16px]" />
              iPhone now · Android soon
            </span>
          </div>
        </section>

        {/* ------------------------------------------------ spaces gallery */}
        <section id="spaces" className="gallery" aria-label="Spaces people build in Daybreak">
          <div className="wrap gallery-head" data-reveal>
            <p className="eyebrow eyebrow-center">You describe it · Daybreak paints it</p>
            <h2 className="display">
              You <em>create</em> these worlds. <br className="gallery-br" />
              Then you <em>steer</em> them.
            </h2>
            <p className="lede">
              Every scene below was <strong>made from a few typed words</strong>.
              You <strong>describe</strong> the life you&rsquo;re building, Daybreak{" "}
              <strong>paints</strong> it, and you <strong>regenerate and restyle</strong>{" "}
              until&nbsp;it&rsquo;s&nbsp;<strong>yours</strong>. Nothing here is a
              preset or a stock photo. Your habits then live inside the world you
              made.
            </p>
          </div>

          {/* Top row is always LIGHT paintings, bottom row always DARK, so
              every visitor sees both palettes no matter their page theme. */}
          <div className="gallery-rows">
            <div className="gallery-row gallery-row-a">
              <div className="gallery-track">
                {galleryRowA.map((s) => (
                  <SpaceTile key={s.slug} name={s.name} slug={s.slug} variant="light" />
                ))}
                <SpaceTileCustom variant="light" />
                {/* duplicate for a seamless loop */}
                {galleryRowA.map((s) => (
                  <SpaceTile key={`dup-${s.slug}`} name={s.name} slug={s.slug} variant="light" />
                ))}
                <SpaceTileCustom variant="light" />
              </div>
            </div>

            <div className="gallery-row gallery-row-b">
              <div className="gallery-track">
                {galleryRowB.map((s) => (
                  <SpaceTile key={s.slug} name={s.name} slug={s.slug} variant="dark" />
                ))}
                {galleryRowB.map((s) => (
                  <SpaceTile key={`dup-${s.slug}`} name={s.name} slug={s.slug} variant="dark" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ paint iteration */}
        <section className="paint" aria-label="How Daybreak paints your space">
          <div className="wrap paint-head" data-reveal>
            <p className="eyebrow eyebrow-center">Here&rsquo;s exactly how it works</p>
            <h2 className="display">
              You stay in the chair until <em>it&rsquo;s yours.</em>
            </h2>
            <p className="lede">
              Daybreak doesn&rsquo;t hand you one stock image and call it done.
              You shape the painting, step by step, until it&rsquo;s a place
              you&rsquo;ll want to return to.
            </p>
          </div>

          <ol className="paint-steps">
            {paintSteps.map((step) => (
              <li key={step.n} className="paint-step" data-reveal>
                <div className="paint-shot">
                  <span className="paint-step-num" aria-hidden="true">
                    {step.n}
                  </span>
                  <Placeholder
                    label={step.shot}
                    ratio={step.ratio}
                    shape="phone"
                  />
                </div>
                <div className="paint-step-text">
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ------------------------------------------------ reframe band */}
        <section className="reframe" aria-label="The idea behind Daybreak">
          <div className="wrap reframe-inner" data-reveal>
            <p className="eyebrow eyebrow-center">The whole idea</p>
            <p className="reframe-line">
              A missed day should be a <em>dip</em>, not a reset to zero.
            </p>
            <p className="reframe-sub">
              Every habit app you quit punished you for one bad day. Daybreak is
              built the opposite way: your score bends, recovers, and keeps
              counting, because returning is the only skill that actually builds
              a life.
            </p>
          </div>
        </section>

        {/* ------------------------------------------------ walkthrough */}
        <section id="features" className="walk section-pad">
          <div className="wrap walk-intro" data-reveal>
            <p className="eyebrow eyebrow-center">Why it works when others didn&rsquo;t</p>
            <h2 className="display">
              Every piece is built to help you <em>come back</em>.
            </h2>
          </div>

          <div className="wrap walk-steps">
            {steps.map((step, index) => (
              <article
                id={step.id}
                key={step.shot}
                className={`walk-row ${
                  index % 2 === 1 ? "walk-row-reverse" : ""
                }`}
                data-reveal
              >
                <div className="walk-text">
                  <p className="eyebrow">{step.eyebrow}</p>
                  <h3 className="display">{step.title}</h3>
                  <p className="walk-copy">{step.copy}</p>
                  {step.chip && <span className="walk-chip">{step.chip}</span>}
                </div>
                <div className="walk-media">
                  <div className="walk-glow" aria-hidden="true" />
                  <Placeholder
                    label={step.shot}
                    ratio={step.ratio}
                    shape={step.shape}
                    className={
                      step.shape === "phone" ? "walk-shot-phone" : "walk-shot-card"
                    }
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------ mid CTA */}
        <section className="mid-cta" aria-label="Download Daybreak">
          <div className="wrap mid-cta-inner" data-reveal>
            <h2 className="display">
              Your next year is built from <em>small days like today.</em>
            </h2>
            <p className="lede">
              Start one space. Keep one promise. Let Daybreak hold the rest.
            </p>
            <div className="mid-cta-actions">
              <DownloadButton />
              <span className="mid-cta-note">
                Free to download · iOS now, Android coming soon
              </span>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ becoming */}
        <section className="becoming">
          <div className="becoming-bg" aria-hidden="true" />
          <p className="eyebrow eyebrow-center">A year from now</p>
          <div className="becoming-lines">
            {becomingLines.map((line, index) => (
              <p key={index} className="becoming-line">
                {line}
              </p>
            ))}
          </div>
        </section>

        {/* ------------------------------------------------ faq */}
        <section className="faq section-pad" aria-label="Frequently asked questions">
          <div className="wrap">
            <div className="faq-head" data-reveal>
              <p className="eyebrow eyebrow-center">Good questions</p>
              <h2 className="display">
                The things people <em>ask first.</em>
              </h2>
            </div>
            <div className="faq-list">
              {faqs.map((f) => (
                <details key={f.q} className="faq-item" data-reveal>
                  <summary>
                    <span>{f.q}</span>
                    <Icon
                      icon="solar:alt-arrow-down-linear"
                      className="faq-chevron h-5 w-5"
                    />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ final */}
        <section className="final">
          <Dust
            key={`final-${theme}`}
            density={0.7}
            rgb={dark ? "232, 190, 122" : "171, 122, 48"}
          />
          <div className="final-content" data-reveal>
            <p className="eyebrow eyebrow-center">Start the long run</p>
            <h2 className="display">
              Make your life <em>extraordinary</em>.
            </h2>
            <p className="lede">
              One space. A few small promises. A painting worth returning to.
              The rest is just days, and the days are what Daybreak is for.
            </p>
            <div className="final-actions">
              <DownloadButton />
              <AndroidSoon />
            </div>
            <div className="final-secondary">
              <Link href="/support" className="ghost-link">
                Questions? We&rsquo;re here
              </Link>
            </div>
            <p className="final-note">
              Free to download · iOS now, Android coming soon
            </p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <Link href="/" className="brand-lockup" aria-label="Daybreak home">
          <Image
            src="/brand-icon.png"
            alt=""
            width={28}
            height={28}
            className="brand-icon"
          />
          <span>Daybreak</span>
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
            aria-label="Daybreak on Reddit"
          >
            <Icon icon="simple-icons:reddit" className="h-4 w-4" />
          </a>
          <a
            href="https://x.com/sonahabits"
            target="_blank"
            rel="noreferrer"
            aria-label="Daybreak on X"
          >
            <Icon icon="simple-icons:x" className="h-4 w-4" />
          </a>
        </div>
        <p>© 2026 Daybreak.</p>
      </footer>
    </div>
  );
}
