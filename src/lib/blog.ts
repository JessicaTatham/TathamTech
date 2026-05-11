import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogTopic = "AI for Business" | "Web Development" | "Behind the Scenes";

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  seoTitle?: string;
  description: string;
  seoDescription?: string;
  keywords: string[];
  date: string;
  lastModified?: string;
  draft: boolean;
  topic: BlogTopic;
  image: string;
  content: string;
  readingTime: number;
  faq: BlogFAQ[];
}

const BLOG_DIR = path.join(process.cwd(), "content/blog");

const TOPIC_COLORS: Record<BlogTopic, { bg: string; text: string }> = {
  "AI for Business": { bg: "bg-accent-secondary/15", text: "text-accent-secondary" },
  "Web Development": { bg: "bg-primary/15", text: "text-primary" },
  "Behind the Scenes": { bg: "bg-accent/15", text: "text-accent" },
};

export function getTopicColors(topic: BlogTopic) {
  return TOPIC_COLORS[topic] ?? TOPIC_COLORS["Web Development"];
}

function parsePost(filename: string): BlogPost {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
  const { data, content: rawContent } = matter(raw);

  const content = rawContent.replace(/^\s*#\s+.+\n+/, "");

  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.round(wordCount / 200));

  const faq = Array.isArray(data.faq)
    ? data.faq
        .filter(
          (f: unknown): f is BlogFAQ =>
            typeof f === "object" &&
            f !== null &&
            typeof (f as BlogFAQ).question === "string" &&
            typeof (f as BlogFAQ).answer === "string"
        )
        .map((f: BlogFAQ) => ({ question: f.question, answer: f.answer }))
    : [];

  return {
    slug,
    title: data.title ?? slug,
    seoTitle: typeof data.seoTitle === "string" ? data.seoTitle : undefined,
    description: data.description ?? "",
    seoDescription:
      typeof data.seoDescription === "string" ? data.seoDescription : undefined,
    keywords: Array.isArray(data.keywords) ? data.keywords : [],
    date: data.date ? new Date(data.date).toISOString().split("T")[0] : "",
    lastModified: data.lastModified
      ? new Date(data.lastModified).toISOString().split("T")[0]
      : undefined,
    draft: data.draft === true,
    topic: (data.topic as BlogTopic) ?? "Web Development",
    image: typeof data.image === "string" ? data.image : "",
    content,
    readingTime,
    faq,
  };
}

export function getAllPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  return files.map(parsePost).sort((a, b) => b.date.localeCompare(a.date));
}

export function getPublishedPosts(): BlogPost[] {
  const today = new Date().toISOString().split("T")[0];
  return getAllPosts().filter((p) => !p.draft && p.date <= today);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const filename = `${slug}.md`;
  const filepath = path.join(BLOG_DIR, filename);
  if (!fs.existsSync(filepath)) return undefined;
  return parsePost(filename);
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export interface BlogHeading {
  level: 2 | 3;
  text: string;
  slug: string;
}

export function extractHeadings(content: string): BlogHeading[] {
  const lines = content.split("\n");
  const headings: BlogHeading[] = [];
  let inFence = false;
  for (const line of lines) {
    if (line.startsWith("```")) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const match = line.match(/^(#{2,3})\s+(.+?)\s*$/);
    if (!match) continue;
    const level = match[1].length === 2 ? 2 : 3;
    const text = match[2].replace(/[*_`]/g, "").trim();
    headings.push({ level, text, slug: slugifyHeading(text) });
  }
  return headings;
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const posts = getPublishedPosts();
  const current = posts.find((p) => p.slug === slug);
  if (!current) return [];

  const scored = posts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      let score = 0;
      if (p.topic === current.topic) score += 10;
      const sharedKeywords = p.keywords.filter((k) =>
        current.keywords.includes(k)
      ).length;
      score += sharedKeywords * 2;
      return { post: p, score };
    })
    .sort(
      (a, b) =>
        b.score - a.score || b.post.date.localeCompare(a.post.date)
    );

  return scored.slice(0, limit).map((s) => s.post);
}

export function getAllTopics(): { topic: BlogTopic; count: number }[] {
  const posts = getPublishedPosts();
  const counts = new Map<BlogTopic, number>();
  for (const post of posts) {
    counts.set(post.topic, (counts.get(post.topic) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .map(([topic, count]) => ({ topic, count }))
    .sort((a, b) => b.count - a.count);
}
