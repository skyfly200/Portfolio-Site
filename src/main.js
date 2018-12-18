// Vue core
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 3rd party libraries
import axios from "axios";
import VueAxios from "vue-axios";
import VuejsDialog from "vuejs-dialog";
import BootstrapVue from "bootstrap-vue";

// include the default dialog plugin styles
import "../node_modules/vuejs-dialog/dist/vuejs-dialog.min.css";

// load bootstrap styles
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// setup Vue plugins
Vue.use(VuejsDialog);
Vue.use(BootstrapVue);
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
