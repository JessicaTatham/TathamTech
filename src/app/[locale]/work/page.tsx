import Link from "next/link";
import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import TextReveal from "@/components/TextReveal";

export const metadata: Metadata = {
  title: "Work | Tatham Tech",
  description:
    "Select projects and experience — Bell Canada, Wells Fargo, Sofar Sounds, and small business clients.",
};

const enterprise = [
  {
    company: "Bell Canada",
    role: "Solution Architect",
    description:
      "Architecting a bilingual corporate communications platform for one of Canada's largest telecommunications companies. Next.js, headless CMS, AWS — enterprise-scale, delivered with AI-accelerated workflows.",
    tech: ["Next.js", "TypeScript", "Contentstack", "AWS", "Tailwind"],
  },
  {
    company: "Wells Fargo",
    role: "Frontend Tech Lead",
    description:
      "Led frontend development across multiple projects at one of the world's largest financial institutions. Built reusable, data-driven component systems. Promoted from contractor to tech lead within the year.",
    tech: ["React", "Redux", "Enterprise UI", "Component Systems"],
  },
  {
    company: "Sofar Sounds",
    role: "Senior Engineer & Tech Lead",
    description:
      "Built the ecommerce and event management platforms for a global live music community. Ticket purchasing, artist management, venue coordination — the full stack.",
    tech: ["React", "Node.js", "Ecommerce", "Heroku"],
  },
  {
    company: "Taulia",
    note: "Acquired by SAP",
    role: "Software Engineer",
    description:
      "Full-stack development on supply chain finance software. Standalone React applications, agile teams, and the kind of fintech complexity that teaches you to build things right.",
    tech: ["React", "Java", "Groovy", "AWS"],
  },
];

const smallBusiness = [
  {
    name: "Miscarriage Movement",
    type: "Community Platform",
    description:
      "A digital home for a community supporting those who've experienced pregnancy loss. Website and community platform built for connection and healing.",
  },
  {
    name: "The Mother Chapter",
    type: "Community Platform",
    description:
      "Helping moms navigate postpartum identity — a community platform designed with care, built for growth.",
  },
  {
    name: "Chris Ryan Fitness",
    type: "Website",
    description:
      "A conversion-focused website for a fitness coaching business. Professional presence, clear path to booking.",
  },
  {
    name: "Notion Consulting",
    type: "Website",
    description:
      "Clean, professional web presence for a consulting firm. Built to establish credibility and generate leads.",
  },
  {
    name: "Charell Star",
    type: "Website",
    description:
      "Custom website for a creative professional. Personal brand, brought to life online.",
  },
  {
    name: "Steve Chiger",
    type: "Website & Retainer",
    description:
      "Professional website with ongoing monthly support. Long-term partnership, continuously maintained.",
  },
];

export default function Work() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end bg-primary-dark pb-20">
        <div className="mx-auto w-full max-w-7xl px-8">
          <TextReveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent mb-8">
              Work
            </p>
          </TextReveal>
          <TextReveal delay={0.15}>
            <h1 className="font-heading text-5xl font-bold leading-[1.05] text-background md:text-7xl max-w-4xl">
              A decade of building
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
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent mb-4">
              Enterprise
            </p>
          </AnimateIn>

          <div className="mt-12 space-y-0 border-t border-primary/10">
            {enterprise.map((project, i) => (
              <AnimateIn key={project.company} delay={i * 0.05}>
                <div className="group border-b border-primary/10 py-12 md:py-16">
                  <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-primary-dark md:text-3xl">
                        {project.company}
                      </h3>
                      {project.note && (
                        <p className="mt-1 text-xs text-accent">{project.note}</p>
                      )}
                      <p className="mt-2 text-sm text-foreground/50">
                        {project.role}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm leading-relaxed text-foreground/50 max-w-lg">
                        {project.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs uppercase tracking-wider text-foreground/50"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Small Business */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-secondary mb-4">
              Small Business
            </p>
            <p className="max-w-xl text-foreground/60 text-sm leading-relaxed">
              8 years of helping entrepreneurs and small businesses build their
              digital presence — from community platforms to professional
              websites.
            </p>
          </AnimateIn>

          <div className="mt-16 grid gap-px bg-primary/10 md:grid-cols-2 lg:grid-cols-3">
            {smallBusiness.map((project, i) => (
              <AnimateIn key={project.name} delay={i * 0.05}>
                <div className="bg-white p-10 h-full">
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                    {project.type}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-primary-dark">
                    {project.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                    {project.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-32">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <AnimateIn>
            <h2 className="font-heading text-4xl font-bold text-background md:text-5xl">
              Your project, next.
            </h2>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block rounded-full bg-background px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary-dark transition-all hover:bg-accent hover:scale-105"
              >
                Start a Conversation
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
