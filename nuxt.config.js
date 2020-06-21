export default {
  target: 'static',
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Sathya Sai International Organisation - Official Mauritius Website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || 'Love All Serve All'
      }
    ],
    link: [{ rel: 'shortcut icon', type: 'image/png', href: '/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#f00' },
  /*
   ** Global CSS
   */
  css: [{ src: '~assets/css/main.css', lang: 'css' }],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
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
  modules: ['@nuxt/http'],
  http: {
    baseURL: 'http://localhost:4444/_/items/'
  },
  server: {
    port: 3050 // default: 3000
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
  }
}
