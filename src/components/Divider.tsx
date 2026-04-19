import { forwardRef, type HTMLAttributes } from 'react';

type Weight = 'hairline' | 'regular' | 'strong';

export interface DividerProps extends HTMLAttributes<HTMLHRElement> {
  weight?: Weight;
  orientation?: 'horizontal' | 'vertical';
}

const weights: Record<Weight, string> = {
  hairline: '#E6E6E6',
  regular:  '#CFCFCF',
  strong:   '#707070',
};

/**
 * TBR Divider — editorial rule.
 * Hairline for within-card separation, regular for sections, strong for major breaks.
 */
export const Divider = forwardRef<HTMLHRElement, DividerProps>(
  ({ weight = 'hairline', orientation = 'horizontal', style, ...rest }, ref) => {
    const isVertical = orientation === 'vertical';
    return (
      <hr
        ref={ref}
        aria-orientation={orientation}
        style={{
          border: 0,
          margin: 0,
          backgroundColor: weights[weight],
          width: isVertical ? 1 : '100%',
          height: isVertical ? '100%' : 1,
          ...style,
        }}
        {...rest}
      />
    );
  }
);
Divider.displayName = 'Divider';
