import type { TileItem } from "@/types/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PathIcon } from "@/components/ui/PathIcon";

export function IconTiles({
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
  items: TileItem[];
}) {
  return (
    <section id={id} className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={eyebrow} title={title} description={intro} />
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((t) => (
            <li
              key={t.name}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              {t.path && (
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <PathIcon path={t.path} className="h-5 w-5" />
                </span>
              )}
              <span className="text-sm font-bold text-primary">{t.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
