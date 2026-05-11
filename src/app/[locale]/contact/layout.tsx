import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Hire Jessica Tatham, Senior Contract Developer | Contact",
  },
  description:
    "Get in touch about senior contract dev, solution architecture, or an AI-integrated custom website. Free 30-minute strategy session with Jessica Tatham.",
  alternates: {
    canonical: "https://tathamtech.com/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
