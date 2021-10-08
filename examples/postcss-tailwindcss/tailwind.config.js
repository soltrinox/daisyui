module.exports = {
  mode: 'jit',
  purge: {
    content: ['./*.html'],
    options: {

    },
  },
  plugins: [
    require('daisyui')
  ],
}