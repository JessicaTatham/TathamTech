import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import { getTopicColors } from "@/lib/blog";

export default function RelatedPosts({
  posts,
  heading = "Keep reading",
}: {
  posts: BlogPost[];
  heading?: string;
}) {
  if (posts.length === 0) return null;

  return (
    <section className="bg-white py-20 border-t border-primary/5">
      <div className="mx-auto max-w-7xl px-8">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-12">
          {heading}
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => {
            const colors = getTopicColors(post.topic);
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}` as never}
                className="group block h-full rounded-2xl bg-white shadow-sm transition-all hover:shadow-md hover:-translate-y-1 overflow-hidden"
              >
                {post.image && (
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${colors.bg} ${colors.text}`}
                    >
                      {post.topic}
                    </span>
                    <span className="text-xs text-foreground/40">
                      {post.readingTime} min
                    </span>
                  </div>
                  <h3 className="font-heading text-base font-semibold text-primary-dark group-hover:text-accent-secondary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-secondary">
                    Read
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
