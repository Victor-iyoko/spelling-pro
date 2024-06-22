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
        <div class="flex-grow-1 w-75 w-sm-100 gap-4 ms-sm-3 ms-md-4 d-flex flex-column justify-content-between py-3">
            <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3 gap-sm-0">
                <div class="d-flex flex-column align-items-center align-items-sm-start">
                    <h2 class="name display-5 text-sm-center lh-1 mb-0 text-white align-middle">
                        JohnnyDoe
                    </h2>
                    <span class="email fs-6 text-info text-sm-center">
                        #johndoe@gmail.com
                    </span>
                </div>
                <div class="d-flex align-items-center my-sm-2">
                    <button type="button" class="ls-1 me-2 me-md-3 btn btn-light" :class="isMdBtn ? 'btn-sm' : ''">
                        Edit
                    </button>
                    <button type="button" class="ls-1 btn btn-outline-light" :class="isMdBtn ? 'btn-sm' : ''">
                        Logout
                    </button>
                </div>
            </div>
            <!-- <div class="d-flex flex-column flex-sm-row justify-content-between align-items-center"> -->
            <div class="row">
                <!-- <div class="d-flex flex-column"> -->
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
                <!-- <h2 class="display-5 text-white text-shadow"> -->
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
}

@media screen and (max-width: 575px) {
    .details {
        transform: translateY(-20%) !important;
    }

    .name,
    .email {
        text-shadow: 0 2px 2px #000;
    }
}
</style>