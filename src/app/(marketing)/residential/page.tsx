import { PageRenderer } from "@/components/templates/PageRenderer";
import { residentialHubPage } from "@/content/pages/audience-pages";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata(residentialHubPage.meta);

export default function ResidentialHubPage() {
  return <PageRenderer page={residentialHubPage} />;
}
