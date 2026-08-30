// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-08-29',
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'es',
        class: 'dark',
      },
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/caso-estudio']
    },
    routeRules: {
      '/img/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
      '/_nuxt/**': { headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
    }
  },

  content: {
    renderer: {
      anchorLinks: false,
    },
    build: {
      markdown: {
        highlight: {
          theme: 'github-dark',
        },
      },
    },
  },

  css: ['@/assets/css/main.css'],

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/content',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  runtimeConfig: {
  },
})
