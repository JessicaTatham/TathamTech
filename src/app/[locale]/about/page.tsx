import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import AnimateIn from "@/components/AnimateIn";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import GradientBackground from "@/components/GradientBackground";
import { Rocket, Eye, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Jessica Tatham, Senior Contract React Developer & Solution Architect",
  description:
    "Senior contract React and Next.js developer with 10+ years at Bell Canada, Wells Fargo, and Fortune 500 teams. Available for staff augmentation, contract development, and freelance web projects.",
  alternates: {
    canonical: "https://tathamtech.com/about",
  },
};

const skills = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js", "AWS",
  "Tailwind CSS", "Contentstack", "WordPress", "Redux", "AI Tools",
  "REST APIs", "Git", "Agile / Scrum", "SEO", "Team Leadership",
];

export default async function About() {
  const t = await getTranslations("about");

  const values = [
    { title: t("shipTitle"), description: t("shipDescription"), icon: Rocket },
    { title: t("clarityTitle"), description: t("clarityDescription"), icon: Eye },
    { title: t("bothSidesTitle"), description: t("bothSidesDescription"), icon: Users },
  ];

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end pb-20 overflow-hidden">
        <GradientBackground variant="warm" />
        <div className="relative mx-auto w-full max-w-7xl px-8">
          <h1 className="sr-only">About Jessica Tatham, Senior Frontend Developer and Solution Architect</h1>
          <TextReveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary-dark mb-8">{t("tagline")}</p>
          </TextReveal>
          <TextReveal delay={0.15}>
            <h2 className="font-heading text-5xl font-bold leading-[1.05] text-white md:text-7xl max-w-4xl">
              {t("heroLine1")}<br />{t("heroLine2")}
            </h2>
          </TextReveal>
        </div>
      </section>

      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid gap-12 md:grid-cols-[5fr_7fr] md:gap-20 items-start">
            <AnimateIn>
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden relative">
                  <Image
                    src="/jessica-headshot.jpeg"
                    alt="Jessica Tatham, senior frontend developer and freelance web developer"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    priority
                  />
                </div>
                {/* Decorative accent bar */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-accent-secondary/20 -z-10" />
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-accent/20 -z-10" />
              </div>
            </AnimateIn>

            <AnimateIn delay={0.15}>
              <div>
                <h2 className="font-heading text-4xl font-bold text-primary-dark md:text-5xl">
                  {t("greeting")}
                </h2>
                <div className="mt-10 space-y-6 text-foreground/60 text-base leading-relaxed">
                  <p>{t("bio1")}</p>
                  <p>{t("bio2")}</p>
                  <p className="text-lg font-medium text-accent-secondary">{t("bio3")}</p>
                  <p className="text-foreground/50 text-sm italic">{t("bio4")}</p>
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4">{t("toolkitTagline")}</p>
                <h2 className="font-heading text-3xl font-bold text-primary-dark">
                  {t("toolkitTitle1")}<br />{t("toolkitTitle2")}
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-primary/10 px-5 py-2.5 text-sm text-foreground/60 transition-colors hover:border-accent-secondary hover:text-accent-secondary">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4">{t("approachTagline")}</p>
          </AnimateIn>
          <div className="mt-12 grid gap-px bg-primary/10 md:grid-cols-3">
            {values.map((value, i) => (
              <AnimateIn key={value.title} delay={i * 0.1}>
                <div className="bg-background p-10 md:p-14 h-full">
                  <value.icon size={24} className="text-accent-secondary mb-4" />
                  <h3 className="font-heading text-lg font-semibold text-primary-dark">{value.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/60">{value.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 overflow-hidden">
        <GradientBackground />
        <div className="relative mx-auto max-w-7xl px-8 text-center">
          <AnimateIn>
            <h2 className="font-heading text-4xl font-bold text-background md:text-5xl">{t("wantToWork")}</h2>
            <p className="mx-auto mt-6 max-w-md text-base text-background/70">{t("wantToWorkDescription")}</p>
            <div className="mt-10">
              <MagneticButton>
                <Link href="/contact" className="inline-block rounded-full bg-accent-secondary px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all hover:bg-accent-secondary/80 hover:scale-105">
                  {t("wantToWorkCta")}
                </Link>
              </MagneticButton>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
