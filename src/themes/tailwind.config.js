module.exports = {
  corePlugins: {
    preflight: false,
  },
  daisyui: {
    base: true,
  },
  plugins: [
    require('./postcss.config'),
  ],
}
