import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { LegalPage } from "../../components/LegalPage";
import NoiseOverlay from "../../components/NoiseOverlay";
import { SiteFooter } from "../../components/SiteFooter";
import { SubHeader } from "../../components/SubHeader";
import {
  isRoutedLocale,
  localeConfig,
  localePageClass,
  localizePath,
  metadataAlternates,
  routedLocales,
  type SiteLocale,
} from "../../lib/locales";
import { termsContent } from "../../lib/termsContent";

export function generateStaticParams() {
  return routedLocales.map((locale) => ({ locale }));
}

function getLocale(value: string): SiteLocale {
  if (!isRoutedLocale(value)) notFound();
  return value;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = getLocale(rawLocale);

  return {
    ...termsContent[locale].metadata,
    alternates: metadataAlternates(locale, "/terms"),
    openGraph: {
      ...termsContent[locale].metadata,
      url: localizePath(locale, "/terms"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      ...termsContent[locale].metadata,
    },
  };
}

export default async function LocalizedTermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = getLocale(rawLocale);

  return (
    <div
      className={`${localePageClass(locale)} min-h-screen overflow-x-clip`}
      lang={localeConfig[locale].htmlLang}
      data-locale={locale}
    >
      <NoiseOverlay />
      <SubHeader locale={locale} currentPath="/terms" />
      <LegalPage
        content={termsContent[locale]}
        htmlLang={localeConfig[locale].htmlLang}
      />
      <SiteFooter locale={locale} currentPath="/terms" />
    </div>
  );
}
