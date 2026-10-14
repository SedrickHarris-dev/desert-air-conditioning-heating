# home-services-site-system

Agency starter for home-services (plumbing, HVAC, electrical, etc.) marketing sites. The current demo client is Las Vegas Pro Plumbing (fictional).

## Tech stack

Next.js 15 (App Router, React Server Components), TypeScript (strict), Tailwind CSS, ESLint 9 (flat config), self-hosted fonts via Fontsource.

## Local setup

```
npm install
cp .env.example .env.local   # optional; not needed for the demo
npm run dev
```

## Environment setup

See `.env.example`. All variables are optional for the local demo.

## Dev commands

- `npm run dev` — start dev server
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript
- `npm run build` — production build

## Configuring the demo client

Edit `src/config/` (client, navigation, SEO, chatbot, booking, consent, emergency routing) and `src/content/` (services, locations, FAQs, testimonials, pages).

## Creating a client implementation

See `docs/client-onboarding.md`. Copy the starter, replace config and content with real client facts, and never invent facts.

## Deployment

See `docs/deployment.md`.

## Docs

`docs/`: architecture, page templates, client onboarding, SEO, launch checklist, deployment.
