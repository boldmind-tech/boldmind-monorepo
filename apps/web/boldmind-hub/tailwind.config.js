// apps/web/boldmind-hub/tailwind.config.js
/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#00143C',
        },
        accent: {
          50: '#fff9e6',
          100: '#fff1cc',
          200: '#ffe8a3',
          300: '#ffde7a',
          400: '#ffd452',
          500: '#FFC800',
          600: '#e6b400',
          700: '#cc9e00',
          800: '#b38800',
          900: '#997200',
        },
        success: '#00A859',
        action: '#E63946',
        // Your custom names mapped to standard ones
        boldnavy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#00143C',
        },
        boldgold: {
          50: '#fff9e6',
          100: '#fff1cc',
          200: '#ffe8a3',
          300: '#ffde7a',
          400: '#ffd452',
          500: '#FFC800',
          600: '#e6b400',
          700: '#cc9e00',
          800: '#b38800',
          900: '#997200',
        },
      },
      animation: {
        'flywheel-spin': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'wave': 'wave 8s ease-in-out infinite',
        'spin': 'spin 1s linear infinite',
      },
      keyframes: {
        wave: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      }
    }
  },
  plugins: [],
}

export default config