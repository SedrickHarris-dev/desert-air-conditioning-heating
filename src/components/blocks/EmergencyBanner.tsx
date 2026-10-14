import { clientConfig } from "@/config/client";
import { telHref } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/icons";

/**
 * Emergency call-to-action. Only render on pages for clients whose emergency
 * policy is verified in config/emergency-routing.ts and client config.
 */
export function EmergencyBanner({
  id,
  title,
  body,
}: {
  id?: string;
  title: string;
  body: string;
}) {
  return (
    <section id={id} className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="rounded-2xl bg-primary px-6 py-10 text-center text-white">
          <h2 className="font-display text-4xl font-bold uppercase sm:text-5xl">{title}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/90">{body}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <ButtonLink href={telHref(clientConfig.phone)}>
              <PhoneIcon className="h-5 w-5" />
              Call for Urgent Plumbing Help
            </ButtonLink>
            <ButtonLink href="/contact/" variant="outline">
              Request Emergency Service
            </ButtonLink>
          </div>
          <p className="mx-auto mt-5 max-w-xl text-xs text-white/75">
            {clientConfig.emergencyDispatch}. Response time depends on technician availability and
            location within the service area.
          </p>
        </div>
      </div>
    </section>
  );
}
