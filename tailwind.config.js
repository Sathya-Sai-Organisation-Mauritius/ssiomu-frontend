module.exports = {
  purge: ['./components/**/*.vue', './layouts/**/*.vue', './pages/**/*.vue'],
  theme: {
    fontFamily: {
      serif: ['Merriweather', 'Georgia', 'Cambria']
    },
    maxWidth: {
      xxs: '13rem'
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [require('@tailwindcss/typography')]
}
