import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/cross-event-page" : "";

const nextConfig: NextConfig = {
  typedRoutes: true,
  output: "export",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
  ...(isGithubPages
    ? {
        basePath,
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
