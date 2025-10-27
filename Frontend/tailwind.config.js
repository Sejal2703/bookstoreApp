/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",        // main HTML file
    "./src/**/*.{js,jsx,ts,tsx}" // all JS/TS/JSX/TSX files in src
  ],
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
