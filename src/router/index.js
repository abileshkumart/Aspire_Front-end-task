import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export default new Router({
  mode: "history",
  base: "/aspire/",
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      meta: {
        layout: "sidebar",
      }
    },
    {
      path: '/home',
      name: 'Home Page',
      component: () => import("@/pages/Home.vue"),
      meta: {
        layout: "sidebar",
      },
    },
    {
      path: '/cards',
      name: 'Card Page',
      component: () => import("@/pages/Cards.vue"),
      meta: {
        layout: "sidebar",
      },
    },
    {
      path: '/payments',
      name: 'Payment Page',
      component: () => import("@/pages/Payments.vue"),
      meta: {
        layout: "sidebar",
      },
    },
    {
      path: '/credit',
      name: 'Credit Page',
      component: () => import("@/pages/Credit.vue"),
      meta: {
        layout: "sidebar",
      },
    },
    {
      path: '/settings',
      name: 'Settings Page',
      component: () => import("@/pages/Settings.vue"),
      meta: {
        layout: "sidebar",
      },
    },

  ]
});
