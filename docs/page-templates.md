# Page templates and content model

Pages are described as data and rendered by one template, so a new client
changes content files, not components.

## How a page is built

- `src/types/content.ts` defines `PageContent`: `meta`, `hero`, optional
  `stats` (trust strip), an ordered `sections` list, and a `finalCta`.
- `src/components/templates/PageRenderer.tsx` renders it. FAQPage schema is
  emitted only for FAQ sections that are visibly rendered, and never on
  `noindex` pages.
- Section blocks live in `src/components/blocks/`. Section `type` values:

| type | block | use |
| --- | --- | --- |
| `tiles` | IconTiles | short icon list (drains we clear, signs) |
| `cards` | InfoCards | decision cards, "what to expect", signs with detail |
| `comparison` | ComparisonSection | "which one do I need" side by side |
| `steps` | ProcessSection | how it works (defaults provided) |
| `links` | LinkCards | related services, with image placeholder |
| `local` | LocalNotes | market-specific notes (keeps location pages unique) |
| `routes` | RouteCards | routing cards to pages or anchors |
| `serviceGroup` | ServiceGroup | category of services with quick links |
| `callout` | CalloutSection | "why us" statement plus stats |
| `emergency` | EmergencyBanner | call banner; use only if emergency policy is verified |
| `coverage` | CoverageSection | service areas, optional hours/contact panel |
| `reviews` | ReviewSection | testimonials (placeholders until real) |
| `faq` | FaqSection | questions and answers |

Order, inclusion and copy are per client and per page. Do not force every
page into the same sequence.

## Where each page lives

| URL | route | content |
| --- | --- | --- |
| `/` | `app/(marketing)/page.tsx` | composed in the page file |
| `/services/` | `services/page.tsx` | `content/pages/hubs.ts` `servicesHubPage` |
| `/services/<slug>/` | `services/[slug]/page.tsx` | `content/pages/service-pages.ts`, else `service-defaults.ts` |
| `/service-areas/` | `service-areas/page.tsx` | `hubs.ts` `serviceAreasHubPage` |
| `/service-areas/<city>/` | `service-areas/[slug]/page.tsx` | `location-pages.ts` |
| `/commercial/`, `/residential/` | audience hubs | `audience-pages.ts` |
| `/commercial/<service>/` | `commercial/[service]/page.tsx` | `combination-pages.ts` |
| `/service-areas/<city>/<service>/` | `service-areas/[slug]/[service]/page.tsx` | `combination-pages.ts` |

Services without hand-written content get a page built from their `Service`
record (`buildDefaultServicePage`), so a client can launch with every service
reachable and deepen pages as real content arrives.

## Commercial: hub plus service page

`/commercial/` is the audience hub (routes business visitors to a service).
`/services/commercial-plumbing/` is the service page. Keep their copy
distinct. There are no redirects between them.

## Reference (combination) pages

`combination-pages.ts` holds two reference templates (commercial drain
cleaning and Las Vegas drain cleaning). They are `noindex` and excluded from
`sitemap.ts` by policy (see `docs/seo.md`). For a new client, copy them only
after demand, coverage, unique content and a real proof element are
confirmed, then remove `noindex` for that page.

## Content rules for a new client

- Replace every string in `src/content/` and `src/config/`; the components
  contain no client facts.
- Phone, name and email in copy come from `clientConfig` via template strings.
- Hours text inside FAQ answers is literal copy: update it when
  `clientConfig.hours` changes.
- Placeholders (license, reviews, photos) stay clearly labeled until verified.
- Icons in `path` fields are SVG path data on a 24x24 viewBox.
