import Link from "next/link";
import type { Service } from "@/types/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export function ServiceGrid({
  services,
  title,
  eyebrow,
  showViewAll = false,
}: {
  services: Service[];
  title: string;
  eyebrow?: string;
  showViewAll?: boolean;
}) {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <li
              key={s.slug}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-slate-200 to-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Image placeholder
                {s.isEmergency && (
                  <span className="absolute left-3 top-3 rounded bg-accent px-2 py-1 text-xs font-extrabold text-primary">
                    24/7
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-2xl font-bold uppercase text-primary">
                  {s.name}
                </h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{s.summary}</p>
                <Link
                  href={`/services/${s.slug}`}
                  className="mt-4 text-sm font-bold text-secondary hover:underline"
                >
                  {s.cardCta ?? "Learn more"} →
                </Link>
              </div>
            </li>
          ))}
        </ul>
        {showViewAll && (
          <div className="mt-10 text-center">
            <p className="text-slate-700">Need another plumbing service?</p>
            <ButtonLink href="/services" variant="primary" className="mt-3">
              View All Plumbing Services →
            </ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}
