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
  VToolbarTitle
} from "vuetify/lib";
import { Ripple } from "vuetify/lib/directives";

Vue.use(Vuetify);

export default new Vuetify({
  directives: {
    Ripple
  },
  iconfont: "fa",
  theme: {
    primary: {
      base: "#7627D0",
      darken1: "#6608D2",
      darken2: "#4D059E",
      darken3: "#3E0480",
      darken4: "#2E0260"
    }
  }
});
