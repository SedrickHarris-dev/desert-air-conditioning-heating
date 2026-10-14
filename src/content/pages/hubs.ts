import { clientConfig } from "@/config/client";
import { homeProofPoints } from "./proof-points";
import { locations } from "@/content/locations";
import { services } from "@/content/services";
import { siteStats } from "./shared";
import type { PageContent } from "@/types/content";

const { name, phoneDisplay: phone, email } = clientConfig;

const routePaths = {
  tools: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.2-.6-.6-2.2z",
  drops: "M12 3s6 6.3 6 10.5a6 6 0 0 1-12 0C6 9.3 12 3 12 3z",
  heater: "M7 3h10v18H7zM10 7h4M10 17h4",
  building: "M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M16 21V9h4v12M8 8h.01M8 12h.01M8 16h.01",
  bolt: "M13 2 4 14h7l-1 8 9-12h-7z",
};

const sharedFaqPhone = `Call ${phone}`;

/** Services hub: routes visitors to a category, then to a service page. */
export const servicesHubPage: PageContent = {
  meta: {
    title: "Plumbing Services in Las Vegas",
    description:
      "Browse all plumbing services from Las Vegas Pro Plumbing: emergency plumbing, drain and sewer, water heaters, leak detection, repiping and commercial.",
    path: "/services/",
  },
  hero: {
    title: "Plumbing Services for Every",
    accent: "Home and Business in the Las Vegas Valley",
    description: `From a clogged drain to a full repipe, ${name} covers repairs, drains and sewers, water heaters, water quality, and emergency dispatch - for houses, apartments, and commercial buildings across Las Vegas, Henderson, North Las Vegas, and the surrounding valley.`,
    proofPoints: homeProofPoints.slice(0, 4),
    formSource: "services-hub",
    form: { intro: "Tell us what's going on and we'll follow up to confirm." },
  },
  stats: siteStats,
  sections: [
    {
      type: "routes",
      id: "start-here",
      eyebrow: "Start here",
      title: "What's going on with your plumbing?",
      intro: "Jump straight to the kind of service you need, or browse every service below.",
      columns: 5,
      items: [
        { title: "General Plumbing & Repair", body: "Repairs, fixture installs, leak detection, and whole-home repiping.", cta: "Explore General Plumbing", href: "#general", path: routePaths.tools },
        { title: "Drains & Sewers", body: "Drain cleaning, hydro jetting, sewer line repair, and camera inspections.", cta: "Explore Drain & Sewer", href: "#drains-sewers", path: routePaths.drops },
        { title: "Water Heater & Water Quality", body: "Water heater repair and installation, plus water treatment systems.", cta: "Explore Water Heater & Quality", href: "#water-heater-quality", path: routePaths.heater },
        { title: "Commercial Plumbing", body: "Repair, installation, and maintenance for businesses and managed properties.", cta: "Explore Commercial Plumbing", href: "#commercial", path: routePaths.building },
        { title: "Emergency Plumbing", body: "Urgent plumbing service for burst pipes and active leaks, 24 hours a day.", cta: "Get Emergency Help", href: "#emergency", path: routePaths.bolt },
      ],
    },
    {
      type: "serviceGroup",
      id: "general",
      eyebrow: "General Plumbing & Repair",
      title: "Plumbing repair services",
      items: [
        { name: "Plumbing Repair", desc: "Diagnosis and repair for leaking faucets, running toilets, and everyday plumbing problems.", href: "/services/plumbing-repair/" },
        { name: "Plumbing Fixtures", desc: "Installation and replacement of faucets, toilets, sinks, and other plumbing fixtures.", href: "/services/plumbing-fixtures/" },
        { name: "Leak Detection", desc: "Locating hidden and slab leaks before they cause water damage or a higher water bill.", href: "/services/leak-detection/" },
        { name: "Repiping", desc: "Whole-home and partial repiping for aging, corroded, or repeatedly leaking pipes.", href: "/services/repiping/" },
      ],
      chips: [
        { label: "Faucet Repair", href: "/services/plumbing-repair/" },
        { label: "Toilet Repair", href: "/services/plumbing-repair/" },
        { label: "Fixture Installation", href: "/services/plumbing-fixtures/" },
        { label: "Slab Leak Detection", href: "/services/leak-detection/" },
        { label: "Pipe Leak Repair", href: "/services/leak-detection/" },
        { label: "Whole-Home Repiping", href: "/services/repiping/" },
        { label: "Copper Repiping", href: "/services/repiping/" },
        { label: "PEX Repiping", href: "/services/repiping/" },
      ],
    },
    {
      type: "serviceGroup",
      id: "drains-sewers",
      eyebrow: "Drains & Sewers",
      title: "Drain and sewer services",
      items: [
        { name: "Drain Cleaning", desc: "Clearing clogged sinks, tubs, and main line drains so water flows the way it should.", href: "/services/drain-cleaning/" },
        { name: "Hydro Jetting", desc: "High-pressure water jetting that clears stubborn buildup and roots from drain and sewer lines.", href: "/services/hydro-jetting/" },
        { name: "Sewer Line Repair", desc: "Repair for damaged, collapsed, or root-intruded sewer lines serving your home or business.", href: "/services/sewer-line-repair/" },
        { name: "Sewer Camera Inspection", desc: "Video camera inspection that shows exactly what's happening inside your sewer line.", href: "/services/sewer-camera-inspection/" },
      ],
      chips: [
        { label: "Clogged Drain Cleaning", href: "/services/drain-cleaning/" },
        { label: "Main Line Drain Cleaning", href: "/services/drain-cleaning/" },
        { label: "Hydro Jetting Service", href: "/services/hydro-jetting/" },
        { label: "Sewer Line Repair", href: "/services/sewer-line-repair/" },
        { label: "Sewer Line Replacement", href: "/services/sewer-line-repair/" },
        { label: "Video Sewer Inspection", href: "/services/sewer-camera-inspection/" },
      ],
    },
    {
      type: "serviceGroup",
      id: "water-heater-quality",
      eyebrow: "Water Heater & Water Quality",
      title: "Water heater and water treatment services",
      items: [
        { name: "Water Heater Services", desc: "Repair, installation, and replacement for tank and tankless water heaters.", href: "/services/water-heater-services/" },
        { name: "Water Treatment", desc: "Water softener and filtration system installation for the Las Vegas valley's hard water.", href: "/services/water-treatment/" },
      ],
      chips: [
        { label: "Water Heater Repair", href: "/services/water-heater-services/" },
        { label: "Water Heater Installation", href: "/services/water-heater-services/" },
        { label: "Tankless Water Heater Service", href: "/services/water-heater-services/" },
        { label: "Water Softener Installation", href: "/services/water-treatment/" },
        { label: "Water Filtration Systems", href: "/services/water-treatment/" },
      ],
    },
    {
      type: "serviceGroup",
      id: "commercial",
      eyebrow: "Commercial Plumbing",
      title: "Commercial Plumbing Services for Las Vegas Valley Properties",
      paragraphs: [
        `${name} provides commercial plumbing repair, installation, and maintenance for businesses and managed properties across the Las Vegas valley.`,
        "We support property managers, facility teams, offices, retail locations, and multi-family communities with clear recommendations and dependable service.",
      ],
      chips: [
        { label: "Commercial Plumbing Repair", href: "/services/commercial-plumbing/" },
        { label: "Commercial Plumbing Installation", href: "/services/commercial-plumbing/" },
        { label: "Commercial Plumbing Maintenance", href: "/services/commercial-plumbing/" },
        { label: "Property Management Plumbing", href: "/services/commercial-plumbing/" },
      ],
      actions: [
        { label: "Request Commercial Service", href: "/contact/", variant: "primary" },
        { label: "Learn More", href: "/services/commercial-plumbing/", variant: "outline-dark" },
      ],
    },
    {
      type: "emergency",
      id: "emergency",
      title: "Need Plumbing Help Right Now?",
      body: "If you have a burst pipe, an active leak, or a backed-up sewer line, we can help with urgent plumbing service.",
    },
    {
      type: "routes",
      id: "who-its-for",
      eyebrow: "Who it's for",
      title: "Built for your home or your business",
      columns: 2,
      items: [
        { label: "Residential", title: "Plumbing for your home", body: "Repairs, fixture upgrades, and drain and water heater service for single-family homes, condos, and apartments.", cta: "See residential plumbing", href: "/residential/" },
        { label: "Commercial", title: "Plumbing for your business", body: "Repair, installation, and maintenance support for businesses and managed properties.", cta: "See commercial plumbing", href: "/commercial/" },
      ],
    },
    {
      type: "coverage",
      id: "service-area",
      eyebrow: "Where we work",
      title: "Every service, across the Las Vegas valley",
      intro: `${name} serves homes and businesses in Las Vegas and the surrounding valley communities.`,
    },
    {
      type: "callout",
      id: "why-us",
      eyebrow: `Why ${name}`,
      title: "One plumbing company, every service you'll ever need",
      body: "Every job gets an itemized estimate before any work begins, and a clear explanation of what's needed and why.",
      link: { href: "/reviews/", label: "Read our reviews" },
      stats: [
        { value: String(services.length), label: "Services offered" },
        { value: String(locations.length), label: "Valley communities served" },
        { value: "24/7", label: "Emergency dispatch" },
        { value: "7d", label: "Days a week availability" },
      ],
    },
    { type: "reviews", id: "reviews" },
    {
      type: "faq",
      id: "faq",
      eyebrow: "Direct answers",
      title: "Questions about our services",
      items: [
        { question: `What plumbing services does ${name} offer?`, answer: "We handle plumbing repair, drain cleaning, hydro jetting, sewer line repair, sewer camera inspection, water heater services, leak detection, repiping, plumbing fixtures, water treatment, commercial plumbing, and 24/7 emergency plumbing." },
        { question: "Do you work on both residential and commercial plumbing?", answer: `Yes. ${name} services single-family homes, multifamily properties, and commercial buildings, including managed properties for property managers.` },
        { question: "What's the difference between drain cleaning and hydro jetting?", answer: "Drain cleaning clears a typical clog using standard tools. Hydro jetting uses high-pressure water to remove stubborn buildup, grease, and root intrusion, and is often used for main line or sewer line issues." },
        { question: "How do I know if I need a repair or a full repipe?", answer: "A technician diagnoses the pipes first and gives a recommendation based on the pipe material, age, and how often the system has needed repairs, so the decision is based on what's actually found rather than a guess." },
        { question: "What's included in a sewer camera inspection?", answer: "A sewer camera inspection runs a video camera through the sewer line to show blockages, cracks, root intrusion, or other damage, so any recommended repair is based on what the camera actually finds." },
        { question: "How much does plumbing service cost?", answer: `Cost depends on the service, the scope of the job, and what's found during diagnosis, so ${name} provides an itemized estimate before work begins rather than a flat rate over the phone.` },
        { question: "Can I get an estimate before work begins?", answer: `Yes. ${name} provides an itemized estimate before any work begins, whether it's a repair, an installation, or a larger project like repiping.` },
        { question: "How fast can someone come out for an emergency?", answer: "24/7 emergency dispatch is available every day for urgent issues like burst pipes and active leaks. Actual response time depends on technician availability and your location within the service area." },
        { question: `Which areas does ${name} serve?`, answer: "Las Vegas, Henderson, North Las Vegas, Enterprise, Spring Valley, Paradise, Summerlin, and Sunrise Manor. Call to confirm coverage for an address outside these communities." },
      ],
    },
  ],
  finalCta: {
    title: "Not sure which service you need?",
    body: "Tell us what's going on and we'll match you with the right service - no guesswork required.",
  },
};

