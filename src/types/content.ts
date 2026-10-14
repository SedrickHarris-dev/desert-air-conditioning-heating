import type { ProofIconName } from "@/components/ui/icons";

export type Service = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  signs: string[];
  /** Optional detailed version of `signs` (title, description, icon) for the service page. */
  signCards?: CardItem[];
  featured: boolean;
  isEmergency?: boolean;
  cardCta?: string;
};

export type Location = {
  slug: string;
  name: string;
  state: string;
  tier: "primary" | "tier-1";
  hasDedicatedPage: boolean;
};

export type FaqCategory = "general" | "emergency" | "service-area" | "services";

export type Faq = {
  question: string;
  answer: string;
  categories: FaqCategory[];
};

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
  isPlaceholder: boolean;
};

// ---------------------------------------------------------------------------
// Page composition model
//
// Pages are described as data (hero + ordered sections) and rendered by
// components/templates/PageRenderer. Clients reorder, add or drop sections
// per page; nothing here is specific to one client or industry.
// ---------------------------------------------------------------------------

/** Proof point shown under the hero buttons. Use a named icon or raw SVG path data. */
export type ProofPoint = { label: string; icon?: ProofIconName; path?: string };

/** Question/answer pair shown in an FAQ section and in FAQPage schema. */
export type QA = { question: string; answer: string };

/** Icon tile. `path` is SVG path data drawn in a 24x24 viewBox. */
export type TileItem = { name: string; path?: string };

/** Titled card with optional icon (decision cards, "what to expect", signs). */
export type CardItem = { title: string; body: string; path?: string };

/** Card that routes to another page. */
export type LinkCardItem = {
  name: string;
  href: string;
  cta: string;
  desc: string;
  badge?: string;
};

export type StatItem = { value: string; label: string };

export type StepItem = { title: string; body: string };

export type PageHero = {
  eyebrow?: string;
  title: string;
  /** Highlighted trailing part of the H1 (rendered in the accent color). */
  accent?: string;
  description: string;
  proofPoints: ProofPoint[];
  /** Lead source recorded with the form submission. */
  formSource: string;
  form?: {
    title?: string;
    intro?: string;
    submitLabel?: string;
    /** Adds a business/property name field. */
    showCompany?: boolean;
    /** Service name preselected in the form. */
    defaultService?: string;
  };
};

type SectionBase = { id?: string; eyebrow?: string; title: string; intro?: string };

export type PageSection =
  | ({ type: "tiles"; items: TileItem[] } & SectionBase)
  | ({ type: "cards"; items: CardItem[]; columns?: 2 | 3 | 4 } & SectionBase)
  | ({
      type: "comparison";
      items: Array<{
        label: string;
        title: string;
        body: string;
        link?: { href: string; label: string };
      }>;
      footnote?: string;
    } & SectionBase)
  | ({ type: "steps"; items?: StepItem[]; note?: string } & SectionBase)
  | ({
      type: "links";
      items: LinkCardItem[];
      more?: { prompt: string; href: string; label: string };
    } & SectionBase)
  | ({
      type: "local";
      items: Array<{ title: string; body: string; href: string; link: string }>;
    } & SectionBase)
  | { type: "emergency"; id?: string; title: string; body: string }
  | ({
      type: "coverage";
      /** Link shown under the grid, e.g. to a related page. */
      crossLink?: { text: string; href: string; label: string };
      showHours?: boolean;
    } & SectionBase)
  | ({
      /** Routing cards: each one links to a page or an on-page anchor. */
      type: "routes";
      items: Array<{ title: string; body: string; cta: string; href: string; label?: string; path?: string }>;
      columns?: 2 | 3 | 4 | 5;
    } & SectionBase)
  | ({
      /** A group of related services with optional quick links and actions. */
      type: "serviceGroup";
      items?: Array<{ name: string; desc: string; href: string }>;
      paragraphs?: string[];
      chips?: Array<{ label: string; href: string }>;
      actions?: Array<{ label: string; href: string; variant?: "primary" | "outline-dark" }>;
    } & SectionBase)
  | ({
      type: "callout";
      link?: { href: string; label: string };
      stats?: StatItem[];
      body: string;
    } & SectionBase)
  | { type: "reviews"; id?: string }
  | { type: "faq"; id?: string; eyebrow?: string; title: string; items: QA[] };

export type PageMeta = {
  /** Title without the site-name suffix (the title template adds it). */
  title: string;
  description: string;
  path: string;
  /** Reference/template pages stay noindex until validated. */
  noindex?: boolean;
};

export type PageContent = {
  meta: PageMeta;
  hero: PageHero;
  /** Trust strip under the hero. Omit to hide it. */
  stats?: StatItem[];
  sections: PageSection[];
  finalCta?: { title: string; body?: string };
};
