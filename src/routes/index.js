import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: "/cart",
    },
    {
      path: "/cart",
      component: () => import("@/components/cart/Cart.vue"),
    },
    {
      path: "/phase_cycle",
      component: () => import("@/components/cycle/Cycle.vue"),
    },
    {
      path: "/order",
      component: () => import("@/components/order/Order.vue"),
    },
    {
      path: "*",
      component: () => import("@/components/NotFound.vue"),
    },
  ],
});

export default router;
