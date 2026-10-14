import type { SVGProps } from "react";

/** Renders raw SVG path data (24x24 viewBox) as a decorative stroke icon. */
export function PathIcon({
  path,
  ...props
}: { path: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={path} />
    </svg>
  );
}
