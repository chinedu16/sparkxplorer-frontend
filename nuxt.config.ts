// nuxt.config.ts
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/custom-theme.css',
  ],

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
    "@element-plus/nuxt",
    "@pinia/nuxt",
    '@nuxt/fonts',
  ],

  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  nitro: {
    prerender: {
      failOnError: false,
    },
  },

  imports: {
    dirs: ['constants/**', 'composables/**', 'utils/helper/**', 'utils/services/**'],
  },

  compatibilityDate: '2024-09-13',
});