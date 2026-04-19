export * from './colors';
export * from './typography';
export * from './spacing';

import { colors } from './colors';
import { typography } from './typography';
import { spacing, container, radii, shadow } from './spacing';

export const tokens = {
  colors,
  typography,
  spacing,
  container,
  radii,
  shadow,
} as const;

export type Tokens = typeof tokens;
