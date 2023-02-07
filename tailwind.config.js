/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
        fontFamily: {
            'sans': ['Rubik', ...defaultTheme.fontFamily.sans],
        }
    },
  },
  plugins: [],
}
