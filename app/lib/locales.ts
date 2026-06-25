import type { Metadata } from "next";

export const SITE_URL = "https://sonahabits.com";

export const defaultLocale = "en-US" as const;

export const siteLocales = ["en-US", "ja", "ko", "es-MX", "pt-BR"] as const;
export type SiteLocale = (typeof siteLocales)[number];

export const routedLocales = ["ja", "ko", "es-MX", "pt-BR"] as const;
export type RoutedLocale = (typeof routedLocales)[number];

export const localeConfig: Record<
  SiteLocale,
  {
    label: string;
    shortLabel: string;
    htmlLang: string;
    prefix: string;
    isCjk: boolean;
  }
> = {
  "en-US": {
    label: "English",
    shortLabel: "EN",
    htmlLang: "en-US",
    prefix: "",
    isCjk: false,
  },
  ja: {
    label: "日本語",
    shortLabel: "JA",
    htmlLang: "ja",
    prefix: "/ja",
    isCjk: true,
  },
  ko: {
    label: "한국어",
    shortLabel: "KO",
    htmlLang: "ko",
    prefix: "/ko",
    isCjk: true,
  },
  "es-MX": {
    label: "Español (México)",
    shortLabel: "ES",
    htmlLang: "es-MX",
    prefix: "/es-MX",
    isCjk: false,
  },
  "pt-BR": {
    label: "Português (Brasil)",
    shortLabel: "PT",
    htmlLang: "pt-BR",
    prefix: "/pt-BR",
    isCjk: false,
  },
};

export function isSiteLocale(value: string): value is SiteLocale {
  return (siteLocales as readonly string[]).includes(value);
}

export function isRoutedLocale(value: string): value is RoutedLocale {
  return (routedLocales as readonly string[]).includes(value);
}

export function localizePath(locale: SiteLocale, path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return normalized;
  if (normalized === "/") return localeConfig[locale].prefix;
  return `${localeConfig[locale].prefix}${normalized}`;
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

export function languageAlternates(path: string): Record<string, string> {
  const alternates = Object.fromEntries(
    siteLocales.map((locale) => [
      localeConfig[locale].htmlLang,
      localizePath(locale, path),
    ]),
  );
  return {
    ...alternates,
    "x-default": localizePath(defaultLocale, path),
  };
}

export function metadataAlternates(
  locale: SiteLocale,
  path: string,
): NonNullable<Metadata["alternates"]> {
  return {
    canonical: localizePath(locale, path),
    languages: languageAlternates(path),
  };
}

export function localePageClass(locale: SiteLocale): string {
  return localeConfig[locale].isCjk ? "locale-page locale-cjk" : "locale-page";
}
