import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Required if your deployment doesn't support Next.js image optimization.
    unoptimized: true,
  },

  // Keep basePath commented out unless your site requires it.
  // basePath: "/your-repo-name",
};

export default nextConfig;
