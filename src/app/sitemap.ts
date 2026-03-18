import type { MetadataRoute } from "next";

const BASE_URL = "https://tathamtech.com";

const pages = ["", "/about", "/services", "/work", "/contact"];
const locales = ["en", "fr", "es", "af"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    // Default locale (en) doesn't use prefix
    const url = `${BASE_URL}${page}`;
    const alternates: Record<string, string> = {};

    for (const locale of locales) {
      alternates[locale] =
        locale === "en"
          ? `${BASE_URL}${page}`
          : `${BASE_URL}/${locale}${page}`;
    }

    entries.push({
      url,
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1 : page === "/services" ? 0.9 : 0.8,
      alternates: { languages: alternates },
    });
  }

  return entries;
}
