// Audience hubs: route commercial and residential visitors to the right service.
// Client implementation layer: copy here is specific to the client and market.

import { clientConfig } from "@/config/client";
import { siteStats } from "./shared";
import type { PageContent } from "@/types/content";

const { name, phoneDisplay: phone } = clientConfig;

export const commercialHubPage: PageContent = {
  meta: {
    title: "Commercial Plumbing in Las Vegas",
    description: `Plumbing for Las Vegas offices, retail and restaurant spaces, apartments and managed properties. Itemized estimate before work. Call ${phone}.`,
    path: "/commercial/",
  },
  hero: {
    title: "Plumbing for",
    accent: "Las Vegas Businesses",
    description: `${name} repairs, maintains, and installs plumbing for offices, retail and restaurant spaces, apartments, and managed properties across the Las Vegas valley, with 24/7 emergency dispatch when a problem can't wait.`,
    proofPoints: [
      {
        label: "24/7 emergency dispatch",
        path: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5l3 3",
      },
      {
        label: "Commercial & managed properties",
        path: "M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M16 21V9h4v12M8 8h.01M8 12h.01M8 16h.01",
      },
      {
        label: "Serving the Las Vegas valley",
        path: "M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
      },
      {
        label: "Licensed plumbing team",
        path: "M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z",
      },
      {
        label: "Itemized estimates first",
        path: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6",
      },
      {
        label: "7 days a week availability",
        path: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
      },
    ],
    formSource: "commercial-hub",
    form: {
      title: "Request Commercial Service",
      intro: "Share a few details about your property and the team will follow up by your preferred contact method.",
      submitLabel: "Request Commercial Service",
      showCompany: true,
    },
  },
  stats: siteStats,
  sections: [
    {
      type: "cards",
      id: "properties",
      eyebrow: "Who we serve",
      title: "Commercial properties we service in Las Vegas",
      intro: "From a single tenant space to a managed multi-unit property, our team handles commercial plumbing repair, installation, and maintenance.",
      columns: 4,
      items: [
        {
          title: "Offices & commercial buildings",
          body: "Repair, maintenance, and installation for tenant spaces and shared building plumbing.",
          path: "M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M16 21V9h4v12M8 8h.01M8 12h.01M8 16h.01",
        },
        {
          title: "Retail & restaurant spaces",
          body: "Plumbing service for storefronts, dining spaces, and kitchens, from fixtures to drains.",
          path: "M3 9l1.5-5h15L21 9M3 9v11h18V9M3 9h18M9 20v-6h6v6",
        },
        {
          title: "Apartments & multi-unit",
          body: "Service for apartment buildings and communities, including water heaters, drains, and sewer lines.",
          path: "M3 21h18M5 21V7l7-4 7 4v14M9 10h.01M15 10h.01M9 14h.01M15 14h.01M10 21v-4h4v4",
        },
        {
          title: "Managed properties",
          body: "A single point of contact for property managers who need dependable plumbing service for the properties they oversee.",
          path: "M9 3h6a1 1 0 0 1 1 1v1h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2V4a1 1 0 0 1 1-1zM9 12l2 2 4-4",
        },
      ],
    },
    {
      type: "links",
      id: "services",
      eyebrow: "What We Do",
      title: "Our Most Requested Plumbing Services for Businesses",
      items: [
        {
          name: "Commercial Plumbing",
          href: "/services/commercial-plumbing/",
          cta: "Explore Commercial Plumbing",
          desc: "Repair, installation, and maintenance for businesses and managed properties.",
        },
        {
          name: "Emergency Plumbing",
          href: "/services/emergency-plumbing/",
          cta: "Get Emergency Help",
          desc: "24/7 response for burst pipes, active leaks, overflowing toilets, sewage backups, and no-hot-water emergencies.",
          badge: "24/7",
        },
        {
          name: "Drain Cleaning",
          href: "/commercial/drain-cleaning/",
          cta: "Explore Commercial Drain Cleaning",
          desc: "Clog removal for sinks, toilets, kitchen, laundry, floor drains, and main lines.",
        },
        {
          name: "Water Heater Services",
          href: "/services/water-heater-services/",
          cta: "Explore Water Heaters",
          desc: "Repair, maintenance, replacement, and installation for tankless, tank, and heat-pump water heaters.",
        },
        {
          name: "Sewer Line Services",
          href: "/services/sewer-line-repair/",
          cta: "Explore Sewer Services",
          desc: "Sewer backups, repair, replacement, trenchless options, and main sewer line clearing.",
        },
      ],
      more: {
        prompt: "Need another plumbing service?",
        href: "/services/",
        label: "View All Plumbing Services",
      },
    },
    {
      type: "emergency",
      id: "emergency",
      title: "Commercial plumbing emergency in Las Vegas?",
      body: "A burst pipe, an active leak, or a backed-up sewer line can disrupt a business quickly. Call for urgent plumbing service. If water is actively leaking, shut off your main water valve first, then call.",
    },
    {
      type: "cards",
      id: "what-to-expect",
      eyebrow: "For owners and property managers",
      title: "What to expect when you call",
      intro: "Whether you manage one building or oversee a managed property, here is how we work.",
      columns: 3,
      items: [
        {
          title: "Itemized estimates",
          body: "You receive an itemized estimate before any work begins, whether it's a repair, an installation, or a larger project.",
          path: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6",
        },
        {
          title: "Clear communication",
          body: "We follow up to confirm details before we dispatch, and we walk you through what was done when the work is finished.",
          path: "M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
        },
        {
          title: "Emergency dispatch every day",
          body: "Urgent plumbing problems don't wait for business hours. Emergency dispatch is available 24/7, every day of the week.",
          path: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5l3 3",
        },
      ],
    },
    {
      type: "steps",
      id: "process",
      eyebrow: "Simple Process",
      title: "How It Works",
      items: [
        {
          title: "Call or Request Service",
          body: "Call us directly or submit a request online with your issue and property location.",
        },
        {
          title: "We Confirm & Dispatch",
          body: "Our team follows up to confirm details and gets a plumber headed your way.",
        },
        {
          title: "Problem Solved",
          body: "We diagnose and fix the issue, and walk you through what was done.",
        },
      ],
    },
    {
      type: "coverage",
      id: "service-area",
      eyebrow: "Service area",
      title: "Commercial service across the Las Vegas valley",
      intro: "Las Vegas is our primary service area. We also serve these valley communities.",
      showHours: true,
    },
    {
      type: "reviews",
      id: "reviews",
    },
    {
      type: "faq",
      id: "faq",
      eyebrow: "Direct answers",
      title: "Commercial plumbing questions in Las Vegas",
      items: [
        {
          question: "What types of commercial properties do you service?",
          answer: `${name} services commercial buildings, including office, retail, and restaurant spaces, as well as apartments and managed properties. If you're not sure your property type is covered, call ${phone} and we'll talk it through.`,
        },
        {
          question: "Do you offer emergency plumbing for businesses?",
          answer: "Yes. 24/7 emergency dispatch is available every day for urgent issues like burst pipes, active leaks, and sewage backups. Actual response time depends on technician availability and your location within the service area.",
        },
        {
          question: "Can you work with property managers?",
          answer: `Yes. We service managed properties, including apartments and commercial buildings, for property managers. Call ${phone} to discuss your property and what you need.`,
        },
        {
          question: "Will I get an estimate before work begins?",
          answer: `Yes. ${name} provides an itemized estimate before any work begins, whether it's a repair, an installation, or a larger project.`,
        },
        {
          question: "What plumbing services are available for businesses?",
          answer: "We offer emergency plumbing, plumbing repair, drain cleaning, hydro jetting, sewer line repair, sewer camera inspection, water heater services, leak detection, repiping, plumbing fixtures, water treatment, and commercial plumbing.",
        },
        {
          question: "What are your hours?",
          answer: "Routine appointments are available Monday to Friday from 7am to 6pm and Saturday from 8am to 4pm. We're closed Sundays for routine appointments, and emergency dispatch runs 24/7.",
        },
        {
          question: "What should I do if a main drain or sewer line backs up at my business?",
          answer: `Call ${phone} for emergency dispatch. Drain cleaning covers main lines, and our sewer services cover backups, repair, and main sewer line clearing. If you can do so safely, stop using the affected fixtures until help arrives.`,
        },
        {
          question: "Can you inspect a sewer line with a camera?",
          answer: "Yes. A sewer camera inspection sends a video camera through your sewer line to show blockages, cracks, root intrusion, or other damage, so any recommended repair is based on what the camera actually finds.",
        },
        {
          question: "Which areas do you serve?",
          answer: `Las Vegas is our primary service area. We also serve Henderson, North Las Vegas, Enterprise, Spring Valley, Paradise, Summerlin, and Sunrise Manor. If you're not sure your address is covered, call ${phone} to confirm.`,
        },
        {
          question: "How do I request commercial plumbing service?",
          answer: `Call ${phone} or fill out the Request Commercial Service form on this page with your contact details, ZIP code, and a short description of the issue. Choose phone, text, or email as your preferred way to be contacted.`,
        },
      ],
    },
  ],
  finalCta: {
    title: "Need a commercial plumber in Las Vegas?",
    body: "Tell us about your property and what's going on, and we'll point you to the right service. Call now or send a request.",
  },
};

