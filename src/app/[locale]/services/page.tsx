import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AnimateIn from "@/components/AnimateIn";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import GradientBackground from "@/components/GradientBackground";
import { Grid3x3, Code, Zap, Globe, MonitorSmartphone, Bot, Wrench, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | Tatham Tech",
  description: "Enterprise solution architecture and small business AI-powered digital solutions.",
};

export default async function Services() {
  const t = await getTranslations("services");

  const enterpriseServices = [
    { title: t("solutionArch"), desc: t("solutionArchDesc"), icon: Grid3x3 },
    { title: t("frontendLead"), desc: t("frontendLeadDesc"), icon: Code },
    { title: t("aiDev"), desc: t("aiDevDesc"), icon: Zap },
    { title: t("platform"), desc: t("platformDesc"), icon: Globe },
  ];

  const packages = [
    {
      name: t("strategySession"),
      description: t("strategyDescription"),
      features: [t("strategyFeature1"), t("strategyFeature2"), t("strategyFeature3"), t("strategyFeature4")],
      icon: Zap,
    },
    {
      name: t("website"),
      description: t("websiteDescription"),
      features: [t("websiteFeature1"), t("websiteFeature2"), t("websiteFeature3"), t("websiteFeature4")],
      icon: MonitorSmartphone,
      featured: true,
    },
    {
      name: t("automation"),
      description: t("automationDescription"),
      features: [t("automationFeature1"), t("automationFeature2"), t("automationFeature3"), t("automationFeature4")],
      icon: Bot,
    },
  ];

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end pb-20 overflow-hidden">
        <GradientBackground />
        <div className="relative mx-auto w-full max-w-7xl px-8">
          <TextReveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-8">{t("tagline")}</p>
          </TextReveal>
          <TextReveal delay={0.15}>
            <h1 className="font-heading text-5xl font-bold leading-[1.05] text-background md:text-7xl max-w-4xl">
              {t("heroLine1")}<br />{t("heroLine2")}
            </h1>
          </TextReveal>
        </div>
      </section>

      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent">{t("enterpriseTagline")}</p>
                <h2 className="mt-4 font-heading text-3xl font-bold text-primary-dark md:text-4xl">
                  {t("enterpriseTitle1")}<br />{t("enterpriseTitle2")}
                </h2>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-foreground/60 max-w-xl">{t("enterpriseDescription")}</p>
                <div className="mt-12 grid gap-px bg-primary/10 sm:grid-cols-2">
                  {enterpriseServices.map((s) => (
                    <div key={s.title} className="bg-background p-8">
                      <s.icon size={20} className="text-accent mb-3" />
                      <h3 className="font-heading text-base font-semibold text-primary-dark">{s.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/60">{s.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-12">
                  <p className="text-sm text-foreground/60">{t("enterpriseScoped")}</p>
                  <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-secondary hover:text-accent-secondary/70 transition-colors">
                    {t("discussProject")} <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-8"><div className="h-px bg-primary/10" /></div>

      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent-secondary">{t("smallBusinessTagline")}</p>
            <h2 className="mt-4 font-heading text-3xl font-bold text-primary-dark md:text-4xl max-w-xl">{t("smallBusinessTitle")}</h2>
          </AnimateIn>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <AnimateIn key={pkg.name} delay={i * 0.1}>
                <div className={`group relative h-full rounded-2xl border p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${pkg.featured ? "border-accent-secondary bg-white" : "border-primary/10 bg-white"}`}>
                  <pkg.icon size={24} className="text-accent-secondary mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-primary-dark">{pkg.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/60">{pkg.description}</p>
                  <ul className="mt-8 space-y-3 border-t border-primary/5 pt-8">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-foreground/60">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />{f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-accent-secondary hover:text-accent-secondary/70 transition-colors">
                      {t("getStarted")} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn>
            <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between rounded-2xl border border-primary/10 bg-white p-10">
              <div className="flex items-start gap-4">
                <Wrench size={24} className="text-accent-secondary mt-1 shrink-0" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-primary-dark">{t("retainer")}</h3>
                  <p className="mt-1 text-sm text-foreground/60 max-w-md">{t("retainerDescription")}</p>
                </div>
              </div>
              <div className="mt-6 md:mt-0">
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-accent-secondary hover:text-accent-secondary/70 transition-colors">
                  {t("getStarted")} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-primary-dark py-32">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <AnimateIn>
            <h2 className="font-heading text-4xl font-bold text-background md:text-5xl">{t("notSure")}</h2>
            <p className="mx-auto mt-6 max-w-md text-base text-background/70">{t("notSureDescription")}</p>
            <div className="mt-10">
              <MagneticButton>
                <Link href="/contact" className="inline-block rounded-full bg-accent-secondary px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all hover:bg-accent-secondary/80 hover:scale-105">
                  {t("bookSession")}
                </Link>
              </MagneticButton>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
