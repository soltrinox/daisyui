const plugin = require('tailwindcss/plugin')
module.exports = {
  theme: {
    colors: require('../colors/index')
  },
  plugins: [
    plugin(function({ addBase, addUtilities }) {
      addBase(require('../../dist/base'))
      addUtilities(require('../../dist/utilities'),{ variants: ['responsive'] })
      addUtilities(require('../../dist/utilities-unstyled'),{ variants: ['responsive'] })
      addUtilities(require('../../dist/utilities-styled'),{ variants: ['responsive'] })
    })
  ],
}
