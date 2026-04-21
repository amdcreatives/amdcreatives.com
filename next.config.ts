import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export', // CRITICAL: This generates a 'out' folder instead of a server build
  images: {
    unoptimized: true, // GitHub Pages doesn't support the Next.js image optimization server
  },
  // basePath: '/your-repo-name', // Only uncomment if your site is NOT on a custom domain
};

export default nextConfig;
