import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

const wrapper: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 6,
  fontFamily: "'Inter', -apple-system, sans-serif",
};

const labelStyle: React.CSSProperties = {
  fontSize: 14,
  lineHeight: 1.4,
  fontWeight: 500,
  color: '#1A1A1A',
  letterSpacing: '-1px',
};

const inputBase: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  width: '100%',
  background: '#FFFFFF',
  color: '#1A1A1A',
  border: '1px solid #CFCFCF',
  borderRadius: 6,
  outline: 'none',
  transition: 'border-color 120ms, box-shadow 120ms',
};

const sizeStyles = {
  sm: { fontSize: 14, lineHeight: 1.4, padding: '6px 10px', minHeight: 32 },
  md: { fontSize: 16, lineHeight: 1.5, padding: '10px 12px', minHeight: 40 },
  lg: { fontSize: 16, lineHeight: 1.5, padding: '12px 14px', minHeight: 48 },
} as const;

const hintStyle: React.CSSProperties = {
  fontSize: 12,
  lineHeight: 1.5,
  color: '#707070',
};

const errorStyle: React.CSSProperties = {
  fontSize: 12,
  lineHeight: 1.5,
  color: '#C14E25',
};

/**
 * TBR Input — single-line text field.
 * Pairs a labeled, hint-capable field with an error state that uses brand/60.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, hint, error, size = 'md', id: idProp, style, ...rest }, ref) => {
    const generatedId = useId();
    const id = idProp ?? generatedId;
    const hintId = `${id}-hint`;
    const errorId = `${id}-error`;
    const hasError = error != null;

    return (
      <div style={wrapper}>
        {label != null && (
          <label htmlFor={id} style={labelStyle}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          aria-invalid={hasError || undefined}
          aria-describedby={hasError ? errorId : hint ? hintId : undefined}
          style={{
            ...inputBase,
            ...sizeStyles[size],
            borderColor: hasError ? '#C14E25' : '#CFCFCF',
            ...style,
          }}
          {...rest}
        />
        {!hasError && hint != null && (
          <span id={hintId} style={hintStyle}>
            {hint}
          </span>
        )}
        {hasError && (
          <span id={errorId} role="alert" style={errorStyle}>
            {error}
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';
