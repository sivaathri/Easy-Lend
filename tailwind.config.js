/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#032e27',
          forest: '#064438',
          emerald: '#0d5c4d',
          gold: '#c98218',
          orange: '#d97706',
          yellow: '#f59e0b',
          lightBg: '#f8faf9',
          mintBg: '#f0f7f3',
          cardBg: '#ffffff',
          tagLine: '#6b7280',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

