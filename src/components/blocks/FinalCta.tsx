import { clientConfig } from "@/config/client";
import { telHref } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/icons";

export function FinalCta({
  title = "Ready to Get Your Plumbing Fixed?",
  body = "Call now or request service online — 24/7 emergency dispatch is available every day.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="bg-secondary py-14 text-center text-white">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-display text-4xl font-bold uppercase sm:text-5xl">
          {title}
        </h2>
        <p className="mt-3 text-sm text-white/90 md:whitespace-nowrap md:text-base">
          {body}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <ButtonLink href={telHref(clientConfig.phone)}>
            <PhoneIcon className="h-5 w-5" />
            Call {clientConfig.phoneDisplay}
          </ButtonLink>
          <ButtonLink href="/contact/" variant="outline">
            Request Service
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
