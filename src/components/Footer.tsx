"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Logo from "./Logo";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="bg-primary-dark">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-16 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Logo size={28} variant="light" />
              <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-background">
                Tatham Tech
              </p>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/70">
              {t("description")}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-background/60 mb-6">
              {t("navigate")}
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/services" as const, label: nav("services") },
                { href: "/work" as const, label: nav("work") },
                { href: "/about" as const, label: nav("about") },
                { href: "/contact" as const, label: nav("contact") },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-background/70 hover:text-accent-secondary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-background/60 mb-6">
              {t("connect")}
            </p>
            <Link href="/contact" className="text-sm text-background/70 hover:text-accent-secondary transition-colors">
              hello@tathamtech.com
            </Link>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            &copy; {new Date().getFullYear()} Tatham Tech
          </p>
          <p className="text-sm text-background/50">
            {t("builtWith")}
          </p>
        </div>
      </div>
    </footer>
  );
}
