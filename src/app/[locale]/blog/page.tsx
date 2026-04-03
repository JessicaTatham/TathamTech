import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPublishedPosts, getAllTopics, getTopicColors } from "@/lib/blog";
import AnimateIn from "@/components/AnimateIn";
import TextReveal from "@/components/TextReveal";
import GradientBackground from "@/components/GradientBackground";
import BlogFilter from "@/components/BlogFilter";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Blog: AI, Web Development & Small Business Insights",
  description:
    "Practical advice on AI for small business, custom web development, freelance web developer insights, and how to use AI to grow your business. Written by Jessica Tatham.",
  alternates: {
    canonical: "https://tathamtech.com/blog",
  },
};

export default async function Blog() {
  const t = await getTranslations("blog");
  const posts = getPublishedPosts();
  const topics = getAllTopics();

  const serializedPosts = posts.map((post) => ({
    slug: post.slug,
    title: post.title,
    description: post.description,
    topic: post.topic,
    readingTime: post.readingTime,
    image: post.image,
    topicColors: getTopicColors(post.topic),
  }));

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end pb-20 overflow-hidden">
        <GradientBackground />
        <div className="relative mx-auto w-full max-w-7xl px-8">
          <TextReveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-8">
              {t("tagline")}
            </p>
          </TextReveal>
          <TextReveal delay={0.15}>
            <h1 className="font-heading text-5xl font-bold leading-[1.05] text-background md:text-7xl max-w-4xl">
              {t("heroLine1")}
              <br />
              {t("heroLine2")}
            </h1>
          </TextReveal>
        </div>
      </section>

      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <BlogFilter
              posts={serializedPosts}
              topics={topics}
              translations={{
                all: t("all"),
                readMore: t("readMore"),
                minRead: t("minRead"),
                aboutAuthor: t("aboutAuthor"),
                aboutAuthorBio: t("aboutAuthorBio"),
                topicsTitle: t("topicsTitle"),
                bookCta: t("bookCta"),
                bookCtaDescription: t("bookCtaDescription"),
                bookCtaButton: t("bookCtaButton"),
              }}
            />
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
