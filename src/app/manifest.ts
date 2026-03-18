import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Tatham Tech | AI-Powered Digital Solutions",
    short_name: "Tatham Tech",
    description:
      "Enterprise platforms and small business websites. AI-powered digital solutions by Jessica Tatham.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F3EF",
    theme_color: "#2F3530",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
