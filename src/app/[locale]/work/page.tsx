import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AnimateIn from "@/components/AnimateIn";
import TextReveal from "@/components/TextReveal";
import { Building2, Music, Landmark, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Work | Tatham Tech",
  description: "Select projects and experience across enterprise and small business.",
};

export default async function Work() {
  const t = await getTranslations("work");

  const enterprise = [
    { company: "Bell Canada", role: t("bellRole"), description: t("bellDescription"), tech: ["Next.js", "TypeScript", "Contentstack", "AWS", "Tailwind"], icon: Building2 },
    { company: "Wells Fargo", role: t("wellsRole"), description: t("wellsDescription"), tech: ["React", "Redux", "Enterprise UI", "Component Systems"], icon: Landmark },
    { company: "Sofar Sounds", role: t("sofarRole"), description: t("sofarDescription"), tech: ["React", "Node.js", "Ecommerce", "Heroku"], icon: Music },
    { company: "Taulia", note: t("tauliaNote"), role: t("tauliaRole"), description: t("tauliaDescription"), tech: ["React", "Java", "Groovy", "AWS"], icon: TrendingUp },
  ];

  const smallBusiness = [
    { name: "Miscarriage Movement", type: "Community Platform", description: t("miscarriageMovement") },
    { name: "The Mother Chapter", type: "Community Platform", description: t("motherChapter") },
    { name: "Chris Ryan Fitness", type: "Website", description: t("chrisRyan") },
    { name: "Notion Consulting", type: "Website", description: t("notion") },
    { name: "Charell Star", type: "Website", description: t("charell") },
    { name: "Steve Chiger", type: "Website and Retainer", description: t("steveChiger") },
  ];

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end bg-primary-dark pb-20">
        <div className="mx-auto w-full max-w-7xl px-8">
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
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4">{t("enterpriseTagline")}</p>
          </AnimateIn>
          <div className="mt-12 space-y-0 border-t border-primary/10">
            {enterprise.map((project, i) => (
              <AnimateIn key={project.company} delay={i * 0.05}>
                <div className="group border-b border-primary/10 py-12 md:py-16">
                  <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
                    <div>
                      <div className="flex items-center gap-3">
                        <project.icon size={20} className="text-accent" />
                        <h3 className="font-heading text-2xl font-bold text-primary-dark md:text-3xl">{project.company}</h3>
                      </div>
                      {project.note && <p className="mt-1 ml-8 text-sm text-accent">{project.note}</p>}
                      <p className="mt-2 ml-8 text-sm text-foreground/60">{project.role}</p>
                    </div>
                    <div>
                      <p className="text-base leading-relaxed text-foreground/60 max-w-lg">{project.description}</p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.tech.map((tech) => (
                          <span key={tech} className="text-sm text-foreground/50">{tech}</span>
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

      <section className="bg-white py-32">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent-secondary mb-4">{t("smallBusinessTagline")}</p>
            <p className="max-w-xl text-foreground/60 text-base leading-relaxed">{t("smallBusinessDescription")}</p>
          </AnimateIn>
          <div className="mt-16 grid gap-px bg-primary/10 md:grid-cols-2 lg:grid-cols-3">
            {smallBusiness.map((project, i) => (
              <AnimateIn key={project.name} delay={i * 0.05}>
                <div className="bg-white p-10 h-full">
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent">{project.type}</span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-primary-dark">{project.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/60">{project.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-32">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <AnimateIn>
            <h2 className="font-heading text-4xl font-bold text-background md:text-5xl">{t("yourProject")}</h2>
            <div className="mt-10">
              <Link href="/contact" className="inline-block rounded-full bg-background px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary-dark transition-all hover:bg-accent hover:scale-105">
                {t("startConversation")}
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
