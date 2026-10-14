# Artifact Snapshot Workflow

This system supports publishing a **static visual snapshot** of a
client's live homepage (or any page) as a Claude Artifact — a
shareable, view-only page useful for quick design review, client
sign-off, or sharing a look-and-feel without giving anyone access to
the running dev environment or the codebase itself.

This is a manual, on-demand workflow, not an automated pipeline. It
has no client-specific content and applies to any client built on
this system.

## What an artifact snapshot is — and isn't

- It **is** a self-contained HTML page: the rendered markup and
  compiled CSS from one live page, with images embedded as base64
  data URIs and fonts loaded from Google Fonts (or embedded, if the
  brand's fonts aren't on Google Fonts).
- It **is not** connected to the codebase. Editing the code does not
  update the artifact, and editing the artifact does not touch the
  code. It must be manually regenerated and republished whenever the
  page changes and the snapshot should reflect that.
- Interactive elements are simulated, not functional: forms show a
  "preview only" message instead of submitting; a chat widget shows a
  static preview note instead of opening a live chat; anything that
  depends on client-side JavaScript state (React hooks, hydration)
  needs its own small hand-written script to fake the interaction, or
  is left non-functional.

## When to use it

- The client or a stakeholder wants to see/review a design without
  developer access.
- You want a link to share for feedback on a specific state of a page
  mid-build.
- You want a quick way to compare "before" and "after" a design
  change without standing up a deployed preview environment.

Don't use it as a substitute for a real staging/preview deployment
when the reviewer needs to click through multiple pages or test real
form submissions — it's a single-page, mostly-static snapshot.

## Workflow

1. **Build and start a clean production server.**
   Run `npm run build`, then start it with `next start -p <port>`.
   Always confirm you're serving the build you just made — kill any
   stale `next start` process first (`ps aux | grep next`,
   `kill -9 <pid>`) and confirm a fresh PID, or you risk snapshotting
   an outdated build.

2. **Capture the rendered HTML and compiled CSS.**
   Use a headless browser (Playwright, with the sandbox's pre-installed
   Chromium at `/opt/pw-browsers/chromium` if applicable) to load the
   page with `waitUntil: 'networkidle'`, then:
   - Save `page.content()` (the full rendered HTML).
   - Find every `<link rel="stylesheet">` href and fetch each one's
     body, concatenating them into one stylesheet.

3. **Strip and embed.**
   - Remove all `<script>` tags from the body — Next.js's hydration
     scripts don't apply to a static snapshot and would error without
     the app's runtime.
   - Find every image reference (including Next.js's
     `/_next/image?url=...&w=...&q=...` wrapper URLs — decode the
     `url` query param, don't try to fetch the wrapper URL itself) and
     replace it with a `data:` URI, base64-encoding the source file
     from the local `public/` directory.
   - Strip `@font-face` rules that point at local, non-portable font
     file paths (e.g. `/_next/static/media/...`) — they won't resolve
     on the artifact's host. Load the same font family from Google
     Fonts via a `<link>` tag instead (matching the exact family names
     used in the site's CSS custom properties), or inline a
     self-hosted font as a `data:` URI if it isn't on Google Fonts.

4. **Re-wire the handful of interactive elements that need it.**
   Tag any element whose behavior depends on React state (a mobile
   nav toggle, a chat widget open/close button) with a stable `id`,
   then write a small vanilla-JS block appended at the end of the
   page to fake that one interaction (e.g. toggling a `hidden` class).
   Add a `submit` handler on every `<form>` that calls
   `preventDefault()` and shows a "preview only — not submitted"
   message, since a static snapshot has nowhere for form data to go.

5. **Assemble the final file.**
   Combine, in order: a `<title>`, the Google Fonts `<link>` tags, a
   `<style>` block with the cleaned CSS (plus an explicit
   `:root[data-theme="dark"] { color-scheme: dark; }` block and a
   `body { background: ... }` fallback, required by the Artifact
   page contract), the cleaned body HTML, and the small `<script>`
   block from step 4.

6. **Do exactly one local preview check before publishing.**
   Render the assembled file locally (wrap it in a minimal HTML
   skeleton and screenshot it with Playwright) once, to catch layout
   bugs the live dev server didn't surface (e.g. CSS that behaves
   differently without the app's hydrated JS, or a grid/flex bug that
   only shows up once content is embedded). Don't loop on this step —
   one check, fix what it finds, then publish.

7. **Publish.**
   First publish: no `url` — creates a new artifact. Every later
   update to the *same* artifact: pass its `url` so the same link
   gets updated in place rather than creating a duplicate. Only the
   conversation that originally published an artifact (or one given
   its URL directly) can update it this way.

## Known pitfalls (seen in practice)

- **Stale server, stale snapshot.** `pkill -f "next start"` can report
  success without actually killing the process. Always verify with
  `ps aux` and `kill -9 <pid>` explicitly before starting a fresh
  server for a snapshot capture.
- **Equal-width grid columns + `whitespace-nowrap`.** Forcing text
  onto one line inside a CSS Grid track sized with `1fr` (equal
  division) lets long text overflow into the next column with no
  visible gap. Prefer content-sized columns
  (`grid-template-columns: repeat(N, max-content)`) or a flex-wrap
  layout when items must each stay on one line but have variable
  length.
- **Next.js image wrapper URLs.** `next/image` renders
  `/_next/image?url=<encoded>&w=...&q=...`, not the raw file path —
  decode the `url` param and read the real file from `public/`, don't
  try to fetch the wrapper URL itself (it won't resolve outside the
  running Next.js server).
