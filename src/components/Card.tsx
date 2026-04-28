import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';

type Variant = 'default' | 'editorial' | 'inverted' | 'outlined';

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  variant?: Variant;
  as?: 'div' | 'article' | 'section';
  eyebrow?: ReactNode;
  title?: ReactNode;
  meta?: ReactNode;
}

const containerBase: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  padding: 24,
  borderRadius: 8,
  border: '1px solid transparent',
};

const variants: Record<Variant, React.CSSProperties> = {
  default:   { background: '#FFFFFF', borderColor: '#E6E6E6', color: '#1A1A1A' },
  editorial: { background: '#F4F3F1', borderColor: 'transparent', color: '#1A1A1A' },
  inverted:  { background: '#161616', borderColor: 'transparent', color: '#FFFFFF' },
  outlined:  { background: 'transparent', borderColor: '#CFCFCF', color: '#1A1A1A' },
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
  fontSize: 26,
  lineHeight: 1.4,
  letterSpacing: 0,
  margin: 0,
};

const metaStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: 12,
  lineHeight: 1.5,
  color: '#707070',
};

/**
 * TBR Card — the editorial container.
 * Use `editorial` for parchment article cards, `inverted` for dark hero blocks,
 * `outlined` for data cards in product surfaces.
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', as: Tag = 'div', eyebrow, title, meta, style, children, ...rest }, ref) => {
    return (
      <Tag
        ref={ref as React.Ref<HTMLDivElement>}
        style={{ ...containerBase, ...variants[variant], ...style }}
        {...rest}
      >
        {eyebrow != null && <span style={eyebrowStyle}>{eyebrow}</span>}
        {title != null && <h3 style={titleStyle}>{title}</h3>}
        {children}
        {meta != null && <div style={metaStyle}>{meta}</div>}
      </Tag>
    );
  }
);
Card.displayName = 'Card';
