// REFERENCE TEMPLATES for audience + service and location + service pages.
//
// Policy (docs/seo.md): do not add more of these until demand is validated,
// coverage is genuine, the page has substantial unique content and a real
// proof element. Until then every page here is noindex and left out of the
// sitemap. Remove `noindex` per page only after that review.

import { clientConfig } from "@/config/client";
import { siteStats } from "./shared";
import type { PageContent } from "@/types/content";

const { name, phoneDisplay: phone } = clientConfig;

export const commercialDrainCleaningPage: PageContent = {
  meta: {
    title: "Commercial Drain Cleaning in Las Vegas",
    description: `Drain cleaning for Las Vegas offices, restaurants, retail and multifamily properties. Itemized estimate before work. Call ${phone}.`,
    path: "/commercial/drain-cleaning/",
    noindex: true,
  },
  hero: {
    title: "Commercial Drain Cleaning in",
    accent: "Las Vegas, Nevada",
    description: `${name} clears restroom, kitchen, laundry, and floor drains and main lines for offices, retail and restaurant spaces, apartments, and managed properties, with 24/7 emergency dispatch when a backup can't wait.`,
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
        label: "Main lines & floor drains",
        path: "M3 9h6v6H3zM15 9h6v6h-6zM9 12h6",
      },
      {
        label: "Itemized estimates first",
        path: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6",
      },
    ],
    formSource: "commercial-drain-cleaning",
    form: {
      title: "Request Commercial Drain Cleaning",
      intro: "Share a few details about your property and the team will follow up by your preferred contact method.",
      submitLabel: "Request Commercial Drain Cleaning",
      showCompany: true,
      defaultService: "Drain Cleaning",
    },
  },
  stats: siteStats,
  sections: [
    {
      type: "tiles",
      id: "what-we-clear",
      eyebrow: "What we clear",
      title: "Commercial drains we clear in Las Vegas",
      intro: "Restrooms, kitchens, laundry rooms, and the main line: we clear clogs in the drains your property depends on.",
      items: [
        {
          name: "Restroom sinks & toilets",
          path: "M7 3h10v5H7zM5 8h14v3a7 7 0 0 1-14 0zM9 18v3h6v-3",
        },
        {
          name: "Kitchen drains",
          path: "M5 3v6a3 3 0 0 0 3 3v9M8 3v6M11 3v6a3 3 0 0 1-3 3M17 3c-2 2-3 5-3 8h3v10",
        },
        {
          name: "Floor drains",
          path: "M4 4h16v16H4zM8 8h8v8H8zM10 10v4M12 10v4M14 10v4",
        },
        {
          name: "Laundry drains",
          path: "M5 3h14v18H5zM5 8h14M12 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
        },
        {
          name: "Showers & tubs",
          path: "M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4zM6 12V6a2 2 0 0 1 4 0M7 19v2M17 19v2",
        },
        {
          name: "Main lines",
          path: "M3 9h6v6H3zM15 9h6v6h-6zM9 12h6",
        },
      ],
    },
    {
      type: "cards",
      id: "for-businesses",
      eyebrow: "For businesses",
      title: "When a drain backs up at your property",
      columns: 3,
      items: [
        {
          title: "Restrooms and shared plumbing",
          body: "In commercial buildings, restrooms and shared lines serve many people at once, so a backed-up drain gets noticed quickly.",
        },
        {
          title: "Kitchen and floor drains",
          body: "Restaurants and other food-service spaces rely on kitchen and floor drains working all day. A slow or blocked drain is worth a call early.",
        },
        {
          title: "Multi-unit properties",
          body: "In apartments and managed properties, units can share drain lines, so one clog can affect more than one unit.",
        },
      ],
    },
    {
      type: "cards",
      id: "signs",
      eyebrow: "Know the signs",
      title: "Signs it's time to call",
      columns: 3,
      items: [
        {
          title: "Slow-draining sinks",
          body: "Restroom, kitchen, or utility sinks take longer than usual to empty.",
        },
        {
          title: "Several fixtures backing up",
          body: "More than one drain slows or backs up at the same time, which can point to the main line.",
        },
        {
          title: "Floor drain odors or pooling",
          body: "A persistent smell from a floor drain, or water collecting around it.",
        },
        {
          title: "Gurgling sounds",
          body: "Drains bubble or gurgle when water runs or a toilet flushes.",
        },
        {
          title: "Recurring clogs",
          body: "The same drain clogs again after it has been cleared.",
        },
        {
          title: "Sewage smell in the building",
          body: "A sewage odor that doesn't go away is worth an urgent call.",
        },
      ],
    },
    {
      type: "emergency",
      id: "emergency",
      title: "Commercial drain or sewer backup in Las Vegas?",
      body: "If sewage is coming up through a floor drain, or several fixtures are backing up at once, call for urgent plumbing service. If you can do so safely, stop using the affected fixtures until help arrives.",
    },
    {
      type: "cards",
      id: "what-to-expect",
      eyebrow: "For owners and property managers",
      title: "What to expect when you call",
      columns: 3,
      items: [
        {
          title: "Itemized estimates",
          body: "You receive an itemized estimate before any work begins, so you know what to approve.",
          path: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6",
        },
        {
          title: "Clear communication",
          body: "We follow up to confirm details before we dispatch, and we walk you through what was done when the work is finished.",
          path: "M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
        },
        {
          title: "Scheduling and emergencies",
          body: "Routine appointments are available Monday to Saturday. For an urgent backup, emergency dispatch is available 24/7, every day of the week.",
          path: "M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z",
        },
      ],
    },
    {
      type: "links",
      id: "related",
      eyebrow: "When a clog keeps coming back",
      title: "Related commercial services",
      intro: "A drain that clogs again and again can point to a problem deeper in the line. These services help find and fix the cause.",
      items: [
        {
          name: "Sewer Camera Inspection",
          href: "/services/sewer-camera-inspection/",
          cta: "Explore Camera Inspection",
          desc: "A video camera sent through your sewer line shows blockages, cracks, root intrusion, or other damage.",
        },
        {
          name: "Hydro Jetting",
          href: "/services/hydro-jetting/",
          cta: "Explore Hydro Jetting",
          desc: "High-pressure water jetting for stubborn buildup in drain and sewer lines.",
        },
        {
          name: "Sewer Line Repair",
          href: "/services/sewer-line-repair/",
          cta: "Explore Sewer Repair",
          desc: "Sewer backups, repair, replacement, and trenchless options when the problem is in the line itself.",
        },
        {
          name: "Commercial Plumbing",
          href: "/services/commercial-plumbing/",
          cta: "Explore Commercial Plumbing",
          desc: "Repair, installation, and maintenance for businesses and managed properties.",
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
          body: "We diagnose and clear the issue, and walk you through what was done.",
        },
      ],
    },
    {
      type: "coverage",
      id: "service-area",
      eyebrow: "Service area",
      title: "Commercial drain cleaning across the Las Vegas valley",
      intro: "Las Vegas is our primary service area. We also serve these valley communities.",
      showHours: true,
      crossLink: {
        text: "Looking for drain cleaning at home?",
        href: "/service-areas/las-vegas/drain-cleaning/",
        label: "See drain cleaning in Las Vegas",
      },
    },
    {
      type: "reviews",
      id: "reviews",
    },
    {
      type: "faq",
      id: "faq",
      eyebrow: "Direct answers",
      title: "Commercial drain cleaning questions in Las Vegas",
      items: [
        {
          question: "What commercial drains do you clean?",
          answer: `${name} clears restroom sinks and toilets, kitchen drains, floor drains, laundry drains, showers and tubs, and main lines for commercial buildings, apartments, and managed properties.`,
        },
        {
          question: "Do you clear main lines at commercial properties?",
          answer: "Yes. Drain cleaning covers main lines, and our sewer line services cover backups, repair, replacement, trenchless options, and main sewer line clearing.",
        },
        {
          question: "Can you clear kitchen and floor drains for a restaurant?",
          answer: `Yes. We clear kitchen drains and floor drains. For a specific setup, call ${phone} and describe what's going on so we can point you to the right service.`,
        },
        {
          question: "Do you service apartments and managed properties?",
          answer: `Yes. ${name} services apartments and managed properties, as well as commercial buildings, for owners and property managers.`,
        },
        {
          question: "Do you offer emergency service for a commercial drain backup?",
          answer: "Yes. 24/7 emergency dispatch is available every day for urgent issues like sewage backups. Actual response time depends on technician availability and your location within the service area.",
        },
        {
          question: "Will I get an estimate before work begins?",
          answer: `Yes. ${name} provides an itemized estimate before any work begins. The cost depends on the drain, the problem, and the work involved.`,
        },
        {
          question: "What if the clog keeps coming back?",
          answer: "A drain that clogs again and again can point to a problem deeper in the line. A sewer camera inspection shows what is causing it, so any recommended repair is based on what the camera actually finds.",
        },
        {
          question: "What are your hours?",
          answer: "Routine appointments are available Monday to Friday from 7am to 6pm and Saturday from 8am to 4pm. We're closed Sundays for routine appointments, and emergency dispatch runs 24/7.",
        },
        {
          question: "Which areas do you serve?",
          answer: `Las Vegas is our primary service area. We also serve Henderson, North Las Vegas, Enterprise, Spring Valley, Paradise, Summerlin, and Sunrise Manor. If you're not sure your address is covered, call ${phone} to confirm.`,
        },
        {
          question: "How do I request commercial drain cleaning?",
          answer: `Call ${phone} or fill out the Request Commercial Drain Cleaning form on this page with your contact details, ZIP code, and a short description of the issue. Choose phone, text, or email as your preferred way to be contacted.`,
        },
      ],
    },
  ],
  finalCta: {
    title: "Need a commercial drain cleared in Las Vegas?",
    body: "Tell us about your property and what's going on, and we'll point you to the right service. Call now or send a request.",
  },
};

