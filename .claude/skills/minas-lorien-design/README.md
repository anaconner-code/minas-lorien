# Minas Lórien — Design System

> *"Your tower of light and memory."*

## What is Minas Lórien?

Minas Lórien is a **personal inspiration vault** — a private app where one collects and re-encounters their own accomplishments, feedback, quotes, links, memories, photos and videos. The point isn't productivity; it's *re-encounter*. You go in to feel a boost, to remember what you've done, to be inspired by what others (or you, past) have said.

The name fuses *Minas Tirith* (Tower of Guard) with *Lothlórien* (the elven forest of memory and light) — and the whole product wears this Tolkien-elven, candle-lit, warm-stone aesthetic without a single dragon or sword in sight. It's restrained, quiet, monastic.

The product is a single-user app (password-gated), with a Firebase-backed vault of "wins" — each tagged with a **category** (Work / Creativity / Family / Inspiration) and a **type** (Feedback / Performance Review / Achievement / Quote / Link / Note / Memory). Three tabs: **Inspire** (a "show me something" spotlight), **Vault** (the full list, filterable), and **Add** (a form to capture a new entry).

## Sources used

This design system was reverse-built from the live web app — no Figma, no codebase was provided.

- **Live site** — https://minas-lorien.vercel.app/ (single HTML file, ~1500 lines, all styles inline)
- **App icon** — `/icon-192.png`, `/icon-512.png` (a stylized three-spired tower against deep night)
- **Manifest** — theme color `#1a1a18`
- Source HTML saved in `source/minas-lorien-source.html` for reference.

There is **one product**: the Minas Lórien web app. It is mobile-first responsive, runs as a PWA, and has no marketing site or docs site.

## Index — what's in this folder

```
README.md                     ← you are here
SKILL.md                      ← agent skill manifest (cross-compatible with Claude Code)
colors_and_type.css           ← all design tokens (CSS vars + semantic classes)
manifest.json                 ← (link if you want to recreate PWA chrome)

assets/
  tower-logo.svg              ← the three-spired tower mark, hand-built
  chevron-mark.svg            ← the double-chevron meta indicator (»)
  icon-192.png                ← rendered app icon (small)
  icon-512.png                ← rendered app icon (large)

preview/                      ← Design System tab cards
  01-colors-surface.html
  02-colors-foreground.html
  03-colors-brass.html
  04-colors-categories.html
  05-colors-semantic.html
  06-type-display.html
  07-type-body.html
  08-type-tracking.html
  09-spacing-radii.html
  10-spacing-scale.html
  11-component-buttons.html
  12-component-filter-chips.html
  13-component-tabs.html
  14-component-form.html
  15-component-win-card.html
  16-component-spotlight.html
  17-component-status-bar.html
  18-brand-logo.html
  19-brand-iconography.html

ui_kits/web-app/
  README.md
  index.html                  ← interactive click-thru of the full app
  Header.jsx
  Tabs.jsx
  StatusBar.jsx
  WinCard.jsx
  Spotlight.jsx
  FilterChips.jsx
  AddForm.jsx
  TowerMark.jsx
  data.js

source/
  minas-lorien-source.html    ← the full source for reference
  manifest.json
```

---

## CONTENT FUNDAMENTALS

The voice is **quiet, second-person, slightly literary**, never marketing-speak. It speaks *to* the user, but as a steward of their own things — never possessive about itself.

### Pronouns
- "**Your** vault", "**your** tower", "**your** internet" — always *your*, never *my* or *our*. The vault belongs to the user; the app is a quiet servant.
- Imperatives are warm and short: "Enter the Tower." "Save to vault." "Show me something." (The "me" here is the user speaking *to* the app — the only first-person voice.)

### Casing
- **UPPERCASE chrome.** Every tab, button label, filter chip, form section, status line, and small label is uppercase Raleway with wide tracking. This is the brand's most distinctive visual signature.
- **Sentence case body.** Anything in serif Newsreader is sentence-cased and runs naturally. Quotes inside the vault retain whatever casing they came in with.
- The wordmark is "Minas **Lórien**" — accented "ó", with the second word in brass.

