import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/my-vite-app/",
        component: () => import("@/pages/Home.vue"),
        name: "home",
        meta: {
            title: 'All Populer Movies',
            description: 'All populer movies where you can find your favorite movies',
            keywords: 'populer,movies',
        },
    },
    {
        path: "/my-vite-app/movies/:id",
        component: () => import("@/pages/MovieDetails.vue"),
        name: "movie-details",
        meta: {
            title: 'Movie Details',
            description: 'Movie Details Page',
            keywords: 'populer,movies',
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    if (to.meta.description) {
        let description = document.querySelector('meta[name="description"]');
        if (!description) {
            description = document.createElement('meta');
            description.setAttribute('name', 'description');
            document.head.appendChild(description);
        }
        description.setAttribute('content', to.meta.description);
    }
    if (to.meta.keywords) {
        let keywords = document.querySelector('meta[name="keywords"]');
        if (!keywords) {
            keywords = document.createElement('meta');
            keywords.setAttribute('name', 'keywords');
            document.head.appendChild(keywords);
        }
        keywords.setAttribute('content', to.meta.keywords);
    }
    next();
});
export default router;
