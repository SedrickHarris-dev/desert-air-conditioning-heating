import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center">
      <h1 className="font-display text-5xl font-bold uppercase text-primary">
        Page not found
      </h1>
      <p className="mt-3 text-slate-600">
        We couldn&apos;t find that page. Try the homepage or our services.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <ButtonLink href="/" variant="primary">
          Home
        </ButtonLink>
        <ButtonLink href="/services" variant="outline-dark">
          Services
        </ButtonLink>
      </div>
    </section>
  );
}
