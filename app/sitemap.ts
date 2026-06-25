import type { MetadataRoute } from "next";

import { getArticleSlugs } from "./lib/articles";
import { localizePath, SITE_URL, siteLocales } from "./lib/locales";

const staticPaths = ["/", "/articles", "/privacy", "/terms", "/support"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = siteLocales.flatMap((locale) =>
    staticPaths.map((path) => ({
      url: `${SITE_URL}${localizePath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
    })),
  );

  const articleRoutes = siteLocales.flatMap((locale) =>
    getArticleSlugs(locale).map((slug) => ({
      url: `${SITE_URL}${localizePath(locale, `/articles/${slug}`)}`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  );

  return [...staticRoutes, ...articleRoutes];
}
