<template>
    <Hud />
    <div class="time text-shadow text-center display-6 fw-bold my-2 my-xl-3">30</div>
    <Board>
        <Instructions />
    </Board>
    <div class="tap text-shadow mx-auto text-center fw-bold text-white mt-2 mt-xl-4 mb-1 mb-xl-3 fs-3">TAP TO START
    </div>
</template>

<script setup>
import Board from '../components/Board.vue';
import Hud from '../components/Hud.vue';
import Instructions from '../components/Instructions.vue';
import { ref } from 'vue';

const startGame = ref(false);
const questions = ref([]);

</script>

<style scoped>
.time {
    color: rgb(59, 255, 0);
}

@keyframes blink {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.tap {
    animation-name: blink;
    animation-duration: 450ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
</style>