### Tone & vibe
- **Numinous, candle-lit, monastic.** The login screen calls itself a "threshold" in a comment; the entry button reads "Enter the Tower." This is allowed to feel a little hushed and ceremonial.
- **No exclamations.** Ever. The energy is steady.
- **No corporate cheer.** No "Oops!", no "Great job!", no marketing onboarding. Errors are calm: *"Incorrect password — try again."* / *"Could not connect — check your internet."*
- **Em-dashes, not colons,** for subordinate clauses. Italic serif handles asides ("Title — e.g. Q3 review from Sarah").
- **Status as poetry.** "Connecting to your vault…", "Vault synced · 0 entries", "Loading your vault…".

### Specific examples
- Login title: **MINAS LÓRIEN** (Lórien in brass).
- Login tagline (italic muted serif): *"Your tower of light and memory"*.
- Login button: **ENTER THE TOWER**.
- Inspire tab CTA: **SHOW ME SOMETHING**.
- Vault empty state: *"Nothing here yet — go add some."*
- Form heading: **ADD A NEW ENTRY**.
- Save button: **SAVE TO VAULT**.
- Field placeholder (serif, sentence case): *"Title — e.g. Q3 review from Sarah"*.
- Long placeholder: *"Paste your content here — feedback, a quote, a URL, a memory, anything."*
- Upload area: *"Click to attach a file — image, PDF, Word doc, audio, or video (optional)"*.
- Status messages: "Vault synced · 12 entries" / "Loading your vault..." / "Could not connect — check your internet".

### Emoji
- **Used sparingly, only as functional icons inside attachments.** Emoji appear only as inline file-type indicators (🖼️ 📄 📝 🎵 🎬 📎) and as link-source markers (▶️ for YouTube, 📸 Instagram, 🎧 Spotify, 🔗 generic). They are never decorative or used in headlines, marketing copy, or empty states. The product elsewhere is austere and emoji-free.

### Punctuation marks the brand uses
- `·` (middle dot) — counts and joins: "Vault synced · 12 entries"
- `· · ·` — decorative spacer rule below spotlight quotes
- `»` (double-chevron, drawn as inline SVG) — leads category meta lines
- `—` (em-dash) — for asides in placeholders and copy
- `↗` — file-attachment "open in new tab" indicator
- `→` — link-card arrow

---

## VISUAL FOUNDATIONS

### The big idea
A **dark, warm parchment** scene lit by a single brass candle. Every surface is a near-black warm stone (`#1a1a18` → `#1f1f1c`); every accent is the same brass tone (`#a58a5c`); body text is the colour of aged paper (`#d8d2c4`). The categories add four further warm accents (slate-blue, dusk-violet, moss, brass). That's the entire palette.

### Colour
- **Surface scale** (deepest → raised): `#141412` (login overlay, status bar, inputs) → `#1a1a18` (body) → `#1f1f1c` (cards, spotlight, forms). Hairlines are `#2a2a26`.
- **Foreground / parchment scale** (light → muted): `#d8d2c4` → `#c8c0b0` → `#a8a098` → `#6a6a62` → `#5a5a52` → `#4a4a42` → `#3a3a32`. Used for body, headings, hover states, meta, placeholder, and deepest mute respectively.
- **Brass** `#a58a5c` is the *only* accent for primary action — buttons, focus rings, brand mark, active filter, brass hairlines. Used at full opacity for action and hover; at `66`, `44`, and `0.08` alphas for ornaments and washes.
- **Category-coloured top border on spotlight: 2px solid** at full opacity (e.g. `#a58a5c` for Inspiration). Reads as a confident colour-bar across the top of the panel.
- **Status / semantic**: ok `#5a8a70`, warn/syncing `#a58a5c`, error `#aa5a5a`. Links `#5a8aaa` (the Work blue).

### Typography
- **Raleway** (300/400/500) is the entire UI chrome — every tab, button, label, filter, status, badge, form heading. Always uppercase, always tracked between `0.10em` and `0.20em`.
- **Newsreader** (300/400 + italic 300/400) is everything serif — body content, quotes, the spotlight headline, all placeholders, taglines, empty states, error microcopy. Sentence case; long line-height (`1.75`–`1.9`).
- **No mono.** Code is not part of this product.
- The Raleway-light + Newsreader-italic pairing is unusual and identifying — it reads "old library" without ever using a blackletter or a faux-medieval typeface.

