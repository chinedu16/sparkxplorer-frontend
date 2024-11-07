import path from "path";

// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      NUXT_PUBLIC_CLIENT_ID: process.env.NUXT_PUBLIC_CLIENT_ID,
      NUXT_PUBLIC_CLIENT_SECRET: process.env.NUXT_PUBLIC_CLIENT_SECRET,
    },
  },
  devtools: { enabled: true },

  css: ["~/assets/css/tailwind.css", "~/assets/css/custom-theme.css"],

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-swiper",
    "@element-plus/nuxt",
    "@pinia/nuxt",
    "@nuxt/fonts",
    "@nuxtjs/seo",
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
    dirs: [
      "constants/**",
      "composables/**",
      "utils/helper/**",
      "utils/services/**",
    ],
  },

  site: {
    url: "https://www.sparkxplorer.com/",
    name: "SparkXplorer",
    urls: [
      {
        loc: "/",
        images: [
          {
            loc: "https://www.sparkxplorer.com/illustrations/home.png",
            caption: "SparkXplorer Homepage screenshot",
            title: "SparkXplorer",
          },
        ],
      },
    ],
    sitemaps: {
      pages: {
        includeAppSources: true,
        exclude: ["/admin/**"],
      },
    },
  },

  compatibilityDate: "2024-09-13",
});
