import { forwardRef, type HTMLAttributes } from 'react';

type Tone = 'neutral' | 'brand' | 'stone' | 'inverted';

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
  uppercase?: boolean;
}

const base: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontWeight: 600,
  fontSize: 12,
  lineHeight: 1.4,
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 10px',
  borderRadius: 9999,
  border: '1px solid transparent',
  letterSpacing: '-1px',
};

const tones: Record<Tone, React.CSSProperties> = {
  neutral:  { background: '#F4F3F1', color: '#1A1A1A', borderColor: '#E6E6E6' },
  brand:    { background: '#FADFD5', color: '#742F16', borderColor: 'transparent' },
  stone:    { background: '#E5E4E3', color: '#3E3B39', borderColor: 'transparent' },
  inverted: { background: '#161616', color: '#FFFFFF', borderColor: 'transparent' },
};

const uppercaseStyle: React.CSSProperties = {
  textTransform: 'uppercase',
  letterSpacing: '3px',
};

/**
 * TBR Tag / category chip.
 * Use `uppercase` for editorial eyebrows (e.g. SECTOR, VERTICAL labels).
 */
export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ tone = 'neutral', uppercase, style, ...rest }, ref) => {
    return (
      <span
        ref={ref}
        style={{
          ...base,
          ...tones[tone],
          ...(uppercase ? uppercaseStyle : null),
          ...style,
        }}
        {...rest}
      />
    );
  }
);
Tag.displayName = 'Tag';
