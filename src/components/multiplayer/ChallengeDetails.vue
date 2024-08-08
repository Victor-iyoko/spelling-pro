<template>
    <div class="modal fade" id="challenge-details" ref="myModal" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header text-light py-1 border-0 bg-secondarybg">
                    <Title title="Match     details" :small="true" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                        class="bi bi-x text-light ms-auto" role="button" data-bs-dismiss="modal" aria-label="Close"
                        viewBox="0 0 16 16">
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </div>
                <div class="modal-body">
                    <div class="d-flex flex-column flex-sm-row justify-content-between gap-2">
                        <div class="mb-2 mm-sm-0">
                            <h5 class="mb-2 fw-bold">Players</h5>
                            <PlayersCardSlide v-if="showSlide" />
                            <div class="d-flex d-sm-none flex-column">
                                <div class="player d-flex align-items-center mb-1">
                                    <img src="/IMG-20230322-WA0167.jpg"
                                        class="rounded-circle border border-secondary me-3" alt="avatar">
                                    <div class="d-flex flex-column">
                                        <h5 class="mb-1">Daniel</h5>
                                        <div class="d-flex gap-2">
                                            <span class="fw-normal ff-grandstander-thin">lvl 3</span>
                                            <span>|</span>
                                            <span class="fw-normal ff-grandstander-thin">2120xp</span>
                                        </div>
                                    </div>
                                    <h4 class="ms-auto">#1</h4>
                                </div>
                                <div class="player d-flex align-items-center mb-1">
                                    <img src="/IMG-20230322-WA0201.jpg"
                                        class="rounded-circle border border-secondary me-3" alt="avatar">
                                    <div class="d-flex flex-column">
                                        <h5 class="mb-1">Daniel</h5>
                                        <div class="d-flex gap-2">
                                            <span class="fw-normal ff-grandstander-thin">lvl 3</span>
                                            <span>|</span>
                                            <span class="fw-normal ff-grandstander-thin">2120xp</span>
                                        </div>
                                    </div>
                                    <h4 class="ms-auto">#1</h4>
                                </div>
                                <div class="player d-flex align-items-center mb-1">
                                    <img src="/IMG-20230322-WA0206.jpg"
                                        class="rounded-circle border border-secondary me-3" alt="avatar">
                                    <div class="d-flex flex-column">
                                        <h5 class="mb-1">Daniel</h5>
                                        <div class="d-flex gap-2">
                                            <span class="fw-normal ff-grandstander-thin">lvl 3</span>
                                            <span>|</span>
                                            <span class="fw-normal ff-grandstander-thin">2120xp</span>
                                        </div>
                                    </div>
                                    <h4 class="ms-auto">#1</h4>
                                </div>
                            </div>
                        </div>
                        <div class="ps-2">
                            <h5 class="mb-2 fw-bold ps-0 ps-sm-3">Settings</h5>
                            <ul class="m-0">
                                <li><span class="text-secondary">Countdown timer: </span><span>End game</span>
                                </li>
                                <li><span class="text-secondary">Type: </span><span>1 word 2 forms</span></li>
                                <li><span class="text-secondary">Question dependency: </span><span>Age</span></li>
                                <li><span class="text-secondary">No of questions: </span><span>20</span></li>
                                <li><span class="text-secondary">Max players: </span><span>4</span></li>
                                <li><span class="text-secondary">Ranked: </span><span>True</span></li>
                                <li><span class="text-secondary">Time: </span><span>30 sec</span></li>
                                <li><span class="text-secondary">Lifes: </span><span>5</span></li>
                                <li><span class="text-secondary">Age: </span><span>24</span></li>
                            </ul>
                            <div class="ps-0 ps-sm-3 mt-2">
                                <span class="fw-bold">Message: </span><span>Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                    Molestiae, assumenda?</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="multiPlayer.activeTab === 'lobby'" class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success d-flex gap-2 align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                        <span>Join match</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Title from '../Title.vue';
import PlayersCardSlide from './PlayersCardSlide.vue';
import { onMounted, ref } from 'vue';
import { useMultiPlayerStore } from '../../stores/multiplayer';

const multiPlayer = useMultiPlayerStore();

const showSlide = ref(false);
const myModal = ref(null);

function handleSlide() {
    showSlide.value = true;
}

// this was a fix to stop the problem of delay between the modal showing and the slide assets being loaded
onMounted(() => {
    myModal.value.addEventListener('shown.bs.modal', handleSlide);
});

// onUnmounted(() => {
//     myModal.value.removeEventListener('shown.bs.modal', handleSlide);
// });
</script>

<style scoped>
.player img {
    width: 45px;
    height: 45px;
}

@media screen and (max-width: 530px) {
    h5 {
        font-size: 16px;
    }

    span {
        font-size: 14px;
    }
}
</style>