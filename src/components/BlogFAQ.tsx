import type { BlogFAQ as BlogFAQType } from "@/lib/blog";

export default function BlogFAQ({ faq }: { faq: BlogFAQType[] }) {
  if (faq.length === 0) return null;

  return (
    <section className="mt-16 rounded-2xl border border-primary/10 bg-white p-8">
      <h2 className="font-heading text-2xl font-semibold text-primary-dark mb-6">
        Frequently asked questions
      </h2>
      <div className="space-y-6">
        {faq.map((item, i) => (
          <div
            key={i}
            className="border-b border-primary/10 pb-6 last:border-b-0 last:pb-0"
          >
            <h3 className="font-heading text-base font-semibold text-primary-dark mb-2">
              {item.question}
            </h3>
            <p className="text-sm leading-relaxed text-foreground/70">
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
