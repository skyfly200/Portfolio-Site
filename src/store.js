import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import axios from "axios";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: "vuex",
  storage: window.localStorage
});

export default new Vuex.Store({
  plugins: [vuexLocalStorage.plugin],
  state: {
    feature: null,
    status: "",
    token: localStorage.getItem("token") || "",
    drawer: false,
    user: {
      admin: false
    }
  },
  mutations: {
    showTopic(state, topic) {
      state.feature = topic;
    },
    clearTopic(state) {
      state.feature = null;
    },
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, data) {
      state.status = "success";
      state.token = data.token;
      state.user = data.user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
      state.user = { admin: false };
    },
    setDrawer(state, drawer) {
      state.drawer = drawer;
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "https://skylerflyserver.appspot.com/users/login",
          data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", { token, user });
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "https://skylerflyserver.appspot.com/users/register",
          data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(resp);
          })
          .catch(err => {
            commit("auth_error", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    logout({ commit }) {
      return new Promise(resolve => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
    openDrawer({ commit }) {
      commit("setDrawer", true);
    }
  },
  getters: {
    isLoggedIn: state => state.token !== "",
    isAdmin: state => (state.user.admin ? state.user.admin === 1 : false),
    name: state => state.user.name,
    drawer: state => state.drawer,
    authStatus: state => state.status
  }
});
