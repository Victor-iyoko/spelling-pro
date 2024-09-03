<template>
    <!-- header starts -->
    <div v-ActivePage="useRoute().name" ref="head" class="container-fluid px-0">
        <div class="jumbotron pb-2 w-100 position-relative bg-secondarybg">
            <div class="wrapper mx-auto">
                <header class="container d-flex justify-content-between align-items-center py-2">
                    <Title title="MULTIPLAYER" class="ps-0" />
                    <Transition mode="out-in">
                        <button v-if="multiPlayer.activeTab === 'lobby'" @click="multiPlayer.openRandomMatchModal"
                            data-bs-toggle="modal" data-bs-target="#random-match" type="button"
                            class="d-flex gap-2 align-items-center ls-1 btn btn-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-dpad" viewBox="0 0 16 16">
                                <path
                                    d="m7.788 2.34-.799 1.278A.25.25 0 0 0 7.201 4h1.598a.25.25 0 0 0 .212-.382l-.799-1.279a.25.25 0 0 0-.424 0Zm0 11.32-.799-1.277A.25.25 0 0 1 7.201 12h1.598a.25.25 0 0 1 .212.383l-.799 1.278a.25.25 0 0 1-.424 0ZM3.617 9.01 2.34 8.213a.25.25 0 0 1 0-.424l1.278-.799A.25.25 0 0 1 4 7.201V8.8a.25.25 0 0 1-.383.212Zm10.043-.798-1.277.799A.25.25 0 0 1 12 8.799V7.2a.25.25 0 0 1 .383-.212l1.278.799a.25.25 0 0 1 0 .424Z" />
                                <path
                                    d="M6.5 0A1.5 1.5 0 0 0 5 1.5v3a.5.5 0 0 1-.5.5h-3A1.5 1.5 0 0 0 0 6.5v3A1.5 1.5 0 0 0 1.5 11h3a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 6.5 16h3a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 0 16 9.5v-3A1.5 1.5 0 0 0 14.5 5h-3a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 9.5 0zM6 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 11.5 6h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a1.5 1.5 0 0 0-1.5 1.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3A1.5 1.5 0 0 0 4.5 10h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 0 6 4.5z" />
                            </svg>
                            <span class="d-none d-sm-inline">
                                Random match
                            </span>
                        </button>
                        <button v-else-if="multiPlayer.activeTab === 'room' && multiPlayer.inRoom" type="button"
                            class="d-flex gap-2 align-items-center ls-1 btn btn-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-door-open" viewBox="0 0 16 16">
                                <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1" />
                                <path
                                    d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117M11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5M4 1.934V15h6V1.077z" />
                            </svg>
                            <span class="d-none d-sm-inline">
                                Leave room
                            </span>
                        </button>
                        <button v-else-if="multiPlayer.activeTab === 'room' && !multiPlayer.inRoom"
                            data-bs-toggle="modal" data-bs-target="#settings" type="button"
                            class="d-flex gap-2 align-items-center ls-1 btn btn-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-cloud-plus" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5" />
                                <path
                                    d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                            </svg>
                            <span class="d-none d-sm-inline">
                                Create room
                            </span>
                        </button>
                        <button v-else type="button" class="d-flex gap-2 align-items-center ls-1 btn btn-light">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-trash" viewBox="0 0 16 16">
                                <path
                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                <path
                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                            </svg>
                            <span class="d-none d-sm-inline">
                                Clear history
                            </span>
                        </button>
                    </Transition>
                </header>
            </div>
        </div>

    </div>
    <div ref="nav" class="container-fluid px-0 shadow position-sticky top-0 bg-secondarybg z-3">
        <div class="wrapper mx-auto">
            <div class="container">
                <ul class="nav nav-tabs border-0 justify-content-between justify-content-sm-start" role="tablist">
                    <li class="nav-item me-sm-3">
                        <button @click="multiPlayer.changeTab('lobby')"
                            :class="multiPlayer.activeTab === 'lobby' ? 'active' : ''"
                            class="nav-link pb-1 border-2 text-capitalize text-light border-start-0 border-end-0 border-top-0 d-flex align-items-center"
                            data-bs-toggle="tab" data-bs-target="#lobby" type="button" role="tab" aria-controls="lobby"
                            aria-selected="true">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-building" viewBox="0 0 16 16">
                                <path
                                    d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
                                <path
                                    d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z" />
                            </svg>
                            <span class="ms-1">lobby</span>
                        </button>
                    </li>
                    <li class="nav-item me-sm-3">
                        <button @click="multiPlayer.changeTab('room')"
                            :class="multiPlayer.activeTab === 'room' ? 'active' : ''"
                            class="nav-link pb-1 border-2 text-capitalize text-light border-start-0 border-end-0 border-top-0 d-flex align-items-center"
                            data-bs-toggle="tab" data-bs-target="#room" type="button" role="tab" aria-controls="room"
                            aria-selected="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-door-closed" viewBox="0 0 16 16">
                                <path
                                    d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3zm1 13h8V2H4z" />
                                <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
                            </svg>
                            <span class="ms-1">room</span>
                        </button>
                    </li>
                    <li class="nav-item me-sm-3">
                        <button @click="multiPlayer.changeTab('history')"
                            :class="multiPlayer.activeTab === 'history' ? 'active' : ''"
                            class="nav-link pb-1 border-2 text-capitalize text-light border-start-0 border-end-0 border-top-0 d-flex align-items-center"
                            data-bs-toggle="tab" data-bs-target="#history" type="button" role="tab"
                            aria-controls="history" aria-selected="false">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-clock-history" viewBox="0 0 16 16">
                                <path
                                    d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
                                <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
                                <path
                                    d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
                            </svg>
                            <span class="ms-1">history</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- header ends -->

    <!-- main body starts -->
    <div class="wrapper mx-auto mt-4 mb-3">
        <div class="container">
            <Transition mode="out-in">
                <Lobby v-if="multiPlayer.activeTab === 'lobby'" />
                <Room v-else-if="multiPlayer.activeTab === 'room'"
                    :headerHeight="head?.clientHeight + nav?.clientHeight" />
                <History v-else :headerHeight="head?.clientHeight + nav?.clientHeight" />
            </Transition>
        </div>
    </div>
    <!-- main body ends -->

    <!-- modals starts -->
    <RandomMatch />
    <ChallengeDetails />
    <!-- modals ends -->
</template>

<script setup>
import Title from '../components/Title.vue';
import Lobby from '../components/multiplayer/Lobby.vue';
import Room from '../components/multiplayer/Room.vue';
import History from '../components/multiplayer/History.vue';
import { useMultiPlayerStore } from '../stores/multiplayer';
import RandomMatch from '../components/multiplayer/RandomMatch.vue';
import ChallengeDetails from '../components/multiplayer/ChallengeDetails.vue';
import { ref } from 'vue';
import ActivePage from '../directives/activePage.js';
import { useRoute } from 'vue-router';

const vActivePage = ActivePage;
const multiPlayer = useMultiPlayerStore();
const head = ref(null);
const nav = ref(null);
</script>

<style scoped>
.wrapper {
    max-width: 800px;
}

header {
    margin-bottom: 35px;
}

li button.active {
    background: none !important;
}
</style>