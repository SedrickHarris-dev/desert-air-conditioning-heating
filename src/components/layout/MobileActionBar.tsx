import { clientConfig } from "@/config/client";
import { telHref } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/Button";
import { PhoneIcon } from "@/components/ui/icons";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-slate-200 bg-white p-2 md:hidden">
      <ButtonLink href={telHref(clientConfig.phone)} className="!py-2.5">
        <PhoneIcon className="h-4 w-4" />
        Call Now
      </ButtonLink>
      <ButtonLink href="/contact" variant="primary" className="!py-2.5">
        Request Service
      </ButtonLink>
    </div>
  );
}
