import Link from "next/link";
import type { Metadata } from "next";
import AnimateIn from "@/components/AnimateIn";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

export const metadata: Metadata = {
  title: "About | Tatham Tech",
  description:
    "Over a decade building software — from fintech startups to Fortune 500 platforms. The person behind Tatham Tech.",
};

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "AWS",
  "Tailwind CSS",
  "Contentstack",
  "WordPress",
  "Redux",
  "AI Tools",
  "REST APIs",
  "Git",
  "Agile / Scrum",
  "SEO",
  "Team Leadership",
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end bg-primary-dark pb-20">
        <div className="mx-auto w-full max-w-7xl px-8">
          <TextReveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent mb-8">
              About
            </p>
          </TextReveal>
          <TextReveal delay={0.15}>
            <h1 className="font-heading text-5xl font-bold leading-[1.05] text-background md:text-7xl max-w-4xl">
              Engineer. Leader.
              <br />
              Problem-solver.
            </h1>
          </TextReveal>
        </div>
      </section>

      {/* Bio */}
      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-20 md:grid-cols-2">
            {/* Photo */}
            <AnimateIn>
              <div className="aspect-[3/4] rounded-2xl bg-primary/5 flex items-center justify-center">
                <p className="text-sm text-foreground/60">Photo</p>
              </div>
            </AnimateIn>

            {/* Story */}
            <AnimateIn delay={0.15}>
              <div>
                <h2 className="font-heading text-4xl font-bold text-primary-dark md:text-5xl">
                  Hi, I&apos;m Jessica.
                </h2>
                <div className="mt-10 space-y-6 text-foreground/50 leading-relaxed">
                  <p>
                    I&apos;ve spent over a decade building software — starting
                    in fintech, moving through a global music platform, leading
                    frontend teams at Wells Fargo, and now architecting
                    enterprise platforms for Bell Canada.
                  </p>
                  <p>
                    Along the way, I spent eight years running my own web
                    development business, helping entrepreneurs and small
                    business owners — public relations agencies, authors, bakers,
                    influencers, journalists, mothers —
                    bring their ideas online. I&apos;ve mentored developers,
                    led engineering teams, and learned that the best technology
                    is the kind that disappears into the background and just
                    works.
                  </p>
                  <p>
                    Tatham Tech is where all of that comes together.
                    Enterprise-level architecture. Small business empathy.
                    AI-powered everything.
                  </p>
                  <p className="text-foreground/50 text-sm italic">
                    My first career was in animal science — turns out diagnosing
                    livestock and debugging code aren&apos;t that different. In
                    both cases, something&apos;s broken, nobody can tell you why,
                    and the deadline was yesterday.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent mb-4">
                  Toolkit
                </p>
                <h2 className="font-heading text-3xl font-bold text-primary-dark">
                  Technologies
                  <br />
                  &amp; expertise
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-primary/10 px-5 py-2.5 text-sm text-foreground/50 transition-colors hover:border-accent hover:text-primary-dark"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent mb-4">
              Approach
            </p>
          </AnimateIn>
          <div className="mt-12 grid gap-px bg-primary/10 md:grid-cols-3">
            {[
              {
                title: "Ship, don't spin",
                description:
                  "AI means faster delivery. I use it to cut timelines, not corners. You get production-quality work in a fraction of the time.",
              },
              {
                title: "Clarity over complexity",
                description:
                  "The best solutions are the simplest ones. I design systems that are easy to understand, maintain, and build on.",
              },
              {
                title: "Both sides of the table",
                description:
                  "I've been the engineer inside the Fortune 500, and the freelancer across from the founder. That perspective changes how I build.",
              },
            ].map((value, i) => (
              <AnimateIn key={value.title} delay={i * 0.1}>
                <div className="bg-background p-10 md:p-14 h-full">
                  <h3 className="font-heading text-lg font-semibold text-primary-dark">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/60">
                    {value.description}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-dark py-32">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <AnimateIn>
            <h2 className="font-heading text-4xl font-bold text-background md:text-5xl">
              Want to work together?
            </h2>
            <p className="mx-auto mt-6 max-w-md text-background/60">
              I&apos;m always open to interesting projects and new connections.
            </p>
            <div className="mt-10">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-accent px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary-dark transition-all hover:bg-accent-secondary hover:text-background hover:scale-105"
                >
                  Get in Touch
                </Link>
              </MagneticButton>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
