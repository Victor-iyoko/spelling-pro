<template>
    <main class="position-fixed">
        <button class="rounded-circle position-relative">
            <div @click.prevent="isMenuOpen = !isMenuOpen"
                class="w-100 h-100 rounded-circle position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"
                    class="bi bi-plus text-white" :class="isMenuOpen ? 'open' : 'close'" viewBox="0 0 16 16">
                    <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
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
                    <li class="navbar__item position-relative" data-bs-toggle="offcanvas" data-bs-target="#chat"
                        aria-controls="offcanvasScrolling">
                        <span
                            class="position-absolute alert__indicator d-flex justify-content-center align-items-center border border-3 badge bg-success rounded-circle ff-grandstander-thin">
                            9+
                            <span class="visually-hidden">New alerts</span>
                        </span>
                        <a class="navbar__link position">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                stroke-linecap="round" stroke-linejoin="round" class="bi bi-chat-square-dots"
                                viewBox="0 0 16 16">
                                <path
                                    d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                <path
                                    d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                            </svg>
                            <span>Chat</span>
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
                    <li class="navbar__item position-relative" data-bs-toggle="offcanvas"
                        data-bs-target="#notifications" aria-controls="offcanvasScrolling">
                        <span
                            class="position-absolute alert__indicator d-flex justify-content-center align-items-center border border-3 badge bg-success rounded-circle ff-grandstander-thin">
                            5
                            <span class="visually-hidden">New alerts</span>
                        </span>
                        <a class="navbar__link position">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-bell" viewBox="0 0 16 16">
                                <path
                                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
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
    left: 25px;
    bottom: 10px;
    z-index: 30;
}

main>button {
    background-color: #1e292c;
    width: 74px;
    height: 74px;
    border-left-style: none;
    border-top-style: none;
    box-shadow: 1px 1px 5px #000000;
}

.alert__indicator {
    right: 18px;
    top: 5px;
    font-size: 11px !important;
    border-color: #1b2426 !important;
    width: 24px;
    height: 24px;
    z-index: 5;
}

svg {
    transition: all .5s ease-in-out;
}

.open {
    transform: rotate(225deg);
}

.close {
    transform: rotate(0);
}

.navbar {
    position: absolute;
    left: 0;
    /* transform: translate(-10%, -115%); */
    transform-origin: bottom;
    background: #1b2426;
    border-radius: 20px;
    padding: 1rem 0;
    box-shadow: 3px 3px 4px #000000;
    transition: all .5s ease-in-out;
}

.show {
    transform: translate(-10%, -113%);
    opacity: 1;
}

.hide {
    opacity: 0;
    transform: translate(-10%, -106%);
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
    left: 104%;
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