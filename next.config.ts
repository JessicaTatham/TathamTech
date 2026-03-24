import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/[locale]/blog/[slug]": ["./content/blog/**/*.md"],
    "/[locale]/blog": ["./content/blog/**/*.md"],
  },
};

export default withNextIntl(nextConfig);