/** Service-areas hub. */
export const serviceAreasHubPage: PageContent = {
  meta: {
    title: "Las Vegas Valley Service Areas",
    description:
      "See where Las Vegas Pro Plumbing works: Las Vegas, Henderson, North Las Vegas, Enterprise, Spring Valley, Paradise, Summerlin and Sunrise Manor.",
    path: "/service-areas/",
  },
  hero: {
    title: "Plumbing Service Across the",
    accent: "Las Vegas Valley",
    description: `${name} is based in Las Vegas and dispatches to Henderson, North Las Vegas, Enterprise, Spring Valley, Paradise, Summerlin, and Sunrise Manor, for homes, apartments, and commercial buildings.`,
    proofPoints: [
      homeProofPoints[0],
      homeProofPoints[1],
      { icon: "pin", label: "8 valley communities served" },
      homeProofPoints[3],
    ],
    formSource: "service-areas-hub",
  },
  stats: siteStats,
  sections: [
    {
      type: "routes",
      id: "what-we-do",
      eyebrow: "What we do",
      title: "The same plumbing services across the valley",
      intro: "Pick the kind of work you need to see every service in that group.",
      columns: 5,
      items: [
        { title: "General Plumbing & Repair", body: "Repairs, fixture installs, leak detection, and whole-home repiping.", cta: "Explore General Plumbing", href: "/services/#general", path: routePaths.tools },
        { title: "Drains & Sewers", body: "Drain cleaning, hydro jetting, sewer line repair, and camera inspections.", cta: "Explore Drain & Sewer", href: "/services/#drains-sewers", path: routePaths.drops },
        { title: "Water Heater & Water Quality", body: "Water heater repair and installation, plus water treatment systems.", cta: "Explore Water Heater & Quality", href: "/services/#water-heater-quality", path: routePaths.heater },
        { title: "Commercial Plumbing", body: "Repair, installation, and maintenance for businesses and managed properties.", cta: "Explore Commercial Plumbing", href: "/services/#commercial", path: routePaths.building },
        { title: "Emergency Plumbing", body: "Urgent plumbing service for burst pipes and active leaks, 24 hours a day.", cta: "Get Emergency Help", href: "/services/#emergency", path: routePaths.bolt },
      ],
    },
    {
      type: "routes",
      id: "where-we-work",
      eyebrow: "Where we work",
      title: "Based in Las Vegas, dispatching across the valley",
      intro: "Start with the community page for Las Vegas, or call us if you want to confirm coverage for a specific address.",
      columns: 2,
      items: [
        { label: "Home base", title: "Las Vegas", body: `Las Vegas is where ${name} is based and our primary service area. Our Las Vegas page covers the services we provide there.`, cta: "See Las Vegas plumbing", href: "/service-areas/las-vegas/" },
        { label: "Coverage check", title: "Not sure we cover your address?", body: `Call ${phone} and we will confirm coverage, including for addresses outside the communities listed below.`, cta: "Call to confirm coverage", href: `tel:${clientConfig.phone}` },
      ],
    },
    {
      type: "coverage",
      id: "communities",
      eyebrow: "Communities we serve",
      title: "Eight communities across the Las Vegas valley",
      intro: `${name} serves homes and businesses in Las Vegas and the surrounding valley communities.`,
    },
    { type: "emergency", id: "emergency", title: "Need Plumbing Help Right Now?", body: `If you have a burst pipe, an active leak, or a backed-up sewer line, ${name} can help with urgent plumbing service.` },
    {
      type: "faq",
      id: "faq",
      eyebrow: "Direct answers",
      title: "Questions about plumbing service in the Las Vegas valley",
      items: [
        { question: `Which areas does ${name} serve?`, answer: "Las Vegas, Henderson, North Las Vegas, Enterprise, Spring Valley, Paradise, Summerlin, and Sunrise Manor. Call to confirm coverage for an address outside these communities." },
        { question: `Where is ${name} based?`, answer: "We are based in Las Vegas and dispatch throughout the surrounding valley communities listed on this page." },
        { question: "Do you serve Henderson, North Las Vegas, and Summerlin?", answer: "Yes. Henderson, North Las Vegas, and Summerlin are all part of our service area, along with Las Vegas, Enterprise, Spring Valley, Paradise, and Sunrise Manor. Call to confirm coverage for your specific address." },
        { question: "What if my address is not in a listed community?", answer: `${sharedFaqPhone}. We will confirm whether we can help at your address.` },
        { question: "Do you work on homes and businesses?", answer: `Yes. ${name} services single-family homes, multifamily properties, and commercial buildings, including managed properties for property managers.` },
        { question: "Is emergency plumbing available in every community?", answer: "24/7 emergency dispatch is available every day. Actual response time depends on technician availability and your location within the service area." },
        { question: "What counts as a plumbing emergency?", answer: `Our emergency plumbing service covers burst pipes, active leaks, overflowing toilets, sewage backups, and no-hot-water emergencies. If you are not sure whether your situation qualifies, call ${phone}.` },
        { question: "Can I get emergency service at night or on weekends?", answer: "Yes. Emergency dispatch runs 24 hours a day, every day of the week. Response time depends on technician availability and your location within the service area." },
        { question: "What are your business hours?", answer: "Monday through Friday 7am to 6pm and Saturday 8am to 4pm for routine appointments. Routine appointments are closed on Sunday, and 24/7 emergency dispatch is available every day." },
        { question: "How do I request service in my community?", answer: `Call ${phone} or use the Request Service form on this page. Tell us what is going on and which community you are in, and we will take it from there.` },
        { question: `How can I contact ${name}?`, answer: `Call ${phone}, email ${email}, or use the Request Service form. Emergency dispatch is available 24/7 by phone.` },
      ],
    },
  ],
  finalCta: {
    title: "Ready to request service in your community?",
    body: "Tell us what's going on and where you are, and we'll match you with the right service.",
  },
};
