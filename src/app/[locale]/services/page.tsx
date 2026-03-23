import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AnimateIn from "@/components/AnimateIn";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";
import GradientBackground from "@/components/GradientBackground";
import { Grid3x3, Code, Zap, Globe, MonitorSmartphone, Bot, Wrench, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Development & AI Automation Services",
  description:
    "Web development services for enterprise and small business. Solution architecture, frontend development, custom website design, responsive web design, AI automation, and ecommerce development. Hire a freelance web developer.",
  alternates: {
    canonical: "https://tathamtech.com/services",
  },
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
        <GradientBackground variant="warm" />
        <div className="relative mx-auto w-full max-w-7xl px-8">
          <h1 className="sr-only">Web Development, AI Automation and Enterprise Architecture Services</h1>
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

      <section className="bg-white py-32">
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

      {/* FAQ */}
      <section className="bg-background py-32">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-4">{t("faqTitle")}</p>
          </AnimateIn>
          <div className="mt-12 space-y-0 border-t border-primary/10">
            {[
              { q: t("faq1Q"), a: t("faq1A") },
              { q: t("faq2Q"), a: t("faq2A") },
              { q: t("faq3Q"), a: t("faq3A") },
              { q: t("faq4Q"), a: t("faq4A") },
              { q: t("faq5Q"), a: t("faq5A") },
              { q: t("faq6Q"), a: t("faq6A") },
            ].map((faq, i) => (
              <AnimateIn key={i} delay={i * 0.05}>
                <details className="group border-b border-primary/10 py-6">
                  <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-primary-dark md:text-lg">
                    {faq.q}
                    <span className="ml-4 shrink-0 text-accent-secondary transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-foreground/60 max-w-2xl">{faq.a}</p>
                </details>
              </AnimateIn>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                { "@type": "Question", name: "How much does a custom website cost?", acceptedAnswer: { "@type": "Answer", text: "Small business websites typically range from $3,000 to $10,000 depending on the number of pages, custom functionality, and whether you need ecommerce, a content management system, or integrations with other tools. Enterprise engagements are scoped individually based on team size, timeline, and technical complexity. The best way to get an accurate number is to book a strategy session — I'll assess what you actually need and give you a clear quote with no surprises." } },
                { "@type": "Question", name: "How long does it take to build a website?", acceptedAnswer: { "@type": "Answer", text: "It depends on the project. A straightforward small business website typically takes 4 to 8 weeks from kickoff to launch — that includes custom design, development, content setup, mobile optimization, and basic SEO. More complex projects like ecommerce sites, platforms with custom integrations, or website redesigns with content migration can take 8 to 12 weeks. Enterprise projects vary based on scope and team structure." } },
                { "@type": "Question", name: "What is AI automation for small business?", acceptedAnswer: { "@type": "Answer", text: "AI automation replaces repetitive manual tasks with intelligent systems that run on their own. For small businesses, that could mean automatic email follow-ups, AI-generated social media content, smart scheduling, automated bookkeeping and invoice processing, or chatbots that handle customer questions 24/7. The goal isn't to replace you — it's to give you back hours every week so you can focus on the parts of your business that actually need you." } },
                { "@type": "Question", name: "Do I need a website redesign?", acceptedAnswer: { "@type": "Answer", text: "If your site is slow, not mobile-friendly, hard to update, or just isn't converting visitors into customers — it's probably time. Other signs: you're embarrassed to send people to it, it doesn't show up on Google, or you can't make simple changes without calling your developer. A modern, responsive website redesign isn't just a visual refresh — it's faster load times, better SEO, a mobile-first experience, and a site you actually own and can update yourself." } },
                { "@type": "Question", name: "How can AI help my business?", acceptedAnswer: { "@type": "Answer", text: "More than you probably realize. Most business owners spend hours on tasks that AI can handle in minutes — writing emails, creating social posts, organizing files, following up with leads, updating spreadsheets. In a strategy session, I audit your entire workflow and show you exactly where AI fits in. Then I build the systems so it actually happens. Past clients have saved 10+ hours a week after automating just two or three processes." } },
                { "@type": "Question", name: "What's the difference between a freelance web developer and an agency?", acceptedAnswer: { "@type": "Answer", text: "With an agency, you talk to an account manager who talks to a project manager who talks to the developer. With me, you talk to the person building your site. That means faster turnarounds, no miscommunication, and no overhead costs getting passed to you. I bring over a decade of experience at companies like Bell Canada and Wells Fargo — the same caliber of work you'd get from a top agency, without the layers and the price tag." } },
              ],
            }),
          }}
        />
      </section>

      {/* Cross-links */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-8">
          <AnimateIn>
            <div className="grid gap-6 md:grid-cols-2">
              <Link
                href="/work"
                className="group flex items-center justify-between rounded-xl border border-primary/10 bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent-secondary/30"
              >
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-secondary">{t("portfolioLinkTagline")}</p>
                  <p className="mt-2 font-heading text-lg font-semibold text-primary-dark">{t("portfolioLinkTitle")}</p>
                </div>
                <ArrowRight size={20} className="text-accent-secondary shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/blog"
                className="group flex items-center justify-between rounded-xl border border-primary/10 bg-background p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-accent-secondary/30"
              >
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent-secondary">{t("blogLinkTagline")}</p>
                  <p className="mt-2 font-heading text-lg font-semibold text-primary-dark">{t("blogLinkTitle")}</p>
                </div>
                <ArrowRight size={20} className="text-accent-secondary shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
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
