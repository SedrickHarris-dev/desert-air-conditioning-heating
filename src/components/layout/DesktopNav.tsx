"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { NavItem } from "@/config/navigation";
import { NavThumb } from "./NavThumb";

type Mega = Extract<NavItem, { type: "mega" }>;

const linkClass =
  "whitespace-nowrap rounded px-1 py-2 text-sm font-semibold text-slate-700 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary";

function Panel({
  item,
  communities,
  open,
  close,
}: {
  item: Mega;
  communities: string[];
  open: boolean;
  close: () => void;
}) {
  return (
    <div
      id={`mega-${item.id}`}
      hidden={!open}
      className="absolute inset-x-0 top-full border-b border-slate-200 bg-white shadow-xl"
    >
      <div className="mx-auto max-w-6xl px-4 py-6">
        <ul
          className={`grid gap-5 ${
            item.features.length >= 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"
          }`}
        >
          {item.features.map((f) => (
            <li key={f.label}>
              <Link href={f.href} onClick={close} className="group block focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                <NavThumb feature={f} />
                <span className="mt-3 block font-display text-xl font-bold uppercase leading-tight text-primary group-hover:text-secondary">
                  {f.label}
                </span>
                {f.description && (
                  <span className="mt-1 block text-sm text-slate-600">{f.description}</span>
                )}
              </Link>
              {f.links && (
                <ul className="mt-3 space-y-1 border-t border-slate-100 pt-3">
                  {f.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        onClick={close}
                        className="text-sm font-semibold text-secondary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          {item.showCommunities && (
            <li className="rounded-lg bg-slate-50 p-4 lg:col-span-2">
              <p className="font-display text-xl font-bold uppercase text-primary">Also serving</p>
              <p className="mt-2 text-sm text-slate-700">{communities.join(", ")}</p>
              <p className="mt-3 text-xs text-slate-500">
                Not sure we cover your address? Call to confirm coverage.
              </p>
            </li>
          )}
        </ul>
        {item.footer && (
          <div className="mt-5 border-t border-slate-100 pt-4">
            <Link
              href={item.footer.href}
              onClick={close}
              className="text-sm font-bold text-secondary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              {item.footer.label} →
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Desktop navigation with mega menus. Each mega item is a real link to its
 * hub page plus a chevron button that toggles the panel, so the menu still
 * works as plain links without JavaScript. Panels open on hover or click and
 * close on Escape, outside click, focus leaving, or navigation.
 */
export function DesktopNav({ items, communities }: { items: NavItem[]; communities: string[] }) {
  const pathname = usePathname();
  // Open state is tied to the pathname it was opened on, so navigating
  // closes the menu without an effect.
  const [open, setOpen] = useState<{ id: string; path: string } | null>(null);
  const openId = open && open.path === pathname ? open.id : null;
  const navRef = useRef<HTMLElement>(null);
  const buttons = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    if (!openId) return;
    const onDown = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        buttons.current[openId]?.focus();
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openId]);

  return (
    <nav ref={navRef} aria-label="Main" className="hidden items-stretch gap-2 lg:flex xl:gap-5">
      {items.map((item) => {
        if (item.type === "link") {
          return (
            <div key={item.href} className="flex items-center">
              <Link href={item.href} className={linkClass}>
                {item.label}
              </Link>
            </div>
          );
        }
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="flex items-center"
            onMouseEnter={() => setOpen({ id: item.id, path: pathname })}
            onMouseLeave={() => setOpen(null)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setOpen(null);
            }}
          >
            <Link href={item.href} className={linkClass}>
              {item.label}
            </Link>
            <button
              type="button"
              ref={(el) => {
                buttons.current[item.id] = el;
              }}
              aria-expanded={isOpen}
              aria-controls={`mega-${item.id}`}
              aria-label={`${item.label} menu`}
              onClick={() => setOpen(isOpen ? null : { id: item.id, path: pathname })}
              className="rounded p-1.5 text-slate-700 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className={`h-4 w-4 transition-transform motion-reduce:transition-none ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <Panel item={item} communities={communities} open={isOpen} close={() => setOpen(null)} />
          </div>
        );
      })}
    </nav>
  );
}
