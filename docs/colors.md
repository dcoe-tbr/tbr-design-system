# Colors

TBR runs on four ramps and one accent. The philosophy: **one color does all the work; everything else is neutral.**

## The four ramps

### Brand — orange
Signature TBR orange. The one highlight color in the system.

| Stop | Hex | Where it shows up |
|---|---|---|
| `brand.10` | `#FADFD5` | Subtle tag backgrounds, low-emphasis badges |
| `brand.20` | `#F7C9B9` | |
| `brand.30` | `#F3AE96` | |
| `brand.40` | `#EF9372` | |
| `brand.50` | `#EB784F` | |
| `brand.base` | `#E75D2C` | **The highlight.** Primary CTAs, links, eyebrows, accent shapes |
| `brand.60` | `#C14E25` | Hover state for brand base; form error text |
| `brand.70` | `#9A3E1D` | Active/pressed state |
| `brand.80` | `#742F16` | Dark text on brand-10 background |
| `brand.90` | `#4D1F0F` | |
| `brand.100` | `#2E1309` | |

### Gray — cool neutral
UI chrome.

| Stop | Hex | Where it shows up |
|---|---|---|
| `gray.5` | `#F6F6F6` | Very subtle zebra rows |
| `gray.10` | `#E2E2E2` | Dividers within lists |
| `gray.20` | `#CFCFCF` | Input borders, card outlines |
| `gray.30` | `#B8B8B8` | Placeholder text, disabled icons |
| `gray.40` | `#A0A0A0` | |
| `gray.50` | `#888888` | |
| `gray.base` | `#707070` | Secondary text |
| `gray.60` — `gray.100` | darker | Icons on dark, inverted surfaces |

### Stone — warm neutral
Editorial warmth. Don't mix with `gray` on the same surface.

| Stop | Hex | Use |
|---|---|---|
| `stone.10` | `#E5E4E3` | Card background on parchment page |
| `stone.20` | `#D3D1D0` | Dividers on parchment |
| `stone.base` | `#7C7671` | Muted text on parchment |
| `stone.100` | `#191817` | Dark hero sections with warmth |

### Parchment — the paper
The publication's background tone. Never use pure white for editorial.

| Stop | Hex | Use |
|---|---|---|
| `parchment.base` | `#F4F3F1` | **Editorial page background** |
| `parchment.50` | `#F6F5F3` | Subtly elevated cards on parchment |
| `parchment.10` | `#FDFDFC` | Almost-white panels when full paper feels too warm |
| `parchment.60` — `parchment.100` | progressively darker | Text on light, surfaces on dark |

## Semantic tokens (what to reach for in components)

| Token | Resolved | Use |
|---|---|---|
| `bg.01` | `#FFFFFF` | Product surfaces |
| `bg.02` | `#F4F3F1` | Editorial pages (default for article views) |
| `bg.03` | `#E5E4E3` | Elevated cards on `bg.02` |
| `bg.inverted` | `#161616` | Dark hero blocks, footers |
| `text.primary` | `#1A1A1A` | Body + headlines |
| `text.secondary` | `#707070` | Byline, meta, captions |
| `text.tertiary` | `#B0B0B0` | Disabled |
| `text.inverted` | `#FFFFFF` | On `bg.inverted` |
| `text.brand` | `#E75D2C` | Links, eyebrows |
| `text.muted` | `#7C7671` | Muted on parchment |
| `border.light` | `#E6E6E6` | Hairlines |
| `border.default` | `#CFCFCF` | Inputs, defined card edges |
| `accent.highlight` | `#E75D2C` | The one orange |
| `accent.highlight-hover` | `#C14E25` | Hover of above |
| `accent.highlight-subtle` | `#FADFD5` | Brand tag background |

## Rules

1. **One accent per view does real work.** Multiple orange CTAs in the same frame is the most common mistake.
2. **Editorial pages are parchment, not white.** Using `bg.01` for an article view looks like a CMS preview.
3. **Pure black is banned.** Use `#1A1A1A` for primary text. Pure white is fine on product surfaces but not for editorial pages.
4. **Don't introduce a second accent.** No blue "info," no green "success badge" on an article page. Status colors are for functional UI (form errors, toasts) only.
5. **Gray vs stone — pick one per surface.** Cool gray on white product chrome. Warm stone on parchment editorial chrome.
