import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/**": ["./content/blog/**/*.md"],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.tathamtech.com" }],
        destination: "https://tathamtech.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
