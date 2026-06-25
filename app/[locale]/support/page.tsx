import type { Metadata } from "next";
import { notFound } from "next/navigation";

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
import { supportContent } from "../../lib/siteContent";

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
    ...supportContent[locale].metadata,
    alternates: metadataAlternates(locale, "/support"),
    openGraph: {
      ...supportContent[locale].metadata,
      url: localizePath(locale, "/support"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      ...supportContent[locale].metadata,
    },
  };
}

export default async function LocalizedSupportPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = getLocale(rawLocale);
  const content = supportContent[locale];

  return (
    <div
      className={`${localePageClass(locale)} min-h-screen overflow-x-clip`}
      lang={localeConfig[locale].htmlLang}
      data-locale={locale}
    >
      <NoiseOverlay />
      <SubHeader locale={locale} currentPath="/support" />
      <main className="min-h-screen bg-[#fffbf7] pt-24 text-[#2d2a26]">
        <div className="mx-auto w-full max-w-3xl px-6 py-20">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            {content.title}
          </h1>
          <p className="mb-8 text-lg text-[#6b6560]">{content.intro}</p>
          <a
            className="inline-flex items-center gap-3 rounded-2xl bg-[#2d2a26] px-6 py-3 font-semibold text-white shadow-xl shadow-amber-900/10 transition-colors hover:bg-[#3d3a36]"
            href="mailto:support@sonahabits.com"
          >
            support@sonahabits.com
          </a>
          <p className="mt-6 text-sm text-[#6b6560]">{content.helper}</p>
        </div>
      </main>
      <SiteFooter locale={locale} currentPath="/support" />
    </div>
  );
}
