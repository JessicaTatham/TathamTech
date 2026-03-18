import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import AnimateIn from "@/components/AnimateIn";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import { Layers, Cpu, ArrowRight } from "lucide-react";

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
      <section className="relative flex min-h-screen items-end bg-primary-dark pb-20 md:pb-32">
        <div className="mx-auto w-full max-w-7xl px-8">
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
                  className="group inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] text-background hover:text-accent transition-colors"
                >
                  {t("startConversation")}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
            </div>
          </AnimateIn>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="h-12 w-[1px] bg-background/20" />
        </div>
      </section>

      {/* Clients */}
      <section className="bg-background py-16 border-b border-primary/5">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-foreground/50 whitespace-nowrap">
                {t("trustedBy")}
              </p>
              <div className="flex flex-wrap gap-x-12 gap-y-4">
                {clients.map((name) => (
                  <span key={name} className="font-heading text-lg font-medium text-foreground/40 md:text-xl">
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
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4">
              {t("whatIDo")}
            </p>
            <h2 className="font-heading text-4xl font-bold text-primary-dark md:text-6xl max-w-3xl">
              {t("twoDisciplines")}<br />{t("onePerspective")}
            </h2>
          </AnimateIn>

          <div className="mt-20 grid gap-px bg-primary/10 md:grid-cols-2">
            <AnimateIn className="bg-background p-10 md:p-16">
              <Layers size={32} className="text-primary/40 mb-6" />
              <h3 className="font-heading text-2xl font-semibold text-primary-dark">
                {t("enterprise")}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/60 max-w-md">
                {t("enterpriseDescription")}
              </p>
              <ul className="mt-8 space-y-3">
                {[t("enterpriseService1"), t("enterpriseService2"), t("enterpriseService3"), t("enterpriseService4")].map((item) => (
                  <li key={item} className="text-sm text-foreground/60">{item}</li>
                ))}
              </ul>
            </AnimateIn>

            <AnimateIn delay={0.15} className="bg-background p-10 md:p-16">
              <Cpu size={32} className="text-accent/40 mb-6" />
              <h3 className="font-heading text-2xl font-semibold text-primary-dark">
                {t("smallBusiness")}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-foreground/60 max-w-md">
                {t("smallBusinessDescription")}
              </p>
              <ul className="mt-8 space-y-3">
                {[t("smallBusinessService1"), t("smallBusinessService2"), t("smallBusinessService3"), t("smallBusinessService4")].map((item) => (
                  <li key={item} className="text-sm text-foreground/60">{item}</li>
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
                  href="/contact"
                  className="inline-block rounded-full bg-primary-dark px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-background transition-all hover:bg-primary hover:scale-105"
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
