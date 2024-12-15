import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify"; // Vuetify 3 setup
import axios from "axios";
import VueAxios from "vue-axios";
import AOS from "aos";
import "aos/dist/aos.css";
// import dotenv from "dotenv";

// dotenv.config();

AOS.init();

// create the vue app
const app = createApp(App);

// setup Vue plugins
app.use(VueAxios, axios);
app.use(router);
app.use(vuetify);

app.mount("#app");

const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

app.config.devtools = true;