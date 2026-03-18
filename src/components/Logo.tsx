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
      <rect width="48" height="48" rx="10" fill={bgColor} />
      {/* T letterform - two overlapping Ts forming a monogram */}
      <path
        d="M10 14h12v3h-4.5v17h-3V17H10v-3Z"
        fill={letterColor}
      />
      <path
        d="M26 14h12v3h-4.5v17h-3V17H26v-3Z"
        fill={letterColor}
        opacity="0.6"
      />
    </svg>
  );
}
