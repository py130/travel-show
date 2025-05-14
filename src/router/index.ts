import { createWebHistory, createRouter } from "vue-router";

import HomeView from "@/pages/HomePage.vue";
import AboutView from "@/pages/AboutPage.vue";

const routes = [
  { path: "/wedding", component: HomeView },
  { path: "/wedding/about", component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