export const residentialHubPage: PageContent = {
  meta: {
    title: "Residential Plumbing in Las Vegas",
    description: `Plumbing for Las Vegas single-family homes, condos and apartments: emergency repair, drains, water heaters. Itemized estimate first. Call ${phone}.`,
    path: "/residential/",
  },
  hero: {
    title: "Residential Plumbing for",
    accent: "Las Vegas Homes",
    description: `${name} repairs, maintains, and installs plumbing for single-family homes, condos, and apartments across the Las Vegas valley, with 24/7 emergency dispatch when a problem can't wait.`,
    proofPoints: [
      {
        label: "24/7 emergency dispatch",
        path: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5l3 3",
      },
      {
        label: "Homes, condos & apartments",
        path: "M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M16 21V9h4v12M8 8h.01M8 12h.01M8 16h.01",
      },
      {
        label: "Serving the Las Vegas valley",
        path: "M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
      },
      {
        label: "Licensed plumbing team",
        path: "M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z",
      },
      {
        label: "Itemized estimates first",
        path: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6",
      },
      {
        label: "7 days a week availability",
        path: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
      },
    ],
    formSource: "residential-hub",
    form: {
      title: "Request Residential Service",
      intro: "Share a few details about your home and the team will follow up by your preferred contact method.",
      submitLabel: "Request Residential Service",
    },
  },
  stats: siteStats,
  sections: [
    {
      type: "cards",
      id: "properties",
      eyebrow: "Who we serve",
      title: "Residential properties we service in Las Vegas",
      intro: "From a single-family home to a condo or apartment, our team handles plumbing repair, installation, and maintenance.",
      columns: 4,
      items: [
        {
          title: "Single-family homes",
          body: "Repairs, fixture upgrades, drain and water heater service for houses across the valley.",
          path: "M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6",
        },
        {
          title: "Condos",
          body: "Plumbing service for condo units, from fixtures and leaks to drains and water heaters.",
          path: "M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M16 21V9h4v12M8 8h.01M8 12h.01M8 16h.01",
        },
        {
          title: "Apartments",
          body: "Service for apartment homes, including drains, leaks, and water heaters.",
          path: "M3 21h18M5 21V7l7-4 7 4v14M9 10h.01M15 10h.01M9 14h.01M15 14h.01M10 21v-4h4v4",
        },
        {
          title: "Multifamily properties",
          body: "Plumbing support for multifamily buildings, with clear recommendations and dependable service.",
          path: "M9 3h6a1 1 0 0 1 1 1v1h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2V4a1 1 0 0 1 1-1zM9 12l2 2 4-4",
        },
      ],
    },
    {
      type: "links",
      id: "services",
      eyebrow: "What We Do",
      title: "Our Most Requested Plumbing Services for Homeowners",
      items: [
        {
          name: "Emergency Plumbing",
          href: "/services/emergency-plumbing/",
          cta: "Get Emergency Help",
          desc: "24/7 response for burst pipes, active leaks, overflowing toilets, sewage backups, and no-hot-water emergencies.",
          badge: "24/7",
        },
        {
          name: "Drain Cleaning",
          href: "/services/drain-cleaning/",
          cta: "Explore Drain Cleaning",
          desc: "Clog removal for sinks, toilets, kitchen, laundry, floor drains, and main lines.",
        },
        {
          name: "Water Heater Services",
          href: "/services/water-heater-services/",
          cta: "Explore Water Heaters",
          desc: "Repair, maintenance, replacement, and installation for tankless, tank, and heat-pump water heaters.",
        },
        {
          name: "Plumbing Repair",
          href: "/services/plumbing-repair/",
          cta: "Explore Plumbing Repair",
          desc: "Diagnosis and repair for leaking faucets, running toilets, and everyday plumbing problems.",
        },
      ],
      more: {
        prompt: "Need another plumbing service?",
        href: "/services/",
        label: "View All Plumbing Services",
      },
    },
    {
      type: "emergency",
      id: "emergency",
      title: "Plumbing emergency at your Las Vegas home?",
      body: "A burst pipe, an active leak, or a backed-up sewer line can turn into water damage quickly. Call for urgent plumbing service. If water is actively leaking, shut off your main water valve first, then call.",
    },
    {
      type: "cards",
      id: "what-to-expect",
      eyebrow: "For homeowners and residents",
      title: "What to expect when you call",
      intro: "Whether it is a quick repair or a bigger project, here is how we work.",
      columns: 3,
      items: [
        {
          title: "Itemized estimates",
          body: "You receive an itemized estimate before any work begins, whether it's a repair, an installation, or a larger project.",
          path: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6",
        },
        {
          title: "Clear communication",
          body: "We follow up to confirm details before we dispatch, and we walk you through what was done when the work is finished.",
          path: "M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
        },
        {
          title: "Emergency dispatch every day",
          body: "Urgent plumbing problems don't wait for business hours. Emergency dispatch is available 24/7, every day of the week.",
          path: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5l3 3",
        },
      ],
    },
    {
      type: "steps",
      id: "process",
      eyebrow: "Simple Process",
      title: "How It Works",
      items: [
        {
          title: "Call or Request Service",
          body: "Call us directly or submit a request online with your issue and home address.",
        },
        {
          title: "We Confirm & Dispatch",
          body: "Our team follows up to confirm details and gets a plumber headed your way.",
        },
        {
          title: "Problem Solved",
          body: "We diagnose and fix the issue, and walk you through what was done.",
        },
      ],
    },
    {
      type: "coverage",
      id: "service-area",
      eyebrow: "Service area",
      title: "Residential service across the Las Vegas valley",
      intro: "Las Vegas is our primary service area. We also serve these valley communities.",
      showHours: true,
    },
    {
      type: "reviews",
      id: "reviews",
    },
    {
      type: "faq",
      id: "faq",
      eyebrow: "Direct answers",
      title: "Residential plumbing questions in Las Vegas",
      items: [
        {
          question: "What types of residential properties do you service?",
          answer: `${name} services single-family homes, condos, apartments, and multifamily properties. If you're not sure your property type is covered, call ${phone} and we'll talk it through.`,
        },
        {
          question: "Do you offer emergency plumbing for homes?",
          answer: "Yes. 24/7 emergency dispatch is available every day for urgent issues like burst pipes, active leaks, overflowing toilets, and sewage backups. Actual response time depends on technician availability and your location within the service area.",
        },
        {
          question: "Will I get an estimate before work begins?",
          answer: `Yes. ${name} provides an itemized estimate before any work begins, whether it's a repair, an installation, or a larger project like repiping.`,
        },
        {
          question: "What plumbing services are available for homeowners?",
          answer: "We offer emergency plumbing, plumbing repair, drain cleaning, hydro jetting, sewer line repair, sewer camera inspection, water heater services, leak detection, repiping, plumbing fixtures, and water treatment.",
        },
        {
          question: "What are your hours?",
          answer: "Routine appointments are available Monday to Friday from 7am to 6pm and Saturday from 8am to 4pm. We're closed Sundays for routine appointments, and emergency dispatch runs 24/7.",
        },
        {
          question: "What should I do if a drain or toilet backs up at home?",
          answer: `Call ${phone} for emergency dispatch. Overflowing toilets and sewage backups are covered by our emergency plumbing service. If you can do so safely, stop using the affected fixtures until help arrives.`,
        },
        {
          question: "Can you find a hidden leak?",
          answer: "Yes. Leak detection locates hidden and slab leaks before they cause water damage or a higher water bill.",
        },
        {
          question: "Do you work on water heaters?",
          answer: "Yes. We offer repair, maintenance, replacement, and installation for tankless, tank, and heat-pump water heaters.",
        },
        {
          question: "Which areas do you serve?",
          answer: `Las Vegas is our primary service area. We also serve Henderson, North Las Vegas, Enterprise, Spring Valley, Paradise, Summerlin, and Sunrise Manor. If you're not sure your address is covered, call ${phone} to confirm.`,
        },
        {
          question: "How do I request residential plumbing service?",
          answer: `Call ${phone} or fill out the Request Residential Service form on this page with your contact details, ZIP code, and a short description of the issue. Choose phone, text, or email as your preferred way to be contacted.`,
        },
      ],
    },
  ],
  finalCta: {
    title: "Need a plumber for your Las Vegas home?",
    body: "Tell us what's going on at your home, and we'll point you to the right service. Call now or send a request.",
  },
};
