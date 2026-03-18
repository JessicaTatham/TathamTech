import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import AnimateIn from "@/components/AnimateIn";
import TextReveal from "@/components/TextReveal";
import GradientBackground from "@/components/GradientBackground";
import { Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Work | Tatham Tech",
  description: "Select projects and experience across enterprise and small business.",
};

export default async function Work() {
  const t = await getTranslations("work");

  const enterprise = [
    { company: "Bell Canada", role: t("bellRole"), description: t("bellDescription"), tech: ["Next.js", "TypeScript", "Contentstack", "AWS", "Tailwind"], logo: "/logos/bell.svg" },
    { company: "Wells Fargo", role: t("wellsRole"), description: t("wellsDescription"), tech: ["React", "Redux", "Enterprise UI", "Component Systems"], logo: "/logos/wellsfargo.svg" },
    { company: "Sofar Sounds", role: t("sofarRole"), description: t("sofarDescription"), tech: ["React", "Node.js", "Ecommerce", "Heroku"], logo: "/logos/sofar.png" },
    { company: "Taulia", note: t("tauliaNote"), role: t("tauliaRole"), description: t("tauliaDescription"), tech: ["React", "Java", "Groovy", "AWS"], logo: "/logos/taulia.png" },
  ];

  const smallBusiness = [
    { name: "Miscarriage Movement", type: "Community Platform", description: t("miscarriageMovement"), image: "/work/MiscarriageMovement.png" },
    { name: "The Mother Chapter", type: "Community Platform", description: t("motherChapter"), image: "/work/MotherChapter.png" },
    { name: "Chris Ryan Fitness", type: "Website", description: t("chrisRyan"), image: "/work/ChrisTyan.png" },
    { name: "Notion Consulting", type: "Website", description: t("notion"), image: "/work/NotionConsulting.png" },
    { name: "Charell Star", type: "Website", description: t("charell"), image: "/work/CharellStar.png" },
    { name: "Steve Chiger", type: "Website and Retainer", description: t("steveChiger"), image: "/work/SteveChiger.png" },
    { name: "Design Bureaux", type: "Website", description: t("designBureaux"), image: "/work/DesignBureaux.png" },
    { name: "Lindsay Tigar", type: "Website", description: t("lindsayTigar"), image: "/work/LindsayTigar.png" },
    { name: "Transactis", type: "Website", description: t("transactis"), image: "/work/Transactis.png" },
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
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4">{t("enterpriseTagline")}</p>
          </AnimateIn>
          <div className="mt-12 space-y-0 border-t border-primary/10">
            {enterprise.map((project, i) => (
              <AnimateIn key={project.company} delay={i * 0.05}>
                <div className="group border-b border-primary/10 py-12 md:py-16">
                  <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
                    <div>
                      <Image
                        src={project.logo}
                        alt={project.company}
                        width={160}
                        height={60}
                        className="h-12 w-auto object-contain"
                      />
                      {project.note && <p className="mt-3 text-sm text-accent">{project.note}</p>}
                      <p className="mt-3 text-sm text-foreground/60">{project.role}</p>
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
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {smallBusiness.map((project, i) => (
              <AnimateIn key={project.name} delay={i * 0.05}>
                <div className="group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-8">
                    <span className="text-sm font-medium uppercase tracking-[0.2em] text-accent">{project.type}</span>
                    <h3 className="mt-2 font-heading text-lg font-semibold text-primary-dark">{project.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/60">{project.description}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4">{t("testimonialsTagline")}</p>
          </AnimateIn>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              { quote: t("testimonialLindsay"), name: "Lindsay Tigar", title: t("testimonialLindsayTitle"), image: "/work/LindsayTigarHeadshot.jpg" },
              { quote: t("testimonialEmilia"), name: "Emilia Mello", title: t("testimonialEmiliaTitle"), image: "/work/EmiliaMello.jpeg" },
              { quote: t("testimonialSusan"), name: "Susan Gold", title: t("testimonialSusanTitle"), image: null },
              { quote: t("testimonialLori"), name: "Lori Robinson", title: t("testimonialLoriTitle"), image: "/work/LoriRobinson.jpg" },
            ].map((testimonial, i) => (
              <AnimateIn key={testimonial.name} delay={i * 0.1}>
                <div className="rounded-xl bg-white p-10 h-full">
                  <Quote size={20} className="text-accent-secondary mb-4" />
                  <p className="text-base leading-relaxed text-foreground/60 italic">{testimonial.quote}</p>
                  <div className="mt-6 border-t border-primary/10 pt-6 flex items-center gap-4">
                    {testimonial.image ? (
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover w-12 h-12"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary-dark">
                        {testimonial.name.split(" ").map(n => n[0]).join("")}
                      </div>
                    )}
                    <div>
                      <p className="font-heading text-sm font-semibold text-primary-dark">{testimonial.name}</p>
                      <p className="text-sm text-foreground/50">{testimonial.title}</p>
                    </div>
                  </div>
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
              <Link href="/contact" className="inline-block rounded-full bg-accent-secondary px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all hover:bg-accent-secondary/80 hover:scale-105">
                {t("startConversation")}
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
