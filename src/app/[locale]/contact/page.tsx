"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import TextReveal from "@/components/TextReveal";
import AnimateIn from "@/components/AnimateIn";
import { Send } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const t = useTranslations("contact");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitted(true);
  }

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
        <div className="mx-auto max-w-3xl px-8">
          {submitted ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="py-20 text-center">
              <h2 className="font-heading text-4xl font-bold text-primary-dark">{t("thankYou")}</h2>
              <p className="mt-4 text-base text-foreground/60">{t("thankYouDescription")}</p>
            </motion.div>
          ) : (
            <AnimateIn>
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/60 mb-3">{t("nameLabel")}</label>
                    <input type="text" id="name" name="name" required
                      className="w-full border-b border-primary/10 bg-transparent pb-3 text-foreground outline-none transition-colors focus:border-primary-dark placeholder:text-foreground/40"
                      placeholder={t("namePlaceholder")} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/60 mb-3">{t("emailLabel")}</label>
                    <input type="email" id="email" name="email" required
                      className="w-full border-b border-primary/10 bg-transparent pb-3 text-foreground outline-none transition-colors focus:border-primary-dark placeholder:text-foreground/40"
                      placeholder={t("emailPlaceholder")} />
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-foreground/60 mb-3">{t("typeLabel")}</label>
                  <select id="type" name="type" className="w-full border-b border-primary/10 bg-transparent pb-3 text-foreground outline-none transition-colors focus:border-primary-dark">
                    <option value="enterprise">{t("typeEnterprise")}</option>
                    <option value="website">{t("typeWebsite")}</option>
                    <option value="automation">{t("typeAutomation")}</option>
                    <option value="strategy">{t("typeStrategy")}</option>
                    <option value="retainer">{t("typeRetainer")}</option>
                    <option value="other">{t("typeOther")}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/60 mb-3">{t("messageLabel")}</label>
                  <textarea id="message" name="message" rows={5} required
                    className="w-full border-b border-primary/10 bg-transparent pb-3 text-foreground outline-none transition-colors focus:border-primary-dark resize-none placeholder:text-foreground/40"
                    placeholder={t("messagePlaceholder")} />
                </div>

                <div>
                  <button type="submit" className="group inline-flex items-center gap-3 rounded-full bg-primary-dark px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-background transition-all hover:bg-primary hover:scale-105">
                    {t("send")}
                    <Send size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </AnimateIn>
          )}
        </div>
      </section>
    </>
  );
}
