import type { Metadata } from "next";

import { HomePageClient } from "./components/HomePageClient";
import { defaultLocale, metadataAlternates } from "./lib/locales";
import { homeContent } from "./lib/siteContent";

export const metadata: Metadata = {
  ...homeContent[defaultLocale].metadata,
  alternates: metadataAlternates(defaultLocale, "/"),
  openGraph: {
    ...homeContent[defaultLocale].metadata,
    url: "/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    ...homeContent[defaultLocale].metadata,
  },
};

export default function Home() {
  return (
    <HomePageClient
      locale={defaultLocale}
      content={homeContent[defaultLocale]}
    />
  );
}
