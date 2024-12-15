// vuetify.js
/*eslint no-unused-vars: ["error", { "args": "none" }]*/
import { createVuetify } from "vuetify";
// import {
//   VApp, // required
//   VBtn,
//   VCard,
//   VCardTitle,
//   VCardText,
//   VCardActions,
//   VChip,
//   VCombobox,
//   VContainer,
//   VContent,
//   VDivider,
//   VFlex,
//   VFooter,
//   VForm,
//   VIcon,
//   VLayout,
//   VList,
//   VListTile,
//   VListTileContent,
//   VListTileTitle,
//   VMenu,
//   VNavigationDrawer,
//   VSelect,
//   VSwitch,
//   VTextarea,
//   VTextField,
//   VToolbar,
//   VToolbarSideIcon,
//   VToolbarTitle
// } from "vuetify/components";
//import "vuetify/src/stylus/app.styl";
import { Ripple } from "vuetify/directives";
import { aliases, fa } from "vuetify/iconsets/fa";

// components: {
//   VApp,
//   VBtn,
//   VCard,
//   VCardTitle,
//   VCardText,
//   VCardActions,
//   VChip,
//   VCombobox,
//   VContainer,
//   VContent,
//   VDivider,
//   VFlex,
//   VFooter,
//   VForm,
//   VIcon,
//   VLayout,
//   VList,
//   VListTile,
//   VListTileContent,
//   VListTileTitle,
//   VMenu,
//   VNavigationDrawer,
//   VSelect,
//   VSwitch,
//   VTextarea,
//   VTextField,
//   VToolbar,
//   VToolbarSideIcon,
//   VToolbarTitle
// },

const vuetify = createVuetify({
  directives: {
    Ripple
  },
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
    sets: {
      fa
    }
  }
});

export default vuetify;

// iconfont: "fa",
// theme: {
//   defaultTheme: "light",
//   themes: {
//     light: {
//       colors: {
//         primary: "#7627D0",
//         secondary: "#6608D2",
//         accent: "#4D059E",
//       }
//     }
//   }
// },