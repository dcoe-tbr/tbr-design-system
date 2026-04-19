import { forwardRef, type ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'link';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
}

const base: React.CSSProperties = {
  fontFamily: "'Inter', -apple-system, 'Segoe UI', Roboto, sans-serif",
  fontWeight: 600,
  borderRadius: 6,
  border: '1px solid transparent',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 8,
  transition: 'background-color 120ms cubic-bezier(0.2,0,0,1), color 120ms, border-color 120ms',
  letterSpacing: 0,
};

const sizes: Record<Size, React.CSSProperties> = {
  sm: { fontSize: 14, lineHeight: 1.4, padding: '6px 12px', minHeight: 32 },
  md: { fontSize: 14, lineHeight: 1.4, padding: '8px 16px', minHeight: 40 },
  lg: { fontSize: 16, lineHeight: 1.5, padding: '12px 20px', minHeight: 48 },
};

const variants: Record<Variant, React.CSSProperties> = {
  primary:   { background: '#E75D2C', color: '#FFFFFF', borderColor: '#E75D2C' },
  secondary: { background: '#FFFFFF', color: '#1A1A1A', borderColor: '#CFCFCF' },
  ghost:     { background: 'transparent', color: '#1A1A1A', borderColor: 'transparent' },
  link:      { background: 'transparent', color: '#E75D2C', borderColor: 'transparent', padding: 0, minHeight: 0, textDecoration: 'underline', textUnderlineOffset: 3 },
};

/**
 * TBR Button.
 * Primary = the single orange CTA per view. Secondary = outlined neutral.
 * Ghost = transparent, for toolbars. Link = inline text action.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', fullWidth, style, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        style={{
          ...base,
          ...sizes[size],
          ...variants[variant],
          width: fullWidth ? '100%' : undefined,
          ...style,
        }}
        {...rest}
      />
    );
  }
);
Button.displayName = 'Button';
