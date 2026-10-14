// Dedicated location pages, keyed by location slug. A location only gets a
// page here when it has genuine coverage and substantial unique content
// (local notes, FAQs); see docs/seo.md.

import { clientConfig } from "@/config/client";
import { siteStats } from "./shared";
import type { PageContent } from "@/types/content";

const { name, phoneDisplay: phone } = clientConfig;

export const lasVegasPage: PageContent = {
  meta: {
    title: "Plumber in Las Vegas, NV",
    description: `Plumbing service in Las Vegas, Nevada from ${name}. Repairs, drains, water heaters and 24/7 emergency dispatch. Call ${phone}.`,
    path: "/service-areas/las-vegas/",
  },
  hero: {
    title: "Plumbing Service in",
    accent: "Las Vegas, Nevada",
    description: `${name} handles repairs, drain and sewer problems, water heaters, leaks, and repiping for homes and businesses in Las Vegas, with 24/7 emergency dispatch when something can't wait.`,
    proofPoints: [
      {
        label: "24/7 emergency dispatch",
        path: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-14v5l3 3",
      },
      {
        label: "Residential & commercial",
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
        label: "8 communities served",
        path: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm11 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
      },
      {
        label: "7 days a week availability",
        path: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
      },
    ],
    formSource: "location-las-vegas",
    form: {
      title: "Request Service in Las Vegas",
      intro: "Share a few details and the team will follow up by your preferred contact method.",
      submitLabel: "Request Service",
    },
  },
  stats: siteStats,
  sections: [
    {
      type: "routes",
      id: "start-here",
      eyebrow: "Start here",
      title: "What's going on with your plumbing?",
      intro: "Jump straight to the kind of service you need in Las Vegas, or browse the most requested services below.",
      columns: 5,
      items: [
        {
          title: "General Plumbing & Repair",
          body: "Repairs, fixture installs, leak detection, and whole-home repiping.",
          cta: "Explore General Plumbing",
          href: "/services/plumbing-repair/",
        },
        {
          title: "Drains & Sewers",
          body: "Drain cleaning, hydro jetting, sewer line repair, and camera inspections.",
          cta: "Explore Drain & Sewer",
          href: "/services/drain-cleaning/",
        },
        {
          title: "Water Heater & Water Quality",
          body: "Water heater repair and installation, plus water treatment systems.",
          cta: "Explore Water Heater & Quality",
          href: "/services/water-heater-services/",
        },
        {
          title: "Commercial Plumbing",
          body: "Repair, installation, and maintenance for businesses and managed properties.",
          cta: "Explore Commercial Plumbing",
          href: "/commercial/",
        },
        {
          title: "Emergency Plumbing",
          body: "Urgent plumbing service for burst pipes and active leaks, 24 hours a day.",
          cta: "Get Emergency Help",
          href: "/services/emergency-plumbing/",
        },
      ],
    },
    {
      type: "links",
      id: "services",
      eyebrow: "What We Do",
      title: "Our Most Requested Plumbing Services",
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
          desc: "Clog removal for sinks, showers, tubs, toilets, kitchen, laundry, floor drains, and main lines.",
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
      title: "Plumbing emergency in Las Vegas?",
      body: "For a burst pipe, an active leak, or a backed-up sewer line, call for urgent plumbing service. If water is actively leaking, shut off your main water valve first, then call.",
    },
    {
      type: "local",
      id: "local",
      eyebrow: "Local plumbing",
      title: "Plumbing in the Las Vegas valley",
      items: [
        {
          title: "Hard water and scale",
          body: "Water in the Las Vegas valley is hard, and mineral scale can build up in water heaters, fixtures, and pipes over time. Water heater service and water treatment help you stay ahead of it.",
          href: "/services/water-treatment/",
          link: "See water treatment",
        },
        {
          title: "Winter nights and exposed pipes",
          body: "Las Vegas is known for desert heat, but winter nights can dip to freezing. Pipes and fixtures outside the home are the ones most exposed, and leak detection can find problems before they spread.",
          href: "/services/leak-detection/",
          link: "See leak detection",
        },
        {
          title: "Homes, condos, and commercial buildings",
          body: "Las Vegas has single-family homes, condos, apartments, and a large number of commercial and managed properties. We service residential and commercial plumbing across the city.",
          href: "/commercial/",
          link: "See commercial plumbing",
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
    },
    {
      type: "coverage",
      id: "service-area",
      eyebrow: "Service area",
      title: "Las Vegas and the communities around it",
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
      title: "Plumbing questions in Las Vegas",
      items: [
        {
          question: `Does ${name} serve all of Las Vegas?`,
          answer: `Las Vegas is our primary service area. If you're not sure your address is covered, call ${phone} and we'll confirm before scheduling.`,
        },
        {
          question: "How fast can someone come out for an emergency in Las Vegas?",
          answer: "24/7 emergency dispatch is available every day for urgent issues like burst pipes and active leaks. Actual response time depends on technician availability and your location within the service area.",
        },
        {
          question: "What are your hours in Las Vegas?",
          answer: "Routine appointments are available Monday to Friday from 7am to 6pm and Saturday from 8am to 4pm. We're closed Sundays for routine appointments, and emergency dispatch runs 24/7.",
        },
        {
          question: "Do you work on homes and businesses in Las Vegas?",
          answer: `Yes. ${name} services single-family homes, condos, apartments, and commercial buildings, including managed properties for property managers.`,
        },
        {
          question: "Why does hard water matter for plumbing in Las Vegas?",
          answer: "Hard water leaves mineral scale that can build up inside water heaters, fixtures, and pipes. Water heater service and water treatment systems such as softeners and filtration can help manage it.",
        },
        {
          question: "Can I get an estimate before work begins?",
          answer: `Yes. ${name} provides an itemized estimate before any work begins, whether it's a repair, an installation, or a larger project like repiping.`,
        },
        {
          question: `What plumbing services does ${name} offer in Las Vegas?`,
          answer: `${name} offers emergency plumbing, plumbing repair, drain cleaning, hydro jetting, sewer line repair, sewer camera inspection, water heater services, leak detection, repiping, plumbing fixtures, water treatment, and commercial plumbing for homes and businesses in Las Vegas.`,
        },
        {
          question: "Do you serve areas near Las Vegas?",
          answer: `Yes. Along with Las Vegas, we serve Henderson, North Las Vegas, Enterprise, Spring Valley, Paradise, Summerlin, and Sunrise Manor. If you're not sure your address is covered, call ${phone} to confirm.`,
        },
        {
          question: "What should I do if a pipe bursts in my Las Vegas home or business?",
          answer: `Shut off your main water valve if you can do so safely, then call ${phone} for emergency dispatch. 24/7 emergency dispatch is available every day, including outside regular business hours.`,
        },
        {
          question: "Do you install water softeners or filtration systems in Las Vegas?",
          answer: "Yes. Our water treatment service covers water softener and filtration system installation, which many Las Vegas valley properties use to manage hard water.",
        },
        {
          question: "What can a sewer camera inspection show?",
          answer: "A sewer camera inspection sends a video camera through your sewer line to show blockages, cracks, root intrusion, or other damage, so any recommended repair is based on what the camera actually finds.",
        },
        {
          question: "How do I request plumbing service in Las Vegas?",
          answer: `Call ${phone} or fill out the Request Service form on this page with your contact details, ZIP code, and a short description of the issue. Choose phone, text, or email as your preferred way to be contacted.`,
        },
      ],
    },
  ],
  finalCta: {
    title: "Need a plumber in Las Vegas?",
    body: "Tell us what's going on and we'll point you to the right service. Call now or send a request.",
  },
};

/** Location pages by slug. Keep in sync with `hasDedicatedPage` in content/locations.ts. */
export const locationPages: Record<string, PageContent> = {
  "las-vegas": lasVegasPage,
};
