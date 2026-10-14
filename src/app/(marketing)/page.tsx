import { Hero } from "@/components/blocks/Hero";
import { ServiceGrid } from "@/components/blocks/ServiceGrid";
import { ProcessSection } from "@/components/blocks/ProcessSection";
import { LocationSection } from "@/components/blocks/LocationSection";
import { ReviewSection } from "@/components/blocks/ReviewSection";
import { FaqSection } from "@/components/blocks/FaqSection";
import { FinalCta } from "@/components/blocks/FinalCta";
import { mostRequestedServices } from "@/content/services";
import { faqs } from "@/content/faqs";
import { homeProofPoints } from "@/content/pages/proof-points";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  // Home gets its own title: buildMetadata output goes through the title
  // template, so passing the full default title would repeat the site name.
  title: "Plumber in Las Vegas, NV | 24/7 Emergency Dispatch",
  description:
    "Las Vegas Pro Plumbing handles drain cleaning, water heaters, leak detection, repiping and more across the Las Vegas Valley. Call (888) 308-3262.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Las Vegas, NV"
        title="Reliable Plumbing Service in Las Vegas, Day or Night"
        description="Residential and commercial plumbing for the Las Vegas valley, with 24/7 emergency dispatch every day."
        proofPoints={homeProofPoints}
        formSource="home-hero"
      />
      <ServiceGrid
        eyebrow="What We Do"
        title="Our Most Requested Plumbing Services"
        services={mostRequestedServices}
        showViewAll
      />
      <ProcessSection />
      <LocationSection />
      <ReviewSection />
      <FaqSection faqs={faqs} />
      <FinalCta />
    </>
  );
}
