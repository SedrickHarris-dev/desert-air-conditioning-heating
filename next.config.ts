import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages: `next build` writes the site to `out/`.
  // Server endpoints live in `functions/` (Pages Functions), not in the app.
  output: "export",
  // Site-wide URL standard: every route ends with a trailing slash.
  // Canonicals, sitemap entries and internal links must match.
  trailingSlash: true,
  // The default image optimizer needs a server; Pages serves files as-is.
  images: { unoptimized: true },
};

export default nextConfig;
