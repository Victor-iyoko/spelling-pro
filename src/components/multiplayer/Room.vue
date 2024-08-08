<template>
    <div class="w-100">
        <div v-if="multiPlayer.inRoom" class="ff-grandstander-thin">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="d-flex align-items-center gap-1 text-yellow text-shadow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-lock" viewBox="0 0 16 16">
                        <path
                            d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                    </svg>
                    <span class="id fs-6 fw-bold">
                        Room id: #4a6y3f7n
                    </span>
                </div>
                <button type="button" class="ls-1 btn btn-sm btn-outline-light">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-door-open" viewBox="0 0 16 16">
                        <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
                        <path
                            d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z" />
                    </svg>
                    <span class="fw-bold d-none d-sm-inline">
                        Dissolve room
                    </span>
                </button>
            </div>
            <div
                class="row w-100 bg-brown-light mx-auto overflow-hidden justify-content-around g-3 pb-3 pt-0 px-0 px-sm-2 pb-sm-4 pt-sm-2 mt-0 rounded-3">
                <div class="col-6 col-md-3">
                    <div
                        class="player shadow-lg mx-auto p-2 rounded-3 d-flex flex-column justify-content-center align-items-center bg-secondarybg">
                        <div class="info d-flex flex-column align-items-center">
                            <img src="/IMG-20230322-WA0206.jpg" class="avatar rounded-circle border border-3" />
                            <h4 class="fs-5 text-light mt-2 text-shadow">#1</h4>
                            <span class="text-info">Emmanuel</span>
                            <div class="d-none d-md-flex gap-2 text-yellow">
                                <span class="small">lvl 200</span>
                                <span class="small">|</span>
                                <span class="small">200000xp</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div
                        class="player shadow-lg mx-auto p-2 rounded-3 d-flex flex-column justify-content-center align-items-center bg-secondarybg">
                        <div class="info d-flex flex-column align-items-center">
                            <img src="/IMG-20230322-WA0167.jpg" class="avatar rounded-circle border border-3" />
                            <h4 class="fs-5 text-light mt-2 text-shadow">#1</h4>
                            <span class="text-info">Daniel</span>
                            <div class="d-none d-md-flex gap-2 text-yellow">
                                <span class="small">lvl 2</span>
                                <span class="small">|</span>
                                <span class="small">2000xp</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div
                        class="player shadow-lg mx-auto p-2 rounded-3 d-flex flex-column justify-content-center align-items-center bg-secondarybg">
                        <div class="info d-flex flex-column align-items-center">
                            <img src="/IMG-20230322-WA0201.jpg" class="avatar rounded-circle border border-3" />
                            <h4 class="fs-5 text-light mt-2 text-shadow">#1</h4>
                            <span class="text-info">Micheal</span>
                            <div class="d-none d-md-flex gap-2 text-yellow">
                                <span class="small">lvl 2</span>
                                <span class="small">|</span>
                                <span class="small">2000xp</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-md-3">
                    <div
                        class="player position-relative shadow-lg mx-auto p-2 rounded-3 d-flex flex-column justify-content-center align-items-center bg-secondarybg">
                        <div class="info d-flex flex-column align-items-center" :class="ready ? 'opacity-0' : ''">
                            <img src="/IMG-20230322-WA0197.jpg" class="avatar rounded-circle border border-3" />
                            <h4 class="fs-5 text-light mt-2 text-shadow">#1</h4>
                            <span class="text-info">Samuel</span>
                            <div class="d-none d-md-flex gap-2 text-yellow">
                                <span class="small">lvl 2</span>
                                <span class="small">|</span>
                                <span class="small">2000xp</span>
                            </div>
                        </div>
                        <Transition mode="out-in">

                            <svg v-show="ready" xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                                fill="currentColor"
                                class="bi bi-check-circle-fill text-green position-absolute top-50 start-50 translate-middle"
                                viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                        </Transition>
                    </div>
                </div>
            </div>
            <div
                class="actions p-1 px-2 mt-3 mx-auto d-flex align-items-center gap-3 text-light rounded-3 bg-secondarybg box-shadow-sharp">
                <div role="button" class="p-1 text-secondary" v-tooltip data-bs-placement="top"
                    title="Challenge players">
                    <a href="#connect" class="text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                    </a>
                </div>
                <div role="button" class="p-1 text-secondary" v-tooltip data-bs-placement="top" title="Make public">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-globe" viewBox="0 0 16 16">
                        <path
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
                    </svg>
                </div>
                <div role="button" data-bs-toggle="modal" data-bs-target="#settings" class="p-1 text-secondary"
                    v-tooltip data-bs-placement="top" title="Adjust settings">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-house-gear" viewBox="0 0 16 16">
                        <path
                            d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708z" />
                        <path
                            d="M11.886 9.46c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.044c-.613-.181-.613-1.049 0-1.23l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                    </svg>
                </div>
                <div @click="ready = true" role="button" class="p-1 text-secondary" v-tooltip data-bs-placement="top"
                    title="Go to rules page">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-file-earmark-ruled" viewBox="0 0 16 16">
                        <path
                            d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V9H3V2a1 1 0 0 1 1-1h5.5zM3 12v-2h2v2zm0 1h2v2H4a1 1 0 0 1-1-1zm3 2v-2h7v1a1 1 0 0 1-1 1zm7-3H6v-2h7z" />
                    </svg>
                </div>
                <div role="button" class="p-1 text-secondary" v-tooltip data-bs-placement="top" title="Leave room">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-door-open" viewBox="0 0 16 16">
                        <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
                        <path
                            d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z" />
                    </svg>
                </div>
            </div>
            <div class="settings mt-3">
                <h3 class="fs-5 px-md-3 fw-bold mb-2 text-white text-shadow ls-1">
                    Settings
                </h3>
                <div class="d-flex justify-content-between">
                    <div class="px-md-3">
                        <li class="text-yellow mb-2"><span class="text-white">Countdown timer: </span><span
                                class="text-yellow">End
                                game</span>
                        </li>
                        <li class="text-yellow mb-2"><span class="text-white">Type: </span><span class="text-yellow">1
                                word
                                2
                                forms</span></li>
                        <li class="text-yellow mb-2"><span class="text-white">Question dependency: </span><span
                                class="text-yellow">Age</span></li>
                        <li class="text-yellow mb-2"><span class="text-white">No of questions: </span><span
                                class="text-yellow">20</span></li>
                        <li class="text-yellow mb-2"><span class="text-white">Max players: </span><span
                                class="text-yellow">4</span>
                        </li>
                    </div>
                    <div class="px-md-3">
                        <li class="text-yellow mb-2"><span class="text-white">Ranked: </span><span
                                class="text-yellow">True</span>
                        </li>
                        <li class="text-yellow mb-2"><span class="text-white">Time: </span><span class="text-yellow">30
                                sec</span>
                        </li>
                        <li class="text-yellow mb-2"><span class="text-white">Lifes: </span><span
                                class="text-yellow">5</span>
                        </li>
                        <li class="text-yellow mb-2"><span class="text-white">Age: </span><span
                                class="text-yellow">24</span>
                        </li>
                    </div>
                </div>
            </div>
            <div class="mt-3">
                <h3 class="fs-5 px-md-3 fw-bold mb-2 text-white text-shadow ls-1">
                    Message
                </h3>
                <div class="px-md-3 text-light">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis vel consequuntur ipsum
                    repudiandae,
                    exercitationem molestias totam laborum beatae. Hic veniam, atque nobis quis repellendus laborum!
                </div>
            </div>
            <div id="connect" class="container mt-5 justify-content-between gap-4 d-flex flex-column flex-md-row mb-3">
                <PlayerConnect :isSavedPlayers="true" :inRoom="true" class="connect" />
                <PlayerConnect :isSavedPlayers="false" :inRoom="true" class="connect" />
            </div>
        </div>
        <div v-else class="w-100 d-flex flex-column gap-3 align-items-center justify-content-center"
            :style="{ height: roomHeight + 'px', maxHeight: '900px' }">
            <img src="/no-room.svg" alt="no room" class="opacity-75 empty">
            <h3 class="fs-3 text-center ff-grandstander-thin">
                You are currently not in a room
            </h3>
        </div>
        <Settings :inRoom="true" class="ff-grandstander" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import tooltip from '../../directives/tooltip';
