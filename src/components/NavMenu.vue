<template>
    <main class="position-fixed">
        <button class="rounded-circle position-relative" data-bs-toggle="offcanvas" data-bs-target="#menu">
            <div @click.prevent="isMenuOpen = !isMenuOpen"
                class="w-100 h-100 rounded-circle position-absolute top-50 start-50 translate-middle d-flex justify-content-center align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"
                    class="bi bi-plus text-white" :class="isMenuOpen ? 'open' : 'close'" viewBox="0 0 16 16">
                    <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                    class="bi bi-menu-button-wide text-white d-none" viewBox="0 0 16 16">
                    <path
                        d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z" />
                    <path
                        d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0M0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5" />
                </svg>
            </div>
            <nav class="navbar" :class="isMenuOpen ? 'show' : 'hide'">
                <ul class="navbar__menu">
                    <RouterLink to="/" @click="app.toggleActiveMenu('home')" class="navbar__item"
                        :class="app.activeMenu === 'home' ? 'active' : ''">
                        <a class="navbar__link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-house-door" viewBox="0 0 16 16">
                                <path
                                    d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                            </svg>
                            <span>Home</span>
                        </a>
                    </RouterLink>
                    <RouterLink to="/reviews" @click="app.toggleActiveMenu('reviews')" class="navbar__item"
                        :class="app.activeMenu === 'reviews' ? 'active' : ''">
                        <a class="navbar__link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-chat-square-text" viewBox="0 0 16 16">
                                <path
                                    d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                <path
                                    d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                            </svg>
                            <span>Reviews</span>
                        </a>
                    </RouterLink>
                    <RouterLink to="/multiplayer" @click="app.toggleActiveMenu('multiplayer')" class="navbar__item"
                        :class="app.activeMenu === 'multiplayer' ? 'active' : ''">
                        <a class="navbar__link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-people" viewBox="0 0 16 16">
                                <path
                                    d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                            </svg>
                            <span>Multiplayer</span>
                        </a>
                    </RouterLink>
                    <li class="navbar__item position-relative" data-bs-toggle="offcanvas" data-bs-target="#chat">
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
                    <RouterLink to="/leaderboard" @click="app.toggleActiveMenu('leaderboard')" class="navbar__item"
                        :class="app.activeMenu === 'leaderboard' ? 'active' : ''">
                        <a class="navbar__link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-award" viewBox="0 0 16 16">
                                <path
                                    d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                            </svg>
                            <span>Leaderboard</span>
                        </a>
                    </RouterLink>
                    <RouterLink to="/profile" @click="app.toggleActiveMenu('profile')" class="navbar__item"
                        :class="app.activeMenu === 'profile' ? 'active' : ''">
                        <a class="navbar__link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-person-vcard" viewBox="0 0 16 16">
                                <path
                                    d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
                                <path
                                    d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z" />
                            </svg>
                            <span>Profile</span>
                        </a>
                    </RouterLink>
                    <li class="navbar__item position-relative" data-bs-toggle="offcanvas"
                        data-bs-target="#notifications">
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
                    <RouterLink to="/auth" @click="app.toggleActiveMenu('auth')" class="navbar__item"
                        :class="app.activeMenu === 'auth' ? 'active' : ''">
                        <a class="navbar__link">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z" />
                                <path fill-rule="evenodd"
                                    d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                            </svg>
                            <span>Login</span>
                        </a>
                    </RouterLink>
                </ul>
            </nav>
        </button>
    </main>
</template>

<script setup>
import { useAppStore } from '../stores/app';
import { ref } from 'vue';

const isMenuOpen = ref(true);
const app = useAppStore();
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

ul {
    list-style: none;
    padding: 0;
    margin: 0;
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

@media screen and (max-width: 929px) {
    .navbar {
        display: none;
    }
}

@media screen and (max-width: 730px) {
    main {
        left: 10px;
    }

    main>button {
        width: 54px;
        height: 54px;
    }

    main>button svg.bi-plus {
        width: 50px;
        height: 50px;
    }
}

@media screen and (max-width: 600px) {
    main {
        left: 8px;
        bottom: 40%;
    }

    main>button {
        width: 54px;
        height: 54px;
    }

    .bi-plus {
        display: none;
    }

    .bi-menu-button-wide {
        display: inline !important;
    }
}

@media screen and (min-width: 930px) {
    .open {
        transform: rotate(225deg);
    }

    .close {
        transform: rotate(0);
    }
}
</style>