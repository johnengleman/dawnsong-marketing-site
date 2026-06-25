import type { Metadata } from "next";

import { LegalPage } from "../components/LegalPage";
import NoiseOverlay from "../components/NoiseOverlay";
import { SiteFooter } from "../components/SiteFooter";
import { SubHeader } from "../components/SubHeader";
import {
  defaultLocale,
  localeConfig,
  localePageClass,
  metadataAlternates,
} from "../lib/locales";
import { termsContent } from "../lib/termsContent";

export const metadata: Metadata = {
  ...termsContent[defaultLocale].metadata,
  alternates: metadataAlternates(defaultLocale, "/terms"),
  openGraph: {
    ...termsContent[defaultLocale].metadata,
    url: "/terms",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    ...termsContent[defaultLocale].metadata,
  },
};

export default function TermsPage() {
  return (
    <div
      className={`${localePageClass(defaultLocale)} min-h-screen overflow-x-clip`}
      lang={localeConfig[defaultLocale].htmlLang}
      data-locale={defaultLocale}
    >
      <NoiseOverlay />
      <SubHeader locale={defaultLocale} currentPath="/terms" />
      <LegalPage
        content={termsContent[defaultLocale]}
        htmlLang={localeConfig[defaultLocale].htmlLang}
      />
      <SiteFooter locale={defaultLocale} currentPath="/terms" />
    </div>
  );
}
