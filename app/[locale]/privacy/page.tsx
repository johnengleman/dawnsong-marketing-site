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
import { privacyPolicyContent } from "../../privacy/privacyContent";

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
  const title = String(privacyPolicyContent[locale].metadata.title);
  const description = String(
    privacyPolicyContent[locale].metadata.description ?? "",
  );

  return {
    title,
    description,
    alternates: metadataAlternates(locale, "/privacy"),
    openGraph: {
      title,
      description,
      url: localizePath(locale, "/privacy"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LocalizedPrivacyPage({
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
      <SubHeader locale={locale} currentPath="/privacy" />
      <LegalPage
        content={privacyPolicyContent[locale]}
        htmlLang={localeConfig[locale].htmlLang}
      />
      <SiteFooter locale={locale} currentPath="/privacy" />
    </div>
  );
}
