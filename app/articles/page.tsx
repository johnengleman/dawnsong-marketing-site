import type { Metadata } from "next";
import Link from "next/link";

import NoiseOverlay from "../components/NoiseOverlay";
import { SiteFooter } from "../components/SiteFooter";
import { SubHeader } from "../components/SubHeader";
import { formatDate, getAllArticleMeta } from "../lib/articles";

export const metadata: Metadata = {
  title: "Articles — Daybreak",
  description:
    "Calm, honest writing on habits, consistency, and building a life you keep coming back to — from the team behind Daybreak.",
  alternates: { canonical: "/articles" },
  openGraph: {
    title: "Articles — Daybreak",
    description:
      "Calm, honest writing on habits, consistency, and building a life you keep coming back to.",
    url: "/articles",
    type: "website",
  },
};

export default function ArticlesIndex() {
  const articles = getAllArticleMeta();

  return (
    <div className="min-h-screen overflow-x-clip">
      <NoiseOverlay />
      <SubHeader />

      <main className="articles-main">
        <header className="articles-hero">
          <p className="eyebrow eyebrow-center">Field notes</p>
          <h1 className="display">
            On habits, gently <em>reconsidered.</em>
          </h1>
          <p className="lede">
            Honest writing on consistency, rest, and building a life you keep
            coming back to. No hustle, no shame — just the ideas Daybreak is
            built on.
          </p>
        </header>

        <section className="articles-list wrap" aria-label="All articles">
          {articles.length === 0 ? (
            <p className="articles-empty">New writing is on the way.</p>
          ) : (
            <ul>
              {articles.map((a) => (
                <li key={a.slug}>
                  <Link href={`/articles/${a.slug}`} className="article-card">
                    <div className="article-card-meta">
                      <time dateTime={a.date}>{formatDate(a.date)}</time>
                      {a.readTime && <span>· {a.readTime}</span>}
                    </div>
                    <h2>{a.title}</h2>
                    <p>{a.excerpt}</p>
                    <span className="article-card-more">
                      Read the article →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
