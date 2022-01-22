const colors = require('tailwindcss/colors');
module.exports = {
  purge: ['./pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {},
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors,
      white: '#ffffff',
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
