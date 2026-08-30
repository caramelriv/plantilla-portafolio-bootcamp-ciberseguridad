// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-08-29',
  devtools: { enabled: true },
  ssr: false,

  app: {
    head: {
      htmlAttrs: {
        lang: 'es',
        class: 'dark',
      },
    },
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
