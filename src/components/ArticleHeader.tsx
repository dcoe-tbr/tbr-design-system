import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';

export interface ArticleHeaderProps extends HTMLAttributes<HTMLElement> {
  eyebrow?: ReactNode;
  title: ReactNode;
  dek?: ReactNode;
  byline?: ReactNode;
  date?: ReactNode;
}

const root: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  maxWidth: 680,
};

const eyebrowStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 600,
  fontSize: 12,
  lineHeight: 1.4,
  letterSpacing: 3,
  textTransform: 'uppercase',
  color: '#E75D2C',
};

const titleStyle: React.CSSProperties = {
  fontFamily: "'Newsreader', Georgia, serif",
  fontWeight: 500,
  fontSize: 58,
  lineHeight: 1.2,
  letterSpacing: '-2px',
  color: '#1A1A1A',
  margin: 0,
};

const dekStyle: React.CSSProperties = {
  fontFamily: "'Newsreader', Georgia, serif",
  fontWeight: 400,
  fontSize: 22,
  lineHeight: 1.5,
  color: '#1A1A1A',
  margin: 0,
};

const metaRow: React.CSSProperties = {
  display: 'flex',
  gap: 12,
  alignItems: 'center',
  color: '#707070',
  fontFamily: "'Inter', sans-serif",
  fontSize: 12,
  lineHeight: 1.5,
};

/**
 * TBR Article Header — the signature editorial block.
 * Eyebrow (uppercase orange) → Headline (serif medium) → Dek (serif regular) → Byline + date.
 */
export const ArticleHeader = forwardRef<HTMLElement, ArticleHeaderProps>(
  ({ eyebrow, title, dek, byline, date, style, ...rest }, ref) => {
    return (
      <header ref={ref} style={{ ...root, ...style }} {...rest}>
        {eyebrow != null && <span style={eyebrowStyle}>{eyebrow}</span>}
        <h1 style={titleStyle}>{title}</h1>
        {dek != null && <p style={dekStyle}>{dek}</p>}
        {(byline || date) && (
          <div style={metaRow}>
            {byline != null && <span>{byline}</span>}
            {byline && date ? <span aria-hidden>·</span> : null}
            {date != null && <time>{date}</time>}
          </div>
        )}
      </header>
    );
  }
);
ArticleHeader.displayName = 'ArticleHeader';
