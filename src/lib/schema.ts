import { clientConfig } from "@/config/client";
import { locations } from "@/content/locations";
import { services } from "@/content/services";
import type { Faq } from "@/types/content";
import { absoluteUrl } from "./url";

// No street address, ratings or credentials are emitted: none are verified.
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    name: clientConfig.name,
    url: clientConfig.url,
    telephone: clientConfig.phone,
    email: clientConfig.email,
    areaServed: locations.map((l) => ({
      "@type": "City",
      name: `${l.name}, ${l.state}`,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "16:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Plumbing services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name },
      })),
    },
  };
}

// The builders below only describe content that must be visible and accurate
// on the same page. No Review, AggregateRating or credential data is emitted.

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: clientConfig.name,
    url: absoluteUrl("/"),
  };
}

/** Use only on pages that render a visible breadcrumb trail. */
export function breadcrumbSchema(trail: ReadonlyArray<{ name: string; path: string }>) {
  const items = [{ name: "Home", path: "/" }, ...trail];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** Use only with FAQs rendered visibly on the page with identical text. */
export function faqSchema(faqs: ReadonlyArray<Pick<Faq, "question" | "answer">>) {
  if (faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Use only for a real offered service described on the page. */
export function serviceSchema(opts: { name: string; description: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { "@type": "Plumber", name: clientConfig.name, url: absoluteUrl("/") },
    areaServed: locations.map((l) => ({ "@type": "City", name: `${l.name}, ${l.state}` })),
  };
}
