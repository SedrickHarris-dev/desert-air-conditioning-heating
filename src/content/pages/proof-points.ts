import { locations } from "./../locations";
import type { ProofPoint } from "@/types/content";

export type { ProofPoint };

const communities = `${locations.length} communities served`;

export const homeProofPoints: ProofPoint[] = [
  { icon: "clock", label: "24/7 emergency dispatch" },
  { icon: "building", label: "Residential & commercial" },
  { icon: "pin", label: "Serving the Las Vegas valley" },
  { icon: "shield", label: "Licensed plumbing team" },
  { icon: "users", label: communities },
  { icon: "calendar", label: "7 days a week availability" },
];

export const locationProofPoints: ProofPoint[] = [
  { icon: "clock", label: "24/7 emergency dispatch" },
  { icon: "building", label: "Residential & commercial" },
  { icon: "pin", label: "Local team" },
  { icon: "shield", label: "Full-service plumbing" },
  { icon: "users", label: communities },
  { icon: "calendar", label: "7 days a week availability" },
];

export const servicePageProofPoints: ProofPoint[] = [
  { icon: "clock", label: "24/7 emergency dispatch" },
  { icon: "building", label: "Residential & commercial" },
  { icon: "pin", label: `${communities}` },
  { icon: "shield", label: "Licensed plumbing team" },
];
