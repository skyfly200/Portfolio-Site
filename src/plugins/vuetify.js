// vuetify.js
/*eslint no-unused-vars: ["error", { "args": "none" }]*/
import { createVuetify } from "vuetify";
import {
  VApp, // required
  VMain,
  VBtn,
  VCol,
  VRow,
  VImg,
  VFab,
  VHover,
  VCard,
  VCardTitle,
  VCardSubtitle,
  VCardText,
  VCardActions,
  VChip,
  VCombobox,
  VTimeline,
  VTimelineItem,
  VContainer,
  VDivider,
  VFooter,
  VForm,
  VIcon,
  VLayout,
  VList,
  VListItem,
  VListItemTitle,
  VMenu,
  VOverlay,
  VNavigationDrawer,
  VSelect,
  VSwitch,
  VTextarea,
  VTextField,
  VToolbar,
  VToolbarTitle,
  VCarousel,
  VCarouselItem
} from "vuetify/components";
//import "vuetify/src/stylus/app.styl";
import { Ripple } from "vuetify/directives";
import { aliases, fa } from "vuetify/iconsets/fa";
import 'vuetify/styles'; // Include Vuetify styles
// import * as components from 'vuetify/components';

const vuetify = createVuetify({
  components: {
    VApp,
    VMain,
    VBtn,
    VCol,
    VRow,
    VImg,
    VHover,
    VCard,
    VFab,
    VCardTitle,
    VCardSubtitle,
    VCardText,
    VCardActions,
    VChip,
    VCombobox,
    VTimeline,
    VTimelineItem,
    VCarousel,
    VCarouselItem,
    VContainer,
    VListItem,
    VListItemTitle,
    VDivider,
    VFooter,
    VForm,
    VIcon,
    VLayout,
    VList,
    VMenu,
    VOverlay,
    VNavigationDrawer,
    VSelect,
    VSwitch,
    VTextarea,
    VTextField,
    VToolbar,
    VToolbarTitle
  },
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