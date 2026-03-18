import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

const clients = [
  "Bell Canada",
  "Wells Fargo",
  "Sofar Sounds",
  "Taulia / SAP",
];

export default function Home() {
  return (
    <>
      {/* Hero — full viewport, dramatic type */}
      <section className="relative flex min-h-screen items-end bg-primary-dark pb-20 md:pb-32">
        <div className="mx-auto w-full max-w-7xl px-8">
          <TextReveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent mb-8">
              AI-Powered Digital Solutions
            </p>
          </TextReveal>
          <TextReveal delay={0.15}>
            <h1 className="font-heading text-5xl font-bold leading-[1.05] text-background md:text-8xl lg:text-9xl">
              Strategy.
              <br />
              Architecture.
              <br />
              Execution.
            </h1>
          </TextReveal>
          <AnimateIn delay={0.5} y={20}>
            <p className="mt-10 max-w-lg text-base leading-relaxed text-background/50 md:text-lg">
              I help businesses move faster — from Fortune 500 platforms to
              AI-powered solutions for growing companies.
            </p>
          </AnimateIn>
          <AnimateIn delay={0.7} y={20}>
            <div className="mt-12">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] text-background hover:text-accent transition-colors"
                >
                  Start a conversation
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    &rarr;
                  </span>
                </Link>
              </MagneticButton>
            </div>
          </AnimateIn>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="h-12 w-[1px] bg-background/20" />
        </div>
      </section>

      {/* Clients marquee */}
      <section className="bg-background py-16 border-b border-primary/5">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/50 whitespace-nowrap">
                Trusted by
              </p>
              <div className="flex flex-wrap gap-x-12 gap-y-4">
                {clients.map((name) => (
                  <span
                    key={name}
                    className="font-heading text-lg font-medium text-foreground/40 md:text-xl"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Two pillars */}
      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent mb-4">
              What I Do
            </p>
            <h2 className="font-heading text-4xl font-bold text-primary-dark md:text-6xl max-w-3xl">
              Two disciplines.
              <br />
              One perspective.
            </h2>
          </AnimateIn>

          <div className="mt-20 grid gap-px bg-primary/10 md:grid-cols-2">
            <AnimateIn className="bg-background p-10 md:p-16">
              <span className="font-heading text-7xl font-bold text-primary/10 md:text-8xl">
                01
              </span>
              <h3 className="mt-6 font-heading text-2xl font-semibold text-primary-dark">
                Enterprise Architecture
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/50 max-w-md">
                I embed with engineering teams at scale — designing systems,
                leading frontend development, and shipping production code
                faster with AI. Complex platforms, delivered simply.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Solution architecture & system design",
                  "Frontend technical leadership",
                  "AI-accelerated development",
                  "CMS & platform implementations",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-xs uppercase tracking-wider text-foreground/50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </AnimateIn>

            <AnimateIn delay={0.15} className="bg-background p-10 md:p-16">
              <span className="font-heading text-7xl font-bold text-accent/20 md:text-8xl">
                02
              </span>
              <h3 className="mt-6 font-heading text-2xl font-semibold text-primary-dark">
                Small Business &amp; AI
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-foreground/50 max-w-md">
                Enterprise-grade thinking, applied to businesses of every size.
                Modern websites, workflow automation, and digital strategy — all
                powered by AI for faster results at a fraction of the cost.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Website design & development",
                  "AI workflow automation",
                  "Digital strategy & audits",
                  "Ongoing retainer support",
                ].map((item) => (
                  <li
                    key={item}
                    className="text-xs uppercase tracking-wider text-foreground/50"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="bg-primary-dark py-32">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <blockquote className="font-heading text-3xl font-light leading-snug text-background/80 md:text-5xl max-w-4xl">
              &ldquo;I&apos;ve spent a decade inside engineering teams at
              companies like Bell&nbsp;Canada and Wells&nbsp;Fargo. I bring that
              same rigor to every project — whether it&apos;s a corporate
              platform or a founder&apos;s first website.&rdquo;
            </blockquote>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-background/60">
              Jessica Tatham — Founder, Tatham Tech
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <AnimateIn>
            <h2 className="font-heading text-4xl font-bold text-primary-dark md:text-6xl">
              Let&apos;s build something.
            </h2>
            <p className="mx-auto mt-6 max-w-md text-foreground/50">
              Whether you need a senior architect for your team or AI-powered
              solutions for your business.
            </p>
            <div className="mt-10">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-block rounded-full bg-primary-dark px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-background transition-all hover:bg-primary hover:scale-105"
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
