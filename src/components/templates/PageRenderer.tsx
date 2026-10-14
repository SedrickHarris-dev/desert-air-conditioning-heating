import { Hero } from "@/components/blocks/Hero";
import { TrustStrip } from "@/components/blocks/TrustStrip";
import { IconTiles } from "@/components/blocks/IconTiles";
import { InfoCards } from "@/components/blocks/InfoCards";
import { ComparisonSection } from "@/components/blocks/ComparisonSection";
import { RouteCards } from "@/components/blocks/RouteCards";
import { ServiceGroup } from "@/components/blocks/ServiceGroup";
import { CalloutSection } from "@/components/blocks/CalloutSection";
import { ProcessSection } from "@/components/blocks/ProcessSection";
import { LinkCards } from "@/components/blocks/LinkCards";
import { LocalNotes } from "@/components/blocks/LocalNotes";
import { EmergencyBanner } from "@/components/blocks/EmergencyBanner";
import { CoverageSection } from "@/components/blocks/CoverageSection";
import { ReviewSection } from "@/components/blocks/ReviewSection";
import { FaqSection } from "@/components/blocks/FaqSection";
import { FinalCta } from "@/components/blocks/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import type { PageContent, PageSection } from "@/types/content";

function Section({ section }: { section: PageSection }) {
  switch (section.type) {
    case "tiles":
      return <IconTiles {...section} />;
    case "cards":
      return <InfoCards {...section} />;
    case "comparison":
      return <ComparisonSection {...section} />;
    case "steps":
      return (
        <ProcessSection
          id={section.id}
          eyebrow={section.eyebrow}
          title={section.title}
          steps={section.items}
          note={section.note}
        />
      );
    case "links":
      return <LinkCards {...section} />;
    case "local":
      return <LocalNotes {...section} />;
    case "emergency":
      return <EmergencyBanner id={section.id} title={section.title} body={section.body} />;
    case "coverage":
      return <CoverageSection {...section} />;
    case "routes":
      return <RouteCards {...section} />;
    case "serviceGroup":
      return <ServiceGroup {...section} />;
    case "callout":
      return <CalloutSection {...section} />;
    case "reviews":
      return <ReviewSection />;
    case "faq":
      return (
        <FaqSection
          id={section.id}
          eyebrow={section.eyebrow}
          title={section.title}
          faqs={section.items}
        />
      );
  }
}

/**
 * Renders a PageContent description: hero, optional trust strip, ordered
 * sections, final CTA. FAQPage schema is emitted only for FAQ sections that
 * are visibly rendered on the page.
 */
export function PageRenderer({ page }: { page: PageContent }) {
  const faqSections = page.sections.filter((s) => s.type === "faq");
  return (
    <>
      <Hero {...page.hero} />
      {page.stats && <TrustStrip stats={page.stats} />}
      {page.sections.map((section, i) => (
        <Section key={`${section.type}-${i}`} section={section} />
      ))}
      {!page.meta.noindex &&
        faqSections.map((s, i) => {
          const data = s.type === "faq" ? faqSchema(s.items) : null;
          return data ? <JsonLd key={i} data={data} /> : null;
        })}
      <FinalCta {...page.finalCta} />
    </>
  );
}
