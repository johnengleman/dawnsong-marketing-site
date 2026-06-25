import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { HomePageClient } from "../components/HomePageClient";
import {
  isRoutedLocale,
  metadataAlternates,
  localizePath,
  routedLocales,
  type SiteLocale,
} from "../lib/locales";
import { homeContent } from "../lib/siteContent";

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
  const copy = homeContent[locale];

  return {
    ...copy.metadata,
    alternates: metadataAlternates(locale, "/"),
    openGraph: {
      ...copy.metadata,
      url: localizePath(locale, "/"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      ...copy.metadata,
    },
  };
}

export default async function LocalizedHome({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = getLocale(rawLocale);

  return <HomePageClient locale={locale} content={homeContent[locale]} />;
}
