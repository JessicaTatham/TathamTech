"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import TextReveal from "@/components/TextReveal";
import AnimateIn from "@/components/AnimateIn";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

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
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-end bg-primary-dark pb-20">
        <div className="mx-auto w-full max-w-7xl px-8">
          <TextReveal>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent mb-8">
              Contact
            </p>
          </TextReveal>
          <TextReveal delay={0.15}>
            <h1 className="font-heading text-5xl font-bold leading-[1.05] text-background md:text-7xl max-w-4xl">
              Let&apos;s start
              <br />
              a conversation.
            </h1>
          </TextReveal>
        </div>
      </section>

      {/* Form */}
      <section className="bg-background py-32">
        <div className="mx-auto max-w-3xl px-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-20 text-center"
            >
              <h2 className="font-heading text-4xl font-bold text-primary-dark">
                Thank you.
              </h2>
              <p className="mt-4 text-foreground/50">
                I&apos;ll be in touch within 1-2 business days.
              </p>
            </motion.div>
          ) : (
            <AnimateIn>
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium uppercase tracking-[0.15em] text-foreground/50 mb-3"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full border-b border-primary/10 bg-transparent pb-3 text-foreground outline-none transition-colors focus:border-primary-dark placeholder:text-foreground/40"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium uppercase tracking-[0.15em] text-foreground/50 mb-3"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full border-b border-primary/10 bg-transparent pb-3 text-foreground outline-none transition-colors focus:border-primary-dark placeholder:text-foreground/40"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="type"
                    className="block text-xs font-medium uppercase tracking-[0.15em] text-foreground/50 mb-3"
                  >
                    I&apos;m looking for
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="w-full border-b border-primary/10 bg-transparent pb-3 text-foreground outline-none transition-colors focus:border-primary-dark"
                  >
                    <option value="enterprise">
                      A senior architect or contractor
                    </option>
                    <option value="website">A website</option>
                    <option value="automation">AI &amp; automation help</option>
                    <option value="strategy">A strategy session</option>
                    <option value="retainer">Ongoing support</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium uppercase tracking-[0.15em] text-foreground/50 mb-3"
                  >
                    Tell me more
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full border-b border-primary/10 bg-transparent pb-3 text-foreground outline-none transition-colors focus:border-primary-dark resize-none placeholder:text-foreground/40"
                    placeholder="A few sentences about your project or what you're looking for..."
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-3 rounded-full bg-primary-dark px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-background transition-all hover:bg-primary hover:scale-105"
                  >
                    Send message
                    <span className="inline-block transition-transform group-hover:translate-x-1">
                      &rarr;
                    </span>
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
