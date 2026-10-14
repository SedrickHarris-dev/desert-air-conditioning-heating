import type { StepItem } from "@/types/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const defaultSteps: StepItem[] = [
  {
    title: "Call or Request Service",
    body: "Call us or send the request form and tell us what's going on.",
  },
  {
    title: "We Confirm & Dispatch",
    body: "We confirm the details and get a technician on the way.",
  },
  {
    title: "Problem Solved",
    body: "Your technician works to fix the issue so you can get back to normal.",
  },
];

export function ProcessSection({
  id,
  eyebrow = "How It Works",
  title = "Simple Steps to Get It Fixed",
  steps = defaultSteps,
  note,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  steps?: StepItem[];
  note?: string;
}) {
  return (
    <section id={id} className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="rounded-xl border border-slate-200 p-6 text-center">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary font-display text-2xl font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl font-bold uppercase text-primary">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{s.body}</p>
            </li>
          ))}
        </ol>
        {note && <p className="mt-6 text-center text-sm font-semibold text-primary">{note}</p>}
      </div>
    </section>
  );
}
