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
import { privacyPolicyContent } from "./privacyContent";

const privacyTitle = String(privacyPolicyContent[defaultLocale].metadata.title);
const privacyDescription = String(
  privacyPolicyContent[defaultLocale].metadata.description ?? "",
);

export const metadata: Metadata = {
  title: privacyTitle,
  description: privacyDescription,
  alternates: metadataAlternates(defaultLocale, "/privacy"),
  openGraph: {
    title: privacyTitle,
    description: privacyDescription,
    url: "/privacy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: privacyTitle,
    description: privacyDescription,
  },
};

export default function PrivacyPage() {
  return (
    <div
      className={`${localePageClass(defaultLocale)} min-h-screen overflow-x-clip`}
      lang={localeConfig[defaultLocale].htmlLang}
      data-locale={defaultLocale}
    >
      <NoiseOverlay />
      <SubHeader locale={defaultLocale} currentPath="/privacy" />
      <LegalPage
        content={privacyPolicyContent[defaultLocale]}
        htmlLang={localeConfig[defaultLocale].htmlLang}
      />
      <SiteFooter locale={defaultLocale} currentPath="/privacy" />
    </div>
  );
}
