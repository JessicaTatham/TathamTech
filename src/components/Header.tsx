"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";
import Logo from "./Logo";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("nav");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/services" as const, label: t("services") },
    { href: "/work" as const, label: t("work") },
    { href: "/about" as const, label: t("about") },
    { href: "/contact" as const, label: t("contact") },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-primary/5 py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8">
        <Link
          href="/"
          className={`flex items-center gap-2.5 font-heading text-sm font-semibold uppercase tracking-[0.2em] transition-colors duration-500 ${
            scrolled ? "text-primary-dark" : "text-background"
          }`}
        >
          <Logo size={24} variant={scrolled ? "dark" : "light"} />
          Tatham Tech
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-500 hover:text-accent-secondary ${
                scrolled ? "text-foreground/70" : "text-background/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher scrolled={scrolled} />
        </nav>

        <button
          className="md:hidden relative z-50 h-6 w-7 flex flex-col justify-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.span
            animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className={`block h-[1.5px] w-full transition-colors ${
              mobileOpen || scrolled ? "bg-foreground" : "bg-background"
            }`}
          />
          <motion.span
            animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
            className={`block h-[1.5px] w-full transition-colors ${
              mobileOpen || scrolled ? "bg-foreground" : "bg-background"
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-3xl font-light text-primary-dark hover:text-accent-secondary transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
