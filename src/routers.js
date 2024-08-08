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
        name: "Home",
        component: Home,
        path: "/"
    },
    {
        name: "Game",
        component: Game,
        path: "/game/:id/:category"
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
        name: "Reviews",
        component: Reviews,
        path: "/reviews"
    },
    {
        name: "Multiplayer",
        component: Multiplayer,
        path: "/multiplayer"
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;