import { getAllArticles } from "../lib/articles";

/**
 * /llms-full.txt — the full text of every article in clean Markdown at one
 * URL, so a retrieval bot can ingest Daybreak's actual content in a single
 * fetch (complements the short summary at /llms.txt). Generated at build time.
 */
export const dynamic = "force-static";

export function GET() {
  const articles = getAllArticles();

  const header = `# Daybreak: full content

> Daybreak is a beautiful, forgiving habit app for iOS (Android coming soon).
> No streaks to break: a missed day is a dip in your consistency score, not a
> reset to zero. Each goal becomes a personal AI-painted world that holds its
> habits. Below is the full text of every published article.

Site: https://daybreakhabits.com
`;

  const body = articles
    .map((a) => {
      return `\n\n---\n\n# ${a.title}\n\n_${a.date} · ${a.readTime}_\nURL: https://daybreakhabits.com/articles/${a.slug}\n\n${a.content.trim()}`;
    })
    .join("");

  return new Response(header + body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
