import type { Service } from "@/types/content";

// General plumbing descriptions only. No pricing, timelines, warranties or
// other claims beyond what the client has supplied.
// SVG path data (24x24 viewBox) for the sign cards on service pages.
const icons = {
  alert: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 8v5M12 16h.01",
  check: "M5 12l5 5 9-10",
  dollar: "M12 2v20M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
  drop: "M12 3s6 6.3 6 10.5a6 6 0 0 1-12 0C6 9.3 12 3 12 3z",
  filt: "M3 4h18l-7 8v6l-4 2v-8z",
  gauge: "M12 21a9 9 0 1 1 9-9M12 12l4-4",
  heater: "M7 3h10v18H7zM10 7h4M10 17h4",
  home: "M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6",
  layers: "M12 3 2 8l10 5 10-5-10-5zM2 13l10 5 10-5",
  pipe: "M3 9h6v6H3zM15 9h6v6h-6zM9 12h6",
  refresh: "M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5",
  search: "M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.3-4.3",
  spark: "M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z",
  therm: "M14 14.8V5a2 2 0 0 0-4 0v9.8a4 4 0 1 0 4 0z",
  tool: "M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.2-.6-.6-2.2z",
  warn: "M12 3 2 20h20L12 3zM12 10v4M12 17h.01",
  wave: "M3 12h2l2-5 4 10 3-8 2 3h5",
} as const;

