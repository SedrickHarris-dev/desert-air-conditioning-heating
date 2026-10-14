import Link from "next/link";
import { clientConfig } from "@/config/client";
import { footerNav } from "@/config/navigation";
import { telHref } from "@/lib/utils";

export function Footer() {
  const legal =
    clientConfig.credentials.map((c) => `${c.label} #Placeholder`).join(" · ") +
    " (Placeholder — pending verified credentials.)";

  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <p className="font-display text-2xl font-bold uppercase">
            {clientConfig.name}
          </p>
          <p className="mt-3 max-w-xs text-sm text-white/80">
            Residential and commercial plumbing for the Las Vegas valley, with{" "}
            {clientConfig.emergencyDispatch.toLowerCase()}.
          </p>
          <p className="mt-4 text-sm">
            <a href={telHref(clientConfig.phone)} className="font-bold text-accent">
              {clientConfig.phoneDisplay}
            </a>
            <br />
            <a href={`mailto:${clientConfig.email}`} className="text-white/80 underline">
              {clientConfig.email}
            </a>
          </p>
        </div>
        {Object.entries(footerNav).map(([heading, links]) => (
          <nav key={heading} aria-label={heading}>
            <p className="text-sm font-bold uppercase tracking-widest text-accent">
              {heading}
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/80 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="border-t border-white/15 px-4 py-4 text-center text-xs text-white/70">
        <p>{legal}</p>
        <p className="mt-1">
          © {new Date().getFullYear()} {clientConfig.name}. Demo site.
        </p>
      </div>
    </footer>
  );
}
