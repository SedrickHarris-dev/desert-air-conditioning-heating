import type { Metadata } from "next";
import { clientConfig } from "@/config/client";
import { seoDefaults } from "@/config/seo";
import { absoluteUrl } from "./url";
import type { PageMeta } from "@/types/content";

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  /** Marks the page noindex. Use for utility pages only (e.g. thank-you). */
  noindex?: boolean;
  /** Root-relative or absolute image URL. Omit until a real asset exists. */
  ogImage?: string;
}): Metadata {
  const canonical = absoluteUrl(opts.path);
  const ogTitle = seoDefaults.titleTemplate.replace("%s", opts.title);
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical },
    ...(opts.noindex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      title: ogTitle,
      description: opts.description,
      url: canonical,
      siteName: clientConfig.name,
      locale: "en_US",
      type: "website",
      ...(opts.ogImage ? { images: [{ url: opts.ogImage }] } : {}),
    },
    twitter: {
      card: opts.ogImage ? "summary_large_image" : "summary",
      title: ogTitle,
      description: opts.description,
      ...(opts.ogImage ? { images: [opts.ogImage] } : {}),
    },
  };
}

/** Metadata for a page described by PageContent. */
export function buildPageMetadata(meta: PageMeta): Metadata {
  return buildMetadata(meta);
}
