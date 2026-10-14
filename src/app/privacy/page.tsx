import { ProsePage } from "@/components/templates/ProsePage";
import { clientConfig } from "@/config/client";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Las Vegas Pro Plumbing handles information you submit.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <ProsePage title="Privacy Policy">
      <p className="rounded-md bg-accent/20 p-4 text-sm">
        Draft template for a demo site. Not legal advice; have counsel review
        before launch.
      </p>
      <h2>Information we collect</h2>
      <p>
        When you submit a request, we collect the details you provide, such as
        your name, phone number, email address, the service you need and any
        message you include.
      </p>
      <h2>How we use it</h2>
      <p>
        We use this information to respond to your request and provide plumbing
        service. If you opt in to text messages, we use your number to send
        messages about your request.
      </p>
      <h2>Contact</h2>
      <p>
        Questions? Email{" "}
        <a href={`mailto:${clientConfig.email}`}>{clientConfig.email}</a>.
      </p>
    </ProsePage>
  );
}
