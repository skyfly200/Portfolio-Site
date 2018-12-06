/*eslint no-unused-vars: ["error", { "args": "none" }]*/
import Vue from "vue";
import Vuetify, {
  VApp, // required
  VNavigationDrawer,
  VFooter,
  VToolbar,
  transitions
} from "vuetify/lib";
import "vuetify/src/stylus/app.styl";
import { Ripple } from "vuetify/lib/directives";

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VToolbar,
    transitions
  },
  directives: {
    Ripple
  },
  iconfont: "fa"
});
