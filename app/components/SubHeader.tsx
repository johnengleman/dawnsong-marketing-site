import Image from "next/image";
import Link from "next/link";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { localizePath, type SiteLocale } from "../lib/locales";
import { commonContent } from "../lib/siteContent";

/**
 * Lightweight static header for sub-pages (articles, legal). No theme toggle
 * or scroll wiring — those live only on the interactive homepage. Theme still
 * applies via the persisted-theme script in layout.tsx.
 */
export function SubHeader({
  locale,
  currentPath,
}: {
  locale: SiteLocale;
  currentPath: string;
}) {
  const copy = commonContent[locale];

  return (
    <header className="site-header">
      <Link
        href={localizePath(locale, "/")}
        className="brand-lockup"
        aria-label={copy.homeAria}
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
      <nav className="site-nav" aria-label={copy.sectionsAria}>
        <Link href={localizePath(locale, "/articles")}>
          {copy.nav.articles}
        </Link>
        <Link href={`${localizePath(locale, "/")}#spaces`}>
          {copy.nav.worlds}
        </Link>
        <Link href={`${localizePath(locale, "/")}#features`}>
          {copy.nav.features}
        </Link>
      </nav>
      <div className="header-actions">
        <LanguageSwitcher
          locale={locale}
          currentPath={currentPath}
          ariaLabel={copy.languageAria}
        />
      </div>
    </header>
  );
}
