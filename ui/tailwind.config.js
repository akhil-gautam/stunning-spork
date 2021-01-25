module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: ['./src/**/*.js'],
  theme: {
    extend: {
      minWidth: {
        32: '32rem',
      },
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
};
