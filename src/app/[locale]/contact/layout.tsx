import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hire a freelance web developer. Get in touch with Jessica Tatham for custom web development, website redesigns, AI automation, or enterprise solution architecture. Free consultation.",
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
