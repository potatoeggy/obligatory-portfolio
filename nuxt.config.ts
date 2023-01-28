// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@vueuse/motion/nuxt",
  ],
  typescript: {
    strict: true,
  },
  vite: {
    plugins: [svgLoader()],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Cabin: true,
      Cantarell: true,
      Lato: true,
      "Noto Sans": true,
      "Noto Serif": true,
      Raleway: true,
      "Open Sans": [500, 600, 700, 800],
      Poppins: [500, 600, 700, 800],
    },
  },
  motion: {
    directives: {
      "slide-rotate-top": {
        initial: {
          y: -400,
          opacity: 0,
          rotate: 90,
        },
        enter: {
          y: 0,
          opacity: 1,
          rotate: 0,
        },
      },
    },
  },
});
