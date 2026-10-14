# SEO standards

## URL standard

All routes end with a trailing slash (`trailingSlash: true` in `next.config.ts`).
`absoluteUrl()` in `src/lib/url.ts` normalizes every canonical and sitemap URL.
The canonical origin comes from `clientConfig.url`; never hardcode a domain elsewhere.

| Page type | URL |
|---|---|
| Home | `/` |
| Services hub / service | `/services/`, `/services/<slug>/` |
| Locations hub / location | `/service-areas/`, `/service-areas/<city>/` |
| Commercial hub | `/commercial/` (routes businesses and property managers to services) |
| Commercial service | `/services/commercial-plumbing/` (the service itself) |
| Residential | `/residential/` (planned, not built yet) |
| Utility / legal | `/about/ /reviews/ /contact/ /privacy/ /terms/ /sms-terms/` |
| Thank-you | `/thank-you/` (noindex, disallowed in robots) |

## Metadata

Use `buildMetadata()` on every page. Each page needs a unique title (65 chars or fewer
before the site-name suffix is added), a unique 70-160 character description, and one unique H1.
Pass `noindex: true` only for utility pages.

## Schema

Builders live in `src/lib/schema.ts`. Use them only for content visible and accurate on the same page:

- `localBusinessSchema()` - site-wide (layout).
- `webSiteSchema()` - home page.
- `breadcrumbSchema()` - only where a visible breadcrumb renders. None render yet.
- `faqSchema()` - only for FAQs shown with identical text.
- `serviceSchema()` - only for real services described on the page.

Review and rating markup is intentionally not provided. Add it only after real, visible,
verifiable reviews exist.

## Combination pages: hold

Do not build audience + service (e.g. `/commercial/drain-cleaning/`) or location + service
(e.g. `/service-areas/henderson/drain-cleaning/`) pages, and do not generate a service x location matrix, until a
specific page has all of: validated demand, genuine service coverage, substantial unique content
that a city or audience swap could not produce, a unique title/description/H1, and at least one real
proof element tied to that page.

## Page templates

Page structure and the section library are documented in
`docs/page-templates.md`. Reference combination pages are noindex and out of
the sitemap until they pass the hold criteria above.

## Open items

- Commercial decision (made): a hub at `/commercial/` plus a service page at `/services/commercial-plumbing/`, no redirects. To avoid cannibalization the hub is a routing page (links to the relevant services, no copy duplicated from the service page) and the service page owns the "commercial plumbing service" intent. Give them different titles, descriptions and H1s; `validatePages()` style checks should enforce this.
- No visible breadcrumbs yet, so no BreadcrumbList schema.
- No Open Graph image asset yet.
