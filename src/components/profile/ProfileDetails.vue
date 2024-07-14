<template>
    <div class="details container d-flex flex-column flex-sm-row align-items-center translate-middle-y">
        <div class="position-relative">
            <img src="/IMG-20230322-WA0206.jpg" alt="avatar"
                class="ratio-1x1 avatar rounded-circle shadow border border-5 rounded-circle">
            <span
                class="active__indicator position-absolute translate-middle p-2 bg-danger border border-light rounded-circle">
                <span class="visually-hidden">New alerts</span>
            </span>
            </img>
        </div>
        <div class="flex-grow-1 w-75 w-sm-100 gap-4 ms-sm-2 ms-md-4 d-flex flex-column justify-content-between py-3">
            <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 gap-sm-0">
                <div class="d-flex flex-column align-items-center align-items-sm-start position-relative">
                    <h2 class="name display-5 text-sm-center lh-1 mb-0 text-white align-middle">
                        JohnnyDoe
                    </h2>
                    <span class="email fs-6 text-info text-sm-center">
                        #johndoe@gmail.com
                    </span>
                    <span
                        class="gender position-absolute rounded-circle bg-info d-flex align-items-center justify-content-center"
                        :style="{ width: '22px', height: '22px' }">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-gender-male text-white" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8" />
                        </svg>
                    </span>
                </div>
                <div class="d-flex align-items-center my-sm-2">
                    <button type="button" class="ls-1 me-2 me-md-3 btn btn-light d-flex align-items-center gap-1"
                        data-bs-toggle="modal" data-bs-target="#edit-profile" :class="isMdBtn ? 'btn-sm' : ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-pencil" viewBox="0 0 16 16">
                            <path
                                d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
                        </svg>
                        <span>
                            Edit
                        </span>
                    </button>
                    <button type="button" class="ls-1 btn btn-outline-light" :class="isMdBtn ? 'btn-sm' : ''">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-door-open" viewBox="0 0 16 16">
                            <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
                            <path
                                d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z" />
                        </svg>
                        <span>
                            Logout
                        </span>
                    </button>
                </div>
            </div>
            <div class="row">
                <div class="col-8 mx-auto m-sm-0">
                    <div class="progress bg-transparent border border-1 border-white w-100 position-relative">
                        <span
                            class="w-100 position-absolute pt-1 top-50 start-50 translate-middle fs-6 text-center text-white lh-1"
                            v-tooltip data-bs-toggle="tooltip" data-bs-placement="bottom" title="45000 XP more to go ">
                            15000 / 60000 XP
                        </span>
                        <div class="progress-bar bg-success fs-6" role="progressbar" style="width: 25%;"
                            aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="w-100 mt-2 d-flex justify-content-between text-white">
                        <span>
                            lvl 1
                        </span>
                        <span>
                            lvl 2
                        </span>
                    </div>
                </div>
                <h2 class="d-none d-sm-block col-sm-4 text-end display-5 text-white text-shadow">
                    LVL. 1
                </h2>
            </div>
        </div>
    </div>
</template>

<script setup>
import tooltip from '../../directives/tooltip';
import { onMounted, onUnmounted, ref } from 'vue';

const vTooltip = tooltip;
const isMdBtn = ref(false);

function showMdBtn(e) {
    e.target.innerWidth < 768 ? isMdBtn.value = true : isMdBtn.value = false;
}

onMounted(() => {
    window.innerWidth < 768 ? isMdBtn.value = true : isMdBtn.value = false;
    window.addEventListener('resize', showMdBtn);
});

onUnmounted(() => {
    document.removeEventListener('resize', showMdBtn);
});
</script>

<style scoped>
.avatar__container {
    width: fit-content;
}

.avatar {
    width: 180px;
    height: 180px;
    border-color: #8f4d2f !important;
}

.active__indicator {
    top: 10%;
    right: 10%;
    /* border-color: #1e292c !important; */
}

.gender {
    right: -23px;
}

@media screen and (max-width: 767px) {
    .avatar {
        width: 150px;
        height: 150px;
    }

    .name {
        font-size: 2.1rem;
    }

    .row h2 {
        font-size: 2rem;
    }

    button svg {
        width: 13px;
        height: 13px;
    }

    .gender {
        top: -10px;
        right: -10px;
        transform: scale(0.8);
    }
}

@media screen and (max-width: 575px) {
    .details {
        transform: translateY(-20%) !important;
    }

    .name,
    .email {
        text-shadow: 0 2px 2px #000;
    }

    .gender {
        top: -10px;
        right: -15px;
        transform: scale(0.8);
    }
}

@media screen and (max-width: 390px) {
    .row .col-8 {
        min-width: 220px;
    }
}
</style>