import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-dark">
      <div className="mx-auto max-w-7xl px-8 py-20">
        <div className="grid gap-16 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-background">
              Tatham Tech
            </p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-background/70">
              AI-powered digital solutions built with over a decade of
              experience across enterprise and small business.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-background/60 mb-6">
              Navigate
            </p>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/services", label: "Services" },
                { href: "/work", label: "Work" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-background/70 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-background/60 mb-6">
              Connect
            </p>
            <Link
              href="/contact"
              className="text-sm text-background/70 hover:text-accent transition-colors"
            >
              hello@tathamtech.com
            </Link>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-background/50">
            &copy; {new Date().getFullYear()} Tatham Tech
          </p>
          <p className="text-xs text-background/50">
            Built with AI, naturally.
          </p>
        </div>
      </div>
    </footer>
  );
}
