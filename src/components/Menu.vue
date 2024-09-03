<template>

    <div class="offcanvas offcanvas-bottom" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="menu"
        aria-labelledby="menu">
        <div class="offcanvas-header container py-1">
            <div class="d-flex align-items-center mx-auto" :style="{ maxWidth: '800px', width: '100%' }">
                <Title title="Menu" :small="true" />
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                    class="bi bi-x text-light ms-auto" role="button" data-bs-dismiss="offcanvas" aria-label="Close"
                    viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
            </div>
        </div>
        <div class="offcanvas-body container p-2 p-sm-3">
            <div class="row gx-0 justify-content-between mx-auto" :style="{ maxWidth: '800px' }">
                <div class="col-3 col-md">
                    <div class="d-flex flex-column align-items-center gap-1 p-1">
                        <RouterLink to="/" @click="app.toggleActiveMenu('home')" class="box p-3 rounded-4"
                            :class="app.activeMenu === 'home' ? 'active' : ''">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-house-door" viewBox="0 0 16 16">
                                <path
                                    d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
                            </svg>
                        </RouterLink>
                        <span>Home</span>
                    </div>
                </div>
                <div class="col-3 col-md">
                    <div class="d-flex flex-column align-items-center gap-1 p-1">
                        <RouterLink to="/reviews" @click="app.toggleActiveMenu('reviews')" class="box p-3 rounded-4"
                            :class="app.activeMenu === 'reviews' ? 'active' : ''">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-chat-square-text" viewBox="0 0 16 16">
                                <path
                                    d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                <path
                                    d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                            </svg>
                        </RouterLink>
                        <span>Reviews</span>
                    </div>
                </div>
                <div class="col-3 col-md">
                    <div class="d-flex flex-column align-items-center gap-1 p-1">
                        <RouterLink to="/multiplayer" @click="app.toggleActiveMenu('multiplayer')"
                            class="box p-3 rounded-4" :class="app.activeMenu === 'multiplayer' ? 'active' : ''">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-people" viewBox="0 0 16 16">
                                <path
                                    d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                            </svg>
                        </RouterLink>
                        <span>Multiplayer</span>
                    </div>
                </div>
                <div class="col-3 col-md">
                    <div class=" d-flex flex-column align-items-center gap-1 p-1">
                        <div class="box p-3 rounded-4" data-bs-toggle="offcanvas" data-bs-target="#chat">
                            <div class="position-relative">
                                <span
                                    class="position-absolute alert__indicator d-flex justify-content-center align-items-center border border-3 badge bg-success rounded-circle ff-grandstander-thin">
                                    9+
                                    <span class="visually-hidden">New alerts</span>
                                </span>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round"
                                    class="bi bi-chat-square-dots text-gray" viewBox="0 0 16 16">
                                    <path
                                        d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                    <path
                                        d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                                </svg>
                            </div>
                        </div>
                        <span>Chat</span>
                    </div>
                </div>
                <div class="col-3 col-md">
                    <div class="d-flex flex-column align-items-center gap-1 p-1">
                        <RouterLink to="/leaderboard" @click="app.toggleActiveMenu('leaderboard')"
                            class="box p-3 rounded-4" :class="app.activeMenu === 'leaderboard' ? 'active' : ''">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-award" viewBox="0 0 16 16">
                                <path
                                    d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z" />
                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                            </svg>
                        </RouterLink>
                        <span>Leaderboard</span>
                    </div>
                </div>
                <div class="col-3 col-md">
                    <div class="d-flex flex-column align-items-center gap-1 p-1">
                        <RouterLink to="/profile" @click="app.toggleActiveMenu('profile')" class="box p-3 rounded-4"
                            :class="app.activeMenu === 'profile' ? 'active' : ''">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-person-vcard" viewBox="0 0 16 16">
                                <path
                                    d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
                                <path
                                    d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z" />
                            </svg>
                        </RouterLink>
                        <span>Profile</span>
                    </div>
                </div>
                <div class="col-3 col-md">
                    <div class="d-flex flex-column align-items-center gap-1 p-1">
                        <div class="box p-3 rounded-4" data-bs-toggle="offcanvas" data-bs-target="#notifications">
                            <div class="position-relative">
                                <span
                                    class="position-absolute alert__indicator d-flex justify-content-center align-items-center border border-3 badge bg-success rounded-circle ff-grandstander-thin">
                                    5
                                    <span class="visually-hidden">New alerts</span>
                                </span>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                    class="bi bi-bell text-gray" viewBox="0 0 16 16">
                                    <path
                                        d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                                </svg>
                            </div>
                        </div>
                        <span>Notifications</span>
                    </div>
                </div>
                <div class="col-3 col-md">
                    <div class="d-flex flex-column align-items-center gap-1 p-1">
                        <RouterLink to="/auth" @click="app.toggleActiveMenu('login')" class="box p-3 rounded-4"
                            :class="app.activeMenu === 'login' ? 'active' : ''">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0z" />
                                <path fill-rule="evenodd"
                                    d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                            </svg>
                        </RouterLink>
                        <span>Login</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Title from './Title.vue';
import { useAppStore } from '../stores/app.js';

const app = useAppStore();
</script>

<style scoped>
.offcanvas {
    background: #1b2426 !important;
}

.offcanvas.offcanvas-bottom {
    height: auto !important;
}

.alert__indicator {
    right: -60%;
    top: -50%;
    font-size: 11px !important;
    border-color: #1b2426 !important;
    width: 24px;
    height: 24px;
    z-index: 5;
}

.box svg,
.box~span {
    color: #6a778e;
}

.box,
.box svg,
.box~span {
    transition: all .5s ease-in-out;
}

.box:hover svg,
.box:hover~span,
.box.active~span {
    color: #fff !important;
}

.box.active {
    background: #fff;
}

.box.active svg {
    color: #1e292c !important;
}

@media screen and (min-width: 930px) {
    .offcanvas {
        display: none;
    }
}

@media screen and (max-width: 430px) {
    .box svg {
        width: 20px;
        height: 20px;
    }

    span {
        font-size: 15px !important;
    }
}

@media screen and (max-width: 380px) {
    span {
        font-size: 13px !important;
    }
}
</style>