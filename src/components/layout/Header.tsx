import Link from "next/link";
import { clientConfig } from "@/config/client";
import { mainNav } from "@/config/navigation";
import { locations } from "@/content/locations";
import { telHref } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/icons";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

// Communities without their own page are listed as text in the Service Areas
// menu; communities with a page are linked from their feature card.
const communities = locations
  .filter((l) => !l.hasDedicatedPage)
  .map((l) => l.name);

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-stretch justify-between gap-4 px-4">
        <Link
          href="/"
          className="flex items-center py-3 font-display text-xl font-bold uppercase leading-none text-primary whitespace-nowrap xl:text-2xl"
        >
          <span>
            Las Vegas <span className="text-secondary">Pro Plumbing</span>
          </span>
        </Link>

        <DesktopNav items={mainNav} communities={communities} />

        <div className="flex items-center gap-3 py-3">
          <Link
            href="/contact"
            className="hidden whitespace-nowrap rounded px-1 py-2 text-sm font-bold text-secondary xl:ml-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary xl:inline"
          >
            Request Service
          </Link>
          <ButtonLink
            href={telHref(clientConfig.phone)}
            className="max-sm:!hidden whitespace-nowrap !px-4 !py-2 text-sm"
          >
            <PhoneIcon className="h-4 w-4" />
            <span className="lg:max-xl:hidden">{clientConfig.phoneDisplay}</span>
            <span className="hidden lg:max-xl:inline">Call now</span>
          </ButtonLink>
          <MobileMenu items={mainNav} />
        </div>
      </div>
    </header>
  );
}
