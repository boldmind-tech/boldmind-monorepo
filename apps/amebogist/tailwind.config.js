// tailwind.config.js - Amebogist
// Extends the shared base config for ecosystem consistency
import baseConfig from '@boldmind/config';

/** @type {import('tailwindcss').Config} */
const config = {
  ...baseConfig,
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ...baseConfig.theme,
    extend: {
      ...baseConfig.theme?.extend,
      colors: {
        ...(baseConfig.theme?.extend)?.colors,
        // AmeboGist-specific color tokens (referenced in page.tsx)
        'amebogreen': {
          50:  '#F0FDF4',
          100: '#DCFCE7',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          900: '#14532D',
        },
        'ecosystem-blue': '#065F46',
        'ecosystem-gold': '#E9A825',
      },
    },
  },
};
export default config;
