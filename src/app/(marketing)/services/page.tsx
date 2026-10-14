import { PageRenderer } from "@/components/templates/PageRenderer";
import { servicesHubPage } from "@/content/pages/hubs";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata(servicesHubPage.meta);

export default function ServicesPage() {
  return <PageRenderer page={servicesHubPage} />;
}
