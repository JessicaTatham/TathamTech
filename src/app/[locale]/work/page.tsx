import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import AnimateIn from "@/components/AnimateIn";
import TextReveal from "@/components/TextReveal";
import GradientBackground from "@/components/GradientBackground";
import TestimonialCarousel from "@/components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "Portfolio: Enterprise & Small Business Web Projects",
  description:
    "Web development portfolio. Custom websites, website redesigns, and enterprise platforms built for Bell Canada, Wells Fargo, Sofar Sounds, and dozens of small business clients. Freelance web developer Jessica Tatham.",
  alternates: {
    canonical: "https://tathamtech.com/work",
  },
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
    { name: "La Rue PR", type: "Website Rebuild", description: t("laRuePR"), image: "/work/LaRuePR.png", alt: "La Rue PR custom website redesign for public relations firm" },
    { name: "Miscarriage Movement", type: "Community Platform", description: t("miscarriageMovement"), image: "/work/MiscarriageMovement.png", alt: "Miscarriage Movement community platform website design" },
    { name: "The Mother Chapter", type: "Community Platform", description: t("motherChapter"), image: "/work/MotherChapter.png", alt: "The Mother Chapter community platform and membership website" },
    { name: "Chris Ryan Fitness", type: "Website", description: t("chrisRyan"), image: "/work/ChrisTyan.png", alt: "Chris Ryan Fitness coaching website design" },
    { name: "Notion Consulting", type: "Website", description: t("notion"), image: "/work/NotionConsulting.png", alt: "Notion Consulting professional services website" },
    { name: "Charell Star", type: "Website", description: t("charell"), image: "/work/CharellStar.png", alt: "Charell Star personal brand website design" },
    { name: "Steve Chiger", type: "Website and Retainer", description: t("steveChiger"), image: "/work/SteveChiger.png", alt: "Steve Chiger website design and ongoing retainer project" },
    { name: "Design Bureaux", type: "Website", description: t("designBureaux"), image: "/work/DesignBureaux.png", alt: "Design Bureaux creative agency website" },
    { name: "Transactis", type: "Website", description: t("transactis"), image: "/work/Transactis.png", alt: "Transactis fintech company website development" },
  ];

  return (
    <>
      <section className="relative flex min-h-[70vh] items-end pb-20 overflow-hidden">
        <GradientBackground />
        <div className="relative mx-auto w-full max-w-7xl px-8">
          <h1 className="sr-only">Web Development Portfolio: Enterprise and Small Business Projects</h1>
          <TextReveal>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-8">{t("tagline")}</p>
          </TextReveal>
          <TextReveal delay={0.15}>
            <h2 className="font-heading text-5xl font-bold leading-[1.05] text-background md:text-7xl max-w-4xl">
              {t("heroLine1")}<br />{t("heroLine2")}
            </h2>
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
                        alt={`${project.company} logo — enterprise web development client`}
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
                      alt={project.alt}
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
          <div className="mt-12">
            <TestimonialCarousel
              testimonials={[
                { quote: t("testimonialLindsay"), name: "Lindsay Tigar", title: t("testimonialLindsayTitle"), image: "/work/LindsayTigarHeadshot.jpg" },
                { quote: t("testimonialEmilia"), name: "Emilia Mello", title: t("testimonialEmiliaTitle"), image: "/work/EmiliaMello.jpeg" },
                { quote: t("testimonialSusan"), name: "Susan Gold", title: t("testimonialSusanTitle"), image: null },
                { quote: t("testimonialLori"), name: "Lori Robinson", title: t("testimonialLoriTitle"), image: "/work/LoriRobinson.jpg" },
              ]}
            />
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Tatham Tech",
              url: "https://tathamtech.com",
              description: "Freelance web developer offering custom web development, AI automation, and enterprise solution architecture.",
              founder: { "@type": "Person", name: "Jessica Tatham" },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Lindsay Tigar" },
                  reviewBody: "As someone who is easily intimidated by anything-and-everything pertaining to web development, working with Jessica was like a sigh of relief. She took my ideas and easily brought them to life, taking my once dull portfolio site and turning it into an impressive body of work that I love sharing far and wide.",
                  reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Emilia Mello" },
                  reviewBody: "Jessica really listened to what I needed and wanted. She brought with her deep expertise, creativity, and the willingness to try new things. She remained ever professional and quick to respond to any concern I might have. I would highly recommend working with Jessica.",
                  reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Susan Gold" },
                  reviewBody: "My site was a mish mash mess before Jess came through with an amazing re-design. I am so comfortable now with the site overall and happily flaunt it with confidence.",
                  reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Lori Robinson" },
                  reviewBody: "My blog was in dire need of a redo but I kept putting it off until I found Jessica. With her, the process of making a more modern site was seamless. She is kind, helpful, available, reliable, and has a great sense of style.",
                  reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: 5,
                reviewCount: 4,
                bestRating: 5,
              },
            }),
          }}
        />
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
