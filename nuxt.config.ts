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
  app: {
    head: {
      title: 'Skyler Fly',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://unpkg.com/aos@2.3.1/dist/aos.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Nixie+One|Raleway' },
        {
          rel: 'stylesheet',
          href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css',
          integrity: 'sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ',
          crossorigin: 'anonymous',
        },
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=UA-3803212-6',
          async: true,
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-3803212-6');
          `,
          type: 'text/javascript',
        },
        {
          src: 'https://use.fontawesome.com/releases/v5.5.0/js/all.js',
          defer: true,
          integrity: 'sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0',
          crossorigin: 'anonymous',
        },
      ],
      noscript: [
        {
          children: "We're sorry but this site doesn't work properly without JavaScript enabled. Please enable it to continue.",
        },
      ],
    },
  },
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
  css: ["leaflet/dist/leaflet.css"],
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: `
            @use "@/assets/sass/mixins.sass" as *
            @use "@/assets/sass/vars.sass" as *
          `,
        },
      },
    },
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
  },
  devtools: { enabled: true },
  compatibilityDate: "2025-02-21"
})