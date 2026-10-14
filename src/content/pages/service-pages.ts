// Full page content for services that have a dedicated, hand-written page.
// Any service without an entry here falls back to buildDefaultServicePage()
// in ./service-defaults.ts, so a client can start small and add pages as
// real content becomes available.

import { clientConfig } from "@/config/client";
import { siteStats } from "./shared";
import type { PageContent } from "@/types/content";

const { name, phoneDisplay: phone } = clientConfig;

export const drainCleaningPage: PageContent = {
  meta: {
    title: "Drain Cleaning in the Las Vegas Valley",
    description: `Drain cleaning, hydro jetting and sewer camera inspection for Las Vegas homes and businesses. Itemized estimate before work. Call ${phone}.`,
    path: "/services/drain-cleaning/",
  },
  hero: {
    title: "Drain Cleaning for Homes and Businesses in the",
    accent: "Las Vegas Valley",
    description: `${name} clears clogs in sinks, showers, tubs, toilets, kitchen, laundry, and floor drains, as well as main lines, for homes, apartments, and commercial buildings across the Las Vegas valley.`,
    proofPoints: [
      {
        label: "24/7 emergency dispatch",
        icon: "clock",
      },
      {
        label: "Residential & commercial",
        icon: "building",
      },
      {
        label: "8 valley communities served",
        icon: "pin",
      },
      {
        label: "Licensed plumbing team",
        icon: "shield",
      },
    ],
    formSource: "service-drain-cleaning",
    form: {
      defaultService: "Drain Cleaning",
    },
  },
  sections: [
    {
      type: "tiles",
      id: "drains",
      eyebrow: "What is included",
      title: "Drains we clear",
      intro: "From a slow kitchen sink to a backed-up main line, drain cleaning covers the drains in your home or building.",
      items: [
        {
          name: "Sinks",
          path: "M4 11h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5zM12 11V6a2 2 0 0 1 4 0",
        },
        {
          name: "Showers",
          path: "M5 3h6a4 4 0 0 1 4 4v2M3 9h14M6 13v1M10 13v1M14 13v1M8 17v1M12 17v1",
        },
        {
          name: "Tubs",
          path: "M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zM6 12V6a2 2 0 0 1 4 0M7 19v2M17 19v2",
        },
        {
          name: "Toilets",
          path: "M7 3h10v5H7zM5 8h14v3a7 7 0 0 1-14 0zM9 18v3h6v-3",
        },
        {
          name: "Kitchen drains",
          path: "M5 3v6a3 3 0 0 0 3 3v9M8 3v6M11 3v6a3 3 0 0 1-3 3M17 3c-2 2-3 5-3 8h3v10",
        },
        {
          name: "Laundry drains",
          path: "M5 3h14v18H5zM5 8h14M12 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
        },
        {
          name: "Floor drains",
          path: "M4 4h16v16H4zM8 8h8v8H8zM10 10v4M12 10v4M14 10v4",
        },
        {
          name: "Main lines",
          path: "M3 9h6v6H3zM15 9h6v6h-6zM9 12h6",
        },
      ],
    },
    {
      type: "comparison",
      id: "method",
      eyebrow: "Choosing the right method",
      title: "Drain cleaning or hydro jetting?",
      intro: "Both clear blockages. The right one depends on what is causing the problem.",
      items: [
        {
          label: "Drain cleaning",
          title: "A typical clog",
          body: "Drain cleaning clears a typical clog using standard tools. It covers the everyday blockages that slow or stop a sink, shower, tub, toilet, or kitchen, laundry, or floor drain, and it is used on main lines too. The goal is to clear the blockage so water drains normally again.",
        },
        {
          label: "Hydro jetting",
          title: "Stubborn buildup",
          body: "Hydro jetting uses high-pressure water to remove stubborn buildup, grease, and root intrusion. It is often used for main line or sewer line issues.",
          link: {
            href: "/services/hydro-jetting/",
            label: "Learn about hydro jetting",
          },
        },
      ],
      footnote: `Not sure which one fits? Call ${phone} or request service and describe the problem.`,
    },
    {
      type: "steps",
      id: "process",
      eyebrow: "Simple process",
      title: "How it works",
      items: [
        {
          title: "Call or Request Service",
          body: "Call us directly or submit a request online with your issue and location.",
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
      note: "You get an itemized estimate before any work begins.",
    },
    {
      type: "links",
      id: "related",
      eyebrow: "Related services",
      title: "Other drain and sewer help",
      items: [
        {
          name: "Hydro Jetting",
          href: "/services/hydro-jetting/",
          cta: "Explore Hydro Jetting",
          desc: "High-pressure water jetting that clears stubborn buildup and roots from drain and sewer lines.",
        },
        {
          name: "Sewer Line Repair",
          href: "/services/sewer-line-repair/",
          cta: "Explore Sewer Repair",
          desc: "Repair for damaged, collapsed, or root-intruded sewer lines serving your home or business.",
        },
        {
          name: "Sewer Camera Inspection",
          href: "/services/sewer-camera-inspection/",
          cta: "Explore Camera Inspection",
          desc: "Video camera inspection that shows exactly what is happening inside your sewer line.",
        },
        {
          name: "Plumbing Repair",
          href: "/services/plumbing-repair/",
          cta: "Explore Plumbing Repair",
          desc: "Diagnosis and repair for leaking faucets, running toilets, and everyday plumbing problems.",
        },
      ],
    },
    {
      type: "coverage",
      id: "service-area",
      eyebrow: "Where we work",
      title: "Eight communities across the Las Vegas valley",
      intro: `${name} serves homes and businesses in Las Vegas and the surrounding valley communities.`,
    },
    {
      type: "emergency",
      id: "emergency",
      title: "Overflowing Toilet or Sewage Backup?",
      body: "Sewage backups and overflowing toilets are covered by our emergency plumbing service, with 24/7 dispatch every day.",
    },
    {
      type: "faq",
      id: "faq",
      eyebrow: "Direct answers",
      title: "Questions about drain cleaning",
      items: [
        {
          question: "What does drain cleaning include?",
          answer: "We clear clogs in sinks, showers, tubs, toilets, kitchen, laundry, and floor drains, as well as main lines. For stubborn buildup, hydro jetting is also available.",
        },
        {
          question: "What is the difference between drain cleaning and hydro jetting?",
          answer: "Drain cleaning clears a typical clog using standard tools. Hydro jetting uses high-pressure water to remove stubborn buildup, grease, and root intrusion, and is often used for main line or sewer line issues.",
        },
        {
          question: "Do you clean main line drains?",
          answer: "Yes. Main lines are part of our drain cleaning service. For main line or sewer line issues, hydro jetting is often used.",
        },
        {
          question: "Can you find out what is causing a clog?",
          answer: "A sewer camera inspection runs a video camera through the sewer line to show blockages, cracks, root intrusion, or other damage, so any recommended repair is based on what the camera actually finds.",
        },
        {
          question: "Can I get an estimate before work begins?",
          answer: `Yes. ${name} provides an itemized estimate before any work begins.`,
        },
        {
          question: "How much does drain cleaning cost?",
          answer: "Cost depends on the service, the scope of the job, and what is found during diagnosis, so we provide an itemized estimate before work begins rather than a flat rate over the phone.",
        },
        {
          question: "Do you offer emergency service for a sewage backup?",
          answer: "Sewage backups are covered by our emergency plumbing service, with 24/7 dispatch available every day. Response time depends on technician availability and your location within the service area.",
        },
        {
          question: "Do you clean drains for businesses and property managers?",
          answer: `Yes. ${name} services single-family homes, multifamily properties, and commercial buildings, including managed properties for property managers.`,
        },
      ],
    },
  ],
  finalCta: {
    title: "Have a slow or clogged drain?",
    body: "Tell us what's going on and where you are, and we'll take it from there.",
  },
  stats: siteStats,
};

export const commercialPlumbingPage: PageContent = {
  meta: {
    title: "Commercial Plumbing Service in Las Vegas",
    description: `Commercial plumbing repair, installation and maintenance for Las Vegas businesses and managed properties. Itemized estimate before work. Call ${phone}.`,
    path: "/services/commercial-plumbing/",
  },
  hero: {
    title: "Commercial Plumbing Service for Businesses and Properties in the",
    accent: "Las Vegas Valley",
    description: `${name} provides commercial plumbing repair, installation, and maintenance for businesses and managed properties across the Las Vegas valley, including offices, retail locations, and multi-family communities.`,
    proofPoints: [
      {
        label: "24/7 emergency dispatch",
        icon: "clock",
      },
      {
        label: "Residential & commercial",
        icon: "building",
      },
      {
        label: "8 valley communities served",
        icon: "pin",
      },
      {
        label: "Licensed plumbing team",
        icon: "shield",
      },
    ],
    formSource: "service-commercial-plumbing",
    form: {
      defaultService: "Commercial Plumbing",
      showCompany: true,
    },
  },
  stats: siteStats,
  sections: [
    {
      type: "cards",
      id: "what-we-do",
      eyebrow: "What is included",
      title: "Commercial plumbing we handle",
      intro: "Repair, installation, and maintenance for the plumbing in your business or the properties you manage.",
      columns: 4,
      items: [
        {
          title: "Commercial plumbing repair",
          body: "Diagnosis and repair for leaks, clogs, fixture problems, and other plumbing issues in your building.",
          path: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.2-.6-.6-2.2z",
        },
        {
          title: "Commercial plumbing installation",
          body: "Installation of plumbing fixtures and equipment for new or updated spaces.",
          path: "M12 8v8M8 12h8M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z",
        },
        {
          title: "Commercial plumbing maintenance",
          body: "Routine plumbing maintenance to help catch small problems before they become bigger ones.",
          path: "M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5",
        },
        {
          title: "Property management plumbing",
          body: "Dependable plumbing service for the properties you oversee, from tenant requests to ongoing upkeep.",
          path: "M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6",
        },
      ],
    },
    {
      type: "cards",
      id: "properties",
      eyebrow: "Who we work with",
      title: "Properties we support",
      intro: "We support property managers, facility teams, offices, retail locations, and multi-family communities with clear recommendations and dependable service.",
      columns: 4,
      items: [
        {
          title: "Offices & commercial buildings",
          path: "M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M16 21V9h4v12M8 8h.01M8 12h.01M8 16h.01",
          body: "Repair, maintenance, and installation for tenant spaces and shared building plumbing.",
        },
        {
          title: "Retail & restaurant spaces",
          path: "M3 9l1.5-5h15L21 9M3 9v11h18V9M3 9h18M9 20v-6h6v6",
          body: "Plumbing service for storefronts, dining spaces, and kitchens, from fixtures to drains.",
        },
        {
          title: "Apartments & multi-unit",
          path: "M3 21h18M5 21V7l7-4 7 4v14M9 10h.01M15 10h.01M9 14h.01M15 14h.01M10 21v-4h4v4",
          body: "Service for apartment buildings and communities, including water heaters, drains, and sewer lines.",
        },
        {
          title: "Managed properties",
          path: "M9 3h6a1 1 0 0 1 1 1v1h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2V4a1 1 0 0 1 1-1zM9 12l2 2 4-4",
          body: "A single point of contact for property managers who need dependable plumbing service for the properties they oversee.",
        },
      ],
    },
    {
      type: "cards",
      id: "signs",
      eyebrow: "When to call",
      title: "Signs you may need commercial plumbing service",
      columns: 4,
      items: [
        {
          title: "Restroom or fixture problems affecting customers or staff",
          body: "A leaking, clogged, or out-of-service fixture is worth a call early, since restrooms serve many people at once.",
          path: "M7 3h10v5H7zM5 8h14v3a7 7 0 0 1-14 0zM9 18v3h6v-3",
        },
        {
          title: "Grease or drain problems in food service",
          body: "Kitchens and floor drains work all day, so a slow or smelly drain is worth checking before it backs up.",
          path: "M5 3v6a3 3 0 0 0 3 3v9M8 3v6M11 3v6a3 3 0 0 1-3 3M17 3c-2 2-3 5-3 8h3v10",
        },
        {
          title: "Leaks in a commercial building",
          body: "A leak can spread to shared walls, ceilings, or neighboring spaces, so locating it early helps limit damage.",
          path: "M12 3s6 6.3 6 10.5a6 6 0 0 1-12 0C6 9.3 12 3 12 3z",
        },
        {
          title: "Planning ongoing plumbing service for a property",
          body: "If you manage one or more properties, regular maintenance and a single point of contact can help you plan ahead.",
          path: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
        },
      ],
    },
    {
      type: "steps",
      id: "process",
      eyebrow: "Simple process",
      title: "How it works",
      items: [
        {
          title: "Call or Request Service",
          body: "Call us directly or submit a request online with your issue and location.",
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
      note: "You get an itemized estimate before any work begins.",
    },
    {
      type: "links",
      id: "related",
      eyebrow: "Related services",
      title: "Other plumbing help for businesses",
      items: [
        {
          name: "Emergency Plumbing",
          href: "/services/emergency-plumbing/",
          cta: "Get Emergency Help",
          desc: "24/7 response for burst pipes, active leaks, overflowing toilets, sewage backups, and no-hot-water emergencies.",
          badge: "24/7",
        },
        {
          name: "Plumbing Repair",
          href: "/services/plumbing-repair/",
          cta: "Explore Plumbing Repair",
          desc: "Diagnosis and repair for leaking faucets, running toilets, and everyday plumbing problems.",
        },
        {
          name: "Commercial Drain Cleaning",
          href: "/commercial/drain-cleaning/",
          cta: "Explore Commercial Drain Cleaning",
          desc: "Clog removal for sinks, toilets, kitchen, laundry, floor drains, and main lines.",
        },
        {
          name: "Sewer Line Repair",
          href: "/services/sewer-line-repair/",
          cta: "Explore Sewer Repair",
          desc: "Repair for damaged, collapsed, or root-intruded sewer lines serving your home or business.",
        },
      ],
      more: {
        prompt: "Looking for everything we offer businesses?",
        href: "/commercial/",
        label: "See Plumbing for Businesses",
      },
    },
    {
      type: "coverage",
      id: "service-area",
      eyebrow: "Where we work",
      title: "Eight communities across the Las Vegas valley",
      intro: `${name} serves homes and businesses in Las Vegas and the surrounding valley communities.`,
    },
    {
      type: "emergency",
      id: "emergency",
      title: "Plumbing Emergency at Your Property?",
      body: "Burst pipes, active leaks, and sewage backups are covered by our emergency plumbing service, with 24/7 dispatch every day.",
    },
    {
      type: "faq",
      id: "faq",
      eyebrow: "Direct answers",
      title: "Questions about commercial plumbing",
      items: [
        {
          question: "What does commercial plumbing service include?",
          answer: "Commercial plumbing repair, installation, and maintenance for businesses and managed properties across the Las Vegas valley.",
        },
        {
          question: "Who do you work with?",
          answer: `Property managers, facility teams, offices, retail locations, and multi-family communities. ${name} also services single-family homes, so you can use one company for both.`,
        },
        {
          question: "Can I get an estimate before work begins?",
          answer: `Yes. ${name} provides an itemized estimate before any work begins, whether it is a repair, an installation, or a larger project.`,
        },
        {
          question: "How much does commercial plumbing cost?",
          answer: "Cost depends on the service, the scope of the job, and what is found during diagnosis, so we provide an itemized estimate before work begins rather than a flat rate over the phone.",
        },
        {
          question: "Can you set up ongoing service for a property?",
          answer: `Maintenance is part of our commercial plumbing service. Call ${phone} to talk through what your property needs.`,
        },
        {
          question: "Do you clean commercial drains?",
          answer: "Yes. We clear clogs in sinks, toilets, kitchen, laundry, and floor drains, as well as main lines. See our commercial drain cleaning page.",
        },
        {
          question: "Do you offer emergency service for businesses?",
          answer: "24/7 emergency dispatch is available every day. Response time depends on technician availability and your location within the service area.",
        },
        {
          question: "Which areas do you serve?",
          answer: "Las Vegas, Henderson, North Las Vegas, Enterprise, Spring Valley, Paradise, Summerlin, and Sunrise Manor. Call to confirm coverage for an address outside these communities.",
        },
      ],
    },
  ],
  finalCta: {
    title: "Need plumbing for your business or property?",
    body: "Tell us about the property and what's going on, and we'll take it from there.",
  },
};

/** Hand-written service pages by service slug. */
export const servicePages: Record<string, PageContent> = {
  "drain-cleaning": drainCleaningPage,
  "commercial-plumbing": commercialPlumbingPage,
};
