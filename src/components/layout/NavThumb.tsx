import Image from "next/image";
import type { NavFeature } from "@/config/navigation";
import { PathIcon } from "@/components/ui/PathIcon";

/** Thumbnail for a mega menu card: real image when supplied, else an icon placeholder. */
export function NavThumb({ feature }: { feature: NavFeature }) {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-gradient-to-br from-slate-200 to-slate-100">
      {feature.image ? (
        <Image
          src={feature.image.src}
          alt={feature.image.alt}
          width={320}
          height={180}
          sizes="220px"
          className="h-full w-full object-cover"
        />
      ) : (
        <span className="absolute inset-0 flex items-center justify-center text-primary/70">
          {feature.path && <PathIcon path={feature.path} className="h-8 w-8" />}
        </span>
      )}
      {feature.badge && (
        <span className="absolute left-2 top-2 rounded bg-accent px-2 py-0.5 text-xs font-extrabold text-primary">
          {feature.badge}
        </span>
      )}
    </div>
  );
}
