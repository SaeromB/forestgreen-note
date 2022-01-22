const colors = require('tailwindcss/colors');
delete colors['lightBlue'];

module.exports = {
  purge: ['./pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      dropShadow: {},
    },
    colors: {
      ...colors,
      transparent: 'transparent',
      current: 'currentColor',
      // gray: colors.gray,
      // white: '#ffffff',
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
