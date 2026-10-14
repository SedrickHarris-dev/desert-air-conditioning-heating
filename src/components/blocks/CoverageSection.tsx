import Link from "next/link";
import { clientConfig } from "@/config/client";
import { locations } from "@/content/locations";
import { telHref } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PinIcon } from "@/components/ui/icons";

/** Primary location + nearby communities, with optional hours/contact panel. */
export function CoverageSection({
  id,
  eyebrow = "Where we work",
  title,
  intro,
  crossLink,
  showHours = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  crossLink?: { text: string; href: string; label: string };
  showHours?: boolean;
}) {
  return (
    <section id={id} className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={eyebrow} title={title} description={intro} />
        <div className={showHours ? "grid gap-8 lg:grid-cols-[1.4fr_0.6fr]" : undefined}>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {locations.map((l) => (
              <li
                key={l.slug}
                className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
              >
                <div className="flex h-16 items-center justify-center bg-gradient-to-br from-slate-200 to-slate-100 text-slate-500">
                  <PinIcon className="h-6 w-6" />
                </div>
                <div className="p-3 text-center">
                  {l.hasDedicatedPage ? (
                    <Link
                      href={`/service-areas/${l.slug}/`}
                      className="text-sm font-bold text-secondary hover:underline"
                    >
                      {l.name}
                    </Link>
                  ) : (
                    <span className="text-sm font-bold text-primary">{l.name}</span>
                  )}
                  {l.tier === "primary" && (
                    <span className="block text-xs text-slate-500">Primary service area</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
          {showHours && (
            <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <h3 className="font-display text-2xl font-bold uppercase text-primary">
                Hours and contact
              </h3>
              <dl className="mt-3 space-y-2 text-sm">
                {clientConfig.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-3">
                    <dt className="font-semibold text-slate-700">{h.days}</dt>
                    <dd className="text-right text-slate-600">{h.hours}</dd>
                  </div>
                ))}
                <div className="flex justify-between gap-3">
                  <dt className="font-semibold text-slate-700">Emergency dispatch</dt>
                  <dd className="text-right text-slate-600">24/7, every day</dd>
                </div>
              </dl>
              <p className="mt-4 text-sm">
                <a href={telHref(clientConfig.phone)} className="font-bold text-secondary hover:underline">
                  {clientConfig.phoneDisplay}
                </a>
                <br />
                <a href={`mailto:${clientConfig.email}`} className="text-secondary hover:underline">
                  {clientConfig.email}
                </a>
              </p>
            </aside>
          )}
        </div>
        <p className="mt-6 text-center text-sm text-slate-700">
          Not sure we cover your address?{" "}
          <a href={telHref(clientConfig.phone)} className="font-bold text-secondary hover:underline">
            Call to confirm coverage →
          </a>
        </p>
        {crossLink && (
          <p className="mt-2 text-center text-sm text-slate-700">
            {crossLink.text}{" "}
            <Link href={crossLink.href} className="font-bold text-secondary hover:underline">
              {crossLink.label} →
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
