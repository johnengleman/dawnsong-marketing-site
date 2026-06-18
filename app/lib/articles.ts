import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

/**
 * Filesystem-backed article store. Articles are MDX files in /content/articles
 * with frontmatter. Everything here runs at build time (Vercel, full Node), so
 * the site stays fully static — no runtime file access. To publish a new
 * article, drop a .mdx file in /content/articles and push.
 */

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

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

function readSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

function parse(slug: string): Article {
  const raw = fs.readFileSync(path.join(ARTICLES_DIR, `${slug}.mdx`), "utf8");
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
export function getAllArticles(): Article[] {
  return readSlugs()
    .map(parse)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Lightweight metadata for the index, newest first. */
export function getAllArticleMeta(): ArticleMeta[] {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return getAllArticles().map(({ content, ...meta }) => meta);
}

export function getArticle(slug: string): Article | null {
  if (!readSlugs().includes(slug)) return null;
  return parse(slug);
}

export function getArticleSlugs(): string[] {
  return readSlugs();
}

/** Human-friendly date, e.g. "June 17, 2026". */
export function formatDate(iso: string): string {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
