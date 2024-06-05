<template>
    <div class="d-flex w-75 mx-auto align-items-center gap-4 mb-5">
        <audio class="d-none" ref="player" :src="mySource" controls />
        <svg @click="player.play" role="button" xmlns="http://www.w3.org/2000/svg" width="35" height="35"
            fill="currentColor" class="bi bi-play-circle-fill text-primary" viewBox="0 0 16 16">
            <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814z" />
        </svg>
        <canvas ref="canvas" class="flex-grow-1" />
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
            :class="rotate ? 'rotate' : ''" class="bi bi-arrow-repeat text-primary" viewBox="0 0 16 16">
            <path
                d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
            <path fill-rule="evenodd"
                d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z" />
        </svg>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAVLine } from 'vue-audio-visual';

const player = ref(null);
const canvas = ref(null);
const props = defineProps({
    mySource: String,
    rotate: Boolean
});

// composable function useAVBars
useAVLine(player, canvas, { src: props.mySource, canvHeight: 50, canvWidth: 200, lineColor: ['#FFF', 'rgb(0,255,127)', '#00f'] })
</script>

<style scoped>
.bi-arrow-repeat {
    transition: all 0.5s ease-in;
}

.rotate {
    transform: rotate(180deg);
}
</style>