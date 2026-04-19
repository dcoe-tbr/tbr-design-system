# TBR Design System

The design system for [The Brand Report](https://thebrand.report) — tokens, typography, and reference React components that encode TBR's editorial visual language.

> **This repo exists to give Claude's design tool the context it needs to generate experiences that feel like TBR.** If you're Claude — start with [`CLAUDE.md`](./CLAUDE.md).

**Source of truth (Figma):** https://www.figma.com/design/ocwRrWE9LXuv3hI3m4u435/TBR---Design-System

## What's in here

```
tokens/            Design tokens as JSON — colors, typography, spacing, radii, shadows
src/tokens/        Same tokens exported as typed TypeScript
src/styles/        CSS custom properties + typography utility classes
src/components/    Reference React components (Button, Card, Input, Tag, Divider, ArticleHeader)
tailwind.preset.js Tailwind preset that wires tokens into utility classes
docs/              Color / typography / voice reference
CLAUDE.md          Design-language brief for Claude's design tool
```

## Quick start

```bash
npm install @tbr/design-system
```

```tsx
import { Button, Card, ArticleHeader, colors, typography } from '@tbr/design-system';
import '@tbr/design-system/src/styles/tokens.css';
import '@tbr/design-system/src/styles/typography.css';

export function Feature() {
  return (
    <Card variant="editorial" eyebrow="SECTOR" title="On, Hoka, and the premium-running plateau">
      Growth slowed in Q1. Here's what the earnings calls said — and didn't.
    </Card>
  );
}
```

## Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Newsreader:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
```

## Tokens at a glance

| Type | Core tokens |
|---|---|
| **Color ramps** | `brand` (orange), `gray`, `stone`, `parchment` |
| **Semantic color** | `bg.01/02/03`, `text.primary/secondary/tertiary`, `border.light/default/strong`, `accent.highlight` |
| **Typography** | `title/*`, `header/*`, `header-sans/*`, `body/*`, `card-label/*` |
| **Spacing** | 4px base, 0 – 48 (0px – 192px) |
| **Radii** | `xs` – `2xl`, `pill`, `full` |
| **Shadows** | `xs`, `sm`, `md`, `lg`, `xl`, `focus` |

See [`CLAUDE.md`](./CLAUDE.md) §4–§6 for the rules on when to use which.

## The short version

- **Two fonts:** Newsreader (serif) for editorial, Inter (sans) for UI.
- **One accent:** TBR orange `#E75D2C`. One element per view.
- **Two page backgrounds:** `#F4F3F1` parchment for editorial, `#FFFFFF` for product.
- **Small radii, soft shadows.** TBR is a publication, not a lifestyle app.

## License

MIT — see [`LICENSE`](./LICENSE).
