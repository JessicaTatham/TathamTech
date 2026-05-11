import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AuthorByline() {
  return (
    <aside className="mt-16 rounded-2xl border border-primary/10 bg-white p-8">
      <div className="flex flex-col md:flex-row md:items-start gap-6">
        <Image
          src="/jessica-headshot.jpeg"
          alt="Jessica Tatham, senior contract developer"
          width={80}
          height={80}
          className="h-20 w-20 rounded-full object-cover shrink-0"
        />
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/50 mb-2">
            About the author
          </p>
          <h3 className="font-heading text-lg font-semibold text-primary-dark">
            Jessica Tatham
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-foreground/60">
            Senior contract developer with a decade of production work at Bell
            Canada, Wells Fargo, and SAP. AI-accelerated workflow with senior
            verification. Available for staff augmentation, fractional
            architecture, and AI-integrated custom websites.
          </p>
          <Link
            href="/about"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent-secondary hover:text-accent-secondary/80 transition-colors"
          >
            More about Jessica
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </aside>
  );
}
