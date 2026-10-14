export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function telHref(phone: string) {
  return `tel:${phone}`;
}
