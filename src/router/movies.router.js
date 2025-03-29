import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/my-vite-app/",
        component: () => import("@/pages/Home.vue"),
        name: "home",
    },
    {
        path: "/my-vite-app/movies/:id",
        component: () => import("@/pages/MovieDetails.vue"),
        name: "movie-details",
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
