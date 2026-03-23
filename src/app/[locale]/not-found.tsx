import { Link } from "@/i18n/navigation";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-8 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-secondary mb-6">
        Page not found
      </p>
      <h1 className="font-heading text-7xl font-bold text-primary-dark md:text-9xl">
        404
      </h1>
      <p className="mt-6 max-w-md text-lg leading-relaxed text-foreground/60">
        This page doesn&apos;t exist. It might have been moved, or you might
        have typed the URL wrong. Either way, let&apos;s get you back on track.
      </p>
      <div className="mt-10 flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="inline-block rounded-full bg-accent-secondary px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white transition-all hover:bg-accent-secondary/80 hover:scale-105"
        >
          Go home
        </Link>
        <Link
          href="/contact"
          className="inline-block rounded-full border border-primary/20 px-10 py-4 text-sm font-medium uppercase tracking-[0.15em] text-primary-dark transition-all hover:border-primary/40"
        >
          Contact me
        </Link>
      </div>
    </section>
  );
}
