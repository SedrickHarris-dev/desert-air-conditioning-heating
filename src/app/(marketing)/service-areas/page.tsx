import { PageRenderer } from "@/components/templates/PageRenderer";
import { serviceAreasHubPage } from "@/content/pages/hubs";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata(serviceAreasHubPage.meta);

export default function ServiceAreasPage() {
  return <PageRenderer page={serviceAreasHubPage} />;
}
