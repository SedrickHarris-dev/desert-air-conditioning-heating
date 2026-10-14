import { clientConfig } from "@/config/client";
import { testimonials } from "@/content/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

export function ReviewButton() {
  return (
    <div className="text-center">
      <ButtonLink href={clientConfig.reviewUrl ?? "/contact"} variant="primary">
        Leave Us a Review
      </ButtonLink>
      {!clientConfig.reviewUrl && (
        <p className="mt-2 text-xs text-slate-500">
          Placeholder: a Google/Yelp review link will replace this once supplied.
        </p>
      )}
    </div>
  );
}

export function ReviewSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading eyebrow="Reviews" title="What Customers Say" />
        <ul className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <li key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              {t.isPlaceholder && (
                <span className="rounded bg-accent/20 px-2 py-0.5 text-xs font-bold uppercase text-primary">
                  Placeholder
                </span>
              )}
              <p className="mt-3 text-slate-700">“{t.quote}”</p>
              <p className="mt-4 text-sm font-bold text-primary">{t.name}</p>
              <p className="text-xs text-slate-500">{t.detail}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ReviewButton />
        </div>
      </div>
    </section>
  );
}
