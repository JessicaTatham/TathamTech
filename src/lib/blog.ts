import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogTopic = "AI for Business" | "Web Development" | "Behind the Scenes";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  date: string;
  draft: boolean;
  topic: BlogTopic;
  image: string;
  content: string;
  readingTime: number;
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
  const { data, content } = matter(raw);

  const wordCount = content.split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.round(wordCount / 200));

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    keywords: Array.isArray(data.keywords) ? data.keywords : [],
    date: data.date ? new Date(data.date).toISOString().split("T")[0] : "",
    draft: data.draft === true,
    topic: (data.topic as BlogTopic) ?? "Web Development",
    image: typeof data.image === "string" ? data.image : "",
    content,
    readingTime,
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
