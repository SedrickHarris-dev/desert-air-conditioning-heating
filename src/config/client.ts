import type { ClientConfig } from "@/types/client";

// Las Vegas Pro Plumbing is a fictional demo client. Credentials are
// placeholders and must never be rendered as verified until real
// license/bond/insurance details are supplied.
export const clientConfig: ClientConfig = {
  name: "Las Vegas Pro Plumbing",
  domain: "lasvegasproplumbing.com",
  url: "https://lasvegasproplumbing.com",
  phone: "+18883083262",
  phoneDisplay: "(888) 308-3262",
  email: "contact@lasvegasproplumbing.com",
  city: "Las Vegas",
  state: "NV",
  hasPublicAddress: false,
  hours: [
    { days: "Monday–Friday", hours: "7:00 AM–6:00 PM" },
    { days: "Saturday", hours: "8:00 AM–4:00 PM" },
    { days: "Sunday", hours: "Closed for routine appointments" },
  ],
  emergencyDispatch: "24/7 emergency dispatch every day",
  credentials: [
    { label: "Nevada State Contractor's License", status: "placeholder" },
    { label: "Bonded", status: "placeholder" },
    { label: "Insured", status: "placeholder" },
  ],
  social: {},
  reviewUrl: null,
  isDemo: true,
};
