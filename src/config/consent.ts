import type { ConsentConfig } from "@/types/consent";
import { clientConfig } from "./client";

export const consentConfig: ConsentConfig = {
  smsConsentText: `I agree to receive text messages from ${clientConfig.name} about my service request. Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Consent is not a condition of purchase.`,
  smsTermsPath: "/sms-terms",
  privacyPath: "/privacy",
};
