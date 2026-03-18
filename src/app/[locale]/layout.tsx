import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BASE_URL = "https://tathamtech.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: "Tatham Tech | AI-Powered Digital Solutions",
    fr: "Tatham Tech | Solutions numériques propulsées par l'IA",
    es: "Tatham Tech | Soluciones digitales impulsadas por IA",
    af: "Tatham Tech | KI-aangedrewe digitale oplossings",
  };

  const descriptions: Record<string, string> = {
    en: "Enterprise solution architecture and AI-powered websites for small businesses. Over a decade of experience building software for Fortune 500 companies and entrepreneurs. Based in the US, working globally.",
    fr: "Architecture de solutions d'entreprise et sites web propulsés par l'IA pour les PME. Plus d'une décennie d'expérience en développement logiciel.",
    es: "Arquitectura de soluciones empresariales y sitios web impulsados por IA para pequeñas empresas. Más de una década de experiencia en desarrollo de software.",
    af: "Ondernemingsoplossingsargitektuur en KI-aangedrewe webwerwe vir klein besighede. Meer as 'n dekade se ervaring in sagteware-ontwikkeling.",
  };

  const alternates: Record<string, string> = {};
  for (const loc of routing.locales) {
    alternates[loc] = loc === "en" ? BASE_URL : `${BASE_URL}/${loc}`;
  }

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: titles[locale] || titles.en,
      template: "%s | Tatham Tech",
    },
    description: descriptions[locale] || descriptions.en,
    keywords: [
      "freelance web developer",
      "hire web developer",
      "custom web development",
      "web development services",
      "small business website",
      "website redesign",
      "responsive web design",
      "AI-powered websites",
      "AI for small business",
      "AI automation",
      "solution architecture",
      "enterprise architecture",
      "frontend developer",
      "React developer",
      "Next.js developer",
      "TypeScript developer",
      "ecommerce website development",
      "custom website design",
      "SEO-friendly website",
      "web application development",
      "Jessica Tatham",
      "Tatham Tech",
    ],
    authors: [{ name: "Jessica Tatham", url: BASE_URL }],
    creator: "Jessica Tatham",
    publisher: "Tatham Tech",
    icons: {
      icon: "/favicon.svg",
      apple: "/favicon.svg",
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : locale === "fr" ? "fr_CA" : locale === "es" ? "es_ES" : "af_ZA",
      url: BASE_URL,
      siteName: "Tatham Tech",
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: "Tatham Tech - AI-Powered Digital Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      images: [`${BASE_URL}/og-image.png`],
    },
    alternates: {
      canonical: locale === "en" ? BASE_URL : `${BASE_URL}/${locale}`,
      languages: alternates,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    other: {
      "theme-color": "#2F3530",
    },
  };
}

function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "Tatham Tech",
        url: BASE_URL,
        logo: `${BASE_URL}/favicon.svg`,
        founder: {
          "@type": "Person",
          name: "Jessica Tatham",
          jobTitle: "Founder & Solution Architect",
          url: `${BASE_URL}/about`,
        },
        description:
          "AI-powered digital solutions. Enterprise platform architecture and small business websites.",
        knowsAbout: [
          "Solution Architecture",
          "Frontend Development",
          "React",
          "Next.js",
          "TypeScript",
          "AI-Powered Development",
          "Web Development",
          "Enterprise Software",
        ],
        areaServed: "Worldwide",
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        url: BASE_URL,
        name: "Tatham Tech",
        publisher: { "@id": `${BASE_URL}/#organization` },
        inLanguage: ["en", "fr", "es", "af"],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${BASE_URL}/#service`,
        name: "Tatham Tech",
        url: BASE_URL,
        description:
          "Enterprise solution architecture and AI-powered websites for small businesses.",
        provider: { "@id": `${BASE_URL}/#organization` },
        serviceType: [
          "Web Development",
          "Solution Architecture",
          "AI Automation",
          "Digital Strategy",
        ],
        areaServed: "Worldwide",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <JsonLd />
      </head>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
