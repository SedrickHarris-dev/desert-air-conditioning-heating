import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Item = {
  label: string;
  title: string;
  body: string;
  link?: { href: string; label: string };
};

/** Side-by-side "which one do I need?" cards. */
export function ComparisonSection({
  id,
  eyebrow,
  title,
  intro,
  items,
  footnote,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  items: Item[];
  footnote?: string;
}) {
  return (
    <section id={id} className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={eyebrow} title={title} description={intro} />
        <div className="grid gap-5 md:grid-cols-2">
          {items.map((i) => (
            <article key={i.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-secondary">{i.label}</p>
              <h3 className="mt-1 font-display text-2xl font-bold uppercase text-primary">{i.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{i.body}</p>
              {i.link && (
                <Link href={i.link.href} className="mt-3 inline-block text-sm font-bold text-secondary hover:underline">
                  {i.link.label} →
                </Link>
              )}
            </article>
          ))}
        </div>
        {footnote && <p className="mt-6 text-center text-sm text-slate-600">{footnote}</p>}
      </div>
    </section>
  );
}
