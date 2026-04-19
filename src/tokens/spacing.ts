export const spacing = {
  0: '0px',
  0.5: '2px',
  1: '4px',
  1.5: '6px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
  40: '160px',
  48: '192px',
} as const;

export const container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  '2xl': '1440px',
  prose: '680px',
} as const;

export const radii = {
  none: '0px',
  xs: '2px',
  sm: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  pill: '9999px',
  full: '50%',
} as const;

export const shadow = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(22, 22, 22, 0.04)',
  sm: '0 1px 3px 0 rgba(22, 22, 22, 0.06), 0 1px 2px 0 rgba(22, 22, 22, 0.04)',
  md: '0 4px 8px -2px rgba(22, 22, 22, 0.08), 0 2px 4px -1px rgba(22, 22, 22, 0.04)',
  lg: '0 10px 20px -4px rgba(22, 22, 22, 0.10), 0 4px 8px -2px rgba(22, 22, 22, 0.06)',
  xl: '0 20px 40px -8px rgba(22, 22, 22, 0.14), 0 8px 16px -4px rgba(22, 22, 22, 0.06)',
  focus: '0 0 0 3px rgba(231, 93, 44, 0.32)',
} as const;

export type Spacing = typeof spacing;
export type Radii = typeof radii;
export type Shadow = typeof shadow;