### Backgrounds
- **Flat warm-near-black.** No images, no full-bleed photography, no gradients on surfaces.
- **One single decorative gradient** in the entire system: the **brass hairline** below the header, drawn as a 1px linear-gradient (transparent → `#a58a5c44` → `#a58a5c66` → `#a58a5c44` → transparent). This is the brand's signature flourish.
- **Corner ornaments.** Login box and spotlight panel both wear small L-shaped corner ornaments (top-left + bottom-right) drawn as 20×20 hairline borders in `#a58a5c44`. They evoke the corner-marks of a manuscript.
- **Decorative rule.** Below spotlight quotes, a `· · ·` middle-dot triplet flanked by hairlines.
- No textures, no patterns, no grain.

### Animation
- Calm, **no bounces, no spring physics, no slide-ins.**
- The single global timing is `transition: all 0.2s` on hover/focus — colour and border-colour swaps only.
- The **only keyframe animation** in the product is `shake` (4 oscillations, 0.4s) on the login box when the password is wrong. That's it.

### Hover states
- **Borders go brass** (idle hairline `#2a2a26` → brass `#a58a5c`).
- **Text lightens** one step on the parchment scale (e.g. `#6a6a62` → `#a8a098`, or muted → brass).
- **Filled action buttons invert** on hover: outlined-brass + transparent-bg → solid-brass background + dark text. (Login button, Save button.)
- **Cards** reveal hover-actions (edit + delete) by fading in `opacity: 0` → `opacity: 1`.

### Press / active states
- Active tab and active filter both use the brass underline (tab) or brass border + `rgba(165,138,92,0.08)` fill wash (filter).
- No shrink, no transform, no scale-down on press. Stays still.

### Borders
- All non-accent borders are **1px hairlines** in `#2a2a26` or `#2e2e28`.
- All accent borders are **1px brass** at full or partial opacity.
- **Category accents are 2px left borders only** on win-cards. Not 4px, not full borders.
- **Dashed borders** (`1px dashed #2a2a26`) appear *only* on the file-upload area until a file is selected, then it becomes solid moss `#5a8a70`.

### Shadows
- Effectively absent. The system is flat.
- The **only real shadow** is on the login box: `0 8px 32px rgba(0,0,0,0.5)` — heavy and centered, like a candle behind paper. Cards and spotlight have **no shadow**, just hairline borders.
- No inner shadows anywhere.

### Protection / capsules
- No protection gradients (text always sits on flat surfaces).
- No pill-shaped capsules. Filter chips are tiny rectangles (`radius: 2px`).

### Layout rules
- **Mobile-first single column.** Max content width on spotlight is `700px`; on login `360px`. Otherwise it grows.
- The header is **fixed-feeling** (it stays on top via document order; not actually `position: fixed`) with the brass hairline as a fixed motif below it.
- Tabs sit immediately below the header and use a hairline below the row.
- Status bar is between tabs and content — uppercase 0.65em, centered.
- Generous whitespace: `padding: 28px 24px` on content, `padding: 36px 32px` on the spotlight, `padding: 16px 18px` on win-cards.

### Transparency & blur
- **Zero backdrop blur. Zero glassmorphism.**
- Transparency appears only as alpha on the brass accent (`44`, `66`, `88` hex, `0.08` for active-fill) and as opacity on emoji-style decorative SVG dots in the tower mark.
- The vine/botanical strokes in the tower SVG use `opacity: 0.4`–`0.7` to recede.

### Imagery — colour vibe
- Imagery is **whatever the user pastes in.** Photos, screenshots, YouTube thumbnails, Instagram captures.
- The system *frames* them at 80×80 (card thumb) or 200×200 (spotlight) with `border-radius: 3px` and lets them speak for themselves. No tinting, no overlay, no grain.
- The fallback / no-image state for link previews is a **plain `#1f1f1c` block with the relevant emoji centered at 2.5em.** That's it.

### Corner radii
- **Sub-pixel-square.** The whole system uses `2px` (inputs, chips, buttons), `3px` (cards, spotlight, image thumbs), `4px` (login box). Nothing is fully-rounded; nothing is sharp.

