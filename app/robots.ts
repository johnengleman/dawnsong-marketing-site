import type { MetadataRoute } from "next";

const SITE_URL = "https://sonahabits.com";

/**
 * Allow all crawlers — including AI/agent crawlers (GPTBot, ClaudeBot,
 * PerplexityBot, etc.) — and point them at the sitemap. The marketing site is
 * public by design; we want it indexed and citable.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
