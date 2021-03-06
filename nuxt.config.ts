import { NuxtConfig } from '@nuxt/types';

// Define your configuration with auto-completion & type checking
const config: NuxtConfig = {
  telemetry: false,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Define the source directory of your Nuxt.js application: https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-srcdir/
  srcDir: 'src',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    // titleTemplate: '%s - soundux.github.io',
    title: 'Soundux',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A cross-platform soundboard' },
      {
        property: 'og:image',
        content: 'https://raw.githubusercontent.com/Soundux/Soundux/master/assets/soundux.png',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vuetify.ts' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-i18n'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    defaultAssets: {
      font: undefined,
      icons: false,
    },
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#52b18c',
        },
        light: {
          primary: '#52b18c',
        },
      },
    },
  },

  i18n: {},

  vue: {
    config: {
      productionTip: false,
    },
  },

  server: {
    host: '0.0.0.0',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};

export default config;
