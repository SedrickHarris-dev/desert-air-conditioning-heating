"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { clientConfig } from "@/config/client";
import { contactLink, type NavItem } from "@/config/navigation";
import { telHref } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/icons";

const row =
  "block rounded px-3 py-2.5 text-base font-semibold text-slate-800 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-secondary";

/**
 * Mobile menu. Uses native <details> so it works without JavaScript; state is
 * controlled only so it closes after navigation.
 */
export function MobileMenu({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;

  return (
    <details
      className="relative lg:hidden"
      open={open}
      onToggle={(e) => setOpenPath((e.currentTarget as HTMLDetailsElement).open ? pathname : null)}
    >
      <summary className="cursor-pointer list-none rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-primary">
        Menu
      </summary>
      <nav
        aria-label="Mobile"
        className="absolute right-0 mt-3 max-h-[calc(100dvh-5rem)] w-[min(22rem,calc(100vw-2rem))] overflow-y-auto rounded-lg border border-slate-200 bg-white p-2 shadow-xl"
      >
        <ul>
          {items.map((item) =>
            item.type === "link" ? (
              <li key={item.href}>
                <Link href={item.href} className={row}>
                  {item.label}
                </Link>
              </li>
            ) : (
              <li key={item.id}>
                <details className="group">
                  <summary className={`${row} flex cursor-pointer list-none items-center justify-between`}>
                    {item.label}
                    <span aria-hidden="true" className="text-secondary transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="pb-2 pl-3">
                    <Link href={item.href} className="block px-3 py-2 text-sm font-bold text-secondary">
                      All {item.label.toLowerCase()} →
                    </Link>
                    {item.features.map((f) => (
                      <div key={f.label} className="mt-1">
                        <Link href={f.href} className="block px-3 py-1.5 text-sm font-bold text-primary">
                          {f.label}
                          {f.badge && (
                            <span className="ml-2 rounded bg-accent px-1.5 py-0.5 text-xs font-extrabold">
                              {f.badge}
                            </span>
                          )}
                        </Link>
                        {f.links && f.links.length > 1 && (
                          <ul>
                            {f.links.map((l) => (
                              <li key={l.href}>
                                <Link href={l.href} className="block px-6 py-1.5 text-sm text-slate-700 hover:text-secondary">
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </details>
              </li>
            ),
          )}
          <li>
            <Link href={contactLink.href} className={row}>
              {contactLink.label}
            </Link>
          </li>
        </ul>
        <div className="mt-2 grid gap-2 border-t border-slate-100 p-2 sm:hidden">
          <ButtonLink href={telHref(clientConfig.phone)} className="!py-2.5">
            <PhoneIcon className="h-4 w-4" />
            {clientConfig.phoneDisplay}
          </ButtonLink>
        </div>
      </nav>
    </details>
  );
}
