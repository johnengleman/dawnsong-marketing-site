import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import NoiseOverlay from "../../components/NoiseOverlay";
import { RichText } from "../../components/RichText";
import { SiteFooter } from "../../components/SiteFooter";
import { SubHeader } from "../../components/SubHeader";
import {
  formatDate,
  getArticle,
  getArticleSlugs,
} from "../../lib/articles";
import {
  defaultLocale,
  localeConfig,
  localePageClass,
  localizePath,
  metadataAlternates,
  SITE_URL,
} from "../../lib/locales";
import { articleUiContent, commonContent } from "../../lib/siteContent";

export function generateStaticParams() {
  return getArticleSlugs(defaultLocale).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(defaultLocale, slug);
  if (!article) return { title: articleUiContent[defaultLocale].notFoundTitle };

  const path = `/articles/${article.slug}`;
  return {
    title: `${article.title} — Sona`,
    description: article.description,
    alternates: metadataAlternates(defaultLocale, path),
    openGraph: {
      title: article.title,
      description: article.description,
      url: path,
      type: "article",
      publishedTime: article.date,
      locale: localeConfig[defaultLocale].htmlLang,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const locale = defaultLocale;
  const article = getArticle(locale, slug);
  if (!article) notFound();

  const ui = articleUiContent[locale];
  const common = commonContent[locale];
  const path = `/articles/${article.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: localeConfig[locale].htmlLang,
    author: { "@type": "Organization", name: "Sona" },
    publisher: { "@type": "Organization", name: "Sona" },
    mainEntityOfPage: `${SITE_URL}${localizePath(locale, path)}`,
  };

  return (
    <div
      className={`${localePageClass(locale)} min-h-screen overflow-x-clip`}
      lang={localeConfig[locale].htmlLang}
      data-locale={locale}
    >
      <NoiseOverlay />
      <SubHeader locale={locale} currentPath={path} />

      <main className="article-main">
        <article className="article">
          <Link href={localizePath(locale, "/articles")} className="article-back">
            {ui.backToAll}
          </Link>

          <header className="article-head">
            <div className="article-card-meta">
              <time dateTime={article.date}>{formatDate(article.date, locale)}</time>
              {article.readTime && <span>· {article.readTime}</span>}
            </div>
            <h1 className="display">{article.title}</h1>
          </header>

          <div className="article-body">
            <MDXRemote source={article.content} />
          </div>

          <aside className="article-cta">
            <h2 className="display">
              <RichText parts={ui.ctaTitle} />
            </h2>
            <p>{ui.ctaCopy}</p>
            <p className="article-cta-note">{common.note}</p>
          </aside>
        </article>
      </main>

      <SiteFooter locale={locale} currentPath={path} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
