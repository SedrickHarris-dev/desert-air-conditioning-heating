import type { ReactNode } from "react";
import { PageHeader } from "./PageHeader";

export function ProsePage({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <>
      <PageHeader title={title} description={description} />
      <div className="mx-auto max-w-3xl space-y-4 px-4 py-12 text-slate-700 [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-3xl [&_h2]:font-bold [&_h2]:uppercase [&_h2]:text-primary [&_a]:text-secondary [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6">
        {children}
      </div>
    </>
  );
}
