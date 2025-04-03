// Nuxt config file
// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config';
import { aliases, fa } from "vuetify/iconsets/fa";
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import path from 'path';

export default defineNuxtConfig({
  components: true, // ← add this line
  modules: [
    'vuetify-nuxt-module',
  ],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      // directives: {
      //   Ripple
      // },
      theme: {
        primary: {
          base: "#7627D0",
          darken1: "#6608D2",
          darken2: "#4D059E",
          darken3: "#3E0480",
          darken4: "#2E0260"
        }
      },
      icons: {
        defaultSet: "fa",
        aliases,
      }
    }
  },
  vite: {
    plugins: [
      ViteImageOptimizer({
        test: /\.(jpe?g|png|gif|tiff|webp|avif)$/i,
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './'),
      },
    },
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `
            @use "@/styles/mixins.sass" as *
            @use "@/styles/vars.sass" as *
          `,
        },
      },
    },
  },
  devtools: { enabled: true },
  compatibilityDate: "2025-02-21"
})