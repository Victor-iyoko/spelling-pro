<template>
    <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <Transition mode="out-in">
            <div v-if="hasFetched" class="rounded-circle bg-success d-flex justify-content-center align-items-center"
                role="status">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                    class="bi bi-check-lg text-white" viewBox="0 0 16 16">
                    <path
                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
            </div>
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

.bg-success {
    width: 32px;
    height: 32px;
}

.v-enter-active,
.v-leave-active {
    transition: opacity .5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>