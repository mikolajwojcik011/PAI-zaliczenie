import { createRouter, createWebHistory } from 'vue-router'
import LandingView from "@/views/LandingView.vue";
import OrderView from "@/views/OrderView.vue";
import JoinUsView from "@/views/JoinUsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "landing",
      path: "/",
      component: LandingView,
    },
    {
      name: "order",
      path: "/order",
      component: OrderView,
    },
    {
      name: "join-us",
      path: "/join-us",
      component: JoinUsView,
    }
  ]
})

export default router
