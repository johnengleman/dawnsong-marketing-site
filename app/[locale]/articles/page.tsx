import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import NoiseOverlay from "../../components/NoiseOverlay";
import { RichText } from "../../components/RichText";
import { SiteFooter } from "../../components/SiteFooter";
import { SubHeader } from "../../components/SubHeader";
import { formatDate, getAllArticleMeta } from "../../lib/articles";
import {
  isRoutedLocale,
  localeConfig,
  localePageClass,
  localizePath,
  metadataAlternates,
  routedLocales,
  type SiteLocale,
} from "../../lib/locales";
import { articleUiContent } from "../../lib/siteContent";

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
  const copy = articleUiContent[locale];

  return {
    ...copy.indexMetadata,
    alternates: metadataAlternates(locale, "/articles"),
    openGraph: {
      ...copy.indexMetadata,
      url: localizePath(locale, "/articles"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      ...copy.indexMetadata,
    },
  };
}

export default async function LocalizedArticlesIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = getLocale(rawLocale);
  const copy = articleUiContent[locale];
  const articles = getAllArticleMeta(locale);

  return (
    <div
      className={`${localePageClass(locale)} min-h-screen overflow-x-clip`}
      lang={localeConfig[locale].htmlLang}
      data-locale={locale}
    >
      <NoiseOverlay />
      <SubHeader locale={locale} currentPath="/articles" />

      <main className="articles-main">
        <header className="articles-hero">
          <p className="eyebrow eyebrow-center">{copy.indexEyebrow}</p>
          <h1 className="display">
            <RichText parts={copy.indexTitle} />
          </h1>
          <p className="lede">{copy.indexLede}</p>
        </header>

        <section className="articles-list wrap" aria-label={copy.allArticlesAria}>
          {articles.length === 0 ? (
            <p className="articles-empty">{copy.empty}</p>
          ) : (
            <ul>
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={localizePath(locale, `/articles/${a.slug}`)}
                    className="article-card"
                  >
                    <div className="article-card-meta">
                      <time dateTime={a.date}>{formatDate(a.date, locale)}</time>
                      {a.readTime && <span>· {a.readTime}</span>}
                    </div>
                    <h2>{a.title}</h2>
                    <p>{a.excerpt}</p>
                    <span className="article-card-more">{copy.readMore}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <SiteFooter locale={locale} currentPath="/articles" />
    </div>
  );
}
