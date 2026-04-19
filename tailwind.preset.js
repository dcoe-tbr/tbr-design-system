/**
 * The Brand Report — Tailwind preset
 *
 * Usage:
 *   // tailwind.config.js
 *   module.exports = {
 *     presets: [require('@tbr/design-system/tailwind.preset')],
 *     content: ['./src/**\/*.{ts,tsx}'],
 *   };
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          10: '#FADFD5', 20: '#F7C9B9', 30: '#F3AE96', 40: '#EF9372',
          50: '#EB784F', DEFAULT: '#E75D2C', 60: '#C14E25', 70: '#9A3E1D',
          80: '#742F16', 90: '#4D1F0F', 100: '#2E1309',
        },
        gray: {
          5: '#F6F6F6', 10: '#E2E2E2', 20: '#CFCFCF', 30: '#B8B8B8',
          40: '#A0A0A0', 50: '#888888', DEFAULT: '#707070', 60: '#5D5D5D',
          70: '#4B4B4B', 80: '#383838', 90: '#252525', 100: '#161616',
        },
        stone: {
          10: '#E5E4E3', 20: '#D3D1D0', 30: '#BEBBB8', 40: '#A8A4A0',
          50: '#928D89', DEFAULT: '#7C7671', 60: '#67625E', 70: '#534F4B',
          80: '#3E3B39', 90: '#292726', 100: '#191817',
        },
        parchment: {
          10: '#FDFDFC', 20: '#FBFBFA', 30: '#FAF9F8', 40: '#F8F7F6',
          50: '#F6F5F3', DEFAULT: '#F4F3F1', 60: '#CBCBC9', 70: '#A3A2A1',
          80: '#7A7A79', 90: '#515150', 100: '#313130',
        },
        bg: {
          1: '#FFFFFF',
          2: '#F4F3F1',
          3: '#E5E4E3',
          inverted: '#161616',
        },
        text: {
          primary: '#1A1A1A',
          secondary: '#707070',
          tertiary: '#B0B0B0',
          inverted: '#FFFFFF',
          brand: '#E75D2C',
          muted: '#7C7671',
        },
        border: {
          light: '#E6E6E6',
          DEFAULT: '#CFCFCF',
          strong: '#707070',
        },
        highlight: {
          DEFAULT: '#E75D2C',
          hover: '#C14E25',
          active: '#9A3E1D',
          subtle: '#FADFD5',
        },
      },
      fontFamily: {
        serif: ['Newsreader', 'Times New Roman', 'Times', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        // Editorial serif (Newsreader)
        'title-100':  ['20px', { lineHeight: '1.3',  letterSpacing: '0',    fontWeight: 400 }],
        'title-200':  ['28px', { lineHeight: '1.3',  letterSpacing: '0',    fontWeight: 400 }],
        'title-300':  ['34px', { lineHeight: '1.3',  letterSpacing: '0',    fontWeight: 400 }],
        'title-400':  ['40px', { lineHeight: '1.3',  letterSpacing: '-1px', fontWeight: 400 }],
        'title-500':  ['48px', { lineHeight: '1.3',  letterSpacing: '-1px', fontWeight: 400 }],
        'header-100': ['26px', { lineHeight: '1.4',  letterSpacing: '0',    fontWeight: 500 }],
        'header-200': ['36px', { lineHeight: '1.4',  letterSpacing: '0',    fontWeight: 500 }],
        'header-300': ['42px', { lineHeight: '1.4',  letterSpacing: '-1px', fontWeight: 500 }],
        'header-400': ['58px', { lineHeight: '1.4',  letterSpacing: '-2px', fontWeight: 500 }],
        'header-500': ['70px', { lineHeight: '1.4',  letterSpacing: '-2px', fontWeight: 500 }],
        // Sans headers (Inter)
        'hsans-100':  ['14px', { lineHeight: '1.5',  letterSpacing: '0',    fontWeight: 600 }],
        'hsans-200':  ['16px', { lineHeight: '1.5',  letterSpacing: '0',    fontWeight: 600 }],
        'hsans-300':  ['18px', { lineHeight: '1.6',  letterSpacing: '-1px', fontWeight: 600 }],
        'hsans-400':  ['20px', { lineHeight: '1.55', letterSpacing: '-1px', fontWeight: 600 }],
        'hsans-500':  ['22px', { lineHeight: '1.55', letterSpacing: '-2px', fontWeight: 600 }],
        // Body (Inter)
        'body-xs':    ['12px', { lineHeight: '1.5',  letterSpacing: '0' }],
        'body-sm':    ['14px', { lineHeight: '1.5',  letterSpacing: '0' }],
        'body-md':    ['16px', { lineHeight: '1.6',  letterSpacing: '0' }],
        'body-lg':    ['18px', { lineHeight: '1.55', letterSpacing: '0' }],
        'body-xl':    ['20px', { lineHeight: '1.55', letterSpacing: '-2px' }],
        // Card label
        'card-label': ['12px', { lineHeight: '1.4',  letterSpacing: '3px',  fontWeight: 600 }],
      },
      spacing: {
        0.5: '2px', 1: '4px', 1.5: '6px', 2: '8px', 3: '12px', 4: '16px',
        5: '20px', 6: '24px', 8: '32px', 10: '40px', 12: '48px',
        16: '64px', 20: '80px', 24: '96px', 32: '128px', 40: '160px', 48: '192px',
      },
      maxWidth: {
        prose: '680px',
        container: '1200px',
      },
      borderRadius: {
        xs: '2px', sm: '4px', md: '6px', lg: '8px', xl: '12px',
        '2xl': '16px', pill: '9999px',
      },
      boxShadow: {
        xs:   '0 1px 2px 0 rgba(22, 22, 22, 0.04)',
        sm:   '0 1px 3px 0 rgba(22, 22, 22, 0.06), 0 1px 2px 0 rgba(22, 22, 22, 0.04)',
        md:   '0 4px 8px -2px rgba(22, 22, 22, 0.08), 0 2px 4px -1px rgba(22, 22, 22, 0.04)',
        lg:   '0 10px 20px -4px rgba(22, 22, 22, 0.10), 0 4px 8px -2px rgba(22, 22, 22, 0.06)',
        xl:   '0 20px 40px -8px rgba(22, 22, 22, 0.14), 0 8px 16px -4px rgba(22, 22, 22, 0.06)',
        focus:'0 0 0 3px rgba(231, 93, 44, 0.32)',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0, 0, 1)',
        emphasized: 'cubic-bezier(0.3, 0, 0, 1)',
      },
      transitionDuration: {
        fast: '120ms',
        base: '200ms',
        slow: '320ms',
      },
    },
  },
  plugins: [],
};
