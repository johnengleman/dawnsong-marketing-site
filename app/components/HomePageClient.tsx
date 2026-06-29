"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import Dust from "./Dust";
import { Icon } from "./Icon";
import { LanguageSwitcher } from "./LanguageSwitcher";
import NoiseOverlay from "./NoiseOverlay";
import { Placeholder, SpaceTile, SpaceTileCustom } from "./Placeholder";
import { RichText } from "./RichText";
import SmoothScroll from "./SmoothScroll";
import {
  localeConfig,
  localePageClass,
  localizePath,
  SITE_URL,
  type SiteLocale,
} from "../lib/locales";
import {
  appStoreUrl,
  commonContent,
  type HomeContent,
  waitlistUrl,
} from "../lib/siteContent";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const placeholderCopy: Record<
  SiteLocale,
  {
    badge: string;
    ariaPrefix: string;
    tileAria: (name: string, variant: "light" | "dark") => string;
    tileAlt: (name: string) => string;
    customAria: string;
  }
> = {
  "en-US": {
    badge: "screenshot",
    ariaPrefix: "Placeholder for",
    tileAria: (name, variant) => `Painted space: ${name} (${variant})`,
    tileAlt: (name) => `${name} space, painted by Sona`,
    customAria: "Describe your own space",
  },
  ja: {
    badge: "画面",
    ariaPrefix: "プレースホルダー:",
    tileAria: (name, variant) => `${name}の描かれたスペース（${variant}）`,
    tileAlt: (name) => `Sonaが描いた${name}のスペース`,
    customAria: "自分のスペースを説明する",
  },
  ko: {
    badge: "화면",
    ariaPrefix: "자리 표시자:",
    tileAria: (name, variant) => `${name} 그려진 스페이스 (${variant})`,
    tileAlt: (name) => `Sona가 그린 ${name} 스페이스`,
    customAria: "나만의 스페이스 설명하기",
  },
  "es-MX": {
    badge: "pantalla",
    ariaPrefix: "Marcador para",
    tileAria: (name, variant) => `Espacio pintado: ${name} (${variant})`,
    tileAlt: (name) => `Espacio ${name}, pintado por Sona`,
    customAria: "Describe tu propio espacio",
  },
  "pt-BR": {
    badge: "tela",
    ariaPrefix: "Marcador para",
    tileAria: (name, variant) => `Espaço pintado: ${name} (${variant})`,
    tileAlt: (name) => `Espaço ${name}, pintado pelo Sona`,
    customAria: "Descreva seu próprio espaço",
  },
};

const themeCopy: Record<
  SiteLocale,
  { light: string; dark: string }
> = {
  "en-US": {
    light: "Switch to light theme",
    dark: "Switch to dark theme",
  },
  ja: {
    light: "ライトテーマに切り替え",
    dark: "ダークテーマに切り替え",
  },
  ko: {
    light: "라이트 테마로 전환",
    dark: "다크 테마로 전환",
  },
  "es-MX": {
    light: "Cambiar a tema claro",
    dark: "Cambiar a tema oscuro",
  },
  "pt-BR": {
    light: "Mudar para tema claro",
    dark: "Mudar para tema escuro",
  },
};

const paintStepShots: Record<string, { light: string; dark: string }> = {
  "01": {
    light: "/paint-describe-start-light.png",
    dark: "/paint-describe-start-dark.png",
  },
  "02": {
    light: "/paint-watch-generating-502-light.png",
    dark: "/paint-watch-generating-431-dark.png",
  },
  "03": {
    light: "/paint-direction-review-927-light.png",
    dark: "/paint-direction-review-324-dark.png",
  },
  "04": {
    light: "/paint-tweak-scene-537-light.png",
    dark: "/paint-tweak-scene-201-dark.png",
  },
};

