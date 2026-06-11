"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Dust from "./components/Dust";
import { Icon } from "./components/Icon";
import NoiseOverlay from "./components/NoiseOverlay";
import SmoothScroll from "./components/SmoothScroll";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const appStoreUrl =
  "https://apps.apple.com/us/app/habit-tracker-sona/id6758967586";
const feedbackUrl = "https://sonahabitsapp.userjot.com/";

const problemPoints = [
  "You start strong. Day 12, day 23, day 47 — the number becomes the whole reason.",
  "Then life happens. A fever, a deadline, a newborn, a hard week. One missed day, and the counter falls to zero.",
  "Starting over feels so heavy that eventually you stop starting. Not because you're lazy — because the system punished you for being human.",
];

const curveMarkers = [
  { label: "the flu week", left: "36%", top: "48.4%", dip: true, up: false },
  { label: "you came back", left: "56%", top: "24.5%", dip: false, up: true },
  {
    label: "two weeks of travel",
    left: "69.5%",
    top: "37.7%",
    dip: true,
    up: false,
  },
  { label: "back again", left: "84%", top: "23%", dip: false, up: true },
];

const progressItems = [
  {
    icon: "solar:graph-up-bold",
    title: "One calm line",
    copy: "Your consistency drifts, dips, and recovers across the weeks — the truth about your long run, told gently. No wall of red. No broken chains.",
  },
  {
    icon: "solar:cup-star-bold",
    title: "The 90% bar",
    copy: "Reach it and a quiet gold trophy appears. It's recognition, not pressure — and nothing shames you when you're below it.",
  },
  {
    icon: "solar:layers-minimalistic-bold",
    title: "Every habit, one glance",
    copy: "Each habit keeps its own long run inside the area it serves, so you always know where to return first — without a dashboard's worth of noise.",
  },
];

const imaginePrompts = [
  "quiet mornings before the city wakes",
  "learning italian by candlelight",
  "a stronger body by spring",
  "evenings that end offline",
];

const becomingLines = [
  <>
    You stop negotiating with yourself every morning. The walk is just{" "}
    <em>what you do</em>.
  </>,
  <>
    A bad week arrives — and for the first time, it doesn&rsquo;t take
    everything down with it.
  </>,
  <>
    And one ordinary evening you notice: the life you kept postponing —{" "}
    <em>you&rsquo;re living it</em>.
  </>,
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
      aria-label="Download Sona on the App Store"
    >
      <Icon icon="simple-icons:apple" className="h-[18px] w-[18px]" />
      <span>{label}</span>
    </a>
  );
}

