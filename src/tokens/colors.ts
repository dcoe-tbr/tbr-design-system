export const brand = {
  10: '#FADFD5',
  20: '#F7C9B9',
  30: '#F3AE96',
  40: '#EF9372',
  50: '#EB784F',
  base: '#E75D2C',
  60: '#C14E25',
  70: '#9A3E1D',
  80: '#742F16',
  90: '#4D1F0F',
  100: '#2E1309',
} as const;

export const gray = {
  5: '#F6F6F6',
  10: '#E2E2E2',
  20: '#CFCFCF',
  30: '#B8B8B8',
  40: '#A0A0A0',
  50: '#888888',
  base: '#707070',
  60: '#5D5D5D',
  70: '#4B4B4B',
  80: '#383838',
  90: '#252525',
  100: '#161616',
} as const;

export const stone = {
  10: '#E5E4E3',
  20: '#D3D1D0',
  30: '#BEBBB8',
  40: '#A8A4A0',
  50: '#928D89',
  base: '#7C7671',
  60: '#67625E',
  70: '#534F4B',
  80: '#3E3B39',
  90: '#292726',
  100: '#191817',
} as const;

export const parchment = {
  10: '#FDFDFC',
  20: '#FBFBFA',
  30: '#FAF9F8',
  40: '#F8F7F6',
  50: '#F6F5F3',
  base: '#F4F3F1',
  60: '#CBCBC9',
  70: '#A3A2A1',
  80: '#7A7A79',
  90: '#515150',
  100: '#313130',
} as const;

export const semantic = {
  bg: {
    '01': '#FFFFFF',
    '02': parchment.base,
    '03': stone[10],
    inverted: gray[100],
  },
  text: {
    primary: '#1A1A1A',
    secondary: gray.base,
    tertiary: '#B0B0B0',
    inverted: '#FFFFFF',
    brand: brand.base,
    muted: stone.base,
  },
  border: {
    light: '#E6E6E6',
    default: gray[20],
    strong: gray.base,
  },
  accent: {
    highlight: brand.base,
    highlightHover: brand[60],
    highlightActive: brand[70],
    highlightSubtle: brand[10],
  },
  status: {
    success: '#2E7D32',
    warning: '#B8860B',
    danger: brand[60],
    info: '#334155',
  },
} as const;

export const colors = {
  brand,
  gray,
  stone,
  parchment,
  ...semantic,
} as const;

export type Colors = typeof colors;
