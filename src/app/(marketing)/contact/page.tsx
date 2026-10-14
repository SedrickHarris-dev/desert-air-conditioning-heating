import { PageHeader } from "@/components/templates/PageHeader";
import { LeadForm } from "@/components/forms/LeadForm";
import { clientConfig } from "@/config/client";
import { telHref } from "@/lib/utils";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Call (888) 308-3262 or request plumbing service online. 24/7 emergency dispatch available every day.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Call any time for emergencies, or send a request and we'll follow up."
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="font-display text-3xl font-bold uppercase text-primary">
              Call or Email
            </h2>
            <p className="mt-2">
              <a href={telHref(clientConfig.phone)} className="text-xl font-bold text-secondary">
                {clientConfig.phoneDisplay}
              </a>
            </p>
            <p>
              <a href={`mailto:${clientConfig.email}`} className="text-secondary underline">
                {clientConfig.email}
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold uppercase text-primary">
              Hours
            </h2>
            <ul className="mt-2 space-y-1 text-slate-700">
              {clientConfig.hours.map((h) => (
                <li key={h.days}>
                  <span className="font-semibold">{h.days}:</span> {h.hours}
                </li>
              ))}
              <li className="pt-2 font-bold text-primary">
                24/7 emergency dispatch, every day.
              </li>
            </ul>
          </div>
          <p className="text-sm text-slate-600">
            {clientConfig.name} is a service-area business serving Las Vegas,
            NV. There is no public street address.
          </p>
        </div>
        <LeadForm idPrefix="contact" source="contact-page" />
      </div>
    </>
  );
}
