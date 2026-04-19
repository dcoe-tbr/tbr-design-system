# Typography

Two families, three voices. Everything else is a variation on size or weight.

## Families

| Name | Figma & Google Fonts | Voice |
|---|---|---|
| **Newsreader** | [Newsreader](https://fonts.google.com/specimen/Newsreader) (Regular 400, Medium 500, Italic 400) | Editorial. Headlines, article body, feature callouts. |
| **Inter** | [Inter](https://fonts.google.com/specimen/Inter) (Regular 400, Medium 500, SemiBold 600) | Functional. UI, metadata, buttons, eyebrows, dashboards. |

Load both. Don't fall back to system serifs for Newsreader — the brand needs the real cut.

## The three voices

### 1. Editorial serif — `header/*` + `title/*` (Newsreader)
The TBR voice. Use for headlines, section titles, pull quotes, and article body when appropriate.

| Token | Size | LH | Weight | Tracking | Typical use |
|---|---|---|---|---|---|
| `header/500` | 70 | 1.4 | 500 | -2 | Homepage hero headline |
| `header/400` | 58 | 1.4 | 500 | -2 | Standard article headline |
| `header/300` | 42 | 1.4 | 500 | -1 | Large feature card title |
| `header/200` | 36 | 1.4 | 500 | 0 | Secondary headline |
| `header/100` | 26 | 1.4 | 500 | 0 | Card title |
| `title/500` | 48 | 1.3 | 400 | -1 | Long-form subhead |
| `title/400` | 40 | 1.3 | 400 | -1 | |
| `title/300` | 34 | 1.3 | 400 | 0 | |
| `title/200` | 28 | 1.3 | 400 | 0 | Featured pull quote |
| `title/100` | 20 | 1.3 | 400 | 0 | In-prose emphasis |

**Pattern:** `header/*` (Medium) is for headlines that anchor a block. `title/*` (Regular) is for softer, lighter serifs — subheads, captions with weight, pull quotes.

### 2. Functional sans — `header-sans/*` (Inter SemiBold)
Reserved for product surfaces where Newsreader would feel wrong (dense dashboards, data tables, sidebars).

| Token | Size | LH | Weight | Tracking | Use |
|---|---|---|---|---|---|
| `header-sans/500` | 22 | 1.55 | 600 | -2 | Dashboard page titles |
| `header-sans/400` | 20 | 1.55 | 600 | -1 | Card section headers |
| `header-sans/300` | 18 | 1.6 | 600 | -1 | |
| `header-sans/200` | 16 | 1.5 | 600 | 0 | UI group labels |
| `header-sans/100` | 14 | 1.5 | 600 | 0 | Small label above a field |

### 3. Body — `body/*` (Inter)
The workhorse. Three weights per size.

| Size token | Size | LH | Regular / Medium / SemiBold |
|---|---|---|---|
| `body/xl` | 20–22 | 1.5–1.55 | Hero dek, product marketing |
| `body/lg` | 18 | 1.55 | Article body on web, roomy UI |
| `body/md` | 16 | 1.6 | **Default body / UI text** |
| `body/sm` | 14 | 1.4–1.5 | Secondary UI, labels, form helper text |
| `body/xs` | 12 | 1.4–1.5 | Metadata, byline, timestamps |

### 4. Card label — `card-label/100`
Uppercase eyebrow. Inter SemiBold 12, tracked 3px, uppercase. This is the *only* place all-caps is used.

```
SECTOR · VERTICAL · CATEGORY TAG · TAGGED TABLE HEADERS
```

## Picking the right token (practical guide)

| I'm designing… | Use |
|---|---|
| An article page | `header/400` headline → `title/200` dek → `body/lg` (Newsreader 18) body → `body/sm` byline |
| A feature card in a grid | `card-label/100` eyebrow → `header/100` title → `body/sm` supporting |
| A dashboard page | `header-sans/500` page title → `header-sans/200` section headers → `body/md` content |
| A form | `body/sm medium` labels → `body/md regular` inputs → `body/xs` hints |
| Pull quote in prose | `title/200` or `title/300`, italic, left-aligned with an orange rule |
| Eyebrow above a headline | `card-label/100` in `text.brand` (orange) |

## Rules

1. **Headlines are serif.** If it's a headline and you reach for Inter, stop — use Newsreader Medium.
2. **Body is sans.** If it's a form, button, label, or meta, reach for Inter.
3. **Editorial body can be serif** when the surface is an article and the block is long-form prose (Newsreader Regular, 18px, line-height 1.65).
4. **Line-height stays generous.** Body lh ≥ 1.5. Headlines lh 1.3–1.4 — don't go tighter.
5. **No italic decorations.** Italic is reserved for book titles, scientific names, and pull quotes.
6. **All-caps is card-label only.** Don't all-caps buttons, headings, or tabs.
