import type { StatItem } from "@/types/content";

export function TrustStrip({ stats }: { stats: StatItem[] }) {
  return (
    <section aria-label="At a glance" className="bg-slate-900 text-white">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 px-4 lg:grid-cols-4">
        {stats.map((s) => (
          <li
            key={s.label}
            className="border-white/10 px-3 py-5 text-center odd:border-r lg:border-r lg:last:border-r-0"
          >
            <p className="font-display text-3xl font-extrabold leading-none">{s.value}</p>
            <p className="mt-1 text-xs text-slate-300">{s.label}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
