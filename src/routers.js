import Home from './pages/Home.vue'
import Game from './pages/Game.vue'
import Auth from './pages/Auth.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: "Home",
        component: Home,
        path: "/"
    },
    {
        name: "Auth",
        component: Auth,
        path: "/user/auth"
    },
    {
        name: "Game",
        component: Game,
        path: "/game/:id/:category"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;