import { createApp } from "vue";
import App from "./App.vue";
import '@/assets/main.scss';
import { createPinia } from "pinia";
import router from "@/router/movies.router";

const pinia = createPinia();
const app = createApp(App).use(pinia).use(router).mount("#app");
