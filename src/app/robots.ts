import type { MetadataRoute } from "next";
import { clientConfig } from "@/config/client";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/thank-you/"] },
    // File URL: no trailing slash, so it bypasses absoluteUrl().
    sitemap: new URL("/sitemap.xml", clientConfig.url).toString(),
  };
}