export const services: Service[] = [
  {
    slug: "emergency-plumbing",
    name: "Emergency Plumbing",
    summary:
      "Burst pipes, major leaks and sewage backups can't wait. Emergency dispatch is available 24/7, every day.",
    description:
      "When a plumbing problem is causing active damage or making your property unusable, call our emergency line. Dispatch is available 24/7, every day of the week.",
    signs: [
      "A burst or actively leaking pipe",
      "Sewage backing up into drains or fixtures",
      "Sudden loss of water or water pressure",
      "A water heater leaking heavily",
    ],
    signCards: [
      {
        title: "A burst or actively leaking pipe",
        body: "Active water can damage floors and walls quickly, so this is worth an urgent call.",
        path: icons.warn,
      },
      {
        title: "Sewage backing up into drains or fixtures",
        body: "A sewage backup is a health concern as well as a mess, so call for help right away.",
        path: icons.alert,
      },
      {
        title: "Sudden loss of water or water pressure",
        body: "A sudden change can point to a problem in the supply line, and a technician can help find it.",
        path: icons.gauge,
      },
      {
        title: "A water heater leaking heavily",
        body: "Heavy leaking from a water heater is worth an urgent call.",
        path: icons.heater,
      },
    ],
    featured: true,
    isEmergency: true,
    cardCta: "Get Emergency Help",
  },
  {
    slug: "plumbing-repair",
    name: "General Plumbing Repair",
    summary:
      "Repairs for leaking, running or malfunctioning plumbing in homes and businesses.",
    description:
      "From dripping faucets to failing supply lines, general plumbing repair covers the everyday problems that show up in residential and commercial buildings.",
    signs: [
      "Dripping faucets or running toilets",
      "Low water pressure at one or more fixtures",
      "Water stains on walls or ceilings",
      "Strange noises from pipes",
    ],
    signCards: [
      {
        title: "Dripping faucets or running toilets",
        body: "Small leaks waste water and tend to get worse over time.",
        path: icons.drop,
      },
      {
        title: "Low water pressure at one or more fixtures",
        body: "Weak flow at one fixture or throughout the building is worth having checked.",
        path: icons.gauge,
      },
      {
        title: "Water stains on walls or ceilings",
        body: "Stains can mean a hidden leak behind the surface.",
        path: icons.layers,
      },
      {
        title: "Strange noises from pipes",
        body: "Banging, whistling or rattling is worth looking into before it turns into a leak.",
        path: icons.wave,
      },
    ],
    featured: true,
  },
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    summary:
      "Clear slow or clogged sinks, tubs, showers and main drain lines.",
    description:
      "Slow or blocked drains are often caused by a buildup of grease, hair, soap scum or debris. Drain cleaning removes the blockage so water flows freely again.",
    signs: [
      "Water draining slowly",
      "Gurgling sounds from drains",
      "Recurring clogs in the same fixture",
      "Unpleasant odors from drains",
    ],
    featured: true,
    cardCta: "Explore Drain Cleaning",
  },
  {
    slug: "hydro-jetting",
    name: "Hydro Jetting",
    summary:
      "High-pressure water cleaning for stubborn buildup inside drain and sewer lines.",
    description:
      "Hydro jetting uses high-pressure water to scour the inside of a pipe, clearing grease, scale and debris that simple snaking can leave behind.",
    signs: [
      "Clogs that keep returning after clearing",
      "Grease buildup in kitchen or commercial lines",
      "Multiple fixtures draining slowly at once",
      "Scale or debris restricting flow",
    ],
    signCards: [
      {
        title: "Clogs that keep returning after clearing",
        body: "A repeat clog can mean buildup that standard clearing leaves behind.",
        path: icons.refresh,
      },
      {
        title: "Grease buildup in kitchen or commercial lines",
        body: "Grease collects along pipe walls and can narrow the line over time.",
        path: icons.layers,
      },
      {
        title: "Multiple fixtures draining slowly at once",
        body: "Several slow drains can point to a problem in a shared line.",
        path: icons.pipe,
      },
      {
        title: "Scale or debris restricting flow",
        body: "Mineral scale and debris can narrow a pipe and slow drainage.",
        path: icons.spark,
      },
    ],
    featured: true,
  },
  {
    slug: "sewer-line-repair",
    name: "Sewer Line Services",
    summary:
      "Diagnosis and repair of damaged, blocked or failing sewer lines.",
    description:
      "Your sewer line carries wastewater away from the property. When it's cracked, blocked or damaged by roots or shifting soil, it needs prompt professional attention.",
    signs: [
      "Sewage odors in or around the property",
      "Multiple drains backing up at once",
      "Soggy or sunken patches in the yard",
      "Recurring main line clogs",
    ],
    signCards: [
      {
        title: "Sewage odors in or around the property",
        body: "A persistent sewage smell is worth a call.",
        path: icons.alert,
      },
      {
        title: "Multiple drains backing up at once",
        body: "Several drains backing up together can point to the main line.",
        path: icons.pipe,
      },
      {
        title: "Soggy or sunken patches in the yard",
        body: "Wet or sunken ground can be a sign of a damaged line underground.",
        path: icons.home,
      },
      {
        title: "Recurring main line clogs",
        body: "Repeat clogs in the main line can mean a problem in the line itself.",
        path: icons.refresh,
      },
    ],
    featured: true,
    cardCta: "Explore Sewer Services",
  },
  {
    slug: "sewer-camera-inspection",
    name: "Sewer Camera Inspections",
    summary:
      "See what's happening inside your lines with a camera inspection.",
    description:
      "A camera inspection lets a technician look inside a drain or sewer line to find the cause of a problem without guessing, and to confirm the condition of the pipe.",
    signs: [
      "Repeated backups with no clear cause",
      "Buying or selling a property and wanting to know the line's condition",
      "Suspected root intrusion or a collapsed section",
      "Checking a line after repair work",
    ],
    signCards: [
      {
        title: "Repeated backups with no clear cause",
        body: "A camera can show what's happening inside the line instead of guessing.",
        path: icons.search,
      },
      {
        title: "Buying or selling a property and wanting to know the line's condition",
        body: "An inspection shows the line's condition before a transaction.",
        path: icons.home,
      },
      {
        title: "Suspected root intrusion or a collapsed section",
        body: "A camera can confirm whether roots or damage are present.",
        path: icons.alert,
      },
      {
        title: "Checking a line after repair work",
        body: "An inspection can confirm the line looks as expected after work is done.",
        path: icons.check,
      },
    ],
    featured: true,
  },
  {
    slug: "water-heater-services",
    name: "Water Heater Services",
    summary:
      "Repair, maintenance and replacement for tank and tankless water heaters.",
    description:
      "Whether your water heater has stopped producing hot water, is leaking, or is nearing the end of its life, water heater service keeps hot water available when you need it.",
    signs: [
      "No hot water or not enough hot water",
      "Water leaking around the base of the unit",
      "Rumbling or popping noises from the tank",
      "Discolored or rusty hot water",
    ],
    signCards: [
      {
        title: "No hot water or not enough hot water",
        body: "A water heater that can't keep up is worth having checked.",
        path: icons.therm,
      },
      {
        title: "Water leaking around the base of the unit",
        body: "Leaking at the base is worth a prompt call.",
        path: icons.drop,
      },
      {
        title: "Rumbling or popping noises from the tank",
        body: "These sounds are often linked to sediment in the tank.",
        path: icons.wave,
      },
      {
        title: "Discolored or rusty hot water",
        body: "Discolored hot water is worth having looked at.",
        path: icons.spark,
      },
    ],
    featured: true,
    cardCta: "Explore Water Heaters",
  },
  {
    slug: "leak-detection",
    name: "Leak Detection & Repair",
    summary:
      "Locate hidden leaks and repair them before they cause more damage.",
    description:
      "Not every leak is visible. Leak detection helps pinpoint where water is escaping, including behind walls or under a slab, so the right repair can be made.",
    signs: [
      "An unexplained rise in your water bill",
      "The sound of running water when everything is off",
      "Damp spots, mold or musty smells",
      "Warm spots on the floor",
    ],
    signCards: [
      {
        title: "An unexplained rise in your water bill",
        body: "A higher bill with no change in use can mean a hidden leak.",
        path: icons.dollar,
      },
      {
        title: "The sound of running water when everything is off",
        body: "Running water with nothing on is a common sign of a leak.",
        path: icons.wave,
      },
      {
        title: "Damp spots, mold or musty smells",
        body: "Moisture and musty smells can point to a leak behind a surface.",
        path: icons.drop,
      },
      {
        title: "Warm spots on the floor",
        body: "Warm patches can sometimes point to a leak in a line under the floor.",
        path: icons.therm,
      },
    ],
    featured: true,
  },
  {
    slug: "repiping",
    name: "Pipe Repair & Repiping",
    summary:
      "Repair damaged pipe sections or replace aging plumbing throughout a property.",
    description:
      "Pipes wear out over time. Depending on their condition, a section can often be repaired, while widespread problems may call for repiping.",
    signs: [
      "Frequent leaks in different places",
      "Discolored water or reduced flow",
      "Visible corrosion on exposed pipes",
      "Pipes that have been damaged or frozen",
    ],
    signCards: [
      {
        title: "Frequent leaks in different places",
        body: "Leaks that keep appearing in different spots can mean the pipes are wearing out.",
        path: icons.tool,
      },
      {
        title: "Discolored water or reduced flow",
        body: "Rusty water or weak flow can be a sign of aging or corroded pipes.",
        path: icons.gauge,
      },
      {
        title: "Visible corrosion on exposed pipes",
        body: "Corrosion you can see is worth having inspected.",
        path: icons.search,
      },
      {
        title: "Pipes that have been damaged or frozen",
        body: "Damaged pipes are worth having checked even if they seem to be holding.",
        path: icons.warn,
      },
    ],
    featured: true,
  },
  {
    slug: "plumbing-fixtures",
    name: "Fixture Repair & Installation",
    summary:
      "Repair or install faucets, toilets, sinks, garbage disposals and other fixtures.",
    description:
      "Worn or outdated fixtures can waste water and cause leaks. Fixture service covers repairing what you have or installing a replacement.",
    signs: [
      "Faucets or toilets that leak or run constantly",
      "Fixtures that are cracked, corroded or outdated",
      "Upgrading during a remodel",
      "A garbage disposal that jams or won't run",
    ],
    signCards: [
      {
        title: "Faucets or toilets that leak or run constantly",
        body: "Constant leaking or running wastes water and usually gets worse.",
        path: icons.drop,
      },
      {
        title: "Fixtures that are cracked, corroded or outdated",
        body: "Worn fixtures can be repaired or replaced.",
        path: icons.tool,
      },
      {
        title: "Upgrading during a remodel",
        body: "New fixtures are often installed as part of a remodel.",
        path: icons.home,
      },
      {
        title: "A garbage disposal that jams or won't run",
        body: "A stuck or silent disposal is worth having looked at.",
        path: icons.refresh,
      },
    ],
    featured: true,
  },
  {
    slug: "water-treatment",
    name: "Water Treatment",
    summary:
      "Options for improving water quality at the tap, such as filtration and softening.",
    description:
      "Water treatment systems can help address concerns like hard water or taste and odor. A technician can talk through options that fit your property.",
    signs: [
      "White scale buildup on fixtures",
      "Spotty dishes or stiff laundry",
      "Taste or odor concerns",
      "Interest in filtration or softening",
    ],
    signCards: [
      {
        title: "White scale buildup on fixtures",
        body: "Scale is a common effect of hard water.",
        path: icons.spark,
      },
      {
        title: "Spotty dishes or stiff laundry",
        body: "Spots and stiffness are often linked to hard water.",
        path: icons.layers,
      },
      {
        title: "Taste or odor concerns",
        body: "If your water tastes or smells off, filtration is one option.",
        path: icons.drop,
      },
      {
        title: "Interest in filtration or softening",
        body: "If you're curious about softening or filtration, we can talk through what's available.",
        path: icons.filt,
      },
    ],
    featured: true,
  },
  {
    slug: "commercial-plumbing",
    name: "Commercial Plumbing",
    summary:
      "Plumbing service for businesses, offices and other commercial properties.",
    description:
      "Commercial properties depend on working plumbing. We handle repairs and service for businesses in addition to residential customers.",
    signs: [
      "Restroom or fixture problems affecting customers or staff",
      "Grease or drain problems in food service",
      "Leaks in a commercial building",
      "Planning ongoing plumbing service for a property",
    ],
    featured: true,
  },
];

// Curated homepage set, in display order.
export const mostRequestedServices: Service[] = [
  "emergency-plumbing",
  "drain-cleaning",
  "water-heater-services",
  "sewer-line-repair",
]
  .map((slug) => services.find((s) => s.slug === slug))
  .filter((s): s is Service => Boolean(s));

export const featuredServices = services.filter((s) => s.featured);

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
