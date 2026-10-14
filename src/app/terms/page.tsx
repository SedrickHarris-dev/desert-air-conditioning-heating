import { ProsePage } from "@/components/templates/ProsePage";
import { clientConfig } from "@/config/client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms for using the Las Vegas Pro Plumbing website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <ProsePage title="Terms of Service">
      <p className="rounded-md bg-accent/20 p-4 text-sm">
        Draft template for a demo site. Not legal advice; have counsel review
        before launch.
      </p>
      <h2>Use of this site</h2>
      <p>
        This website provides general information about the plumbing services
        offered by {clientConfig.name}. Submitting a request does not
        guarantee service or create a contract.
      </p>
      <h2>Contact</h2>
      <p>
        Questions? Email{" "}
        <a href={`mailto:${clientConfig.email}`}>{clientConfig.email}</a>.
      </p>
    </ProsePage>
  );
}
