# Minas Lórien — Web App UI Kit

A faithful, interactive recreation of the production Minas Lórien web app. All visual details (palette, type, hairlines, corner ornaments, brass underline, dashed upload area) are lifted from `source/minas-lorien-source.html`.

## Files

- `index.html` — full click-thru: tabs, inspire spotlight, vault list with filters, add form. Includes a "preview the threshold" link to surface the login overlay.
- `data.js` — sample wins covering all four categories.
- `TowerMark.jsx` — the three-spired tower mark + double-chevron meta indicator.
- `Header.jsx` — header lockup (tower + wordmark + brass hairline below).
- `Tabs.jsx` — Inspire / Vault / Add tab row.
- `StatusBar.jsx` — connecting / syncing / synced / error states.
- `FilterChips.jsx` — segmented category filter (with optional count badges).
- `WinCard.jsx` — vault entry; 2px category left-border, hover-revealed edit/delete.
- `Spotlight.jsx` — the "show me something" panel with corner ornaments and `· · ·` rule.
- `AddForm.jsx` — full add-entry form with dashed upload area.

## What's intentionally simplified

- Firebase calls are stubbed — wins live in React state only.
- Password check is cosmetic — clicking "Enter the Tower" closes the overlay.
- Link previews, file uploads, image thumbs, and audio/video players are not wired (the design system documents their visual treatment instead).
- "Show me something" cycles through the pool in order; the production app picks randomly.

## What's faithful

- Every colour token, font weight, letter-spacing value, padding, and border-radius matches production.
- Corner ornaments, brass hairline, decorative `· · ·` rule, dashed→solid upload border, and hover-reveal of edit/delete are all present.
- Category accents (2px left-border on cards, 1px-66% top-border on spotlight) match the source.
