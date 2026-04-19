export const fontFamily = {
  serif: "'Newsreader', 'Times New Roman', 'Times', Georgia, serif",
  sans: "'Inter', -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
} as const;

export const fontWeight = {
  regular: 400,
  medium: 500,
  semibold: 600,
} as const;

type Style = {
  fontFamily: string;
  fontSize: string;
  lineHeight: number;
  letterSpacing: string;
  fontWeight: number;
  textTransform?: 'uppercase' | 'none';
};

const serif = fontFamily.serif;
const sans = fontFamily.sans;

export const title = {
  100: { fontFamily: serif, fontSize: '20px', lineHeight: 1.3, letterSpacing: '0',     fontWeight: 400 },
  200: { fontFamily: serif, fontSize: '28px', lineHeight: 1.3, letterSpacing: '0',     fontWeight: 400 },
  300: { fontFamily: serif, fontSize: '34px', lineHeight: 1.3, letterSpacing: '0',     fontWeight: 400 },
  400: { fontFamily: serif, fontSize: '40px', lineHeight: 1.3, letterSpacing: '-1px',  fontWeight: 400 },
  500: { fontFamily: serif, fontSize: '48px', lineHeight: 1.3, letterSpacing: '-1px',  fontWeight: 400 },
} as const satisfies Record<string, Style>;

export const header = {
  100: { fontFamily: serif, fontSize: '26px', lineHeight: 1.4, letterSpacing: '0',    fontWeight: 500 },
  200: { fontFamily: serif, fontSize: '36px', lineHeight: 1.4, letterSpacing: '0',    fontWeight: 500 },
  300: { fontFamily: serif, fontSize: '42px', lineHeight: 1.4, letterSpacing: '-1px', fontWeight: 500 },
  400: { fontFamily: serif, fontSize: '58px', lineHeight: 1.4, letterSpacing: '-2px', fontWeight: 500 },
  500: { fontFamily: serif, fontSize: '70px', lineHeight: 1.4, letterSpacing: '-2px', fontWeight: 500 },
} as const satisfies Record<string, Style>;

export const headerSans = {
  100: { fontFamily: sans, fontSize: '14px', lineHeight: 1.5,  letterSpacing: '0',     fontWeight: 600 },
  200: { fontFamily: sans, fontSize: '16px', lineHeight: 1.5,  letterSpacing: '0',     fontWeight: 600 },
  300: { fontFamily: sans, fontSize: '18px', lineHeight: 1.6,  letterSpacing: '-1px',  fontWeight: 600 },
  400: { fontFamily: sans, fontSize: '20px', lineHeight: 1.55, letterSpacing: '-1px',  fontWeight: 600 },
  500: { fontFamily: sans, fontSize: '22px', lineHeight: 1.55, letterSpacing: '-2px',  fontWeight: 600 },
} as const satisfies Record<string, Style>;

export const body = {
  xs: {
    regular:  { fontFamily: sans, fontSize: '12px', lineHeight: 1.5, letterSpacing: '0',    fontWeight: 400 },
    medium:   { fontFamily: sans, fontSize: '12px', lineHeight: 1.4, letterSpacing: '-1px', fontWeight: 500 },
    semibold: { fontFamily: sans, fontSize: '12px', lineHeight: 1.4, letterSpacing: '-1px', fontWeight: 600 },
  },
  sm: {
    regular:  { fontFamily: sans, fontSize: '14px', lineHeight: 1.5, letterSpacing: '0',    fontWeight: 400 },
    medium:   { fontFamily: sans, fontSize: '14px', lineHeight: 1.4, letterSpacing: '-1px', fontWeight: 500 },
    semibold: { fontFamily: sans, fontSize: '14px', lineHeight: 1.4, letterSpacing: '-1px', fontWeight: 600 },
  },
  md: {
    regular:  { fontFamily: sans, fontSize: '16px', lineHeight: 1.6, letterSpacing: '0', fontWeight: 400 },
    medium:   { fontFamily: sans, fontSize: '16px', lineHeight: 1.6, letterSpacing: '0', fontWeight: 500 },
    semibold: { fontFamily: sans, fontSize: '16px', lineHeight: 1.6, letterSpacing: '0', fontWeight: 600 },
  },
  lg: {
    regular:  { fontFamily: sans, fontSize: '18px', lineHeight: 1.55, letterSpacing: '0', fontWeight: 400 },
    medium:   { fontFamily: sans, fontSize: '18px', lineHeight: 1.55, letterSpacing: '0', fontWeight: 500 },
    semibold: { fontFamily: sans, fontSize: '18px', lineHeight: 1.55, letterSpacing: '0', fontWeight: 600 },
  },
  xl: {
    regular:  { fontFamily: sans, fontSize: '20px', lineHeight: 1.55, letterSpacing: '-2px', fontWeight: 400 },
    medium:   { fontFamily: sans, fontSize: '20px', lineHeight: 1.55, letterSpacing: '-2px', fontWeight: 500 },
    semibold: { fontFamily: sans, fontSize: '22px', lineHeight: 1.5,  letterSpacing: '-1px', fontWeight: 600 },
  },
} as const;

export const cardLabel = {
  100: {
    fontFamily: sans,
    fontSize: '12px',
    lineHeight: 1.4,
    letterSpacing: '3px',
    fontWeight: 600,
    textTransform: 'uppercase' as const,
  },
} as const satisfies Record<string, Style>;

export const typography = {
  fontFamily,
  fontWeight,
  title,
  header,
  headerSans,
  body,
  cardLabel,
} as const;

export type Typography = typeof typography;
