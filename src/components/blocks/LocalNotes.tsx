import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Note = { title: string; body: string; href: string; link: string };

/** Market-specific notes that keep location pages from being city-swapped copies. */
export function LocalNotes({
  id,
  eyebrow,
  title,
  intro,
  items,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  items: Note[];
}) {
  return (
    <section id={id} className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={eyebrow} title={title} description={intro} />
        <ul className="grid gap-5 md:grid-cols-3">
          {items.map((n) => (
            <li key={n.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="font-display text-2xl font-bold uppercase text-primary">{n.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{n.body}</p>
              <Link href={n.href} className="mt-3 inline-block text-sm font-bold text-secondary hover:underline">
                {n.link} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
