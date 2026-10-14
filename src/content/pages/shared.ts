import { locations } from "@/content/locations";
import { services } from "@/content/services";
import type { StatItem } from "@/types/content";

// Trust strip numbers are derived from content so they cannot drift from the
// service list and location list. Labels are client copy.
export const siteStats: StatItem[] = [
  { value: String(services.length), label: "plumbing services under one roof" },
  { value: "24/7", label: "emergency dispatch every day" },
  { value: "Mon-Sat", label: "scheduled appointments" },
  { value: String(locations.length), label: "valley communities served" },
];
