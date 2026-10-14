import { clientConfig } from "@/config/client";
import { telHref } from "@/lib/utils";

export function AnnouncementBar() {
  const license = clientConfig.credentials[0];
  return (
    <div className="bg-primary px-4 py-2 text-center text-xs text-white sm:text-sm">
      <span className="font-bold text-accent">
        24/7 Emergency Service available
      </span>{" "}
      — call{" "}
      <a href={telHref(clientConfig.phone)} className="font-bold underline">
        {clientConfig.phoneDisplay}
      </a>{" "}
      · {license.label} #Placeholder (pending verification)
    </div>
  );
}
