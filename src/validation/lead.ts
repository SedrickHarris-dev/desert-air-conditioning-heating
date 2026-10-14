import type { LeadValidation } from "@/types/lead";

const str = (v: FormDataEntryValue | null, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

export function validateLead(form: FormData): LeadValidation {
  const errors: Record<string, string> = {};
  const name = str(form.get("name"), 100);
  const phone = str(form.get("phone"), 30);
  const email = str(form.get("email"), 200);
  const service = str(form.get("service"), 100);
  const company = str(form.get("company"), 150);
  const message = str(form.get("message"), 2000);
  const source = str(form.get("source"), 100) || "unknown";

  if (name.length < 2) errors.name = "Name is required.";
  if (phone.replace(/\D/g, "").length < 10)
    errors.phone = "A valid phone number is required.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Email looks invalid.";

  if (Object.keys(errors).length) return { ok: false, errors };
  return {
    ok: true,
    data: {
      name,
      phone,
      email: email || undefined,
      service: service || undefined,
      company: company || undefined,
      message: message || undefined,
      smsConsent: form.get("smsConsent") === "on",
      source,
    },
  };
}
