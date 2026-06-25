import { getAllArticles } from "../lib/articles";
import { localeConfig, localizePath, SITE_URL, siteLocales } from "../lib/locales";
import { homeContent } from "../lib/siteContent";

/**
 * /llms-full.txt — full localized article text in clean Markdown, grouped by
 * locale, so retrieval bots can ingest Sona's public content in one fetch.
 */
export const dynamic = "force-static";

export function GET() {
  const header = `# Sona: full localized content

> Sona is a beautiful, forgiving habit and routine app for iOS (Android coming soon).
> It replaces the punishing streak that resets to zero with a consistency score
> that absorbs missed days, and it turns each goal into a personal AI-painted world.

Site: ${SITE_URL}
Locales: ${siteLocales.map((locale) => localeConfig[locale].htmlLang).join(", ")}
`;

  const body = siteLocales
    .map((locale) => {
      const articles = getAllArticles(locale);
      const home = homeContent[locale];
      const articleText = articles
        .map((a) => {
          return `\n\n---\n\n# ${a.title}\n\nLocale: ${localeConfig[locale].htmlLang}\n_${a.date} · ${a.readTime}_\nURL: ${SITE_URL}${localizePath(locale, `/articles/${a.slug}`)}\n\n${a.content.trim()}`;
        })
        .join("");

      return `\n\n## ${localeConfig[locale].label}\n\nHome: ${SITE_URL}${localizePath(locale, "/")}\nTitle: ${home.metadata.title}\nDescription: ${home.metadata.description}${articleText}`;
    })
    .join("");

  return new Response(header + body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
