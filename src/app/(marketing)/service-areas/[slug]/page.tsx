import { notFound } from "next/navigation";
import { PageRenderer } from "@/components/templates/PageRenderer";
import { locationPages } from "@/content/pages/location-pages";
import { dedicatedLocations } from "@/content/locations";
import { buildPageMetadata } from "@/lib/metadata";

type Params = Promise<{ slug: string }>;

// Only locations with hasDedicatedPage AND page content get a page.
export const dynamicParams = false;

export function generateStaticParams() {
  return dedicatedLocations
    .filter((l) => locationPages[l.slug])
    .map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const page = locationPages[(await params).slug];
  return page ? buildPageMetadata(page.meta) : {};
}

export default async function LocationPage({ params }: { params: Params }) {
  const page = locationPages[(await params).slug];
  if (!page) notFound();
  return <PageRenderer page={page} />;
}
