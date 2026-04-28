import { header, title, headerSans, body, cardLabel } from '../../src/tokens/typography';

type Style = {
  fontFamily: string;
  fontSize: string;
  lineHeight: number;
  letterSpacing: string;
  fontWeight: number;
  textTransform?: 'uppercase' | 'none';
};

type Row = {
  token: string;
  family: 'Newsreader' | 'Inter';
  use: string;
  sample: string;
  style: Style;
};

const rows: Array<{ heading: string; lede: string; rows: Row[] }> = [
  {
    heading: 'Header — Newsreader Medium',
    lede: 'Editorial titles. Headlines, hero blocks, large card titles.',
    rows: [
      { token: 'header/500', family: 'Newsreader', use: 'Homepage hero, cover story', sample: 'Outdoor brands, sharper.', style: header[500] },
      { token: 'header/400', family: 'Newsreader', use: 'Article headlines', sample: 'Hoka’s next chapter is paved.', style: header[400] },
      { token: 'header/300', family: 'Newsreader', use: 'Section heads, large cards', sample: 'The retail rebuild', style: header[300] },
      { token: 'header/200', family: 'Newsreader', use: 'Secondary article heads', sample: 'A field report from Sun Valley', style: header[200] },
      { token: 'header/100', family: 'Newsreader', use: 'Card titles', sample: 'On Running posts a quiet quarter', style: header[100] },
    ],
  },
  {
    heading: 'Title — Newsreader Regular',
    lede: 'Long-form subheads, pull quotes, body emphasis. Lighter than headers.',
    rows: [
      { token: 'title/500', family: 'Newsreader', use: 'Subheads inside long-form', sample: 'A different kind of buyer', style: title[500] },
      { token: 'title/200', family: 'Newsreader', use: 'Pull quotes, featured callouts', sample: '“If wholesale is the moat, retail is the keep.”', style: title[200] },
      { token: 'title/100', family: 'Newsreader', use: 'Body emphasis within prose', sample: 'And the margins are still moving.', style: title[100] },
    ],
  },
  {
    heading: 'Header (sans) — Inter SemiBold',
    lede: 'Product / dashboard headings. Reserved for tool surfaces, not editorial.',
    rows: [
      { token: 'header-sans/500', family: 'Inter', use: 'Dashboard hero', sample: 'Brand intelligence', style: headerSans[500] },
      { token: 'header-sans/400', family: 'Inter', use: 'Section heads', sample: 'Recent activity', style: headerSans[400] },
      { token: 'header-sans/200', family: 'Inter', use: 'UI group labels', sample: 'Saved searches', style: headerSans[200] },
    ],
  },
  {
    heading: 'Body — Inter',
    lede: 'Functional voice. UI, labels, metadata.',
    rows: [
      { token: 'body/lg regular', family: 'Inter', use: 'Body copy on web', sample: 'The Brand Report covers outdoor sport and lifestyle brands — running, cycling, climbing, trail, ski, skate.', style: body.lg.regular },
      { token: 'body/md regular', family: 'Inter', use: 'Default UI body', sample: 'Readers are operators: founders, marketing leads, retail buyers, investors.', style: body.md.regular },
      { token: 'body/sm regular', family: 'Inter', use: 'Secondary UI', sample: 'Sharp, informed, reportorial. Not corporate, not hype.', style: body.sm.regular },
      { token: 'body/xs regular', family: 'Inter', use: 'Metadata, timestamps', sample: 'By Dan Coe · Apr 27, 2026', style: body.xs.regular },
    ],
  },
  {
    heading: 'Card label — Inter SemiBold, tracked',
    lede: 'The eyebrow. Uppercase, 3px tracking. Used sparingly — never as decoration.',
    rows: [
      { token: 'card-label/100', family: 'Inter', use: 'Section eyebrows, chip labels', sample: 'Sector · Trail running', style: cardLabel[100] },
    ],
  },
];

export default function TypographyPage() {
  return (
    <div className="page">
      <span className="page-eyebrow">02 — Voice</span>
      <h1 className="page-title">Typography</h1>
      <p className="page-dek">
        Two families, no exceptions. Newsreader is the editorial voice — titles, headlines,
        long-form. Inter is the functional voice — UI, labels, metadata, buttons.
      </p>

      {rows.map((group) => (
        <section key={group.heading} className="section">
          <span className="section-eyebrow">{group.rows[0]?.family}</span>
          <h2 className="section-title">{group.heading}</h2>
          <p className="section-lede">{group.lede}</p>

          <div>
            {group.rows.map((row) => (
              <div key={row.token} className="type-row">
                <div className="type-row__meta">
                  <span className="type-row__token">{row.token}</span>
                  <span>{row.style.fontSize} / {row.style.lineHeight} · {row.style.fontWeight}</span>
                  <span style={{ color: 'var(--tbr-text-tertiary)' }}>{row.use}</span>
                </div>
                <p
                  className="type-row__sample"
                  style={{
                    fontFamily:
                      row.family === 'Newsreader'
                        ? 'var(--tbr-font-serif)'
                        : 'var(--tbr-font-sans)',
                    fontSize: row.style.fontSize,
                    lineHeight: row.style.lineHeight,
                    letterSpacing: row.style.letterSpacing,
                    fontWeight: row.style.fontWeight,
                    textTransform: row.style.textTransform ?? 'none',
                  }}
                >
                  {row.sample}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