### What cards look like
- **Background `#1f1f1c`**, **no shadow**, **`border-radius: 3px`**, no full border.
- A **2px left border** in the category colour is the only distinguishing edge.
- Padding `16px 18px`. Vertical gap between cards `10px`.
- Inside: a small uppercase meta line (Raleway, `0.68em`, `#5a5a52`, prefixed with the brass chevron `»`), then the body in serif Newsreader, then any attachment.
- Hover reveals tiny "edit" + "×" affordances at top-right (`#3a3a32` idle, brass / red on hover).

### What inputs look like
- Background `#141412` (deeper than the form's `#1f1f1c`), `border: 1px solid #2a2a26`, `border-radius: 2px`.
- Padding `11px 14px`, serif Newsreader, `1em`.
- Focus → brass border, no glow, no shadow.

### What buttons look like
- **Primary** (login, save): outlined `1px solid #a58a5c`, transparent fill, brass text, uppercase Raleway 500, `letter-spacing: 0.20em`. Hover inverts to solid brass + dark text.
- **Secondary** (surprise / show me something): same shape but border `#2e2e28` and text `#6a6a62`. Hover swaps both to brass.
- **Tertiary** (filter chips): tiny rectangle `4px 14px`, `0.7em`, hairline border. Active = brass border + brass text + `rgba(165,138,92,0.08)` fill.
- **Tabs**: text-only, uppercase, brass underline when active.

---

## ICONOGRAPHY

The product has **almost no UI icon system** — that absence is part of the brand.

### What's actually used

1. **The Tower** — `assets/tower-logo.svg`. A hand-drawn three-spired stone tower with brass-domed peaks, arched windows lit warm, climbing vines and stars at the top. Drawn entirely in primitives (`<rect>`, `<circle>`, `<polygon>`, `<path>`) with stroke-only fills and brass/parchment colours from the palette. It appears at 32×52 (login) and 36×58 (header). Never re-coloured.

2. **The Chevron mark `»`** — `assets/chevron-mark.svg`. A double-chevron drawn inline in JS (`chevronSVG(color)` in source). It precedes every category meta line on cards and the spotlight. The first chevron is full-opacity in the category colour; the second sits behind at `opacity: 0.45`. This is the *only* repeating UI icon glyph.

3. **The middle-dot rule `· · ·`** — pure text. Appears below spotlight quotes flanked by hairline rules.

4. **File-type emoji** (functional, not decorative): 🖼️ 📄 📝 🎵 🎬 📎.
5. **Link-source emoji** (functional): ▶️ 🎵 📸 🐦 💼 🎧 📌 🔗.
6. **File-arrow glyphs** (text, not emoji): `↗` (open in new tab), `→` (link-card arrow).

### What is *not* used
- No icon font (no Material Icons, no Font Awesome, no Lucide).
- No SVG icon set / sprite.
- No PNG icons.
- No emoji in headings, taglines, empty states, marketing copy, or any chrome.
- No Unicode arrow icons in chrome (only the two functional cases above).

### CDN substitution policy
**None needed.** The product genuinely has only the tower mark, the chevron, and a handful of file-type emoji. There is nothing to substitute. If you need a generic icon for new UI in this brand, **use `lucide-react`** at the lightest stroke (`stroke-width: 1`, `1.25` max) in brass `#a58a5c` or muted `#6a6a62` — this most closely matches the existing tower-and-chevron stroke aesthetic. Never use a filled-shape, multi-colour, or rounded-cap icon system (Phosphor Fill, fluent-emoji, etc.).

### Brand mark usage
- The tower **must always sit beside the wordmark** "Minas Lórien" — never alone, never as an avatar. The two together form the lockup.
- Tower uses `overflow: visible; opacity: 0.85` so its decorative dots and stars can extend past the bounding box. Don't crop it.
- On dark backgrounds only. There is no light-background variant; if you need one, ask.

---

## Caveats & substitutions

- **Both webfonts (Newsreader, Raleway)** are loaded from Google Fonts. There is no need to self-host; if you want self-hosted `.woff2` files, ask and I'll vendor them into `fonts/`.
- The tower SVG was extracted by hand from inline source — it's faithful to the original. Anti-aliasing at very small sizes (<24px) breaks down; use the rasterised `assets/icon-192.png` instead.
- No other product surfaces exist (no marketing site, no docs, no email templates). UI kits cover only the web app.
