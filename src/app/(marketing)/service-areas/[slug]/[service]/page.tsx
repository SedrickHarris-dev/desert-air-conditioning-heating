import { notFound } from "next/navigation";
import { PageRenderer } from "@/components/templates/PageRenderer";
import { locationServicePages } from "@/content/pages/combination-pages";
import { buildPageMetadata } from "@/lib/metadata";

// Location + service reference pages. noindex until validated (docs/seo.md).
type Params = Promise<{ slug: string; service: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(locationServicePages).map((key) => {
    const [slug, service] = key.split("/");
    return { slug, service };
  });
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug, service } = await params;
  const page = locationServicePages[`${slug}/${service}`];
  return page ? buildPageMetadata(page.meta) : {};
}

export default async function LocationServicePage({ params }: { params: Params }) {
  const { slug, service } = await params;
  const page = locationServicePages[`${slug}/${service}`];
  if (!page) notFound();
  return <PageRenderer page={page} />;
}
