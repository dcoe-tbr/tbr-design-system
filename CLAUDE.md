# The Brand Report — Design System Context for Claude

> **What this is.** A complete design-language brief for Claude's design tool. Read this file first, then consult the token JSON in `tokens/` and the reference components in `src/components/`.
>
> **Source of truth.** Figma: https://www.figma.com/design/ocwRrWE9LXuv3hI3m4u435/TBR---Design-System

---

## 1. What The Brand Report is

The Brand Report (TBR) is a business-intelligence publication covering outdoor sport and lifestyle brands — running, cycling, climbing, trail, ski, skate. Readers are operators: founders, marketing leads, retail buyers, investors. The tone is sharp, informed, reportorial. Not corporate, not hype.

Every design decision should ladder back to two promises:
1. **This is a publication, not a product dashboard.** Editorial surfaces come first.
2. **Readers pay attention.** Don't shout — trust the typography.

---

## 2. Voice of the design

| When designing… | Lean toward… | Avoid… |
|---|---|---|
| Headlines | Newsreader Medium (serif), tight tracking | All-caps sans, shout-weights |
| Body copy | Inter Regular 16–18px, generous line-height | Low-contrast greys, 12–14px body |
| Color | Parchment and stone neutrals, one orange accent | Gradients, multiple accent colors |
| Layout | Asymmetric editorial grids, big margins | Uniform grids, edge-to-edge density |
| Radii | Small (4–8px) | Pills on everything, 16px+ radii |
| Shadows | Soft, sparing | Stacked drop shadows, neumorphic |
| Imagery | Documentary photography, large format | Stock illustration, emoji flourishes |

The single rule most likely to save Claude from getting TBR wrong: **only one orange element per view should do real work.** Everything else is neutral.

---

## 3. Type system

Two families. Pair them — never mix in more.

- **Newsreader** (serif) — editorial voice. Titles, headers, article body for long-form.
- **Inter** (sans) — functional voice. UI, labels, metadata, buttons, dashboards.

### Scale (Figma names → use)

| Token | Family | Size | Weight | Use |
|---|---|---|---|---|
| `header/500` | Newsreader | 70 | Medium | Homepage hero, cover story |
| `header/400` | Newsreader | 58 | Medium | Article headlines |
| `header/300` | Newsreader | 42 | Medium | Section heads, large cards |
| `header/200` | Newsreader | 36 | Medium | Secondary article heads |
| `header/100` | Newsreader | 26 | Medium | Card titles |
| `title/500` | Newsreader | 48 | Regular | Subheads inside long-form |
| `title/200` | Newsreader | 28 | Regular | Pull quotes, featured callouts |
| `title/100` | Newsreader | 20 | Regular | Body emphasis within prose |
| `header-sans/400` | Inter | 20 | SemiBold | Product/dashboard section heads |
| `header-sans/200` | Inter | 16 | SemiBold | UI group labels |
| `body/lg` | Inter | 18 | Regular | Body copy on web |
| `body/md` | Inter | 16 | Regular | Default body |
| `body/sm` | Inter | 14 | Regular | Secondary UI |
| `body/xs` | Inter | 12 | Regular | Metadata, timestamps |
| `card-label/100` | Inter | 12 | SemiBold, tracked 3px, UPPERCASE | Section eyebrows, chip labels |

### Picking type

- **Editorial surfaces (articles, feature cards, marketing pages):** Newsreader for everything that's a title or heading. Inter only for metadata, eyebrows, buttons.
- **Product/tool surfaces (search, tables, forms, dashboards):** Use `header-sans/*` for UI headings. Keep Newsreader reserved for names of stories/brands being displayed *inside* the product.
- **Default body:** `body/md` (Inter 16) for UI, `body/lg` (Inter 18) or Newsreader 18 for article reading.

---

## 4. Color system

### Four ramps, one accent

1. **Brand (orange)** — `#E75D2C` base, 10 stops. The one highlight color. Never the background of a whole section.
2. **Gray (cool)** — `#707070` base. UI chrome: borders, disabled, placeholder, secondary text on white.
3. **Stone (warm)** — `#7C7671` base. Editorial warmth — pull-quote bars, quiet card surfaces, muted text on parchment.
4. **Parchment (off-white)** — `#F4F3F1` base. The publication's paper. **This is the default editorial page background — not pure white.**

### Semantic tokens (prefer these in components)

| Token | Value | When to use |
|---|---|---|
| `--tbr-bg-01` | `#FFFFFF` | Product surfaces — tables, forms, dashboards |
| `--tbr-bg-02` | `#F4F3F1` (parchment) | **Editorial pages — the default for article + feature surfaces** |
| `--tbr-bg-03` | `#E5E4E3` (stone-10) | Cards on `bg-02`, side panels |
| `--tbr-bg-inverted` | `#161616` | Hero blocks, dark footers |
| `--tbr-text-primary` | `#1A1A1A` | Body + headlines |
| `--tbr-text-secondary` | `#707070` | Bylines, captions, metadata |
| `--tbr-text-tertiary` | `#B0B0B0` | Disabled, very low emphasis |
| `--tbr-text-brand` | `#E75D2C` | Links, eyebrows, accent words |
| `--tbr-border-light` | `#E6E6E6` | Hairlines within cards |
| `--tbr-border-default` | `#CFCFCF` | Inputs, card outlines |
| `--tbr-accent-highlight` | `#E75D2C` | The one orange. CTAs, active state, links |
| `--tbr-accent-highlight-subtle` | `#FADFD5` (brand-10) | Tag backgrounds, low-emphasis badges |

