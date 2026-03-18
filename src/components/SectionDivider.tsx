"use client";

export default function SectionDivider({
  from = "background",
  to = "white",
}: {
  from?: string;
  to?: string;
}) {
  return (
    <div
      className="h-24 w-full"
      style={{
        background: `linear-gradient(to bottom, var(--${from}), var(--${to}))`,
      }}
    />
  );
}
