import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/multimedia",
    name: "multimedia",
    component: () => import(/* webpackChunkName: "multimedia" */ "./views/Multimedia.vue"),
  },
  {
    path: "/Software",
    name: "Software",
    component: () => import(/* webpackChunkName: "Software" */ "./views/Software.vue"),
  },
  {
    path: "/audio",
    name: "audio",
    component: () => import(/* webpackChunkName: "audio" */ "./views/AudioEng.vue"),
  },
  {
    path: "/hardware",
    name: "hardware",
    component: () => import(/* webpackChunkName: "hardware" */ "./views/Hardware.vue"),
  },
  {
    path: "/gen-art",
    name: "gen-art",
    component: () => import(/* webpackChunkName: "gen-art" */ "./views/GenArt.vue"),
  },
  {
    path: "/_3d",
    name: "_3d",
    component: () => import(/* webpackChunkName: "design3d" */ "./views/Design3D.vue"),
  },
  {
    path: "/lighting",
    name: "lighting",
    component: () => import(/* webpackChunkName: "lighting" */ "./views/Lighting.vue"),
  },
  {
    path: "/linux",
    name: "linux",
    component: () => import(/* webpackChunkName: "linux" */ "./views/Linux.vue"),
  },
  {
    path: "/web",
    name: "web",
    component: () => import(/* webpackChunkName: "web" */ "./views/Web.vue"),
  },
  {
    path: "/web3",
    name: "web3",
    component: () => import(/* webpackChunkName: "web3" */ "./views/Web3.vue"),
  },
  {
    path: "/photos",
    name: "photos",
    component: () => import(/* webpackChunkName: "photo" */ "./views/Photo.vue"),
  },
  {
    path: "/videos",
    name: "videos",
    component: () => import(/* webpackChunkName: "video" */ "./views/Videography.vue"),
  },
  {
    path: "/:pathMatch(.*)*", // Catch-all route for 404
    name: "404",
    component: () => import(/* webpackChunkName: "404" */ "./views/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(), // Use history mode
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Restore saved scroll position when using browser navigation
    } else {
      return { top: 0, behavior: "smooth" }; // Always scroll to the top on route change
    }
  }
});

export default router;