import Settings from '../Settings.vue';
import PlayerConnect from '../profile/PlayerConnect.vue';
import { useMultiPlayerStore } from '../../stores/multiplayer';

const vTooltip = tooltip;
const props = defineProps({
    headerHeight: Number
});
const multiPlayer = useMultiPlayerStore();
const roomHeight = ref(window.innerHeight - props.headerHeight - 40);
const ready = ref(false);
</script>

<style scoped>
.col-6.col-md-3 {
    perspective: 120rem;
}

.player {
    min-width: 130px;
    max-width: 180px;
    transition: all .5s ease-in-out;
}

.avatar {
    height: 100px;
    width: 100px;
    border-color: #a36041E1 !important;
    object-fit: cover;
}

.actions {
    width: fit-content;
}

.actions div svg {
    transition: color .3s ease-in-out;
}

.actions div:hover svg {
    color: white;
}

.empty {
    width: 210px;
}

h3 {
    color: #a36041E1;
}

.text-info {
    font-style: 15px;
}

.connect>h3 {
    font-size: 20px !important;
}

@media screen and (max-width: 767px) {
    .avatar {
        width: 70px;
        height: 70px;
    }

    .id {
        font-size: 15px !important;
    }
}

@media screen and (max-width: 575px) {
    .empty {
        width: 150px;
    }

    div>h3 {
        font-size: 1.3rem !important;
    }
}

@media screen and (max-width: 430px) {
    .settings>div {
        flex-direction: column;
    }
}
</style>