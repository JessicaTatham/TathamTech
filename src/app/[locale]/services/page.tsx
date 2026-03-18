import Link from "next/link";
import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "Services | Tatham Tech",
  description:
    "Enterprise solution architecture, AI-powered websites, workflow automation, and digital strategy for businesses of every size.",
};

const packages = [
  {
    name: "Strategy Session",
    price: "$500",
    note: "one-time",
    description:
      "A focused deep-dive into your technology, workflows, and opportunities. Walk away with a clear, prioritized action plan.",
    features: [
      "90-minute strategy call",
      "Full tech & workflow audit",
      "AI opportunity mapping",
      "Prioritized action plan",
    ],
  },
  {
    name: "Website",
    price: "From $3k",
    note: "project",
    description:
      "A modern, high-performance website built with AI — designed to convert, optimized to rank, delivered in weeks.",
    features: [
      "Custom design & development",
      "Mobile-first, SEO-ready",
      "Content management system",
      "2-3 week delivery",
    ],
    featured: true,
  },
  {
    name: "AI Automation",
    price: "From $1.5k",
    note: "project",
    description:
      "Identify what you're doing manually that AI can handle — then build the systems to make it happen.",
    features: [
      "Workflow audit & mapping",
      "Custom automation setup",
      "Tool integration",
      "Training & handoff",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end bg-primary-dark pb-20">
        <div className="mx-auto w-full max-w-7xl px-8">
          <TextReveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent mb-8">
              Services
            </p>
          </TextReveal>
          <TextReveal delay={0.15}>
            <h1 className="font-heading text-5xl font-bold leading-[1.05] text-background md:text-7xl max-w-4xl">
              The right solution
              <br />
              at every scale.
            </h1>
          </TextReveal>
        </div>
      </section>

      {/* Enterprise */}
      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
                  Enterprise
                </p>
                <h2 className="mt-4 font-heading text-3xl font-bold text-primary-dark md:text-4xl">
                  Architecture
                  <br />
                  &amp; Engineering
                </h2>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-foreground/50 max-w-xl">
                  I join your team as a senior technical resource — designing
                  systems, leading frontend development, and using AI to
                  accelerate delivery. The kind of thinking that comes from
                  building inside Fortune 500 engineering teams.
                </p>
                <div className="mt-12 grid gap-px bg-primary/10 sm:grid-cols-2">
                  {[
                    {
                      title: "Solution Architecture",
                      desc: "System design and technical strategy aligned with business objectives.",
                    },
                    {
                      title: "Frontend Leadership",
                      desc: "Leading teams, establishing patterns, driving technical decisions.",
                    },
                    {
                      title: "AI-Accelerated Dev",
                      desc: "Shipping production code faster without compromising quality.",
                    },
                    {
                      title: "Platform & CMS",
                      desc: "Headless CMS architecture, multi-language platforms, cloud deployment.",
                    },
                  ].map((s) => (
                    <div key={s.title} className="bg-background p-8">
                      <h3 className="font-heading text-sm font-semibold text-primary-dark">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-foreground/50">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <p className="text-xs text-foreground/50">
                    Enterprise engagements are scoped individually.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary-dark hover:text-accent transition-colors"
                  >
                    Discuss your project &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-8">
        <div className="h-px bg-primary/10" />
      </div>

      {/* Small Business */}
      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-secondary">
              Small Business
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-primary-dark md:text-4xl max-w-xl">
              Enterprise thinking, applied to your business.
            </h2>
          </AnimateIn>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <AnimateIn key={pkg.name} delay={i * 0.1}>
                <div
                  className={`group relative h-full rounded-2xl border p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    pkg.featured
                      ? "border-accent bg-white"
                      : "border-primary/10 bg-white"
                  }`}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-heading text-lg font-semibold text-primary-dark">
                      {pkg.name}
                    </h3>
                    <span className="text-xs text-foreground/50">{pkg.note}</span>
                  </div>
                  <p className="mt-2 font-heading text-3xl font-bold text-primary-dark">
                    {pkg.price}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/50">
                    {pkg.description}
                  </p>
                  <ul className="mt-8 space-y-3 border-t border-primary/5 pt-8">
                    {pkg.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-sm text-foreground/50"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Link
                      href="/contact"
                      className="text-sm font-medium text-primary-dark hover:text-accent transition-colors"
                    >
                      Get started &rarr;
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          {/* Retainer */}
          <AnimateIn>
            <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between rounded-2xl border border-primary/10 bg-white p-10">
              <div>
                <h3 className="font-heading text-lg font-semibold text-primary-dark">
                  Monthly Retainer
                </h3>
                <p className="mt-1 text-sm text-foreground/50 max-w-md">
                  Ongoing support, maintenance, and optimization. Your
                  technology partner on call.
                </p>
              </div>
              <div className="mt-6 md:mt-0 md:text-right">
                <p className="font-heading text-2xl font-bold text-primary-dark">
                  From $120<span className="text-sm font-normal text-foreground/50">/mo</span>
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark py-32">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <AnimateIn>
            <h2 className="font-heading text-4xl font-bold text-background md:text-5xl">
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-6 max-w-md text-background/60">
              Book a strategy session. We&apos;ll look at where you are, where
              you want to be, and the fastest way to get there.
            </p>
            <div className="mt-10">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-accent px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary-dark transition-all hover:bg-accent-secondary hover:text-background hover:scale-105"
                >
                  Book a Session
                </Link>
              </MagneticButton>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
