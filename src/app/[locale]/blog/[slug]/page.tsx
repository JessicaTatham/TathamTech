import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { getPostBySlug, getAllSlugs, getTopicColors } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import TextReveal from "@/components/TextReveal";
import GradientBackground from "@/components/GradientBackground";
import { ArrowLeft } from "lucide-react";

export const revalidate = 3600;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://tathamtech.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: ["Jessica Tatham"],
      ...(post.image ? { images: [{ url: `https://tathamtech.com${post.image}` }] } : {}),
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const t = await getTranslations("blog");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Jessica Tatham",
      url: "https://tathamtech.com/about",
    },
    publisher: {
      "@type": "Organization",
      name: "Tatham Tech",
      url: "https://tathamtech.com",
    },
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative flex min-h-[70vh] items-end pb-20 overflow-hidden">
        <GradientBackground />
        <div className="relative mx-auto w-full max-w-7xl px-8">
          <TextReveal>
            <div className="flex items-center gap-3 mb-8">
              <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${getTopicColors(post.topic).bg} ${getTopicColors(post.topic).text}`}>
                {post.topic}
              </span>
              <span className="text-sm font-medium uppercase tracking-[0.15em] text-background/60">
                {post.readingTime} min read
              </span>
            </div>
          </TextReveal>
          <TextReveal delay={0.15}>
            <h1 className="font-heading text-4xl font-bold leading-[1.1] text-background md:text-6xl max-w-4xl">
              {post.title}
            </h1>
          </TextReveal>
        </div>
      </section>

      {post.image && (
        <section className="bg-background pt-12">
          <div className="mx-auto max-w-3xl px-8">
            <AnimateIn>
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 720px"
                  priority
                />
              </div>
            </AnimateIn>
          </div>
        </section>
      )}

      <section className="bg-background py-20">
        <div className="mx-auto max-w-3xl px-8">
          <AnimateIn>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-secondary hover:text-accent-secondary/80 transition-colors mb-12"
            >
              <ArrowLeft size={14} />
              {t("backToBlog")}
            </Link>
          </AnimateIn>

          <AnimateIn delay={0.1}>
            <article className="blog-content">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </article>
          </AnimateIn>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <GradientBackground />
        <div className="relative mx-auto max-w-7xl px-8 text-center">
          <AnimateIn>
            <h2 className="font-heading text-4xl font-bold text-background md:text-5xl">
              {t("ctaTitle")}
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base text-background/70">
              {t("ctaDescription")}
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-accent-secondary px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all hover:bg-accent-secondary/80 hover:scale-105"
              >
                {t("ctaCta")}
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
