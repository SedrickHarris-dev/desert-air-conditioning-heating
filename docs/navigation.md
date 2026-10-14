# Navigation and mega menus

Navigation is client configuration in `src/config/navigation.ts`. The
components in `src/components/layout/` read it and hold no client facts.

- `mainNav` is an ordered list of `link` and `mega` items.
- A `mega` item has a hub `href`, a list of `features` (thumbnail, title,
  short description, optional links), an optional footer link, and
  `showCommunities` to list communities that have no page of their own as
  plain text.
- Thumbnails: set `image: { src, alt }` on a feature to show a real photo.
  Without it the menu shows a neutral icon placeholder (`path` is SVG path
  data on a 24x24 viewBox). Do not use stock photos as stand-ins.
- Each mega item is a real link to its hub plus a chevron button that
  toggles the panel, so the menu still works as plain links without
  JavaScript. Panels open on hover or click and close on Escape, outside
  click, focus leaving, or navigation.
- Below the `lg` breakpoint a native `<details>` mobile menu is used, with
  the same groups as an accordion (no thumbnails, to keep it light).
- `contactLink` appears in the mobile menu only; the header keeps the call
  button as the single primary action.

To add a client: replace the labels, hrefs, descriptions and images in
`mainNav`. Only link communities that have a dedicated page.
