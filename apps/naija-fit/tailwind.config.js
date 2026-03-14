// tailwind.config.js - Naija Fither
// Extends the shared base config for ecosystem consistency
import baseConfig from '@boldmind/config';

/** @type {import('tailwindcss').Config} */
const config = {
  ...baseConfig,
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../../PACKAGES/ui/src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
};

export default config;
