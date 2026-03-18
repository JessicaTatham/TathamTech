import type { Metadata } from "next";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  metadataBase: new URL("https://tathamtech.com"),
  title: "Tatham Tech | Freelance Web Developer & AI-Powered Digital Solutions",
  description:
    "Hire a freelance web developer with over a decade of experience. Custom web development, AI automation, and enterprise solution architecture. React, Next.js, and TypeScript expert. Fortune 500 experience at Bell Canada and Wells Fargo.",
  alternates: {
    canonical: "https://tathamtech.com",
  },
};
import AnimateIn from "@/components/AnimateIn";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import GradientBackground from "@/components/GradientBackground";
import AnimatedStats from "@/components/AnimatedStats";
import { Layers, Cpu, ArrowRight, MessageSquare, Sparkles, Users, Zap } from "lucide-react";

const clients = [
  "Bell Canada",
  "Wells Fargo",
  "Sofar Sounds",
  "Taulia / SAP",
];

export default async function Home() {
  const t = await getTranslations("home");

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-end pb-20 md:pb-32 overflow-hidden">
        <GradientBackground />
        <div className="relative mx-auto w-full max-w-7xl px-8">
          <TextReveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-8">
              {t("tagline")}
            </p>
          </TextReveal>
          <TextReveal delay={0.15}>
            <h1 className="font-heading text-5xl font-bold leading-[1.05] text-background md:text-8xl lg:text-9xl">
              {t("heroLine1")}
              <br />
              {t("heroLine2")}
              <br />
              {t("heroLine3")}
            </h1>
          </TextReveal>
          <AnimateIn delay={0.5} y={20}>
            <p className="mt-10 max-w-lg text-base leading-relaxed text-background/70 md:text-lg">
              {t("heroDescription")}
            </p>
          </AnimateIn>
          <AnimateIn delay={0.7} y={20}>
            <div className="mt-12">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] text-background hover:text-accent-secondary transition-colors"
                >
                  {t("startConversation")}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
            </div>
          </AnimateIn>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="h-12 w-[1px] bg-background/20" />
        </div>
      </section>

      {/* Clients */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <AnimateIn x={-30} y={0}>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50 whitespace-nowrap">
                {t("trustedBy")}
              </p>
            </AnimateIn>
            <div className="flex flex-wrap gap-x-12 gap-y-4">
              {clients.map((name, i) => (
                <AnimateIn key={name} delay={0.15 + i * 0.12} x={-40} y={0}>
                  <span className="font-heading text-lg font-medium text-foreground/40 md:text-xl inline-block">
                    {name}
                  </span>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two pillars */}
      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4">
              {t("whatIDo")}
            </p>
            <h2 className="font-heading text-4xl font-bold text-primary-dark md:text-6xl max-w-3xl">
              {t("twoDisciplines")}<br />{t("onePerspective")}
            </h2>
          </AnimateIn>

          <div className="mt-20 grid gap-px bg-primary/10 md:grid-cols-2">
            <AnimateIn className="bg-background p-10 md:p-16">
              <Layers size={32} className="text-accent-secondary/60 mb-6" />
              <h3 className="font-heading text-2xl font-semibold text-primary-dark">
                {t("enterprise")}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/60 max-w-md">
                {t("enterpriseDescription")}
              </p>
              <ul className="mt-8 space-y-3">
                {[t("enterpriseService1"), t("enterpriseService2"), t("enterpriseService3"), t("enterpriseService4")].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/60"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary/50" />{item}</li>
                ))}
              </ul>
            </AnimateIn>

            <AnimateIn delay={0.15} className="bg-background p-10 md:p-16">
              <Cpu size={32} className="text-accent-secondary/60 mb-6" />
              <h3 className="font-heading text-2xl font-semibold text-primary-dark">
                {t("smallBusiness")}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/60 max-w-md">
                {t("smallBusinessDescription")}
              </p>
              <ul className="mt-8 space-y-3">
                {[t("smallBusinessService1"), t("smallBusinessService2"), t("smallBusinessService3"), t("smallBusinessService4")].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground/60"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-secondary/50" />{item}</li>
                ))}
              </ul>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* AI for your business */}
      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent-secondary mb-4">
              {t("aiSectionTagline")}
            </p>
            <h2 className="font-heading text-4xl font-bold text-primary-dark md:text-5xl max-w-3xl">
              {t("aiSectionTitle")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground/60 max-w-2xl">
              {t("aiSectionDescription")}
            </p>
          </AnimateIn>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {[
              { title: t("aiExample1Title"), description: t("aiExample1Description"), icon: Sparkles },
              { title: t("aiExample2Title"), description: t("aiExample2Description"), icon: Users },
              { title: t("aiExample3Title"), description: t("aiExample3Description"), icon: MessageSquare },
              { title: t("aiExample4Title"), description: t("aiExample4Description"), icon: Zap },
            ].map((example, i) => (
              <AnimateIn key={example.title} delay={i * 0.1}>
                <div className="flex gap-5 rounded-xl border border-primary/10 bg-background p-8">
                  <example.icon size={24} className="text-accent-secondary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-primary-dark">{example.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/60">{example.description}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={0.4}>
            <div className="mt-12">
              <p className="text-base text-foreground/60">{t("aiCta")}</p>
              <MagneticButton>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-secondary hover:text-accent-secondary/70 transition-colors"
                >
                  Book a Session <ArrowRight size={14} />
                </Link>
              </MagneticButton>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-background border-b border-primary/5">
        <AnimatedStats />
      </section>

      {/* Statement */}
      <section className="relative py-32 overflow-hidden">
        <GradientBackground />
        <div className="relative mx-auto max-w-7xl px-8">
          <AnimateIn>
            <blockquote className="font-heading text-3xl font-light leading-snug text-background/90 md:text-5xl max-w-4xl">
              &ldquo;{t("quote")}&rdquo;
            </blockquote>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-background/60">
              {t("quoteAttribution")}
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <AnimateIn>
            <h2 className="font-heading text-4xl font-bold text-primary-dark md:text-6xl">
              {t("letsBuild")}
            </h2>
            <p className="mx-auto mt-6 max-w-md text-base text-foreground/60">
              {t("ctaDescription")}
            </p>
            <div className="mt-10">
              <MagneticButton>
                <Link
                  href="/work"
                  className="inline-block rounded-full bg-accent-secondary px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all hover:bg-accent-secondary/80 hover:scale-105"
                >
                  {t("viewWork")}
                </Link>
              </MagneticButton>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
