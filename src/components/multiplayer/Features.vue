<template>
    <div id="carouselExampleIndicators" class="carousel slide mb-4" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                :style="{ width: '7px', height: '7px' }" class="rounded-circle active" aria-current="true"
                aria-label="Slide 1"></button>
            <button type="button" :style="{ width: '7px', height: '7px' }" class="rounded-circle"
                data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" :style="{ width: '7px', height: '7px' }" class="rounded-circle"
                data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" :style="{ width: '7px', height: '7px' }" class="rounded-circle"
                data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner rounded-3 box-shadow-sharp">
            <div class="carousel-item active bg-secondarybg">
                <img :style="{ height: '250px', objectFit: 'contain', opacity: '0.6' }"
                    src="/Key-Performance-Indicator.svg" class="d-block w-100" alt="...">
                <div class="overlay w-100 h-100 position-absolute top-0 start-0"></div>
                <div class="carousel-caption">
                    <h5 class="ff-grandstander-thin fs-3 text-shadow mb-0">Game Analytics
                        <a href="#analytics">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                class="bi opacity-0 bi-arrow-down" :style="{ color: '#ffff00' }" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                            </svg>
                        </a>
                    </h5>
                    <p class="mb-2 ff-grandstander-thin">
                        Get detailed insights and statistics on the game.
                    </p>
                </div>
            </div>
            <div class="carousel-item bg-secondarybg">
                <img :style="{ height: '250px', objectFit: 'contain', opacity: '0.6' }" src="/Explore-the-World.svg"
                    class="d-block w-100" alt="...">
                <div class="overlay w-100 h-100 position-absolute top-0 start-0"></div>
                <div class="carousel-caption">
                    <h5 class="ff-grandstander-thin fs-3 text-shadow mb-0">Open World Challenge
                        <a href="#open-challenges">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                class="bi opacity-0 bi-arrow-down" :style="{ color: '#ffff00' }" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                            </svg>
                        </a>
                    </h5>
                    <p class="mb-2 ff-grandstander-thin">
                        Participate in exciting open world challenges.
                    </p>
                </div>
            </div>
            <div class="carousel-item bg-secondarybg">
                <img :style="{ height: '250px', objectFit: 'contain', opacity: '0.6' }" src="/Saving-button.svg"
                    class="d-block w-100" alt="...">
                <div class="overlay w-100 h-100 position-absolute top-0 start-0"></div>
                <div class="carousel-caption">
                    <h5 class="ff-grandstander-thin fs-3 text-shadow mb-0">Match History
                        <a @click="multiPlayer.changeTab('history')" href="#history">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                class="bi opacity-0 bi-arrow-right" :style="{ color: '#ffff00' }" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </a>
                    </h5>
                    <p class="mb-2 ff-grandstander-thin">
                        Review the history of your previous matches played.
                    </p>
                </div>
            </div>
            <div class="carousel-item bg-secondarybg">
                <img :style="{ height: '250px', objectFit: 'contain', opacity: '0.6' }" src="/Internet-Chat-Rooms.svg"
                    class="d-block w-100" alt="...">
                <div class="overlay w-100 h-100 position-absolute top-0 start-0"></div>
                <div class="carousel-caption">
                    <h5 class="ff-grandstander-thin fs-3 text-shadow mb-0">Create Rooms
                        <a @click="multiPlayer.changeTab('room')" href="#room">
                            <svg @click="multiPlayer.changeTab('room')" xmlns="http://www.w3.org/2000/svg" width="18"
                                height="18" fill="currentColor" class="bi opacity-0 bi-arrow-right"
                                :style="{ color: '#ffff00' }" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                            </svg>
                        </a>
                    </h5>
                    <p class="mb-2 ff-grandstander-thin">
                        Easily create rooms to play with your friends.
                    </p>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>

<script setup>
import { useMultiPlayerStore } from '../../stores/multiplayer';

const multiPlayer = useMultiPlayerStore();
</script>

<style scoped>
.overlay {
    background-image: linear-gradient(to bottom,
            #00000000,
            #0000001f);
}

h5 svg {
    transition: transform .3s ease-in-out;
    z-index: 10 !important;
}

h5 svg {
    transform: translateX(-26px);
}

h5 svg.bi-arrow-down {
    transform: translateY(-22px);
}

h5:hover {
    text-shadow: none;
}

h5:hover svg {
    opacity: 1 !important;
    transform: translate(0);
}

@media screen and (max-width: 767px) {
    p {
        font-size: 14px;
    }
}

@media screen and (max-width: 575px) {
    h5 {
        font-size: 20px;
    }

    p {
        font-size: 12px;
    }
}

@media screen and (max-width: 400px) {
    p {
        display: none;
    }
}
</style>
