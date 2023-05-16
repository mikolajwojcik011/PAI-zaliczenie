import { createRouter, createWebHistory } from 'vue-router'
import LandingView from "@/views/LandingView.vue";
import OrderView from "@/views/OrderView.vue";
import JoinUsView from "@/views/JoinUsView.vue";
import OrderFeedbackView from "@/views/OrderFeedbackView.vue";
import JoinUsFeedbackView from "@/views/JoinUsFeedbackView.vue";

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
    },
    {
      name: "tip",
      path: "/tip",
      component: OrderFeedbackView,
    },
    {
      name: "join-us-feedback",
      path: "/join-us-feedback",
      component: JoinUsFeedbackView,
    },
    {
      path: "/:catchAll(.*)*",
      redirect: { name: "landing" },
    },
  ]
})

export default router
