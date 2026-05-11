import type { BlogHeading } from "@/lib/blog";

export default function BlogTOC({ headings }: { headings: BlogHeading[] }) {
  if (headings.length < 3) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="mb-12 rounded-2xl border border-primary/10 bg-white p-6"
    >
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
        In this post
      </p>
      <ul className="space-y-2">
        {headings.map((h) => (
          <li
            key={`${h.slug}-${h.text}`}
            className={h.level === 3 ? "pl-4" : ""}
          >
            <a
              href={`#${h.slug}`}
              className="text-sm text-foreground/70 hover:text-accent-secondary transition-colors"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
