# CLAUDE.md

This repo follows the home-services-site-system project instructions in full. Read them before changing code.

## Current client

Las Vegas Pro Plumbing (fictional demo client).

## Three layers

1. **System** — reusable code: `src/components/`, `src/lib/`, `src/types/`, `src/validation/`, `src/app/`.
2. **Client config** — per-client settings: `src/config/`.
3. **Client implementation** — per-client content: `src/content/`.

Keep the layers separate; system code must not hard-code client facts.

## Rules

- **Never invent client facts** (licenses, addresses, phone numbers, reviews, years in business, service areas). Use only what is in client config/content, or leave a clearly marked placeholder.

## Validate before done

```
npm run lint && npm run typecheck && npm run build
```
