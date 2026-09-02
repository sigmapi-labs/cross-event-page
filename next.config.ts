import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  typedRoutes: true,
  output: "export",
  images: { unoptimized: true },
  ...(isGithubPages
    ? {
        basePath: "/cross-event-page",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
