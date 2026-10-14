import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "accent" | "outline" | "primary" | "outline-dark";

const variants: Record<Variant, string> = {
  accent: "bg-accent text-primary hover:brightness-95",
  outline: "border-2 border-white/80 text-white hover:bg-white/10",
  primary: "bg-primary text-white hover:bg-secondary",
  "outline-dark": "border-2 border-primary text-primary hover:bg-primary/5",
};

export function ButtonLink({
  href,
  variant = "accent",
  className,
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-base font-bold transition",
    variants[variant],
    className,
  );
  const external = href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");
  return external ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
