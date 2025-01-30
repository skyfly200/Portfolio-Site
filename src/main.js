import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify"; // Vuetify 3 setup
import axios from "axios";
import VueAxios from "vue-axios";
import MasonryWall from '@yeger/vue-masonry-wall'
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

// create the vue app
const app = createApp(App);

// setup Vue plugins
app.use(VueAxios, axios);
app.use(router);
app.use(vuetify);
app.use(MasonryWall);

app.mount("#app");

const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}

app.config.devtools = true;