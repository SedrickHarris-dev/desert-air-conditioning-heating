import { faqs } from "@/content/faqs";
import { servicePageProofPoints } from "./proof-points";
import { siteStats } from "./shared";
import type { PageContent, Service } from "@/types/content";

/**
 * Fallback page for a service without hand-written content in
 * ./service-pages.ts. Uses only fields on the Service record plus general
 * client FAQs, so it never states anything the client has not supplied.
 */
export function buildDefaultServicePage(service: Service): PageContent {
  const signsHeading = {
    id: "signs",
    eyebrow: "When to call",
    title: "Common signs you may need this service",
    intro: service.description,
  };
  const sections: PageContent["sections"] = [
    service.signCards
      ? { type: "cards", ...signsHeading, columns: 4, items: service.signCards }
      : { type: "tiles", ...signsHeading, items: service.signs.map((name) => ({ name })) },
  ];
  if (service.isEmergency) {
    sections.push({
      type: "emergency",
      id: "emergency",
      title: "Need help right now?",
      body: "Burst pipes, active leaks, and sewage backups are covered by our emergency plumbing service.",
    });
  }
  sections.push(
    { type: "steps", id: "process", eyebrow: "Simple process", title: "How it works" },
    {
      type: "coverage",
      id: "service-area",
      eyebrow: "Where we work",
      title: "Serving the Las Vegas valley",
      intro: "Call to confirm coverage for your address.",
    },
    {
      type: "faq",
      id: "faq",
      eyebrow: "Direct answers",
      title: `Questions about ${service.name.toLowerCase()}`,
      items: faqs.filter((f) => f.categories.includes("general")).slice(0, 6),
    },
  );

  return {
    meta: {
      title: `${service.name} in Las Vegas, NV`,
      description: service.summary,
      path: `/services/${service.slug}/`,
    },
    hero: {
      title: service.name,
      description: service.summary,
      proofPoints: servicePageProofPoints,
      formSource: `service-${service.slug}`,
      form: { defaultService: service.name },
    },
    stats: siteStats,
    sections,
    finalCta: { title: `Ready for ${service.name.toLowerCase()}?` },
  };
}
