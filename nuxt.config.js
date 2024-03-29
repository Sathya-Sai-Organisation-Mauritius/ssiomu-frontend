let development = false //process.env.NODE_ENV !== 'production'

export default {
  // target: "", static

  /*
   ** Headers of the page
   */
  head: {
    title: 'Sathya Sai International Organisation - Official Mauritius Website',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || 'Love All Serve All'
      }
    ],
    link: [
      {
        rel: 'shortcut icon',
        type: 'image/png',
        href: '/favicon.png'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#ed8936'
  },
  /*
   ** Global CSS
   */
  css: [
    {
      src: '~assets/css/main.css',
      lang: 'css'
    }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios',
    {
      src: '~/plugins/vue-easy-lightbox.js',
      mode: 'client'
    }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios',
    [
      '@rainmakerdigital/nuxt-google-fonts',
      {
        google: {
          families: ['Merriweather:700'],
          downloadFonts: true
        }
      }
    ]
  ],
  axios: {
    baseURL: development
      ? 'https://localhost:8443/_/items/'
      : 'https://manage.sathyasai.mu/_/items/'
  },
  router: {
    // prefetchLinks: false
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  target: 'static'
}
