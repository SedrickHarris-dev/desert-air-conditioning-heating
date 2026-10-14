import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  paragraphs?: string[];
  items?: Array<{ name: string; desc: string; href: string }>;
  chips?: Array<{ label: string; href: string }>;
  actions?: Array<{ label: string; href: string; variant?: "primary" | "outline-dark" }>;
  tinted?: boolean;
};

/** A category of related services: cards, quick links and optional actions. */
export function ServiceGroup({ id, eyebrow, title, intro, paragraphs, items, chips, actions, tinted }: Props) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 ${tinted ? "bg-slate-50" : ""}`}>
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={eyebrow} title={title} description={intro} />
        {paragraphs && (
          <div className="mx-auto mb-8 max-w-3xl space-y-3 text-center text-slate-700">
            {paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        )}
        {items && (
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((i) => (
              <li key={i.href} className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <h3 className="font-display text-2xl font-bold uppercase text-primary">{i.name}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-600">{i.desc}</p>
                <Link href={i.href} className="mt-4 text-sm font-bold text-secondary hover:underline">
                  Learn more →
                </Link>
              </li>
            ))}
          </ul>
        )}
        {chips && (
          <ul className="mt-6 flex flex-wrap justify-center gap-2">
            {chips.map((c) => (
              <li key={c.label}>
                <Link
                  href={c.href}
                  className="block rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm font-semibold text-secondary hover:border-secondary hover:underline"
                >
                  {c.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
        {actions && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {actions.map((a) => (
              <ButtonLink key={a.label} href={a.href} variant={a.variant ?? "primary"}>
                {a.label}
              </ButtonLink>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
