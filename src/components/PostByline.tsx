import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function PostByline({
  date,
  lastModified,
}: {
  date: string;
  lastModified?: string;
}) {
  const formatted = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
  const updated =
    lastModified && lastModified !== date
      ? new Date(lastModified).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : null;

  return (
    <div className="flex items-center gap-3 mb-12 pb-8 border-b border-primary/10">
      <Image
        src="/jessica-headshot.jpeg"
        alt="Jessica Tatham"
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="text-sm">
        <Link
          href="/about"
          className="font-medium text-primary-dark hover:text-accent-secondary transition-colors"
        >
          Jessica Tatham
        </Link>
        <div className="text-foreground/50 text-xs">
          <time dateTime={date}>{formatted}</time>
          {updated && (
            <>
              {" · Updated "}
              <time dateTime={lastModified}>{updated}</time>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
