import Vue from "vue";
import Router from "vue-router";
import store from "./store.js";
import Home from "./views/Home.vue";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import(/* webpackChunkName: "blog" */ "./views/Blog.vue")
    },
    {
      path: "/blog/post/:id/:edit?",
      name: "blog-post",
      component: () =>
        import(/* webpackChunkName: "blog-post" */ "./views/BlogPost.vue")
    },
    {
      path: "/auth",
      name: "auth",
      component: () =>
        import(/* webpackChunkName: "auth" */ "./views/Auth.vue"),
      meta: {
        guest: true
      }
    },
    {
      path: "/blog/user",
      name: "user",
      component: () =>
        import(/* webpackChunkName: "user" */ "./views/User.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/blog/dash",
      name: "dashboard",
      component: () =>
        import(/* webpackChunkName: "dashboard" */ "./views/Dashboard.vue"),
      meta: {
        requiresAuth: true,
        admin: true
      }
    },
    {
      path: "/blog/edit/:id?",
      name: "editor",
      component: () =>
        import(/* webpackChunkName: "editor" */ "./views/Editor.vue"),
      meta: {
        requiresAuth: true,
        admin: true
      }
    },
    {
      path: "*",
      name: "404",
      component: () => import(/* webpackChunkName: "404" */ "./views/404.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem("token") == null) {
      next({
        path: "/auth",
        params: { nextUrl: to.fullPath }
      });
    } else {
      if (to.matched.some(record => record.meta.admin)) {
        if (store.getters.isAdmin) {
          next();
        } else {
          next({ name: "blog" });
        }
      } else {
        next();
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem("token") == null) {
      next();
    } else {
      next({ name: "blog" });
    }
  } else {
    next();
  }
});

export default router;
