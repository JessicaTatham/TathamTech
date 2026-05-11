import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/blog";

const BASE_URL = "https://tathamtech.com";

const pages = ["", "/about", "/services", "/work", "/contact", "/blog"];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const page of pages) {
    entries.push({
      url: `${BASE_URL}${page}`,
      lastModified: new Date(),
      changeFrequency:
        page === "" || page === "/blog" ? "weekly" : "monthly",
      priority:
        page === ""
          ? 1
          : page === "/services"
            ? 0.9
            : page === "/blog"
              ? 0.7
              : 0.8,
    });
  }

  const posts = getPublishedPosts();
  for (const post of posts) {
    entries.push({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  return entries;
}
