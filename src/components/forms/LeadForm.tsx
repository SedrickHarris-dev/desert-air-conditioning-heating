import { consentConfig } from "@/config/consent";
import { services } from "@/content/services";
import Link from "next/link";

const field =
  "mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/30";

// Plain HTML form posting to /api/leads (server-side). No client JS needed.
export function LeadForm({
  idPrefix,
  source,
  title = "Request Service",
  intro = "Tell us what's going on and we'll follow up to confirm.",
  submitLabel = "Request Service",
  showCompany = false,
  defaultService = "",
}: {
  idPrefix: string;
  source: string;
  title?: string;
  intro?: string;
  submitLabel?: string;
  /** Adds an optional business/property name field (commercial pages). */
  showCompany?: boolean;
  /** Service name preselected in the dropdown. */
  defaultService?: string;
}) {
  const id = (n: string) => `${idPrefix}-${n}`;
  return (
    <form
      method="post"
      action="/api/leads"
      className="rounded-xl bg-white p-6 text-slate-900 shadow-xl"
    >
      <h2 className="font-display text-3xl font-bold uppercase text-primary">
        {title}
      </h2>
      <p className="mt-1 text-sm text-slate-600">{intro}</p>
      <input type="hidden" name="source" value={source} />
      <div className="hidden" aria-hidden="true">
        <label htmlFor={id("website")}>Website</label>
        <input id={id("website")} name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-4 space-y-3">
        <div>
          <label htmlFor={id("name")} className="text-sm font-semibold">
            Name
          </label>
          <input id={id("name")} name="name" required autoComplete="name" className={field} />
        </div>
        {showCompany && (
          <div>
            <label htmlFor={id("company")} className="text-sm font-semibold">
              Business or property name{" "}
              <span className="font-normal text-slate-500">(optional)</span>
            </label>
            <input id={id("company")} name="company" autoComplete="organization" className={field} />
          </div>
        )}
        <div>
          <label htmlFor={id("phone")} className="text-sm font-semibold">
            Phone
          </label>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className={field}
          />
        </div>
        <div>
          <label htmlFor={id("email")} className="text-sm font-semibold">
            Email <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <input id={id("email")} name="email" type="email" autoComplete="email" className={field} />
        </div>
        <div>
          <label htmlFor={id("service")} className="text-sm font-semibold">
            Service needed
          </label>
          <select id={id("service")} name="service" className={field} defaultValue={defaultService}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={id("message")} className="text-sm font-semibold">
            Message <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <textarea id={id("message")} name="message" rows={3} className={field} />
        </div>
        <div className="flex items-start gap-2">
          <input
            id={id("sms")}
            name="smsConsent"
            type="checkbox"
            className="mt-1 h-4 w-4 shrink-0"
          />
          <label htmlFor={id("sms")} className="text-xs leading-snug text-slate-600">
            {consentConfig.smsConsentText}{" "}
            <Link href={consentConfig.smsTermsPath} className="underline">
              SMS Terms
            </Link>{" "}
            ·{" "}
            <Link href={consentConfig.privacyPath} className="underline">
              Privacy
            </Link>
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-md bg-accent px-5 py-3 text-base font-bold text-primary hover:brightness-95"
      >
        {submitLabel}
      </button>
    </form>
  );
}