function ImagineTypewriter() {
  const [text, setText] = useState(imaginePrompts[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let promptIndex = 0;
    let charIndex = imaginePrompts[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const step = () => {
      const current = imaginePrompts[promptIndex];

      if (deleting) {
        charIndex -= 1;
        setText(current.slice(0, charIndex));
        if (charIndex <= 0) {
          deleting = false;
          promptIndex = (promptIndex + 1) % imaginePrompts.length;
        }
        timer = setTimeout(step, 26);
      } else {
        const next = imaginePrompts[promptIndex];
        charIndex += 1;
        setText(next.slice(0, charIndex));
        if (charIndex >= next.length) {
          deleting = true;
          timer = setTimeout(step, 2400);
          return;
        }
        timer = setTimeout(step, 55);
      }
    };

    timer = setTimeout(step, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className="imagine-input" aria-hidden="true">
      <Icon icon="solar:pen-2-linear" className="h-4 w-4 opacity-50" />
      <span>{text}</span>
      <span className="imagine-cursor" />
    </span>
  );
}

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);

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
      gsap.from($(".hero-copy .eyebrow, .hero-copy .lede, .hero-actions, .hero-note"), {
        opacity: 0,
        y: 26,
        duration: 1,
        ease: "power3.out",
        stagger: 0.09,
        delay: 0.5,
      });
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
        y: -70,
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

      /* streak tombstone */
      const tomb = $(".streak-tomb")[0];
      if (tomb) {
        gsap.fromTo(
          $(".streak-was"),
          { "--strike": 0 },
          {
            "--strike": 1,
            duration: 0.7,
            ease: "power2.inOut",
            delay: 0.35,
            scrollTrigger: { trigger: tomb, start: "top 72%" },
          },
        );
        gsap.from($(".streak-now"), {
          opacity: 0,
          scale: 0.5,
          duration: 0.8,
          ease: "back.out(1.8)",
          delay: 0.85,
          scrollTrigger: { trigger: tomb, start: "top 72%" },
        });
      }

      /* the consistency curve — pinned & scrubbed */
      const path = $(".curve-path")[0] as unknown as
        | SVGPathElement
        | undefined;
      const pin = $(".curve-pin")[0];
      const scoreEl = $("[data-score]")[0];

      if (path && pin && scoreEl) {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        const markers = $(".curve-marker");
        const coda = $(".curve-coda")[0];
        gsap.set(markers, { autoAlpha: 0, y: 16 });
        gsap.set(coda, { autoAlpha: 0, y: 22 });

        const score = { value: 35 };
        scoreEl.textContent = "35";

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: pin,
            start: "top top",
            end: "+=2000",
            scrub: 0.7,
            pin: true,
            anticipatePin: 1,
          },
          onUpdate: () => {
            scoreEl.textContent = String(Math.round(score.value));
          },
        });

        tl.to(path, { strokeDashoffset: 0, ease: "none", duration: 1 }, 0)
          .to(score, { value: 80, ease: "none", duration: 0.25 }, 0)
          .to(score, { value: 55, ease: "none", duration: 0.11 }, 0.25)
          .to(score, { value: 86, ease: "none", duration: 0.2 }, 0.36)
          .to(score, { value: 68, ease: "none", duration: 0.14 }, 0.56)
          .to(score, { value: 91, ease: "none", duration: 0.3 }, 0.7);

        const markerTimes = [0.34, 0.54, 0.68, 0.84];
        markers.forEach((marker, index) => {
          tl.to(
            marker,
            { autoAlpha: 1, y: 0, duration: 0.05, ease: "power2.out" },
            markerTimes[index] ?? 0.85,
          );
        });

        tl.to(coda, { autoAlpha: 1, y: 0, duration: 0.08 }, 0.88);
      }

      /* progress phone drift */
      gsap.to($(".progress-stage"), {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: $(".progress-section")[0],
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
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

    /* horizontal gallery — desktop only */
    mm.add(
      "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
      () => {
        const track = $(".gallery-track")[0];
        const pin = $(".gallery-pin")[0];
        if (!track || !pin) return;

        gsap.to(track, {
          x: () => -(track.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: pin,
            start: "center center",
            end: () => "+=" + (track.scrollWidth - window.innerWidth),
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      },
    );

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen overflow-x-clip">
      <SmoothScroll />
      <NoiseOverlay />

      <header className="site-header">
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
        <nav className="site-nav" aria-label="Sections">
          <a href="#philosophy">The philosophy</a>
          <a href="#paintings">Your worlds</a>
          <a href="#progress">Progress</a>
        </nav>
        <DownloadButton className="cta-button-sm" label="Download" />
      </header>

      <main>
        {/* ------------------------------------------------ hero */}
        <section className="hero">
          <Dust />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">For people tired of starting over</p>
              <h1 className="display">
                <span className="hero-line">
                  An extraordinary life isn&rsquo;t built in a day.
                </span>
                <span className="hero-line">
                  <em>It&rsquo;s built on the days you come back.</em>
                </span>
              </h1>
              <p className="lede">
                Sona is a calm, beautiful place to keep the promises you make
                to yourself. No streaks to lose. No shame when life happens.
                Just small days, repeated — and a life that quietly changes.
              </p>
              <div className="hero-actions">
                <DownloadButton />
                <a href="#philosophy" className="ghost-link">
                  See how it works
                  <Icon icon="solar:arrow-down-linear" className="h-4 w-4" />
                </a>
              </div>
              <p className="hero-note">Free to download · iOS</p>
            </div>

            <div className="hero-stage">
              <div className="hero-glow" aria-hidden="true" />
              <div className="phone hero-phone">
                <Image
                  src="/dark-home-morning.png"
                  alt="Sona home screen: a painted morning scene above today's habits"
                  fill
                  priority
                  sizes="(max-width: 700px) 78vw, 330px"
                  className="object-cover object-top"
                />
              </div>
              <div className="hero-float hero-float-score">
                <strong>84%</strong>
                <span>consistency — survives missed days</span>
              </div>
              <div className="hero-float hero-float-rest">
                <strong>
                  <Icon
                    icon="solar:moon-sleep-bold"
                    className="inline h-6 w-6 text-[var(--gold)]"
                  />
                </strong>
                <span>resting · nothing breaks</span>
              </div>
            </div>
          </div>
          <div className="hero-fade" aria-hidden="true" />
        </section>

        {/* ------------------------------------------------ problem */}
        <section className="problem section-pad">
          <div className="wrap problem-grid">
            <div data-reveal>
              <p className="eyebrow">The old way</p>
              <h2 className="display">
                You were never the problem. <em>Day&nbsp;zero</em> was.
              </h2>
              <div className="problem-points">
                {problemPoints.map((point, index) => (
                  <p key={point} className="problem-point">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {point}
                  </p>
                ))}
              </div>
            </div>

            <figure className="streak-tomb" data-reveal data-reveal-delay="0.15">
              <span className="streak-tomb-label">
                Other apps, after one sick day
              </span>
              <div className="streak-numbers" aria-hidden="true">
                <span className="streak-was">47</span>
                <span className="streak-arrow">→</span>
                <span className="streak-now">0</span>
              </div>
              <figcaption>
                Forty-six days of showing up, erased by one.
              </figcaption>
              <span className="streak-tomb-sub">
                Sona will never do this to you.
              </span>
            </figure>
          </div>
        </section>

        {/* ------------------------------------------------ the curve */}
        <section id="philosophy" className="curve-section">
          <div className="curve-pin">
            <div className="curve-heading">
              <p className="eyebrow eyebrow-center">The Sona way</p>
              <h2 className="display">
                A missed day is a <em>dip</em>, not a reset.
              </h2>
            </div>

            <div className="curve-stage">
              <div className="curve-score">
                <strong>
                  <span data-score>91</span>%
                </strong>
                <span>your consistency</span>
              </div>

              <div className="curve-plot">
              <svg
                className="curve-svg"
                viewBox="0 0 1000 440"
                role="img"
                aria-label="A consistency score over several months: it climbs, dips during a flu week and travel, and recovers each time, ending above the 90% bar"
              >
                <defs>
                  <linearGradient
                    id="curveGradient"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0" stopColor="#8fa9c9" />
                    <stop offset="1" stopColor="#e6bc7d" />
                  </linearGradient>
                </defs>

                <line className="curve-grid-line" x1="0" y1="180" x2="1000" y2="180" />
                <line className="curve-grid-line" x1="0" y1="270" x2="1000" y2="270" />
                <line className="curve-grid-line" x1="0" y1="360" x2="1000" y2="360" />

                <line className="curve-bar-line" x1="0" y1="94" x2="1000" y2="94" />
                <text className="curve-bar-text" x="0" y="80">
                  THE 90% BAR
                </text>
                <text className="curve-axis-text" x="0" y="430">
                  spring
                </text>
                <text className="curve-axis-text" x="952" y="430">
                  now
                </text>

                <path
                  className="curve-path"
                  d="M0,281 C70,260 150,170 250,128 C290,111 320,150 355,205 C370,228 385,222 400,200 C450,135 500,115 560,108 C610,103 650,135 695,166 C720,183 745,170 775,150 C840,110 920,96 1000,91"
                />
              </svg>

              {curveMarkers.map((marker) => (
                <div
                  key={marker.label}
                  className={`curve-marker ${
                    marker.dip ? "curve-marker-dip" : ""
                  } ${marker.up ? "curve-marker-up" : ""}`}
                  style={{ left: marker.left, top: marker.top }}
                >
                  <span className="curve-marker-dot" aria-hidden="true" />
                  <span className="curve-marker-label">{marker.label}</span>
                </div>
              ))}
              </div>
            </div>

            <p className="curve-coda">
              Your score bends and recovers the way a real life does.{" "}
              <em>Returning</em> is the skill — and Sona makes it feel safe,
              even sweet, to come back.
            </p>
          </div>
        </section>

        {/* ------------------------------------------------ paintings */}
        <section id="paintings" className="paintings">
          <div className="paintings-intro" data-reveal>
            <p className="eyebrow eyebrow-center">Your areas, your art</p>
            <h2 className="display">
              Give every promise <em>a world</em> of its own.
            </h2>
            <p className="lede">
              In Sona, habits live inside areas — the parts of your life
              you&rsquo;re building. Describe one in a few words, and Sona
              paints it: a personal scene that crowns that area and holds its
              habits, styled however speaks to you. You don&rsquo;t open a
              checklist. You step into a place you made.
            </p>
          </div>

          <div className="gallery-pin">
            <div className="gallery-track">
              <div className="gallery-panel">
                <div className="gallery-card">
                  <Image
                    src="/dark-home-morning.png"
                    alt="Morning Routine area: a painted rainy-window scene above the morning's habits"
                    fill
                    sizes="(max-width: 900px) 78vw, 470px"
                    className="object-cover object-top"
                  />
                  <div className="gallery-card-shade" aria-hidden="true" />
                </div>
                <div className="gallery-caption">
                  <span className="gallery-prompt">
                    &ldquo;quiet mornings before the city wakes&rdquo;
                  </span>
                  <p>
                    Sona painted this Morning Routine — and the stretches,
                    walks, and weekly planning live right beneath it.
                  </p>
                </div>
              </div>

              <div className="gallery-panel">
                <div className="gallery-card">
                  <Image
                    src="/dark-home-italian.png"
                    alt="Learn Italian area: a candlelit study painting above reading and practice habits"
                    fill
                    sizes="(max-width: 900px) 78vw, 470px"
                    className="object-cover object-top"
                  />
                  <div className="gallery-card-shade" aria-hidden="true" />
                </div>
                <div className="gallery-caption">
                  <span className="gallery-prompt">
                    &ldquo;learning italian in a candlelit study&rdquo;
                  </span>
                  <p>
                    Every time you show up to read or practice, you return to
                    this room. It starts to feel like yours — because it is.
                  </p>
                </div>
              </div>

              <div className="gallery-panel">
                <div className="imagine-card">
                  <span className="imagine-icon">
                    <Icon icon="solar:magic-stick-3-bold" className="h-6 w-6" />
                  </span>
                  <h3>Imagine a new area</h3>
                  <ImagineTypewriter />
                  <p>
                    A few words become a name and a painting. Regenerate it,
                    restyle it, or describe exactly what you see — until it
                    feels like the life you&rsquo;re walking toward.
                  </p>
                </div>
                <div className="gallery-caption">
                  <span className="gallery-prompt">
                    &ldquo;what are you becoming?&rdquo;
                  </span>
                  <p>Type it. Watch a world appear. Then live into it.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ progress */}
        <section id="progress" className="progress-section section-pad">
          <div className="wrap progress-grid">
            <div className="progress-copy" data-reveal>
              <p className="eyebrow">The long view</p>
              <h2 className="display">
                Progress so beautiful, you&rsquo;ll <em>want</em> to check in.
              </h2>
              <div className="progress-list">
                {progressItems.map((item) => (
                  <div key={item.title} className="progress-item">
                    <span className="progress-item-icon">
                      <Icon icon={item.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="progress-stage" data-reveal data-reveal-delay="0.1">
              <div className="phone progress-phone">
                <Image
                  src="/dark-progress.png"
                  alt="Sona progress screen: 70% consistency over a painted mountain, with a gentle trend line and per-habit breakdown"
                  fill
                  sizes="(max-width: 700px) 80vw, 330px"
                  className="object-cover object-top"
                />
              </div>
              <div className="progress-float progress-float-trophy">
                <Icon icon="solar:cup-star-bold" className="h-4 w-4" />
                91% · trophy earned
              </div>
              <div className="progress-float progress-float-rest">
                no resets. ever.
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------ human trio */}
        <section className="human-section section-pad">
          <div className="wrap">
            <div className="human-heading" data-reveal>
              <p className="eyebrow eyebrow-center">Built for real life</p>
              <h2 className="display">
                A system shaped like a <em>human</em>.
              </h2>
            </div>

            <div className="human-grid">
              <article className="human-card" data-reveal>
                <div className="rest-pill" aria-hidden="true">
                  <div className="rest-pill-left">
                    <span className="rest-moon">
                      <Icon icon="solar:moon-sleep-bold" className="h-5 w-5" />
                    </span>
                    <span className="rest-pill-text">
                      <small>RESTING</small>
                      <strong>1 hour left</strong>
                    </span>
                  </div>
                  <span className="rest-resume">Resume</span>
                </div>
                <h3>Rest is part of the practice</h3>
                <p>
                  Sick? Traveling? Burned out? Declare rest and nothing breaks
                  — your score is protected, and Sona resumes with you when
                  you&rsquo;re ready. Rest isn&rsquo;t a loophole here.
                  It&rsquo;s the system working as designed.
                </p>
              </article>

              <article className="human-card" data-reveal data-reveal-delay="0.08">
                <div className="cadence-chips" aria-hidden="true">
                  <span className="cadence-chip cadence-chip-on">
                    <Icon icon="solar:check-circle-bold" className="h-4 w-4" />
                    Daily
                  </span>
                  <span className="cadence-chip cadence-chip-on">
                    <Icon icon="solar:check-circle-bold" className="h-4 w-4" />
                    Weekly
                  </span>
                  <span className="cadence-chip cadence-chip-on">
                    <Icon icon="solar:check-circle-bold" className="h-4 w-4" />
                    Monthly
                  </span>
                </div>
                <h3>Your rhythm, not the app&rsquo;s</h3>
                <p>
                  A morning stretch is daily. A long run is weekly. A budget
                  review is monthly. Sona lets every habit live at its natural
                  pace — together, inside the same area, scored fairly.
                </p>
              </article>

              <article className="human-card" data-reveal data-reveal-delay="0.16">
                <div className="zero-mark" aria-hidden="true">
                  <s>Day 0</s>
                  <span>Day 213</span>
                </div>
                <h3>No streak counter. Anywhere.</h3>
                <p>
                  There is no number in Sona that resets to zero, and no day
                  zero waiting to greet you after a hard week. Just a long run
                  of returning that keeps counting <em>with</em> you.
                </p>
              </article>
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

        {/* ------------------------------------------------ final */}
        <section className="final">
          <Dust density={0.7} />
          <div className="final-content" data-reveal>
            <p className="eyebrow eyebrow-center">Start the long run</p>
            <h2 className="display">
              Make your life <em>extraordinary</em>.
            </h2>
            <p className="lede">
              One area. A few small promises. A painting worth returning to.
              The rest is just days — and the days are what Sona is for.
            </p>
            <div className="final-actions">
              <DownloadButton />
              <Link href="/support" className="ghost-link">
                Questions? We&rsquo;re here
              </Link>
            </div>
            <p className="final-note">Free to download · iOS</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <Link href="/" className="brand-lockup" aria-label="Sona home">
          <Image
            src="/icon.png"
            alt=""
            width={28}
            height={28}
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
