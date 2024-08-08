<template>
    <div class="player d-flex w-100 py-2 px-3 rounded-3" :class="inUsersList ? 'mb-2' : ''"
        :style="!inUsersList ? { background: '#31393b' } : { background: '#a36041e1' }">
        <div class="position-relative rounded-circle border me-3" :id="inTable ? 'hide__sm-table' : ''"
            :class="inUsersList ? 'avatar__container-userlist border-4' : 'avatar__container border-2'">
            <img src="/IMG-20230322-WA0167.jpg" class="w-100 h-100 rounded-circle" alt="avatar">
            <div
                class="rank w-100 h-100 overflow-hidden position-absolute top-0 start-0 bg-dark bg-opacity-50 opacity-0 rounded-circle text-white d-flex flex-column align-items-center justify-content-center">
                <span class="fs-5">#12</span>
                <!-- <span v-show="!inUsersList" class="fs-6" :style="{ marginTop: '-10px' }">1342</span> -->
            </div>
            <span class="active__indicator position-absolute translate-middle p-1 bg-success border rounded-circle">
                <span class="visually-hidden">New alerts</span>
            </span>
        </div>
        <div class="player__tile d-flex flex-grow-1 align-items-center justify-content-between">
            <div class="d-flex flex-column gap-2">
                <RouterLink to="/my-profile">
                    <h5 class="text-white mb-0" :class="inUsersList ? 'fs-5' : ' ff-grandstander-thin'" role="button">
                        Micheal
                    </h5>
                </RouterLink>
                <div class="info d-flex" :class="inUsersList ? 'p-1 rounded-2' : ''"
                    :style="inUsersList ? { background: '#8f4d2f' } : {}">
                    <span class="text-yellow me-1 me-md-2" :style="{ textShadow: '0 2px 2px #3e3c3c' }">lvl 2</span>
                    <span v-show="inUsersList" class="text-white">|</span>
                    <span v-show="inUsersList" class="ms-1 ms-md-2 text-yellow"
                        :style="{ textShadow: '0 2px 2px #3e3c3c' }">23000Xp</span>
                </div>
            </div>
            <div class="d-flex align-items-center">
                <button v-tooltip data-bs-toggle="tooltip" data-bs-placement="top"
                    :style="!inUsersList ? { boxShadow: '2px 2px 2px #000000c2' } : {}"
                    :title="isSavedPlayers ? 'Duel player' : 'save player'" type="button"
                    class="p-md-1 ls-1 me-2 me-sm-3 btn btn-sm d-flex align-items-center justify-content-center"
                    :class="isSavedPlayers ? 'btn-light' : 'btn-success'">
                    <svg v-if="isSavedPlayers" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-lightning-charge text-dark" viewBox="0 0 16 16">
                        <path
                            d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-person-plus text-white" viewBox="0 0 16 16">
                        <path
                            d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                        <path fill-rule="evenodd"
                            d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                    </svg>
                    <span v-show="inUsersList" :class="inUsersList ? 'd-sm-block' : ''" class="d-none ms-1 pt-1">{{
            isSavedPlayers ? 'Duel'
                : 'Save' }}</span>

                </button>
                <button v-if="!inUsersList" v-tooltip data-bs-toggle="tooltip" data-bs-placement="top"
                    :style="!inUsersList ? { boxShadow: '2px 2px 2px #000000c2' } : {}"
                    :title="isSavedPlayers ? 'remove player' : 'Duel player'" type="button"
                    class="p-md-1 ls-1 btn btn-sm d-flex align-items-center justify-content-center"
                    :class="isSavedPlayers ? 'btn-outline-danger' : 'btn-outline-light'">
                    <!-- <svg v-if="isSavedPlayers" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                        fill="currentColor" class="text-danger" viewBox="0 0 16 16">
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg> -->
                    <svg v-if="isSavedPlayers" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-trash3 text-danger" viewBox="0 0 16 16">
                        <path
                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-lightning-charge" viewBox="0 0 16 16">
                        <path
                            d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
                    </svg>
                    <span v-show="inUsersList" :class="inUsersList ? 'd-sm-block' : ''" class="d-none ms-1 pt-1">{{
            isSavedPlayers ? 'Remove' :
                'Duel'
        }}</span>
                </button>
                <button v-else v-tooltip data-bs-toggle="tooltip" data-bs-placement="top"
                    :style="!inUsersList ? { boxShadow: '2px 2px 2px #000000c2' } : {}"
                    :title="isSavedPlayers ? 'remove player' : 'Duel player'" type="button"
                    class="p-md-1 ls-1 btn btn-sm d-flex align-items-center justify-content-center"
                    :class="isSavedPlayers ? 'btn-danger' : 'btn-light'">
                    <svg v-if="isSavedPlayers" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-trash3 text-light" viewBox="0 0 16 16">
                        <path
                            d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-lightning-charge" viewBox="0 0 16 16">
                        <path
                            d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
                    </svg>
                    <span v-show="inUsersList" :class="inUsersList ? 'd-sm-block' : ''" class="d-none ms-1 pt-1">{{
            isSavedPlayers ? 'Remove' :
                        'Duel'
                        }}</span>
                </button>

            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import tooltip from '../directives/tooltip';
const props = defineProps({
    isSavedPlayers: Boolean,
    inUsersList: Boolean,
    inTable: Boolean
});

const vTooltip = tooltip;
</script>

<style scoped>
.avatar__container {
    width: 50px;
    height: 50px;
    color: #a36041e1;
}

.avatar__container-userlist {
    width: 70px;
    height: 70px;
    border-color: #8f4d2f !important;
    transition: all .5s ease-in-out;
}

img {
    object-fit: cover;
}

.rank {
    transition: all .5s ease-in-out;
    backdrop-filter: blur(1px);
}

.rank span {
    transform: translateY(50px);
    transition: all .5s ease-in-out;
}

.avatar__container-userlist:hover .rank {
    opacity: 1 !important;
}

.avatar__container-userlist:hover .rank span {
    transform: translateY(0);
}

.active__indicator {
    top: 8%;
    right: 0;
    border-color: #1e292c !important;
}

a {
    width: fit-content;
}

h5:hover {
    text-decoration: underline;
}

button {
    box-shadow: 2px 2px 2px #773516;
    transition: all .3s ease-in-out;
}

button:hover {
    box-shadow: none !important;
}

.btn-outline-danger:hover svg {
    color: white !important;
}

.btn-outline-light:hover svg {
    color: rgb(33, 37, 41) !important
}


@media screen and (max-width: 500px) {
    .avatar__container-userlist {
        width: 60px;
        height: 60px;
    }

    h5 {
        font-size: 1.2rem !important;
    }

    .info span {
        font-size: .8rem !important;
    }

}

@media screen and (max-width: 349px) {
    .player {
        padding-right: .7rem !important;
        padding-left: .7rem !important;
    }

    .avatar__container-userlist,
    .avatar__container {
        margin-right: .6rem !important;
    }
}

@media screen and (max-width: 400px) {
    #hide__sm-table {
        display: none;
    }
}
</style>