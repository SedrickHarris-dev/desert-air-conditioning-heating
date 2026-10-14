import type { QA } from "@/types/content";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FaqSection({
  id,
  faqs,
  eyebrow = "FAQ",
  title = "Frequently Asked Questions",
}: {
  id?: string;
  faqs: QA[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section id={id} className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow={eyebrow} title={title} />
        <div className="grid items-start gap-4 md:grid-cols-2">
          {faqs.map((f) => (
            <details
              key={f.question}
              className="group rounded-lg border border-slate-200 bg-white p-4"
            >
              <summary className="cursor-pointer list-none font-bold text-primary marker:hidden">
                <span className="flex items-start justify-between gap-3">
                  {f.question}
                  <span
                    aria-hidden="true"
                    className="text-secondary transition group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{f.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
