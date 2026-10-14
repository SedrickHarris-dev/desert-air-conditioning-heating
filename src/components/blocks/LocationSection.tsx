import Link from "next/link";
import { locations } from "@/content/locations";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function LocationSection() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading
          eyebrow="Where We Work"
          title="Serving the Las Vegas Valley"
          description="Based in Las Vegas, with coverage across these nearby communities."
        />
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {locations.map((l) => {
            const base =
              "block rounded-full border px-4 py-2.5 text-center text-sm font-bold";
            return (
              <li key={l.slug}>
                {l.hasDedicatedPage ? (
                  <Link
                    href={`/service-areas/${l.slug}`}
                    className={`${base} border-primary bg-primary text-white hover:bg-secondary`}
                  >
                    {l.name}, {l.state}
                  </Link>
                ) : (
                  <span className={`${base} border-slate-300 bg-white text-primary`}>
                    {l.name}, {l.state}
                  </span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
