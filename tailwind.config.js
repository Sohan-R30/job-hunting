/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryColor": '#1A1919',
        "secondaryColor": '#757575',
        "borderColor": "#E8E8E8",
      },
      animation: {
        'spin-slow': 'pulse 6s linear infinite',
      }
    },
  },
  plugins: [require("daisyui")],
}

