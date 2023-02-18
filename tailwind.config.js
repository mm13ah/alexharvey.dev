const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      primary: ['var(--font-lato)', ...fontFamily.sans],
      serif: ['var(--font-lato)', ...fontFamily.serif],
    },
  },
  plugins: [],
};
