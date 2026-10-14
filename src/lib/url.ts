import { clientConfig } from "@/config/client";

/** Normalizes a path to "/a/b/" form (leading and trailing slash, no query or hash). */
export function normalizePath(path: string): string {
  const clean = path.split("#")[0].split("?")[0].trim();
  const withLead = clean.startsWith("/") ? clean : `/${clean}`;
  return withLead.endsWith("/") ? withLead : `${withLead}/`;
}

/** Absolute canonical URL for a path, using the trailing-slash standard. */
export function absoluteUrl(path = "/") {
  return new URL(normalizePath(path), clientConfig.url).toString();
}
