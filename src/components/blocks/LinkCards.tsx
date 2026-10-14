import Link from "next/link";
import type { LinkCardItem } from "@/types/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

/** Cards that route to other pages (related services, audience routes). */
export function LinkCards({
  id,
  eyebrow,
  title,
  intro,
  items,
  more,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  items: LinkCardItem[];
  more?: { prompt: string; href: string; label: string };
}) {
  return (
    <section id={id} className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={eyebrow} title={title} description={intro} />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <li
              key={s.href}
              className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative flex h-36 items-center justify-center bg-gradient-to-br from-slate-200 to-slate-100 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Image placeholder
                {s.badge && (
                  <span className="absolute left-3 top-3 rounded bg-accent px-2 py-1 text-xs font-extrabold text-primary">
                    {s.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-2xl font-bold uppercase text-primary">{s.name}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{s.desc}</p>
                <Link href={s.href} className="mt-4 text-sm font-bold text-secondary hover:underline">
                  {s.cta} →
                </Link>
              </div>
            </li>
          ))}
        </ul>
        {more && (
          <div className="mt-10 text-center">
            <p className="text-slate-700">{more.prompt}</p>
            <ButtonLink href={more.href} variant="primary" className="mt-3">
              {more.label} →
            </ButtonLink>
          </div>
        )}
      </div>
    </section>
  );
}
