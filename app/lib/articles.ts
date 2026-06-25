import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

import {
  defaultLocale,
  localeConfig,
  siteLocales,
  type SiteLocale,
} from "./locales";

/**
 * Filesystem-backed localized article store. Articles live in
 * /content/articles/<locale>/<slug>.mdx and are read at build time.
 */

const ARTICLES_ROOT = path.join(process.cwd(), "content", "articles");

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string; // ISO yyyy-mm-dd
  readTime: string;
};

export type Article = ArticleMeta & {
  content: string;
};

function articlesDir(locale: SiteLocale): string {
  return path.join(ARTICLES_ROOT, locale);
}

function readSlugs(locale: SiteLocale): string[] {
  const dir = articlesDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

function assertLocaleCoverage(locale: SiteLocale) {
  if (locale === defaultLocale) return;

  const defaultSlugs = readSlugs(defaultLocale).sort();
  const localeSlugs = readSlugs(locale).sort();
  const missing = defaultSlugs.filter((slug) => !localeSlugs.includes(slug));

  if (missing.length > 0) {
    throw new Error(
      `Missing localized articles for ${locale}: ${missing.join(", ")}`,
    );
  }
}

function parse(locale: SiteLocale, slug: string): Article {
  assertLocaleCoverage(locale);

  const filePath = path.join(articlesDir(locale), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Article not found for ${locale}: ${slug}`);
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    excerpt: String(data.excerpt ?? data.description ?? ""),
    date: String(data.date ?? ""),
    readTime: String(data.readTime ?? ""),
    content,
  };
}

/** All articles, newest first. */
export function getAllArticles(locale: SiteLocale = defaultLocale): Article[] {
  assertLocaleCoverage(locale);
  return readSlugs(locale)
    .map((slug) => parse(locale, slug))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Lightweight metadata for the index, newest first. */
export function getAllArticleMeta(
  locale: SiteLocale = defaultLocale,
): ArticleMeta[] {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return getAllArticles(locale).map(({ content, ...meta }) => meta);
}

export function getArticle(
  locale: SiteLocale,
  slug: string,
): Article | null {
  if (!readSlugs(locale).includes(slug)) return null;
  return parse(locale, slug);
}

export function getArticleSlugs(locale: SiteLocale = defaultLocale): string[] {
  assertLocaleCoverage(locale);
  return readSlugs(locale);
}

export function getAllLocalizedArticleParams() {
  return siteLocales.flatMap((locale) =>
    getArticleSlugs(locale).map((slug) => ({ locale, slug })),
  );
}

/** Human-friendly localized date. */
export function formatDate(
  iso: string,
  locale: SiteLocale = defaultLocale,
): string {
  if (!iso) return "";
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(localeConfig[locale].htmlLang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
