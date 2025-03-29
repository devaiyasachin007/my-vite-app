import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("@/pages/Home.vue"),
        name: "home",
    },
    {
        path: "/movies/:id",
        component: () => import("@/pages/MovieDetails.vue"),
        name: "movie-details",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
