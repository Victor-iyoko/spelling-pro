<template>
    <main class="position-fixed">
        <button class="rounded-circle position-relative">
            <div @click.prevent="isMenuOpen = !isMenuOpen"
                class="w-100 h-100 rounded-circle position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                    class="bi bi-x text-white" :class="isMenuOpen ? 'open' : 'close'" aria-label="Close"
                    viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
            </div>
            <nav class="navbar" :class="isMenuOpen ? 'show' : 'hide'">
                <ul class="navbar__menu">
                    <li @click="activeMenu = 'home'" class="navbar__item"
                        :class="activeMenu === 'home' ? 'active' : ''">
                        <a class="navbar__link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-home">
                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            <span>Home</span>
                        </a>
                    </li>
                    <li @click="activeMenu = 'reviews'" class="navbar__item"
                        :class="activeMenu === 'reviews' ? 'active' : ''">
                        <a class="navbar__link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-message-square">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            <span>Reviews</span>
                        </a>
                    </li>
                    <li @click="activeMenu = 'multi'" class="navbar__item"
                        :class="activeMenu === 'multi' ? 'active' : ''">
                        <a class="navbar__link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="feather feather-users">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            <span>Multiplayer</span>
                        </a>
                    </li>
                    <li @click="activeMenu = 'leaderboard'" class="navbar__item"
                        :class="activeMenu === 'leaderboard' ? 'active' : ''">
                        <a class="navbar__link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <line x1="12" y1="17" x2="12.01" y2="17"></line>
                            </svg>
                            <span>Leaderboard</span>
                        </a>
                    </li>
                    <li @click="activeMenu = 'profile'" class="navbar__item"
                        :class="activeMenu === 'profile' ? 'active' : ''">
                        <a class="navbar__link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                <path
                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                            </svg>
                            <span>Profile</span>
                        </a>
                    </li>
                    <li @click="activeMenu = 'notifications'" class="navbar__item"
                        :class="activeMenu === 'notifications' ? 'active' : ''">
                        <a class="navbar__link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings">
                                <circle cx="12" cy="12" r="3"></circle>
                                <path
                                    d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                                </path>
                            </svg>
                            <span>Notifications</span>
                        </a>
                    </li>
                    <li @click="activeMenu = 'login'" class="navbar__item"
                        :class="activeMenu === 'login' ? 'active' : ''">
                        <a class="navbar__link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
                                <path
                                    d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0" />
                                <path
                                    d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z" />
                            </svg>
                            <span>Login</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </button>
    </main>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);
const activeMenu = ref('home');
</script>

<style scoped>
main {
    left: 30px;
    bottom: 30px;
}

main>button {
    background-color: #1e292c;
    width: 74px;
    height: 74px;
    border-left-style: none;
    border-top-style: none;
    box-shadow: 1px 1px 5px #000000;
}

svg {
    transition: all .5s ease-in-out;
}

.open {
    transform: rotate(0);
}

.close {
    transform: rotate(225deg);
}

.navbar {
    position: absolute;
    left: 0;
    /* transform: translate(-10%, -115%); */
    transform-origin: bottom;
    background: #1e292c;
    border-radius: 20px;
    padding: 1rem 0;
    box-shadow: 3px 3px 4px #000000;
    transition: all .5s ease-in-out;
}

.show {
    transform: translate(-10%, -120%);
    opacity: 1;
}

.hide {
    opacity: 0;
    transform: translate(-10%, -110%);
    pointer-events: none;
}

ul {
    padding: 0;
    margin: 0;
}

li {
    list-style: none;
}

.navbar__link {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    width: 5.5rem;
    color: #6a778e;
    /* transition: all 250ms ease-in-out; */
}

.navbar__link span {
    position: absolute;
    left: 100%;
    transform: translate(-3rem);
    margin-left: 1rem;
    opacity: 0;
    pointer-events: none;
    color: #1e292c;
    background: #fff;
    padding: 0.75rem;
    transition: all 250ms ease-in-out;
    border-radius: 17.5px;
}

.navbar__link:hover {
    color: white;
}

.active>.navbar__link {
    color: #1e292c;
    z-index: 3;
}

.navbar:not(:hover) .navbar__link:focus span,
.navbar__link:hover span {
    opacity: 1;
    transform: translate(0);
}

.navbar__menu {
    position: relative;
}

.active:before {
    content: "";
    position: absolute;
    opacity: 1;
    z-index: 2;
    /* top: 0; */
    left: 1rem;
    width: 3.5rem;
    height: 3.5rem;
    background: white;
    border-radius: 17.5px;
    transition: all 250ms ease-in-out;
}
</style>