import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site (no API routes, no server-only data) — builds to /out
  // so it can be deployed to any static host (Nginx, S3, GitHub Pages,
  // Vercel, Netlify, etc.), not just a Node-capable server.
  output: "export",
};

export default nextConfig;
