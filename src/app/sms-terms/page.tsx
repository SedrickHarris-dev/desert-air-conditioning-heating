import { ProsePage } from "@/components/templates/ProsePage";
import { consentConfig } from "@/config/consent";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "SMS Terms",
  description: "Text-message terms for Las Vegas Pro Plumbing.",
  path: "/sms-terms",
});

export default function SmsTermsPage() {
  return (
    <ProsePage title="SMS Terms">
      <p className="rounded-md bg-accent/20 p-4 text-sm">
        Draft template for a demo site. Not legal advice; have counsel review
        before launch.
      </p>
      <h2>Consent</h2>
      <p>{consentConfig.smsConsentText}</p>
      <h2>Opting out</h2>
      <p>Reply STOP at any time to stop receiving text messages.</p>
    </ProsePage>
  );
}
