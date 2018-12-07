/*eslint no-unused-vars: ["error", { "args": "none" }]*/
import Vue from "vue";
import Vuetify, {
  VApp, // required
  VNavigationDrawer,
  VContainer,
  VContent,
  VDivider,
  VLayout,
  VFlex,
  VMenu,
  VList,
  VListTile,
  VListTileTitle,
  VCard,
  VCardMedia,
  VCardTitle,
  VCardText,
  VCardActions,
  VChip,
  VBtn,
  VFooter,
  VToolbar,
  VToolbarSideIcon,
  VToolbarTitle,
  transitions
} from "vuetify/lib";
import "vuetify/src/stylus/app.styl";
import { Ripple } from "vuetify/lib/directives";

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VContainer,
    VContent,
    VDivider,
    VLayout,
    VFlex,
    VMenu,
    VList,
    VListTile,
    VListTileTitle,
    VCard,
    VCardMedia,
    VCardTitle,
    VCardText,
    VCardActions,
    VChip,
    VBtn,
    VFooter,
    VToolbar,
    VToolbarSideIcon,
    VToolbarTitle,
    transitions
  },
  directives: {
    Ripple
  },
  iconfont: "fa"
});
