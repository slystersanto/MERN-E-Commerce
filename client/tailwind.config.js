/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003554",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}