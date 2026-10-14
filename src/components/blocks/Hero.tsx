import { clientConfig } from "@/config/client";
import { telHref } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon, proofIcons } from "@/components/ui/icons";
import { LeadForm } from "@/components/forms/LeadForm";
import { PathIcon } from "@/components/ui/PathIcon";
import type { PageHero } from "@/types/content";

export function Hero({
  eyebrow,
  title,
  accent,
  description,
  proofPoints,
  formSource,
  form,
}: PageHero) {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
        <div>
          {eyebrow && (
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 font-display text-5xl font-bold uppercase leading-[1.02] sm:text-6xl">
            {title}
            {accent && (
              <>
                {" "}
                <span className="text-accent">{accent}</span>
              </>
            )}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/85">{description}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ButtonLink href={telHref(clientConfig.phone)}>
              <PhoneIcon className="h-5 w-5" />
              Call {clientConfig.phoneDisplay}
            </ButtonLink>
            <ButtonLink href="#request-service" variant="outline">
              Request Service
            </ButtonLink>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 md:grid-cols-[repeat(2,max-content)]">
            {proofPoints.map(({ icon, path, label }) => {
              const Icon = icon ? proofIcons[icon] : null;
              return (
                <li
                  key={label}
                  className="flex items-center gap-2 text-sm font-semibold md:whitespace-nowrap"
                >
                  {Icon ? (
                    <Icon className="h-5 w-5 shrink-0 text-accent" />
                  ) : path ? (
                    <PathIcon path={path} className="h-5 w-5 shrink-0 text-accent" />
                  ) : null}
                  {label}
                </li>
              );
            })}
          </ul>
        </div>
        <div id="request-service" className="scroll-mt-24">
          <LeadForm
            idPrefix="hero"
            source={formSource}
            title={form?.title}
            intro={form?.intro}
            submitLabel={form?.submitLabel}
            showCompany={form?.showCompany}
            defaultService={form?.defaultService}
          />
        </div>
      </div>
    </section>
  );
}
