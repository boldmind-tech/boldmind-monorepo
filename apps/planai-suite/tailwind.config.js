// tailwind.config.js - PlanAI Landing
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
      keyframes: {
        ...(baseConfig.theme?.extend)?.keyframes,
        bounce: {
          '0%, 80%, 100%': { transform: 'scale(0.7)', opacity: '0.5' },
          '40%':           { transform: 'scale(1)',   opacity: '1' },
        },
      },
      animation: {
        ...(baseConfig.theme?.extend)?.animation,
        'bounce-dot': 'bounce 1.4s infinite ease-in-out',
      },
    },
  },
};
export default config;
 