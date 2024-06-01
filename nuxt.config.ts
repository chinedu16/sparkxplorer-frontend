// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
    "@element-plus/nuxt",
    "@pinia/nuxt",
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
  css: ["~/assets/css/tailwind.css"],
});
