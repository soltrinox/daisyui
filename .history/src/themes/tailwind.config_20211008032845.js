module.exports = {
  corePlugins: {
    preflight: false,
  },
  daisyui: {
    base: true,
  },
  plugins: [
    require('../themes/postcss.config'),
  ],
}
