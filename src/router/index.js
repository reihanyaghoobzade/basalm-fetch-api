import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/main/Main.vue";
import SearchPage from "../components/search/Main.vue";

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [
        { path: "/", component: Main },
        {
            path: "/p",
            component: SearchPage,
        },
    ],
});

export default router;