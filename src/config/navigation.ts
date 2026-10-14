// Navigation is client configuration: labels, hrefs, descriptions and
// thumbnails are specific to each client. Components in
// src/components/layout/ read this and contain no client facts.
//
// Images: set `image` on a feature to show a real thumbnail. Until then the
// menu shows a neutral icon placeholder, never a stock photo.

export type NavImage = { src: string; alt: string };

export type NavLinkItem = { label: string; href: string };

/** One card in a mega menu: thumbnail, title, short text and optional links. */
export type NavFeature = {
  label: string;
  href: string;
  description?: string;
  badge?: string;
  /** SVG path data (24x24) for the placeholder thumbnail. */
  path?: string;
  image?: NavImage;
  links?: NavLinkItem[];
};

export type NavItem =
  | { type: "link"; label: string; href: string }
  | {
      type: "mega";
      id: string;
      label: string;
      href: string;
      features: NavFeature[];
      /** Lists communities without their own page as plain text in the panel. */
      showCommunities?: boolean;
      footer?: { label: string; href: string };
    };

const icons = {
  tools: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.2-.6-.6-2.2z",
  drops: "M12 3s6 6.3 6 10.5a6 6 0 0 1-12 0C6 9.3 12 3 12 3z",
  heater: "M7 3h10v18H7zM10 7h4M10 17h4",
  building: "M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M16 21V9h4v12M8 8h.01M8 12h.01M8 16h.01",
  bolt: "M13 2 4 14h7l-1 8 9-12h-7z",
  pin: "M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z",
  map: "M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2zM9 4v14M15 6v14",
};

export const mainNav: NavItem[] = [
  { type: "link", label: "Residential", href: "/residential" },
  { type: "link", label: "Commercial", href: "/commercial" },
  {
    type: "mega",
    id: "services",
    label: "Services",
    href: "/services",
    footer: { label: "View all plumbing services", href: "/services" },
    features: [
      {
        label: "General Plumbing & Repair",
        href: "/services#general",
        description: "Everyday repairs, fixtures and pipes.",
        path: icons.tools,
        links: [
          { label: "Plumbing Repair", href: "/services/plumbing-repair" },
          { label: "Fixture Repair & Installation", href: "/services/plumbing-fixtures" },
          { label: "Leak Detection", href: "/services/leak-detection" },
          { label: "Pipe Repair & Repiping", href: "/services/repiping" },
        ],
      },
      {
        label: "Drains & Sewers",
        href: "/services#drains-sewers",
        description: "Clogs, sewer lines and inspections.",
        path: icons.drops,
        links: [
          { label: "Drain Cleaning", href: "/services/drain-cleaning" },
          { label: "Hydro Jetting", href: "/services/hydro-jetting" },
          { label: "Sewer Line Services", href: "/services/sewer-line-repair" },
          { label: "Sewer Camera Inspections", href: "/services/sewer-camera-inspection" },
        ],
      },
      {
        label: "Water Heater & Water Quality",
        href: "/services#water-heater-quality",
        description: "Hot water and treatment systems.",
        path: icons.heater,
        links: [
          { label: "Water Heater Services", href: "/services/water-heater-services" },
          { label: "Water Treatment", href: "/services/water-treatment" },
        ],
      },
      {
        label: "Commercial Plumbing",
        href: "/services/commercial-plumbing",
        description: "For businesses and managed properties.",
        path: icons.building,
        links: [
          { label: "Commercial Plumbing Service", href: "/services/commercial-plumbing" },
          { label: "Plumbing for Businesses", href: "/commercial" },
        ],
      },
      {
        label: "Emergency Plumbing",
        href: "/services/emergency-plumbing",
        description: "Urgent help for burst pipes and backups.",
        badge: "24/7",
        path: icons.bolt,
        links: [{ label: "Get Emergency Help", href: "/services/emergency-plumbing" }],
      },
    ],
  },
  {
    type: "mega",
    id: "service-areas",
    label: "Service Areas",
    href: "/service-areas",
    showCommunities: true,
    footer: { label: "View all service areas", href: "/service-areas" },
    features: [
      {
        label: "Las Vegas",
        href: "/service-areas/las-vegas",
        description: "Our home base and primary service area.",
        path: icons.pin,
        links: [{ label: "Plumber in Las Vegas, NV", href: "/service-areas/las-vegas" }],
      },
      {
        label: "Across the Valley",
        href: "/service-areas",
        description: "Where we work, and how to confirm coverage.",
        path: icons.map,
        links: [{ label: "All service areas", href: "/service-areas" }],
      },
    ],
  },
  { type: "link", label: "Reviews", href: "/reviews" },
  { type: "link", label: "About", href: "/about" },
];

/** Extra link shown in the mobile menu only. */
export const contactLink = { label: "Contact", href: "/contact" };

export const footerNav = {
  Company: [
    { label: "About", href: "/about" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],
  Explore: [
    { label: "All Services", href: "/services" },
    { label: "Service Areas", href: "/service-areas" },
    { label: "Residential Plumbing", href: "/residential" },
    { label: "Commercial Plumbing", href: "/commercial" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "SMS Terms", href: "/sms-terms" },
  ],
};
