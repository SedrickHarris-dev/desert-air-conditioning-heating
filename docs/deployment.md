# Deployment (Cloudflare Pages)

The site is a **static export** (`output: "export"` in `next.config.ts`). `next build` writes the
site to `out/`. The three server endpoints live in `functions/api/` as Cloudflare Pages Functions;
their logic is in `src/lib/server/` (runtime-agnostic Request/Response code).

## Pages project settings

| Setting | Value |
| --- | --- |
| Production branch | `main` (merge `feat/seo-foundation` first) |
| Framework preset | None (or Next.js (Static HTML Export)) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | (blank) |
| Node version | 22 (default is fine) |

Other branches get preview deployments automatically. Cloudflare builds the branch you select, so
unmerged work only appears on that branch's preview URL.

## Environment variables (Settings > Variables and Secrets)

| Name | Type | Purpose |
| --- | --- | --- |
| `LEAD_WEBHOOK_URL` | Secret | Where `/api/leads` POSTs validated leads. Optional; without it leads are validated and acknowledged only. |

Never prefix secrets with `NEXT_PUBLIC_`. Functions read them from `env`, not from the bundle.

## Local checks

```
npm run lint && npm run typecheck && npm run build   # produces out/
npm run pages:dev                                      # serves out/ + functions/ on :8788
```

`npm run dev` serves pages only; `/api/*` exists only under `pages:dev` or on Cloudflare.

## Adding endpoints

Put logic in `src/lib/server/<name>.ts`, then add a thin `functions/api/<name>.ts` wrapper.
Do not add `route.ts` files under `src/app/` (incompatible with static export).
