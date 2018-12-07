/*eslint no-unused-vars: ["error", { "args": "none" }]*/
import Vue from "vue";
import Vuetify, {
  VApp, // required
  VBtn,
  VCard,
  VCardMedia,
  VCardTitle,
  VCardText,
  VCardActions,
  VChip,
  VCombobox,
  VContainer,
  VContent,
  VDivider,
  VFlex,
  VFooter,
  VForm,
  VIcon,
  VLayout,
  VList,
  VListTile,
  VListTileContent,
  VListTileTitle,
  VMenu,
  VNavigationDrawer,
  VSelect,
  VSwitch,
  VTextarea,
  VTextField,
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
    VBtn,
    VCard,
    VCardMedia,
    VCardTitle,
    VCardText,
    VCardActions,
    VChip,
    VCombobox,
    VContainer,
    VContent,
    VDivider,
    VFlex,
    VFooter,
    VForm,
    VIcon,
    VLayout,
    VList,
    VListTile,
    VListTileContent,
    VListTileTitle,
    VMenu,
    VNavigationDrawer,
    VSelect,
    VSwitch,
    VTextarea,
    VTextField,
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
