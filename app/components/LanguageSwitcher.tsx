import Link from "next/link";

import {
  localeConfig,
  localizePath,
  siteLocales,
  type SiteLocale,
} from "../lib/locales";

export function LanguageSwitcher({
  locale,
  currentPath,
  ariaLabel,
}: {
  locale: SiteLocale;
  currentPath: string;
  ariaLabel: string;
}) {
  return (
    <details className="language-switcher">
      <summary aria-label={ariaLabel}>
        {localeConfig[locale].shortLabel}
      </summary>
      <div className="language-menu">
        {siteLocales.map((option) => (
          <Link
            key={option}
            href={localizePath(option, currentPath)}
            hrefLang={localeConfig[option].htmlLang}
            aria-current={option === locale ? "page" : undefined}
          >
            <span>{localeConfig[option].shortLabel}</span>
            <small>{localeConfig[option].label}</small>
          </Link>
        ))}
      </div>
    </details>
  );
}
