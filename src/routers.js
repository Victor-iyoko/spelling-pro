import Home from './pages/Home.vue'
import Game from './pages/Game.vue'
import Auth from './pages/Auth.vue'
import Profile from './pages/Profile.vue'
import Users from './pages/Users.vue'
import Leaderboard from './pages/Leaderboard.vue'
import Reviews from './pages/Reviews.vue'
import Multiplayer from './pages/Multiplayer.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: "home",
        component: Home,
        path: "/"
    },
    {
        name: "",
        component: Game,
        path: "/game/:id/:category"
    },
    {
        name: "auth",
        component: Auth,
        path: "/auth"
    },
    {
        name: "profile",
        component: Profile,
        path: "/profile"
    },
    {
        name: "",
        component: Users,
        path: "/users"
    },
    {
        name: "leaderboard",
        component: Leaderboard,
        path: "/leaderboard"
    },
    {
        name: "reviews",
        component: Reviews,
        path: "/reviews"
    },
    {
        name: "multiplayer",
        component: Multiplayer,
        path: "/multiplayer"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;