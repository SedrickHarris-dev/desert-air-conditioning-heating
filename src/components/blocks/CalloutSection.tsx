import Link from "next/link";
import type { StatItem } from "@/types/content";

/** "Why us" panel: short statement, optional link and stat tiles. */
export function CalloutSection({
  id,
  eyebrow,
  title,
  body,
  link,
  stats,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  body: string;
  link?: { href: string; label: string };
  stats?: StatItem[];
}) {
  return (
    <section id={id} className="py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 lg:grid-cols-2">
        <div>
          {eyebrow && <p className="text-sm font-bold uppercase tracking-widest text-secondary">{eyebrow}</p>}
          <h2 className="mt-2 font-display text-4xl font-bold uppercase leading-tight text-primary">{title}</h2>
          <p className="mt-3 text-slate-700">{body}</p>
          {link && (
            <Link href={link.href} className="mt-4 inline-block text-sm font-bold text-secondary hover:underline">
              {link.label} →
            </Link>
          )}
        </div>
        {stats && (
          <ul className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <li key={s.label} className="rounded-xl bg-primary p-5 text-center text-white">
                <p className="font-display text-4xl font-extrabold leading-none text-accent">{s.value}</p>
                <p className="mt-1 text-xs text-white/80">{s.label}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
