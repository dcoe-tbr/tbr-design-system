# Examples

Reference layouts Claude can compose from tokens + components.

## 1. Article page (editorial)

```tsx
import { ArticleHeader, Tag } from '@tbr/design-system';
import '@tbr/design-system/src/styles/tokens.css';
import '@tbr/design-system/src/styles/typography.css';

export default function Article() {
  return (
    <main style={{ background: 'var(--tbr-bg-02)', minHeight: '100vh', padding: '80px 24px' }}>
      <article style={{ maxWidth: 680, margin: '0 auto' }}>
        <ArticleHeader
          eyebrow="SECTOR · RUNNING"
          title="On's growth stalled. Here's what the earnings call said — and didn't."
          dek="The premium-running tailwind that carried On for three years is meeting the ceiling everyone saw coming. An analysis."
          byline="Dan Coe"
          date="April 19, 2026"
        />
        <div className="tbr-prose" style={{ marginTop: 48 }}>
          <p>When On reported Q1, the story wasn't the revenue miss — it was the slope…</p>
          <blockquote>"Premium consumers aren't gone. They're just done paying for branding."</blockquote>
          <p>The question is whether On can pivot the narrative as quickly as Hoka did in 2023…</p>
        </div>
      </article>
    </main>
  );
}
```

**Key moves:** parchment background, serif headline, 680px prose column, orange eyebrow, orange pull-quote rule.

## 2. Feature card grid

```tsx
import { Card, Tag } from '@tbr/design-system';

export function FeatureGrid() {
  return (
    <section style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 24,
      padding: '48px 24px',
      background: 'var(--tbr-bg-02)',
    }}>
      <Card variant="editorial" eyebrow="RETAIL" title="REI is quietly pulling back on apparel" meta="April 18 · 4 min read">
        <p style={{ color: 'var(--tbr-text-secondary)' }}>
          Floor space allocated to soft goods dropped 8% across West Coast flagships.
        </p>
      </Card>
      <Card variant="editorial" eyebrow="EARNINGS" title="Vuori's Q1 was its first real test" meta="April 17 · 6 min read">
        <p style={{ color: 'var(--tbr-text-secondary)' }}>
          After five years of hockey-stick growth, margins compressed for the first time.
        </p>
      </Card>
      <Card variant="editorial" eyebrow="CREATOR ECON" title="Coros is now the athlete-owned brand" meta="April 15 · 5 min read">
        <p style={{ color: 'var(--tbr-text-secondary)' }}>
          Kipchoge, Pogačar, Jakob — who's left for Garmin?
        </p>
      </Card>
    </section>
  );
}
```

**Key moves:** parchment section, editorial cards, uppercase orange eyebrow, serif title, gray meta row.

## 3. Product surface — brand tracker dashboard

```tsx
import { Card, Input, Button, Divider, Tag } from '@tbr/design-system';

export function Tracker() {
  return (
    <main style={{ background: 'var(--tbr-bg-01)', padding: 32 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="tbr-header-sans-500">Brand Tracker</h1>
        <Button variant="primary" size="md">Add brand</Button>
      </header>
      <Divider weight="hairline" style={{ margin: '24px 0' }} />
      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 32 }}>
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Input label="Search brands" placeholder="Type to filter…" size="sm" />
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            <Tag tone="brand" uppercase>Running</Tag>
            <Tag tone="neutral" uppercase>Cycling</Tag>
            <Tag tone="neutral" uppercase>Trail</Tag>
          </div>
        </aside>
        <Card variant="outlined" title="Hoka" meta="Tracked since Jan 2024">
          <p>Latest: Q1 earnings beat; running wholesale +24% YoY.</p>
        </Card>
      </div>
    </main>
  );
}
```

**Key moves:** white background, `header-sans/500` for the page title, outlined cards, single orange CTA, uppercase category tags.

## 4. Hero / cover block

```tsx
export function Hero() {
  return (
    <section style={{
      background: 'var(--tbr-bg-inverted)',
      color: 'var(--tbr-text-inverted)',
      padding: '128px 24px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <span className="tbr-card-label" style={{ color: 'var(--tbr-text-brand)' }}>
          COVER STORY
        </span>
        <h1 className="tbr-header-500" style={{ marginTop: 24, maxWidth: 900 }}>
          The outdoor industry just had its worst quarter since 2009.
        </h1>
        <p style={{
          fontFamily: "'Newsreader', Georgia, serif",
          fontSize: 22,
          lineHeight: 1.5,
          marginTop: 24,
          maxWidth: 680,
          color: 'var(--tbr-parchment-60)',
        }}>
          And unlike '09, the slowdown is concentrated in the brands everyone loves.
        </p>
      </div>
    </section>
  );
}
```

**Key moves:** dark inverted background, orange eyebrow, massive serif headline, parchment-tinted supporting text.
