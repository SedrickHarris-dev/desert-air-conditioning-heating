import type { CardItem } from "@/types/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PathIcon } from "@/components/ui/PathIcon";
import { cn } from "@/lib/utils";

const columnClass = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
} as const;

export function InfoCards({
  id,
  eyebrow,
  title,
  intro,
  items,
  columns,
  tone = "light",
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  items: CardItem[];
  columns?: 2 | 3 | 4;
  tone?: "light" | "tinted";
}) {
  const cols = columns ?? (items.length === 4 ? 4 : 3);
  return (
    <section id={id} className={cn("py-16", tone === "tinted" && "bg-slate-50")}>
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={eyebrow} title={title} description={intro} />
        <ul className={cn("grid gap-5", columnClass[cols])}>
          {items.map((c) => (
            <li key={c.title} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              {c.path && (
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <PathIcon path={c.path} className="h-5 w-5" />
                </span>
              )}
              <h3 className="font-display text-2xl font-bold uppercase text-primary">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
