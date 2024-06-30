import Home from './pages/Home.vue'
import Game from './pages/Game.vue'
import Auth from './pages/Auth.vue'
import Profile from './pages/Profile.vue'
import Users from './pages/Users.vue'
import Leaderboard from './pages/Leaderboard.vue'
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
        name: "Profile",
        component: Profile,
        path: "/my-profile"
    },
    {
        name: "Users",
        component: Users,
        path: "/users"
    },
    {
        name: "Leaderboard",
        component: Leaderboard,
        path: "/leaderboard"
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