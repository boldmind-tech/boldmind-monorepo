/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // UI package only - apps should extend this config
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Only define colors you actually use in the UI package
      colors: {
        primary: {
          DEFAULT: '#0A1D37',
          50: '#e6e9ed',
          100: '#b3bcc8',
          500: '#0A1D37',
          900: '#051124',
        },
        accent: {
          DEFAULT: '#FFC107',
          light: '#FFD54F',
          dark: '#FFA000',
        },
      },
    },
  },
  plugins: [],
}