### Color usage rules Claude should follow

- **Page background:** editorial → `bg-02` (parchment), product → `bg-01` (white). Never pick the other by default.
- **Orange is a highlight, not a wallpaper.** A CTA, a link, an eyebrow, a single accent shape. Using orange on a whole button row or as a section background is wrong.
- **Text on parchment:** use `text-primary` (#1A1A1A). Do not use pure black.
- **Text on inverted/dark:** `text-inverted` (#FFFFFF) for primary, `parchment.60` (#CBCBC9) for secondary.
- **Borders:** default to `border-light` (#E6E6E6). `border-default` only when the component needs to be clearly outlined (inputs).
- **Status colors exist** (`--tbr-status-*`) but are reserved for functional UI (form errors, toasts). Never use green/yellow for decorative accent.

---

## 5. Spacing, radii, elevation

- **4px base.** Every pad, gap, and margin is a multiple of 4. See `tokens/spacing.json`.
- **Preferred content max-width:** `680px` for prose, `1200px` for feature layouts.
- **Radii:** default to `sm` (4px) for inputs, `md` (6px) for buttons, `lg` (8px) for cards. `pill` only for tags and avatars. **Avoid `xl`+ radii on anything rectangular — it makes TBR look like a lifestyle app, not a publication.**
- **Shadows:** use sparingly. Most editorial cards should be flat or have `shadow-xs`. `shadow-md`+ only for overlays (menus, popovers, modals).

---

## 6. Patterns Claude should reach for

### The article header pattern (the most-TBR block)
```
EYEBROW (uppercase, orange, tracked 3px, 12px)
Headline (Newsreader Medium, 42–70px, tight tracking)
Dek / standfirst (Newsreader Regular, 20–22px)
Byline · Date (Inter 12px, text-secondary)
```
Implemented in `src/components/ArticleHeader.tsx`.

### The feature card
```
[Optional eyebrow tag]
Title (Newsreader Medium 26px)
Body text (Inter 14–16px, text-secondary)
Meta row (Inter 12px, text-secondary, pipe-separated)
```
Editorial variant sits on parchment; product variant is white + `border-light`. See `src/components/Card.tsx`.

### The primary CTA
Single orange button, `variant="primary"`, SemiBold 14. Only one per view. Secondary actions are outlined neutral. Tertiary is a link (underlined, orange, with 3px underline offset).

### Tags / categories
Pill radius, Inter SemiBold 12. Use **uppercase + 3px tracking** for category labels (SECTOR, VERTICAL). Use normal case for descriptive tags (e.g. "Hoka", "Trail running"). See `src/components/Tag.tsx`.

---

## 7. What Claude should NOT do

- ❌ Don't add gradients, glassmorphism, glow effects, or animated background patterns.
- ❌ Don't introduce a second accent color. No blue "info," no teal, no green CTAs.
- ❌ Don't use pure black `#000` or pure white `#FFF` for large editorial surfaces — use `text-primary` (#1A1A1A) and `bg-02` (parchment).
- ❌ Don't set headings in all-caps sans-serif for decoration. All-caps is reserved for the card-label eyebrow.
- ❌ Don't mix in system fonts or third fonts. Newsreader + Inter only.
- ❌ Don't use emoji as UI. Use SVG icons (stroke 1.5px, `currentColor`) instead.
- ❌ Don't default to centered text for body content. Editorial = left-aligned.
- ❌ Don't use `border-radius` > 12px on buttons, cards, or inputs. Pill is reserved for tags.

---

## 8. How to import tokens in a project

```ts
// Tokens from TypeScript
import { colors, typography, spacing, radii, shadow } from '@tbr/design-system';

// Reference components
import { Button, Card, Tag, Input, ArticleHeader, Divider } from '@tbr/design-system';
```

```css
/* CSS custom properties */
@import '@tbr/design-system/src/styles/tokens.css';
@import '@tbr/design-system/src/styles/typography.css';
```

```js
// Tailwind preset
// tailwind.config.js
module.exports = {
  presets: [require('@tbr/design-system/tailwind.preset')],
  content: ['./src/**/*.{ts,tsx}'],
};
```

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Newsreader:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
```

---

## 9. Files to read when you need more

| I need… | Read… |
|---|---|
| Raw color values with context | `tokens/colors.json` |
| The full type scale | `tokens/typography.json` |
| Spacing + container widths | `tokens/spacing.json` |
| Example of editorial voice in code | `src/components/ArticleHeader.tsx` |
| Example of token-driven CSS | `src/styles/tokens.css` |
| Example of tokens in JS/TS | `src/tokens/*.ts` |
| Longer docs + rationale | `docs/colors.md`, `docs/typography.md`, `docs/voice.md` |

When in doubt, re-read §2 (Voice) and §7 (What not to do). The design system is tight on purpose — the constraints are the brand.
