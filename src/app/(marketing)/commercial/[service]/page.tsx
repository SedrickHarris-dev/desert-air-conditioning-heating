import { notFound } from "next/navigation";
import { PageRenderer } from "@/components/templates/PageRenderer";
import { audienceServicePages } from "@/content/pages/combination-pages";
import { buildPageMetadata } from "@/lib/metadata";

// Commercial + service reference pages. noindex until validated (docs/seo.md).
type Params = Promise<{ service: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(audienceServicePages)
    .filter((key) => key.startsWith("commercial/"))
    .map((key) => ({ service: key.split("/")[1] }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const page = audienceServicePages[`commercial/${(await params).service}`];
  return page ? buildPageMetadata(page.meta) : {};
}

export default async function CommercialServicePage({ params }: { params: Params }) {
  const page = audienceServicePages[`commercial/${(await params).service}`];
  if (!page) notFound();
  return <PageRenderer page={page} />;
}
