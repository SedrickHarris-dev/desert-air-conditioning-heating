export type Credential = {
  label: string;
  status: "placeholder" | "verified";
};

export type HoursRow = { days: string; hours: string };

export type ClientConfig = {
  name: string;
  domain: string;
  url: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  city: string;
  state: string;
  hasPublicAddress: boolean;
  hours: HoursRow[];
  emergencyDispatch: string;
  credentials: Credential[];
  social: Record<string, string>;
  reviewUrl: string | null;
  isDemo: boolean;
};
