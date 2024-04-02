import Home from './pages/Home.vue'
import Game from './pages/Game.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: "Home",
        component: Home,
        path: "/"
    },
    {
        name: "Game",
        component: Game,
        path: "/game/:category"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;