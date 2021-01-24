// tailwind.config.js
module.exports = {
  // ...
  purge: ['./lib/components/**/*.js', './lib/themes/default.js', './src/*.js'],
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
};
