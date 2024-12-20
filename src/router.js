import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
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
    path: "/_3d",
    name: "_3d",
    component: () => import(/* webpackChunkName: "design3d" */ "./views/Design3D.vue"),
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
    path: "/data",
    name: "data",
    component: () => import(/* webpackChunkName: "data" */ "./views/Data.vue"),
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
});

export default router;