export const lasVegasDrainCleaningPage: PageContent = {
  meta: {
    title: "Drain Cleaning in Las Vegas, NV",
    description: `Drain cleaning in Las Vegas, Nevada from ${name}. Clogs, slow drains and sewer backups. Itemized estimate first. Call ${phone}.`,
    path: "/service-areas/las-vegas/drain-cleaning/",
    noindex: true,
  },
  hero: {
    title: "Drain Cleaning in",
    accent: "Las Vegas, Nevada",
    description: `${name} clears clogged sinks, showers, tubs, toilets, kitchen and laundry drains, floor drains, and main lines for homes and businesses in Las Vegas, with 24/7 emergency dispatch for backups that can't wait.`,
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
        label: "8 drain types cleared",
        path: "M12 3s6 6.3 6 10.5a6 6 0 0 1-12 0C6 9.3 12 3 12 3z",
      },
      {
        label: "Itemized estimates first",
        path: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h6",
      },
    ],
    formSource: "las-vegas-drain-cleaning",
    form: {
      title: "Request Drain Cleaning in Las Vegas",
      intro: "Share a few details and the team will follow up by your preferred contact method.",
      submitLabel: "Request Drain Cleaning",
      defaultService: "Drain Cleaning",
    },
  },
  stats: siteStats,
  sections: [
    {
      type: "tiles",
      id: "what-we-clear",
      eyebrow: "What we clear",
      title: "Drains we clear in Las Vegas",
      intro: "From a single slow sink to a blocked main line, we clear clogs in the drains homes and businesses rely on every day.",
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
      type: "cards",
      id: "signs",
      eyebrow: "Know the signs",
      title: "Common signs you need drain cleaning",
      columns: 3,
      items: [
        {
          title: "Slow draining",
          body: "Water takes longer than usual to leave a sink, shower, or tub.",
        },
        {
          title: "Gurgling sounds",
          body: "Drains make bubbling or gurgling noises when water runs or a toilet flushes.",
        },
        {
          title: "Recurring clogs",
          body: "The same drain clogs again after you've cleared it yourself.",
        },
        {
          title: "Odors from drains",
          body: "A persistent smell coming from a sink, floor drain, or shower.",
        },
        {
          title: "Several fixtures backing up",
          body: "More than one drain slows or backs up at the same time, which can point to the main line.",
        },
        {
          title: "Water pooling at a floor drain",
          body: "Water collects around a floor drain instead of draining away.",
        },
      ],
    },
    {
      type: "links",
      id: "related",
      eyebrow: "When a clog keeps coming back",
      title: "Related drain and sewer services",
      intro: "A drain that clogs again and again can point to a problem deeper in the line. These services help find and fix the cause.",
      items: [
        {
          name: "Sewer Camera Inspection",
          href: "/services/sewer-camera-inspection/",
          cta: "Explore Camera Inspection",
          desc: "A video camera sent through your sewer line shows blockages, cracks, root intrusion, or other damage.",
        },
        {
          name: "Hydro Jetting",
          href: "/services/hydro-jetting/",
          cta: "Explore Hydro Jetting",
          desc: "High-pressure water jetting for stubborn buildup in drain and sewer lines.",
        },
        {
          name: "Sewer Line Repair",
          href: "/services/sewer-line-repair/",
          cta: "Explore Sewer Repair",
          desc: "Sewer backups, repair, replacement, and trenchless options when the problem is in the line itself.",
        },
        {
          name: "Emergency Plumbing",
          href: "/services/emergency-plumbing/",
          cta: "Get Emergency Help",
          desc: "24/7 response for sewage backups, active leaks, burst pipes, and other urgent problems.",
          badge: "24/7",
        },
      ],
    },
    {
      type: "emergency",
      id: "emergency",
      title: "Drain or sewer backup in Las Vegas?",
      body: "If sewage is coming up through a floor drain, or several fixtures are backing up at once, call for urgent plumbing service. If you can do so safely, stop using the affected fixtures until help arrives.",
    },
    {
      type: "local",
      id: "local",
      eyebrow: "Local plumbing",
      title: "Drains and pipes in the Las Vegas valley",
      items: [
        {
          title: "Hard water and scale",
          body: "Water in the Las Vegas valley is hard, and mineral scale can build up in water heaters, fixtures, and pipes over time. Drain cleaning clears clogs in the line, and water treatment is there to help manage hard water.",
          href: "/services/water-treatment/",
          link: "See water treatment",
        },
        {
          title: "Condos and apartments",
          body: "In multi-unit buildings, units can share drain lines, so a main line clog can show up in more than one place at once. We service condos, apartments, and managed properties across Las Vegas.",
          href: "/service-areas/las-vegas/",
          link: "See our Las Vegas service area",
        },
        {
          title: "Homes and businesses",
          body: "Las Vegas has single-family homes and a large number of commercial and managed properties. We clear drains for both, and commercial properties have their own page with details for owners and property managers.",
          href: "/commercial/drain-cleaning/",
          link: "See commercial drain cleaning",
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
          body: "We diagnose and clear the issue, and walk you through what was done.",
        },
      ],
    },
    {
      type: "coverage",
      id: "service-area",
      eyebrow: "Service area",
      title: "Drain cleaning in Las Vegas and nearby communities",
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
      title: "Drain cleaning questions in Las Vegas",
      items: [
        {
          question: "What drains do you clean in Las Vegas?",
          answer: `${name} clears sinks, showers, tubs, toilets, kitchen drains, laundry drains, floor drains, and main lines for homes and businesses in Las Vegas.`,
        },
        {
          question: "Do you clear main sewer lines?",
          answer: "Yes. Drain cleaning covers main lines, and our sewer line services cover backups, repair, replacement, trenchless options, and main sewer line clearing.",
        },
        {
          question: "What is the difference between drain cleaning and hydro jetting?",
          answer: "We offer both as separate services. Drain cleaning clears clogs from the line, and hydro jetting uses high-pressure water for stubborn buildup. Describe what's happening when you call and we'll point you to the right one.",
        },
        {
          question: "Why does my drain keep clogging?",
          answer: "A drain that clogs again and again can point to a problem deeper in the line. A sewer camera inspection shows what is causing it, so any recommended repair is based on what the camera actually finds.",
        },
        {
          question: "Do you offer emergency drain service in Las Vegas?",
          answer: "Yes. 24/7 emergency dispatch is available every day for urgent issues like sewage backups. Actual response time depends on technician availability and your location within the service area.",
        },
        {
          question: "How much does drain cleaning cost?",
          answer: `${name} provides an itemized estimate before any work begins. The cost depends on the drain, the problem, and the work involved, so call ${phone} and describe the issue.`,
        },
        {
          question: "Do you clean drains for businesses and apartments?",
          answer: "Yes. We service single-family homes, condos, apartments, and commercial buildings, including managed properties for property managers.",
        },
        {
          question: "What are your hours in Las Vegas?",
          answer: "Routine appointments are available Monday to Friday from 7am to 6pm and Saturday from 8am to 4pm. We're closed Sundays for routine appointments, and emergency dispatch runs 24/7.",
        },
        {
          question: "Do you serve areas near Las Vegas?",
          answer: `Yes. Along with Las Vegas, we serve Henderson, North Las Vegas, Enterprise, Spring Valley, Paradise, Summerlin, and Sunrise Manor. If you're not sure your address is covered, call ${phone} to confirm.`,
        },
        {
          question: "How do I request drain cleaning in Las Vegas?",
          answer: `Call ${phone} or fill out the Request Drain Cleaning form on this page with your contact details, ZIP code, and a short description of the issue. Choose phone, text, or email as your preferred way to be contacted.`,
        },
      ],
    },
  ],
  finalCta: {
    title: "Need a clogged drain cleared in Las Vegas?",
    body: "Tell us what's going on and we'll point you to the right service. Call now or send a request.",
  },
};

/** Audience + service pages, keyed by `<audience>/<service-slug>`. */
export const audienceServicePages: Record<string, PageContent> = {
  "commercial/drain-cleaning": commercialDrainCleaningPage,
};

/** Location + service pages, keyed by `<location-slug>/<service-slug>`. */
export const locationServicePages: Record<string, PageContent> = {
  "las-vegas/drain-cleaning": lasVegasDrainCleaningPage,
};
