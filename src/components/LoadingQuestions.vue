<template>
    <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <Transition mode="out-in">
            <svg v-if="hasFetched" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                class="text-success bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            <div v-else class="spinner-border text-dark" role="status"></div>
        </Transition>
        <h2 class="fs-3 mt-2 text-center">Fetching words from chatgpt...</h2>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useGameStore } from '../stores/game';

let game = useGameStore();
const hasFetched = ref(false);

onMounted(() => {
    setTimeout(() => {
        hasFetched.value = true;
        setTimeout(() => {
            game.questions = [
                {
                    options: ["PLAGUE", "PLAGE"],
                    answer: "PLAGUE"
                },
                {
                    options: ["RYTHM", "RITHM"],
                    answer: "RYTHM"
                },
                {
                    options: ["EXPECT", "ESPECT"],
                    answer: "EXPECT"
                },
                {
                    options: ["CATARRH", "CARTARH"],
                    answer: "CATARRH"
                },
                {
                    options: ["PESSIMISTIC", "PESIMISTIC"],
                    answer: "PESSIMISTIC"
                },
                {
                    options: ["CONCRATE", "CONCRETE"],
                    answer: "CONCRETE"
                },
                {
                    options: ["PIACE", "PLACE"],
                    answer: "PLACE"
                },
                {
                    options: ["SPOILT", "SOILT"],
                    answer: "SPOILT"
                },
                {
                    options: ["FLANGE", "FLANJE"],
                    answer: "FLANGE"
                },
                {
                    options: ["SORY", "SORRY"],
                    answer: "SORRY"
                },
                {
                    options: ["CLAY", "CLEY"],
                    answer: "CLAY"
                }
            ];
            game.start = true;
        }, 2500);
    }, 3000);
});
</script>

<style scoped>
div {
    cursor: progress;
}
</style>