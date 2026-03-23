import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/blog";

const BASE_URL = "https://tathamtech.com";

const pages = ["", "/about", "/services", "/work", "/contact", "/blog"];
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
      changeFrequency: page === "" ? "weekly" : page === "/blog" ? "weekly" : "monthly",
      priority: page === "" ? 1 : page === "/services" ? 0.9 : page === "/blog" ? 0.7 : 0.8,
      alternates: { languages: alternates },
    });
  }

  // Add individual blog post URLs
  const posts = getPublishedPosts();
  for (const post of posts) {
    const blogUrl = `${BASE_URL}/blog/${post.slug}`;
    const alternates: Record<string, string> = {};

    for (const locale of locales) {
      alternates[locale] =
        locale === "en"
          ? blogUrl
          : `${BASE_URL}/${locale}/blog/${post.slug}`;
    }

    entries.push({
      url: blogUrl,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
      alternates: { languages: alternates },
    });
  }

  return entries;
}
