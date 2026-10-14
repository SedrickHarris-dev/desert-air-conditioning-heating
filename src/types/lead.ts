export type LeadInput = {
  name: string;
  phone: string;
  email?: string;
  service?: string;
  /** Business or property name (commercial forms). */
  company?: string;
  message?: string;
  smsConsent: boolean;
  source: string;
};

export type LeadValidation =
  | { ok: true; data: LeadInput }
  | { ok: false; errors: Record<string, string> };
