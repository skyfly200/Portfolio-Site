import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import store from "./store";
import VuejsDialog from "vuejs-dialog";
//import VuejsDialogMixin from "vuejs-dialog/vuejs-dialog-mixin.min.js"; // only needed in custom components

// include the default style
//import "vuejs-dialog/vuejs-dialog.min.css";

// setup Vue plugins
Vue.use(VuejsDialog);
Vue.use(VueAxios, axios);

const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
