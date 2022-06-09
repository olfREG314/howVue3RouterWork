/** @format */

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Jobs from "../views/jobs/JobsList.vue";
import About from "../views/AboutView.vue";
import NotFound from "../views/NotFound.vue";
import JobDetails from "../views/jobs/JobDetails.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/jobs",
    name: "jobs",
    component: Jobs,
  },
  {
    path: "/jobs/:id",
    name: "jobDetails",
    component: JobDetails,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    name: NotFound,
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
