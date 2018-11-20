import Vue from "vue";
import Router from "vue-router";
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
      path: "/blog/post/:id",
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
      path: "/blog/dash",
      name: "dashboard",
      component: () =>
        import(/* webpackChunkName: "dashboard" */ "./views/Dashboard.vue"),
      meta: {
        requiresAuth: true,
        is_admin: true
      }
    },
    {
      path: "/blog/new",
      name: "blog-create",
      component: () =>
        import(/* webpackChunkName: "blog-create" */ "./views/CreatePost.vue"),
      meta: {
        requiresAuth: true,
        is_admin: true
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
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/auth",
        params: { nextUrl: to.fullPath }
      });
    } else {
      let user = JSON.parse(localStorage.getItem("user"));
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next();
        } else {
          next({ name: "blog" });
        }
      } else {
        next();
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem("jwt") == null) {
      next();
    } else {
      next({ name: "blog" });
    }
  } else {
    next();
  }
});

export default router;
