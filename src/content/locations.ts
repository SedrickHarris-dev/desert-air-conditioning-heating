import type { Location } from "@/types/content";

export const locations: Location[] = [
  { slug: "las-vegas", name: "Las Vegas", state: "NV", tier: "primary", hasDedicatedPage: true },
  { slug: "henderson", name: "Henderson", state: "NV", tier: "tier-1", hasDedicatedPage: false },
  { slug: "north-las-vegas", name: "North Las Vegas", state: "NV", tier: "tier-1", hasDedicatedPage: false },
  { slug: "enterprise", name: "Enterprise", state: "NV", tier: "tier-1", hasDedicatedPage: false },
  { slug: "spring-valley", name: "Spring Valley", state: "NV", tier: "tier-1", hasDedicatedPage: false },
  { slug: "paradise", name: "Paradise", state: "NV", tier: "tier-1", hasDedicatedPage: false },
  { slug: "summerlin", name: "Summerlin", state: "NV", tier: "tier-1", hasDedicatedPage: false },
  { slug: "sunrise-manor", name: "Sunrise Manor", state: "NV", tier: "tier-1", hasDedicatedPage: false },
];

export const primaryLocation = locations.find((l) => l.tier === "primary")!;
export const tier1Locations = locations.filter((l) => l.tier === "tier-1");
export const dedicatedLocations = locations.filter((l) => l.hasDedicatedPage);
export const getLocation = (slug: string) =>
  locations.find((l) => l.slug === slug);
