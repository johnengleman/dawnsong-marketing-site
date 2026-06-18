import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { Icon } from "../../components/Icon";
import NoiseOverlay from "../../components/NoiseOverlay";
import { SiteFooter } from "../../components/SiteFooter";
import { SubHeader } from "../../components/SubHeader";
import {
  formatDate,
  getArticle,
  getArticleSlugs,
} from "../../lib/articles";

const appStoreUrl =
  "https://apps.apple.com/us/app/habit-tracker-sona/id6758967586";
const SITE_URL = "https://daybreakhabits.com";

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found — Daybreak" };

  const url = `/articles/${article.slug}`;
  return {
    title: `${article.title} — Daybreak`,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: "article",
      publishedTime: article.date,
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
  const article = getArticle(slug);
  if (!article) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Organization", name: "Daybreak" },
    publisher: { "@type": "Organization", name: "Daybreak" },
    mainEntityOfPage: `${SITE_URL}/articles/${article.slug}`,
  };

  return (
    <div className="min-h-screen overflow-x-clip">
      <NoiseOverlay />
      <SubHeader />

      <main className="article-main">
        <article className="article">
          <Link href="/articles" className="article-back">
            ← All articles
          </Link>

          <header className="article-head">
            <div className="article-card-meta">
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              {article.readTime && <span>· {article.readTime}</span>}
            </div>
            <h1 className="display">{article.title}</h1>
          </header>

          <div className="article-body">
            <MDXRemote source={article.content} />
          </div>

          <aside className="article-cta">
            <h2 className="display">
              Build a life you <em>keep coming back to.</em>
            </h2>
            <p>
              Daybreak is the habit app with no streaks to break. A missed day
              is a dip in your score, not a reset to zero.
            </p>
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noreferrer"
              className="cta-button"
              aria-label="Download Daybreak on the App Store"
            >
              <Icon icon="simple-icons:apple" className="h-[18px] w-[18px]" />
              <span>Download on the App Store</span>
            </a>
            <p className="article-cta-note">
              Free to download · iOS now, Android coming soon
            </p>
          </aside>
        </article>
      </main>

      <SiteFooter />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
