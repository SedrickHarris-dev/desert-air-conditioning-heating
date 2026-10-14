import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PathIcon } from "@/components/ui/PathIcon";
import { cn } from "@/lib/utils";

type Item = { title: string; body: string; cta: string; href: string; label?: string; path?: string };

const columnClass = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
  5: "sm:grid-cols-2 lg:grid-cols-5",
} as const;

/** Decision cards that route the visitor to a page or an on-page anchor. */
export function RouteCards({
  id,
  eyebrow,
  title,
  intro,
  items,
  columns,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  items: Item[];
  columns?: 2 | 3 | 4 | 5;
}) {
  const cols = columns ?? (items.length >= 5 ? 5 : items.length === 4 ? 4 : items.length === 2 ? 2 : 3);
  return (
    <section id={id} className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={eyebrow} title={title} description={intro} />
        <ul className={cn("grid gap-5", columnClass[cols])}>
          {items.map((r) => (
            <li key={r.title}>
              <Link
                href={r.href}
                className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-secondary hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                {r.path && (
                  <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <PathIcon path={r.path} className="h-5 w-5" />
                  </span>
                )}
                {r.label && (
                  <span className="text-xs font-bold uppercase tracking-widest text-secondary">{r.label}</span>
                )}
                <h3 className="font-display text-2xl font-bold uppercase text-primary">{r.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{r.body}</p>
                <span className="mt-4 text-sm font-bold text-secondary group-hover:underline">{r.cta} →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
