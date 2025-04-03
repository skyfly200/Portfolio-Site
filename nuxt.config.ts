// Nuxt config file
// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config';
import { aliases, fa } from "vuetify/iconsets/fa";

export default defineNuxtConfig({
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
  devtools: { enabled: true },
  compatibilityDate: "2025-02-21"
})