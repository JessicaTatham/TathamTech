import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body
        style={{
          background: "#F5F3EF",
          color: "#1A1A18",
          fontFamily: "'Inter', sans-serif",
          margin: 0,
        }}
      >
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 500,
              textTransform: "uppercase",
              letterSpacing: "0.3em",
              color: "#C4866A",
              marginBottom: "1.5rem",
            }}
          >
            Page not found
          </p>
          <h1
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 700,
              color: "#2F3530",
              lineHeight: 1.05,
              margin: "0 0 1.5rem",
            }}
          >
            404
          </h1>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(26, 26, 24, 0.6)",
              maxWidth: "28rem",
              lineHeight: 1.7,
              margin: "0 0 2.5rem",
            }}
          >
            This page doesn&apos;t exist. It might have been moved, or you might
            have typed the URL wrong. Either way, let&apos;s get you back on
            track.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
            <Link
              href="/"
              style={{
                display: "inline-block",
                borderRadius: "9999px",
                backgroundColor: "#C4866A",
                padding: "0.875rem 2.5rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              Go home
            </Link>
            <Link
              href="/contact"
              style={{
                display: "inline-block",
                borderRadius: "9999px",
                border: "1px solid rgba(127, 132, 114, 0.3)",
                padding: "0.875rem 2.5rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#2F3530",
                textDecoration: "none",
              }}
            >
              Contact me
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
