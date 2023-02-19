const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'fadein-slow': {
          '0%': { opacity: 0 },
          '33%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadein: 'fadein 1s;',
        'fadein-slow': 'fadein-slow 3s',
        'fadein-scroll': 'fadein 1s ease-in forwards',
      },
    },
    fontFamily: {
      primary: ['var(--font-lato)', ...fontFamily.sans],
      serif: ['var(--font-lato)', ...fontFamily.serif],
    },
  },
  plugins: [],
  variants: {
    animation: ['motion-safe'],
  },
};
