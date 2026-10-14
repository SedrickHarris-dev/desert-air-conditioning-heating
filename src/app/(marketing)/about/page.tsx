import { ProsePage } from "@/components/templates/ProsePage";
import { FinalCta } from "@/components/blocks/FinalCta";
import { clientConfig } from "@/config/client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About Las Vegas Pro Plumbing",
  description:
    "Las Vegas Pro Plumbing provides residential and commercial plumbing across the Las Vegas valley, with 24/7 emergency dispatch.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <ProsePage
        title="About Us"
        description="Residential and commercial plumbing for the Las Vegas valley."
      >
        <p>
          {clientConfig.name} is a service-area plumbing business serving Las
          Vegas, NV and nearby communities. We handle residential and
          commercial plumbing and offer 24/7 emergency dispatch every day.
        </p>
        <p className="rounded-md bg-accent/20 p-4 text-sm">
          <strong>Demo content:</strong> this is a fictional demo client. The
          company story, team details, years in business and credentials are
          intentionally left blank until the client supplies verified facts.
        </p>
        <h2>Credentials</h2>
        <ul>
          {clientConfig.credentials.map((c) => (
            <li key={c.label}>
              {c.label} #Placeholder (pending verification)
            </li>
          ))}
        </ul>
      </ProsePage>
      <FinalCta />
    </>
  );
}
