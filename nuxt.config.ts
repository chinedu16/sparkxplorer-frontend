// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper", "@element-plus/nuxt"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },

  css: ['~/assets/css/tailwind.css'],
})