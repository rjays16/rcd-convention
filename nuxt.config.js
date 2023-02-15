export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '25th Regional Conference of Dermatology',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'og:title', content: 'Regional Conference of Dermatology' },
      { name: 'og:description', content: 'Welcome to the 25th Regional Conference of Dermatology' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', async: true },
      { rel: 'stylesheet', href: '/dist/css/CustomFonts.css', async: true },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
        integrity: 'sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3',
        crossorigin: 'anonymous',
        async: true
      },
    ],
    script: [
      { src: '/dist/js/jquery.min.js', type: 'text/javascript', defer: true },
      {
        src: 'https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js',
        integrity: 'sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB',
        crossorigin: 'anonymous',
        defer: true
      },
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js',
        integrity: 'sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13',
        crossorigin: 'anonymous',
        defer: true
      },
      {
        src: 'https://player.vimeo.com/api/player.js',
        defer: true
      },
      {
        src: 'https://www.googletagmanager.com/gtm.js?id=GTM-KSTKVR9',
        async: true,
      },
      {
        src: "https://www.googleoptimize.com/optimize.js?id=OPT-K5L4B6W"
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'element-ui/lib/theme-chalk/reset.css',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/css/Custom.scss',
    '@/assets/css/Responsive.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/VuePlugins.js',
    '~/plugins/customPusher.js',
    '~/plugins/fontawesome.js',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/fontawesome',
  ],


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    'vue-social-sharing/nuxt',
     "vue2-editor/nuxt",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
  },

  router: {
    middleware: ['getToken'],
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  },

  gtm: {
    id: 'GTM-KSTKVR9'
  },

  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['style', 'font'].includes(type)
      }
    }
  },
}
