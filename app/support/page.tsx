import type { Metadata } from "next";

import NoiseOverlay from "../components/NoiseOverlay";
import { SiteFooter } from "../components/SiteFooter";
import { SubHeader } from "../components/SubHeader";
import {
  defaultLocale,
  localeConfig,
  localePageClass,
  metadataAlternates,
} from "../lib/locales";
import { supportContent } from "../lib/siteContent";

export const metadata: Metadata = {
  ...supportContent[defaultLocale].metadata,
  alternates: metadataAlternates(defaultLocale, "/support"),
  openGraph: {
    ...supportContent[defaultLocale].metadata,
    url: "/support",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    ...supportContent[defaultLocale].metadata,
  },
};

export default function SupportPage() {
  const content = supportContent[defaultLocale];

  return (
    <div
      className={`${localePageClass(defaultLocale)} min-h-screen overflow-x-clip`}
      lang={localeConfig[defaultLocale].htmlLang}
      data-locale={defaultLocale}
    >
      <NoiseOverlay />
      <SubHeader locale={defaultLocale} currentPath="/support" />
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
      <SiteFooter locale={defaultLocale} currentPath="/support" />
    </div>
  );
}
