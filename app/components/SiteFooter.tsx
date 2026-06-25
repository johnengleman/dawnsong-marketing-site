import Image from "next/image";
import Link from "next/link";

import { Icon } from "./Icon";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { localizePath, type SiteLocale } from "../lib/locales";
import { commonContent, feedbackUrl } from "../lib/siteContent";

/** Shared footer used across the homepage and sub-pages (articles, legal). */
export function SiteFooter({
  locale,
  currentPath,
}: {
  locale: SiteLocale;
  currentPath: string;
}) {
  const copy = commonContent[locale];

  return (
    <footer className="footer">
      <Link
        href={localizePath(locale, "/")}
        className="brand-lockup"
        aria-label={copy.homeAria}
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
        <Link href={localizePath(locale, "/articles")}>
          {copy.footer.articles}
        </Link>
        <Link href={localizePath(locale, "/privacy")}>
          {copy.footer.privacy}
        </Link>
        <Link href={localizePath(locale, "/terms")}>{copy.footer.terms}</Link>
        <Link href={localizePath(locale, "/support")}>
          {copy.footer.support}
        </Link>
        <a href={feedbackUrl}>{copy.footer.feedback}</a>
        <a
          href="https://www.reddit.com/r/SonaHabits/"
          target="_blank"
          rel="noreferrer"
          aria-label={copy.footer.redditAria}
        >
          <Icon icon="simple-icons:reddit" className="h-4 w-4" />
        </a>
        <a
          href="https://x.com/sonahabits"
          target="_blank"
          rel="noreferrer"
          aria-label={copy.footer.xAria}
        >
          <Icon icon="simple-icons:x" className="h-4 w-4" />
        </a>
        <LanguageSwitcher
          locale={locale}
          currentPath={currentPath}
          ariaLabel={copy.languageAria}
        />
      </div>
      <p>{copy.footer.copyright}</p>
    </footer>
  );
}
