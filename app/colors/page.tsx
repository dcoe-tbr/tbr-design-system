import { brand, gray, stone, parchment, semantic } from '../../src/tokens/colors';

type Ramp = Record<string, string>;

const ramps: Array<{ name: string; key: string; ramp: Ramp; caption: string }> = [
  {
    name: 'Brand',
    key: 'brand',
    ramp: brand,
    caption: 'The single highlight. Used as accent, never as wallpaper.',
  },
  {
    name: 'Gray',
    key: 'gray',
    ramp: gray,
    caption: 'Cool — UI chrome: borders, disabled, secondary text on white.',
  },
  {
    name: 'Stone',
    key: 'stone',
    ramp: stone,
    caption: 'Warm — editorial bars, quiet card surfaces, muted text on parchment.',
  },
  {
    name: 'Parchment',
    key: 'parchment',
    ramp: parchment,
    caption: 'The publication’s paper. Default editorial background.',
  },
];

const semanticRows: Array<{ token: string; value: string; use: string }> = [
  { token: '--tbr-bg-01', value: semantic.bg['01'], use: 'Product surfaces — tables, forms, dashboards' },
  { token: '--tbr-bg-02', value: semantic.bg['02'], use: 'Editorial pages — the default for article + feature surfaces' },
  { token: '--tbr-bg-03', value: semantic.bg['03'], use: 'Cards on bg-02, side panels' },
  { token: '--tbr-bg-inverted', value: semantic.bg.inverted, use: 'Hero blocks, dark footers' },
  { token: '--tbr-text-primary', value: semantic.text.primary, use: 'Body + headlines' },
  { token: '--tbr-text-secondary', value: semantic.text.secondary, use: 'Bylines, captions, metadata' },
  { token: '--tbr-text-tertiary', value: semantic.text.tertiary, use: 'Disabled, very low emphasis' },
  { token: '--tbr-text-brand', value: semantic.text.brand, use: 'Links, eyebrows, accent words' },
  { token: '--tbr-border-light', value: semantic.border.light, use: 'Hairlines within cards' },
  { token: '--tbr-border-default', value: semantic.border.default, use: 'Inputs, card outlines' },
  { token: '--tbr-accent-highlight', value: semantic.accent.highlight, use: 'The one orange — CTAs, active state, links' },
  { token: '--tbr-accent-highlight-subtle', value: semantic.accent.highlightSubtle, use: 'Tag backgrounds, low-emphasis badges' },
];

function isLight(hex: string) {
  const h = hex.replace('#', '');
  if (h.length < 6) return true;
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return r * 0.299 + g * 0.587 + b * 0.114 > 160;
}

export default function ColorsPage() {
  return (
    <div className="page">
      <span className="page-eyebrow">01 — Palette</span>
      <h1 className="page-title">Color</h1>
      <p className="page-dek">
        Four ramps and one accent. The single rule that saves Claude — and humans — from
        getting TBR wrong: <strong>only one orange element per view should do real work.</strong>
      </p>

      <section className="section">
        <span className="section-eyebrow">Primitives</span>
        <h2 className="section-title">Ramps</h2>
        <p className="section-lede">
          Each ramp is centered on a base value with five lighter and five darker stops.
          Use semantic tokens in components — reach for primitives only when prototyping.
        </p>

        {ramps.map((r) => (
          <div key={r.name} className="ramp-row">
            <div className="ramp-row__title">
              <h3 className="ramp-row__name">{r.name}</h3>
              <span className="ramp-row__caption">{r.caption}</span>
            </div>
            <div className="swatch-grid">
              {Object.entries(r.ramp).map(([stop, hex]) => (
                <div key={stop} className="swatch">
                  <div
                    className="swatch__chip"
                    style={{
                      background: hex,
                      borderBottom: isLight(hex) ? '1px solid var(--tbr-border-light)' : 'none',
                    }}
                    aria-hidden
                  />
                  <div className="swatch__meta">
                    <span className="swatch__name">{stop}</span>
                    <span className="swatch__hex">{hex}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      <hr className="section-rule" />

      <section className="section">
        <span className="section-eyebrow">Tokens</span>
        <h2 className="section-title">Semantic colors</h2>
        <p className="section-lede">
          Prefer these in components. They encode intent, not values, so themes can shift
          without changing every consumer.
        </p>

        <div
          style={{
            border: '1px solid var(--tbr-border-light)',
            borderRadius: 'var(--tbr-radius-lg)',
            overflow: 'hidden',
            background: 'var(--tbr-bg-01)',
          }}
        >
          {semanticRows.map((row, i) => (
            <div
              key={row.token}
              style={{
                display: 'grid',
                gridTemplateColumns: '64px 1fr 1fr 96px',
                gap: 16,
                alignItems: 'center',
                padding: '14px 20px',
                borderTop: i === 0 ? 'none' : '1px solid var(--tbr-border-light)',
                fontFamily: 'var(--font-inter), Inter, sans-serif',
                fontSize: 13,
              }}
            >
              <div
                aria-hidden
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 'var(--tbr-radius-sm)',
                  background: row.value,
                  border: isLight(row.value) ? '1px solid var(--tbr-border-light)' : 'none',
                }}
              />
              <code style={{ background: 'transparent', padding: 0 }}>{row.token}</code>
              <span style={{ color: 'var(--tbr-text-secondary)' }}>{row.use}</span>
              <span
                style={{
                  color: 'var(--tbr-text-secondary)',
                  fontVariantNumeric: 'tabular-nums',
                  textTransform: 'uppercase',
                  textAlign: 'right',
                }}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
