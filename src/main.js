// Vue core
import Vue from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

require("dotenv").config();

// 3rd party libraries
import axios from "axios";
import VueAxios from "vue-axios";

// init AOS scroll animations library
import AOS from "aos";
AOS.init();

// setup Vue plugins
Vue.use(VueAxios, axios);

const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
