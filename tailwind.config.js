/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "textPrimary": '#1A1919',
        "textSecondary": '#757575',
        "borderColor": "#E8E8E8",
      },
      animation: {
        'spin-slow': 'pulse 6s linear infinite',
      }
    },
  },
  plugins: [],
}

