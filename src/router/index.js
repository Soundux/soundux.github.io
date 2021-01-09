import { createWebHistory, createRouter } from "vue-router";
import WindowsSetup from "../views/WindowsSetup.vue";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/windowsSetup",
        name: "WindowsSetup",
        component: WindowsSetup,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
