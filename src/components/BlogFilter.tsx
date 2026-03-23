"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import type { BlogTopic } from "@/lib/blog";

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  topic: BlogTopic;
  readingTime: number;
  image: string;
  topicColors: { bg: string; text: string };
}

interface TopicCount {
  topic: BlogTopic;
  count: number;
}

interface BlogFilterProps {
  posts: BlogPost[];
  topics: TopicCount[];
  translations: {
    all: string;
    readMore: string;
    minRead: string;
    aboutAuthor: string;
    aboutAuthorBio: string;
    topicsTitle: string;
    bookCta: string;
    bookCtaDescription: string;
    bookCtaButton: string;
  };
}

const TOPIC_ICON: Record<BlogTopic, string> = {
  "AI for Business": "Sparkles",
  "Web Development": "Code",
  "Behind the Scenes": "Coffee",
};

export default function BlogFilter({ posts, topics, translations }: BlogFilterProps) {
  const [active, setActive] = useState<BlogTopic | null>(null);

  const filtered = active ? posts.filter((p) => p.topic === active) : posts;

  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
      {/* Post grid */}
      <div className="grid gap-8 md:grid-cols-2 order-2 lg:order-1">
        {filtered.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}` as never}
            className="group block h-full rounded-2xl bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1 overflow-hidden"
          >
            {post.image && (
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${post.topicColors.bg} ${post.topicColors.text}`}>
                  {post.topic}
                </span>
                <span className="text-xs text-foreground/40">
                  {post.readingTime} {translations.minRead}
                </span>
              </div>
              <h2 className="font-heading text-xl font-semibold text-primary-dark group-hover:text-accent-secondary transition-colors">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60 line-clamp-3">
                {post.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent-secondary">
                {translations.readMore}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Sidebar - right side */}
      <aside className="order-1 lg:order-2">
        <div className="flex flex-col gap-6 lg:sticky lg:top-28">
          {/* About the author */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/jessica-headshot.jpeg"
                alt="Jessica Tatham"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="font-heading font-semibold text-sm text-primary-dark">Jessica Tatham</p>
                <p className="text-xs text-foreground/50">Tatham Tech</p>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-foreground/60">
              {translations.aboutAuthorBio}
            </p>
          </div>

          {/* Topic filters */}
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="font-heading font-semibold text-sm text-primary-dark mb-4">
              {translations.topicsTitle}
            </h3>
            <div className="flex flex-col gap-1.5">
              <button
                onClick={() => setActive(null)}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-all text-left ${
                  active === null
                    ? "bg-primary-dark text-white"
                    : "text-foreground/60 hover:text-foreground hover:bg-background"
                }`}
              >
                {translations.all} ({posts.length})
              </button>
              {topics.map(({ topic, count }) => (
                <button
                  key={topic}
                  onClick={() => setActive(active === topic ? null : topic)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-all text-left ${
                    active === topic
                      ? "bg-primary-dark text-white"
                      : "text-foreground/60 hover:text-foreground hover:bg-background"
                  }`}
                >
                  {topic} ({count})
                </button>
              ))}
            </div>
          </div>

          {/* CTA card */}
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-dark to-accent-secondary/80" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-secondary/20 rounded-full blur-2xl -translate-y-8 translate-x-8" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/20 rounded-full blur-2xl translate-y-6 -translate-x-6" />
            <div className="relative p-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 mb-4">
                <Sparkles size={12} className="text-accent" />
                <span className="text-xs font-medium text-white/80">Free consultation</span>
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                {translations.bookCta}
              </h3>
              <p className="text-sm leading-relaxed text-white/60 mb-5">
                {translations.bookCtaDescription}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent-secondary px-5 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-white transition-all hover:bg-accent-secondary/80 hover:scale-105 shadow-lg shadow-accent-secondary/25"
              >
                {translations.bookCtaButton}
                <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
