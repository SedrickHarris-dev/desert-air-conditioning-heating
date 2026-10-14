import { notFound } from "next/navigation";
import { PageRenderer } from "@/components/templates/PageRenderer";
import { buildDefaultServicePage } from "@/content/pages/service-defaults";
import { servicePages } from "@/content/pages/service-pages";
import { getService, services } from "@/content/services";
import { buildPageMetadata } from "@/lib/metadata";
import type { PageContent } from "@/types/content";

type Params = Promise<{ slug: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

// Hand-written page content wins; otherwise build one from the Service record.
function pageFor(slug: string): PageContent | undefined {
  const service = getService(slug);
  if (!service) return undefined;
  return servicePages[slug] ?? buildDefaultServicePage(service);
}

export async function generateMetadata({ params }: { params: Params }) {
  const page = pageFor((await params).slug);
  return page ? buildPageMetadata(page.meta) : {};
}

export default async function ServicePage({ params }: { params: Params }) {
  const page = pageFor((await params).slug);
  if (!page) notFound();
  return <PageRenderer page={page} />;
}
