import { PageRenderer } from "@/components/templates/PageRenderer";
import { commercialHubPage } from "@/content/pages/audience-pages";
import { buildPageMetadata } from "@/lib/metadata";

// Commercial HUB: routes business and property-manager visitors to the right
// service. The commercial SERVICE page (/services/commercial-plumbing/)
// covers the service itself; the two must not duplicate each other's copy.
export const metadata = buildPageMetadata(commercialHubPage.meta);

export default function CommercialHubPage() {
  return <PageRenderer page={commercialHubPage} />;
}
