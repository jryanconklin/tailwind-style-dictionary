const tokens = require('./src/assets/tailwind-tokens.json');

module.exports = {
  mode: 'jit',
  purge: [
    './src/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: tokens.colors,
    spacing: tokens.spacing,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
