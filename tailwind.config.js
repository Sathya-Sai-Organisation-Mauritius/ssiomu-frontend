module.exports = {
  purge: {
    content: [
      './components/**/*.vue',
      './layouts/**/*.vue',
      './pages/**/*.vue'
    ],
    options: {
      whitelistPatternsChildren: [/prose$/],
      whitelist: [
        'prose',
        'h1',
        'h2',
        'h3',
        'p',
        'blockquote',
        'strong',
        'ol',
        'li',
        'ul',
        'h4',
        'h5',
        'h6'
      ]
    }
  },
  theme: {
    fontFamily: {
      serif: ['Merriweather', 'Georgia', 'Cambria']
    },
    maxWidth: {
      xxs: '13rem'
    },
    typography: theme => ({
      default: {
        css: {
          color: '#383838',
          maxWidth: '90ch',
          h1: { color: theme('colors.blue.800'), fontWeight: 700 },
          h2: { color: theme('colors.blue.800'), fontWeight: 600 },
          h3: { color: theme('colors.blue.800'), fontWeight: 500 },
          h4: { color: theme('colors.blue.800'), fontWeight: 400 },
          strong: { color: theme('colors.blue.800') },
          a: {
            color: theme('colors.blue.800'),
            '&:hover': {
              color: theme('colors.blue.500')
            }
          },
          blockquote: {
            fontFamily: theme('fontFamily.serif')
          }
        }
      }
    })
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  plugins: [require('@tailwindcss/typography')]
}
