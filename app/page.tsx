import Link from 'next/link';

const sections = [
  {
    href: '/colors',
    eyebrow: '01 — Palette',
    title: 'Color',
    body: 'Four ramps, one accent. Parchment is the page; orange does the highlighting.',
  },
  {
    href: '/typography',
    eyebrow: '02 — Voice',
    title: 'Typography',
    body: 'Newsreader for editorial, Inter for functional. The full type scale, side by side.',
  },
  {
    href: '/components',
    eyebrow: '03 — Library',
    title: 'Components',
    body: 'Button, Card, Tag, Input, Divider, ArticleHeader — the reference implementations.',
  },
];

export default function Home() {
  return (
    <div className="page">
      <section className="home-hero">
        <div>
          <span className="page-eyebrow">The Brand Report — Design System</span>
          <h1 className="home-hero__title">
            A publication, <em>not a product dashboard.</em>
          </h1>
          <p className="home-hero__dek">
            Tokens, typography, and a small set of reference components for editorial
            surfaces in outdoor sport and lifestyle. Tight on purpose — the constraints
            are the brand.
          </p>
        </div>
        <div className="home-hero__meta">
          <span>v0.1.0</span>
          <span>Newsreader · Inter</span>
          <span>Parchment · One orange</span>
          <span>
            <a href="https://github.com/dcoe-tbr/tbr-design-system">github.com/dcoe-tbr/tbr-design-system</a>
          </span>
        </div>
      </section>

      <section className="section">
        <span className="section-eyebrow">Browse</span>
        <h2 className="section-title">The system</h2>
        <p className="section-lede">
          Three surfaces hold everything together: a small palette, a strict type
          system, and a handful of components built on both.
        </p>

        <div className="home-section-list">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="home-card">
              <span className="home-card__eyebrow">{s.eyebrow}</span>
              <h3 className="home-card__title">{s.title}</h3>
              <p className="home-card__body">{s.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <hr className="section-rule" />

      <section className="section">
        <span className="section-eyebrow">The two rules</span>
        <h2 className="section-title">If you only remember two things</h2>
        <ol style={{ paddingLeft: 20, fontSize: 18, lineHeight: 1.6, color: 'var(--tbr-text-primary)', maxWidth: 640 }}>
          <li style={{ marginBottom: 12 }}>
            <strong>Only one orange element per view does real work.</strong>{' '}
            Everything else is neutral.
          </li>
          <li>
            <strong>Editorial pages live on parchment</strong>{' '}
            (<code>--tbr-bg-02</code>) — never pure white.
          </li>
        </ol>
      </section>
    </div>
  );
}
