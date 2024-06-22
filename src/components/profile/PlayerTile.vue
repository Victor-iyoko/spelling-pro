<template>
    <div class="d-flex w-100 py-2 px-3 rounded-3" :style="{ background: '#31393b' }">
        <div class="avatar__container position-relative rounded-circle border border-2 me-3">
            <img src="/IMG-20230322-WA0167.jpg" class="w-100 h-100 rounded-circle" alt="avatar">
            <span class="active__indicator position-absolute translate-middle p-1 bg-success border rounded-circle">
                <span class="visually-hidden">New alerts</span>
            </span>
        </div>
        <div class="player__tile d-flex flex-grow-1 align-items-center justify-content-between">
            <div class="d-flex flex-column">
                <h5 class="text-white" role="button">Micheal</h5>
                <span class="text-info">lvl 2</span>
            </div>
            <div class="d-flex align-items-center">
                <button v-tooltip data-bs-toggle="tooltip" data-bs-placement="top"
                    :title="isSavedPlayers ? 'challenge player' : 'save player'" type="button"
                    class="p-md-1 ls-1 me-3 btn btn-sm" :class="isSavedPlayers ? 'btn-light' : 'btn-success'">
                    <svg v-if="isSavedPlayers" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"
                        viewBox="0 0 24 24" class="text-dark">
                        <path fill="currentColor" fill-rule="evenodd"
                            d="M11.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 6.414V15a1 1 0 1 1-2 0V6.414L8.707 8.707a1 1 0 0 1-1.414-1.414zM4 14a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1"
                            clip-rule="evenodd"></path>
                    </svg>
                    <svg v-else :style="{ transform: 'rotate(225deg)' }" xmlns="http://www.w3.org/2000/svg" width="22"
                        height="22" fill="currentColor" class="bi bi-x text-white" viewBox="0 0 16 16">
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>

                </button>
                <button v-tooltip data-bs-toggle="tooltip" data-bs-placement="top"
                    :title="isSavedPlayers ? 'remove player' : 'challenge player'" type="button"
                    class="p-md-1 ls-1 btn btn-sm" :class="isSavedPlayers ? 'btn-outline-danger' : 'btn-outline-light'">
                    <svg v-if="isSavedPlayers" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                        fill="currentColor" class="text-danger" viewBox="0 0 16 16">
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"
                        viewBox="0 0 24 24" class="text-white">
                        <path fill="currentColor" fill-rule="evenodd"
                            d="M11.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L13 6.414V15a1 1 0 1 1-2 0V6.414L8.707 8.707a1 1 0 0 1-1.414-1.414zM4 14a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3a1 1 0 1 1 2 0v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>

            </div>
        </div>
    </div>
</template>

<script setup>
import tooltip from '../../directives/tooltip';
const props = defineProps({
    isSavedPlayers: Boolean
});

const vTooltip = tooltip;
</script>

<style scoped>
.avatar__container {
    width: 50px;
    height: 50px;
}

img {
    object-fit: cover;
}

.player__tile,
.avatar__container {
    border-color: #6a778e !important;
}

.active__indicator {
    top: 8%;
    right: 0;
    border-color: #1e292c !important;
}

h5:hover {
    text-decoration: underline;
}

.btn-outline-danger:hover svg {
    color: white !important;
}

.btn-outline-light:hover svg {
    color: rgb(33, 37, 41) !important
}
</style>