export function HomePageClient({
  locale,
  content,
}: {
  locale: SiteLocale;
  content: HomeContent;
}) {
  const common = commonContent[locale];
  const rootRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const dark = theme === "dark";
  const ph = placeholderCopy[locale];

  const appJsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Sona",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS",
    description: content.appSchemaDescription,
    url: SITE_URL,
    installUrl: appStoreUrl,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: "Sona" },
    inLanguage: localeConfig[locale].htmlLang,
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: localeConfig[locale].htmlLang,
    mainEntity: content.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

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
      gsap.from($(".hero-line"), {
        opacity: 0,
        y: 50,
        duration: 1.15,
        ease: "power3.out",
        stagger: 0.13,
        delay: 0.08,
      });
      gsap.from(
        $(
          ".hero-copy .eyebrow, .hero-copy .lede, .hero-actions, .hero-note, .hero-waitlist",
        ),
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

  const galleryRowA = content.gallery.spaces.slice(0, 6);
  const galleryRowB = content.gallery.spaces.slice(6);

  return (
    <div
      ref={rootRef}
      className={`${localePageClass(locale)} min-h-screen overflow-x-clip`}
      lang={localeConfig[locale].htmlLang}
      data-locale={locale}
    >
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
        <Link
          href={localizePath(locale, "/")}
          className="brand-lockup"
          aria-label={common.homeAria}
        >
          <Image
            src="/brand-icon.png"
            alt=""
            width={34}
            height={34}
            className="brand-icon"
          />
          <span>Sona</span>
        </Link>
        <nav className="site-nav" aria-label={common.sectionsAria}>
          <a href="#spaces">{common.nav.worlds}</a>
          <a href="#features">{common.nav.features}</a>
          <a href="#progress">{common.nav.progress}</a>
          <Link href={localizePath(locale, "/articles")}>
            {common.nav.articles}
          </Link>
        </nav>
        <div className="header-actions">
          <LanguageSwitcher
            locale={locale}
            currentPath="/"
            ariaLabel={common.languageAria}
          />
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-pressed={dark}
            aria-label={dark ? themeCopy[locale].light : themeCopy[locale].dark}
          >
            <Icon
              icon={dark ? "solar:sun-2-bold" : "solar:moon-bold"}
              className="h-5 w-5"
            />
          </button>
        </div>
      </header>

      <main>
        <section className="hero">
          <Dust
            key={`hero-${theme}`}
            rgb={dark ? "232, 190, 122" : "171, 122, 48"}
          />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{content.hero.eyebrow}</p>
              <h1 className="display">
                {content.hero.titleLines.map((line, index) => (
                  <span key={index} className="hero-line">
                    <RichText parts={line} />
                  </span>
                ))}
              </h1>
              <p className="lede">{content.hero.lede}</p>
              <section
                className="hero-waitlist"
                aria-labelledby="hero-waitlist-title"
              >
                <h2 id="hero-waitlist-title">
                  {content.hero.waitlist.title}
                </h2>
                <p>{content.hero.waitlist.copy}</p>
                <a
                  href={waitlistUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hero-waitlist-button"
                >
                  <Icon
                    icon="solar:letter-unread-bold"
                    className="h-[18px] w-[18px]"
                  />
                  <span>{content.hero.waitlist.button}</span>
                  <Icon
                    icon="solar:arrow-right-up-linear"
                    className="h-4 w-4"
                  />
                </a>
                {content.hero.waitlist.note ? (
                  <p className="hero-waitlist-note">
                    {content.hero.waitlist.note}
                  </p>
                ) : null}
              </section>
              <div className="hero-actions">
                <a href="#spaces" className="ghost-link">
                  {content.hero.seeHow}
                  <Icon icon="solar:arrow-down-linear" className="h-4 w-4" />
                </a>
              </div>
              <p className="hero-note">{common.note}</p>
            </div>

            <div className="hero-stage">
              <div className="hero-glow" aria-hidden="true" />
              <Image
                src={
                  dark
                    ? "/hero-morning-routine-467-dark.png"
                    : "/hero-morning-routine-47-light.png"
                }
                alt={content.hero.imageAlt}
                width={1080}
                height={1920}
                priority
                sizes="(max-width: 900px) 82vw, 390px"
                className="hero-phone hero-phone-shot"
              />
            </div>
          </div>
          <div className="hero-fade" aria-hidden="true" />
        </section>

        <section className="trust" aria-label={content.trust.aria}>
          <div className="wrap trust-inner" data-reveal>
            <span className="trust-item">
              <Icon
                icon="solar:lock-keyhole-minimalistic-bold"
                className="h-[18px] w-[18px]"
              />
              {content.trust.private}
            </span>
            <span className="trust-dot" aria-hidden="true" />
            <span className="trust-item">
              <Icon
                icon="solar:download-minimalistic-bold"
                className="h-[18px] w-[18px]"
              />
              {content.trust.free}
            </span>
            <span className="trust-dot" aria-hidden="true" />
            <span className="trust-item">
              <Icon icon="simple-icons:apple" className="h-[16px] w-[16px]" />
              <Icon
                icon="simple-icons:android"
                className="h-[16px] w-[16px]"
              />
              {content.trust.platforms}
            </span>
          </div>
        </section>

        <section
          id="spaces"
          className="gallery"
          aria-label={content.gallery.aria}
        >
          <div className="wrap gallery-head" data-reveal>
            <p className="eyebrow eyebrow-center">{content.gallery.eyebrow}</p>
            <h2 className="display">
              <RichText parts={content.gallery.title} />
            </h2>
            <p className="lede">
              <RichText parts={content.gallery.lede} />
            </p>
          </div>

          <div className="gallery-rows">
            <div className="gallery-row gallery-row-a">
              <div className="gallery-track">
                {galleryRowA.map((s) => (
                  <SpaceTile
                    key={s.slug}
                    name={s.name}
                    slug={s.slug}
                    variant="light"
                    ariaLabel={ph.tileAria(s.name, "light")}
                    alt={ph.tileAlt(s.name)}
                  />
                ))}
                <SpaceTileCustom
                  variant="light"
                  label={content.gallery.customLabel}
                  ariaLabel={ph.customAria}
                />
                {galleryRowA.map((s) => (
                  <SpaceTile
                    key={`dup-${s.slug}`}
                    name={s.name}
                    slug={s.slug}
                    variant="light"
                    ariaLabel={ph.tileAria(s.name, "light")}
                    alt={ph.tileAlt(s.name)}
                  />
                ))}
                <SpaceTileCustom
                  variant="light"
                  label={content.gallery.customLabel}
                  ariaLabel={ph.customAria}
                />
              </div>
            </div>

            <div className="gallery-row gallery-row-b">
              <div className="gallery-track">
                {galleryRowB.map((s) => (
                  <SpaceTile
                    key={s.slug}
                    name={s.name}
                    slug={s.slug}
                    variant="dark"
                    ariaLabel={ph.tileAria(s.name, "dark")}
                    alt={ph.tileAlt(s.name)}
                  />
                ))}
                {galleryRowB.map((s) => (
                  <SpaceTile
                    key={`dup-${s.slug}`}
                    name={s.name}
                    slug={s.slug}
                    variant="dark"
                    ariaLabel={ph.tileAria(s.name, "dark")}
                    alt={ph.tileAlt(s.name)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="paint" aria-label={content.paint.aria}>
          <div className="wrap paint-head" data-reveal>
            <p className="eyebrow eyebrow-center">{content.paint.eyebrow}</p>
            <h2 className="display">
              <RichText parts={content.paint.title} />
            </h2>
            <p className="lede">{content.paint.lede}</p>
          </div>

          <ol className="paint-steps">
            {content.paint.steps.map((step) => {
              const paintStepShot = paintStepShots[step.n];

              return (
                <li key={step.n} className="paint-step" data-reveal>
                  <div className="paint-shot">
                    <span className="paint-step-num" aria-hidden="true">
                      {step.n}
                    </span>
                    {paintStepShot ? (
                      <Image
                        src={dark ? paintStepShot.dark : paintStepShot.light}
                        alt={step.shot}
                        width={787}
                        height={1400}
                        sizes="(max-width: 560px) 70vw, 260px"
                        className="paint-shot-image"
                      />
                    ) : (
                      <Placeholder
                        label={step.shot}
                        ratio={step.ratio}
                        shape="phone"
                        badge={ph.badge}
                        ariaPrefix={ph.ariaPrefix}
                      />
                    )}
                  </div>
                  <div className="paint-step-text">
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </section>

        <section className="reframe" aria-label={content.reframe.aria}>
          <div className="wrap reframe-inner" data-reveal>
            <p className="eyebrow eyebrow-center">{content.reframe.eyebrow}</p>
            <p className="reframe-line">
              <RichText parts={content.reframe.line} />
            </p>
            <p className="reframe-sub">{content.reframe.sub}</p>
          </div>
        </section>

        <section id="features" className="walk section-pad">
          <div className="wrap walk-intro" data-reveal>
            <p className="eyebrow eyebrow-center">{content.walk.eyebrow}</p>
            <h2 className="display">
              <RichText parts={content.walk.title} />
            </h2>
          </div>

          <div className="wrap walk-steps">
            {content.walk.steps.map((step, index) => {
              const walkStepShot = step.image;
              const shotClassName =
                step.shape === "phone" ? "walk-shot-phone" : "walk-shot-card";

              return (
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
                    <h3 className="display">
                      <RichText parts={step.title} />
                    </h3>
                    <p className="walk-copy">{step.copy}</p>
                    {step.chip && (
                      <span className="walk-chip">{step.chip}</span>
                    )}
                  </div>
                  <div className="walk-media">
                    <div className="walk-glow" aria-hidden="true" />
                    {walkStepShot ? (
                      <Image
                        src={dark ? walkStepShot.dark : walkStepShot.light}
                        alt={step.shot}
                        width={walkStepShot.width}
                        height={walkStepShot.height}
                        sizes="(max-width: 900px) 78vw, 330px"
                        className={`walk-shot-image ${shotClassName}`}
                      />
                    ) : (
                      <Placeholder
                        label={step.shot}
                        ratio={step.ratio}
                        shape={step.shape}
                        className={shotClassName}
                        badge={ph.badge}
                        ariaPrefix={ph.ariaPrefix}
                      />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mid-cta" aria-label={content.midCta.aria}>
          <div className="wrap mid-cta-inner" data-reveal>
            <h2 className="display">
              <RichText parts={content.midCta.title} />
            </h2>
            <p className="lede">{content.midCta.lede}</p>
          </div>
        </section>

        <section className="becoming">
          <div className="becoming-bg" aria-hidden="true" />
          <p className="eyebrow eyebrow-center">{content.becoming.eyebrow}</p>
          <div className="becoming-lines">
            {content.becoming.lines.map((line, index) => (
              <p key={index} className="becoming-line">
                <RichText parts={line} />
              </p>
            ))}
          </div>
        </section>

        <section className="faq section-pad" aria-label={content.faq.aria}>
          <div className="wrap">
            <div className="faq-head" data-reveal>
              <p className="eyebrow eyebrow-center">{content.faq.eyebrow}</p>
              <h2 className="display">
                <RichText parts={content.faq.title} />
              </h2>
            </div>
            <div className="faq-list">
              {content.faq.items.map((f) => (
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

        <section className="final">
          <Dust
            key={`final-${theme}`}
            density={0.7}
            rgb={dark ? "232, 190, 122" : "171, 122, 48"}
          />
          <div className="final-content" data-reveal>
            <p className="eyebrow eyebrow-center">{content.final.eyebrow}</p>
            <h2 className="display">
              <RichText parts={content.final.title} />
            </h2>
            <p className="lede">{content.final.lede}</p>
            <div className="final-secondary">
              <Link href={localizePath(locale, "/support")} className="ghost-link">
                {content.final.support}
              </Link>
            </div>
            <p className="final-note">{common.note}</p>
          </div>
        </section>
      </main>

      <footer className="footer">
        <Link
          href={localizePath(locale, "/")}
          className="brand-lockup"
          aria-label={common.homeAria}
        >
          <Image
            src="/brand-icon.png"
            alt=""
            width={28}
            height={28}
            className="brand-icon"
          />
          <span>Sona</span>
        </Link>
        <div className="footer-links">
          <Link href={localizePath(locale, "/privacy")}>
            {common.footer.privacy}
          </Link>
          <Link href={localizePath(locale, "/terms")}>
            {common.footer.terms}
          </Link>
          <Link href={localizePath(locale, "/support")}>
            {common.footer.support}
          </Link>
          <a href="https://sonahabitsapp.userjot.com/">
            {common.footer.feedback}
          </a>
          <a
            href="https://www.reddit.com/r/SonaHabits/"
            target="_blank"
            rel="noreferrer"
            aria-label={common.footer.redditAria}
          >
            <Icon icon="simple-icons:reddit" className="h-4 w-4" />
          </a>
          <a
            href="https://x.com/sonahabits"
            target="_blank"
            rel="noreferrer"
            aria-label={common.footer.xAria}
          >
            <Icon icon="simple-icons:x" className="h-4 w-4" />
          </a>
          <LanguageSwitcher
            locale={locale}
            currentPath="/"
            ariaLabel={common.languageAria}
          />
        </div>
        <p>{common.footer.copyright}</p>
      </footer>
    </div>
  );
}
