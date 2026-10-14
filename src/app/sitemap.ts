import type { MetadataRoute } from "next";
import { dedicatedLocations } from "@/content/locations";
import { services } from "@/content/services";
import { absoluteUrl } from "@/lib/url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/services",
    "/commercial",
    "/residential",
    ...services.map((s) => `/services/${s.slug}`),
    "/service-areas",
    ...dedicatedLocations.map((l) => `/service-areas/${l.slug}`),
    "/about",
    "/contact",
    "/reviews",
    "/privacy",
    "/terms",
    "/sms-terms",
  ];
  // Reference/combination pages (content/pages/combination-pages.ts) are
  // noindex and intentionally excluded until validated; see docs/seo.md.
  // absoluteUrl() applies the trailing-slash standard.
  return paths.map((p) => ({ url: absoluteUrl(p) }));
}
