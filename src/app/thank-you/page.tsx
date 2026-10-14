import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/Button";
import { bookingConfig } from "@/config/booking";
import { clientConfig } from "@/config/client";
import { telHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Thank You",
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-5xl font-bold uppercase text-primary">
        Thank You
      </h1>
      <p className="mt-3 text-slate-700">{bookingConfig.confirmationMessage}</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <ButtonLink href={telHref(clientConfig.phone)}>
          Call {clientConfig.phoneDisplay}
        </ButtonLink>
        <ButtonLink href="/" variant="outline-dark">
          Back to Home
        </ButtonLink>
      </div>
    </section>
  );
}
