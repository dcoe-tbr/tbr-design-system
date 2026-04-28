import {
  Button,
  Card,
  Tag,
  Input,
  Divider,
  ArticleHeader,
} from '../../src/components';

export default function ComponentsPage() {
  return (
    <div className="page">
      <span className="page-eyebrow">03 — Library</span>
      <h1 className="page-title">Components</h1>
      <p className="page-dek">
        Reference React implementations. Each one ships with the same opinion the rest of
        the system has: editorial first, one orange, restraint over decoration.
      </p>

      {/* ---------------- Button ---------------- */}
      <section className="section">
        <span className="section-eyebrow">Button</span>
        <h2 className="section-title">Button</h2>
        <p className="section-lede">
          One primary per view. Secondary for outlined neutrals. Ghost for toolbars. Link
          for inline text actions.
        </p>

        <div className="demo">
          <p className="demo-caption">Variants</p>
          <div className="demo-row">
            <Button variant="primary">Read the report</Button>
            <Button variant="secondary">Save for later</Button>
            <Button variant="ghost">Dismiss</Button>
            <Button variant="link">View all stories</Button>
          </div>
        </div>

        <div className="demo">
          <p className="demo-caption">Sizes</p>
          <div className="demo-row">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <div className="demo">
          <p className="demo-caption">Disabled</p>
          <div className="demo-row">
            <Button disabled>Primary disabled</Button>
            <Button variant="secondary" disabled>Secondary disabled</Button>
          </div>
        </div>
      </section>

      {/* ---------------- Tag ---------------- */}
      <section className="section">
        <span className="section-eyebrow">Tag</span>
        <h2 className="section-title">Tag</h2>
        <p className="section-lede">
          Pill chips. Use uppercase + 3px tracking for category labels (SECTOR, VERTICAL).
          Normal case for descriptive tags (e.g. <code>Hoka</code>, <code>Trail running</code>).
        </p>

        <div className="demo">
          <p className="demo-caption">Tones</p>
          <div className="demo-row">
            <Tag tone="neutral">Hoka</Tag>
            <Tag tone="brand">Featured</Tag>
            <Tag tone="stone">Quiet</Tag>
            <Tag tone="inverted">Premium</Tag>
          </div>
        </div>

        <div className="demo">
          <p className="demo-caption">Editorial eyebrows</p>
          <div className="demo-row">
            <Tag tone="brand" uppercase>Sector</Tag>
            <Tag tone="neutral" uppercase>Trail Running</Tag>
            <Tag tone="stone" uppercase>Field Report</Tag>
          </div>
        </div>
      </section>

      {/* ---------------- Card ---------------- */}
      <section className="section">
        <span className="section-eyebrow">Card</span>
        <h2 className="section-title">Card</h2>
        <p className="section-lede">
          The editorial container. <code>editorial</code> sits on parchment.{' '}
          <code>default</code> is for product surfaces. <code>inverted</code> is for hero
          blocks and dark footers.
        </p>

        <div className="demo-grid">
          <Card
            variant="editorial"
            eyebrow="Sector · Running"
            title="Hoka’s next chapter is paved"
            meta="By Dan Coe · Apr 27, 2026"
          >
            <p style={{ margin: 0, color: 'var(--tbr-text-secondary)', fontSize: 14, lineHeight: 1.6 }}>
              The trail brand that taught the running world what max cushion meant is
              quietly recalibrating around road.
            </p>
          </Card>

          <Card
            variant="default"
            eyebrow="Brand"
            title="On Running"
            meta="42 stories · Updated weekly"
          >
            <p style={{ margin: 0, color: 'var(--tbr-text-secondary)', fontSize: 14, lineHeight: 1.6 }}>
              CloudTec, retail rebuild, the LightSpray bet — everything we’re tracking on
              the Swiss footwear maker.
            </p>
          </Card>

          <Card
            variant="outlined"
            eyebrow="Vertical"
            title="Trail running, briefly"
            meta="Last updated 2h ago"
          >
            <p style={{ margin: 0, color: 'var(--tbr-text-secondary)', fontSize: 14, lineHeight: 1.6 }}>
              UTMB acquisition fallout, the Salomon S/Lab repositioning, and three brands
              quietly winning at the trailhead.
            </p>
          </Card>

          <Card
            variant="inverted"
            eyebrow="Premium"
            title="The Operator Briefing"
            meta="Wednesdays · 6am ET"
          >
            <p style={{ margin: 0, color: 'var(--tbr-parchment-60)', fontSize: 14, lineHeight: 1.6 }}>
              The weekly memo for founders, marketing leads, and buyers. One read, fifteen
              minutes, no fluff.
            </p>
          </Card>
        </div>
      </section>

      {/* ---------------- Input ---------------- */}
      <section className="section">
        <span className="section-eyebrow">Input</span>
        <h2 className="section-title">Input</h2>
        <p className="section-lede">
          Labeled text field with hint and error states. Errors use brand/60, never red.
        </p>

        <div className="demo">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 24,
              maxWidth: 800,
            }}
          >
            <Input label="Email" placeholder="you@brand.com" hint="We’ll never share it." />
            <Input label="Brand name" placeholder="On, Hoka, Salomon…" defaultValue="Hoka" />
            <Input
              label="Domain"
              placeholder="example.com"
              defaultValue="not a url"
              error="Enter a valid domain (e.g. example.com)"
            />
          </div>
        </div>

        <div className="demo">
          <p className="demo-caption">Sizes</p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: 16,
              maxWidth: 800,
            }}
          >
            <Input size="sm" label="Small" placeholder="32px tall" />
            <Input size="md" label="Medium" placeholder="40px tall" />
            <Input size="lg" label="Large" placeholder="48px tall" />
          </div>
        </div>
      </section>

      {/* ---------------- Divider ---------------- */}
      <section className="section">
        <span className="section-eyebrow">Divider</span>
        <h2 className="section-title">Divider</h2>
        <p className="section-lede">
          Editorial rule. Hairline within cards, regular between sections, strong for
          major breaks.
        </p>

        <div className="demo">
          <div className="demo-stack">
            <span className="demo-caption" style={{ margin: 0 }}>Hairline</span>
            <Divider weight="hairline" />
            <span className="demo-caption" style={{ margin: '16px 0 0' }}>Regular</span>
            <Divider weight="regular" />
            <span className="demo-caption" style={{ margin: '16px 0 0' }}>Strong</span>
            <Divider weight="strong" />
          </div>
        </div>
      </section>

      {/* ---------------- ArticleHeader ---------------- */}
      <section className="section">
        <span className="section-eyebrow">ArticleHeader</span>
        <h2 className="section-title">Article Header</h2>
        <p className="section-lede">
          The signature editorial block. Eyebrow → headline → dek → byline + date.
        </p>

        <div className="demo demo--editorial">
          <ArticleHeader
            eyebrow="Field Report"
            title="The retail rebuild reaches Sun Valley"
            dek="A small operator’s brand store outsold its biggest wholesale account this winter. We went to Idaho to find out why."
            byline="Dan Coe"
            date="April 27, 2026"
          />
        </div>
      </section>
    </div>
  );
}
