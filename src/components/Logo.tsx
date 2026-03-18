export default function Logo({
  size = 32,
  className = "",
  variant = "dark",
}: {
  size?: number;
  className?: string;
  variant?: "dark" | "light";
}) {
  const bgColor = variant === "light" ? "#F5F3EF" : "#2F3530";
  const letterColor = variant === "light" ? "#2F3530" : "#F5F3EF";
  const accentColor = "#B8A078";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Rounded square background */}
      <rect width="48" height="48" rx="12" fill={bgColor} />

      {/* First T - primary color, upper layer */}
      <rect x="4" y="10" width="18" height="2.8" rx="1" fill={letterColor} />
      <rect x="11" y="10" width="3.2" height="25" rx="1" fill={letterColor} />

      {/* Second T - accent gold, offset down and right for depth */}
      <rect x="26" y="13" width="18" height="2.8" rx="1" fill={accentColor} />
      <rect x="33" y="13" width="3.2" height="25" rx="1" fill={accentColor} />
    </svg>
  );
}
