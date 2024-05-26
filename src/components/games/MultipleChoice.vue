<template>
    <div class="w-100">
        <h3 class="fs-4 ls-1 mt-5 mb-4 text-center">
            SELECT
            {{ questionState.chooseCorrect ? "CORRECT" : "INCORRECT" }}
            WORDS ONLY
        </h3>
        <div class="w-75 d-flex flex-column align-items-center mx-auto" id="multi-choice">
            <div v-for="(word, i) in questionState.words"
                class="w-100 d-flex gap-4 justify-content-between align-items-center mb-3">
                <input type="checkbox" class="mt-0 checkbox form-check-input" />
                <span class="option fs-4 ls-2 user-select-none" :style="{ color: colors[i] }">
                    {{ word[0] }}
                </span>
                <span class="opacity-0 fs-4">
                    +5
                </span>
            </div>
        </div>
        <button
            @click="(e) => checkMatch(e, { score: game.score, reduce: game.reduce, currentTime: game.time.current, questionState, mode: game.mode, isAnswer: game.isAnswer, handleClick: game.handleClick }, false)"
            type="button" class="d-block btn btn-success rounded-pill px-4 ls-2 fs-5 mx-auto mt-2" data-clicked="false">
            DONE
        </button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="40" height="40">
            <circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" r="20" cx="40" cy="65">
                <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;"
                    keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate>
            </circle>
            <circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" r="20" cx="100" cy="65">
                <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;"
                    keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate>
            </circle>
            <circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" r="20" cx="160" cy="65">
                <animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;"
                    keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate>
            </circle>
        </svg>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { useGameStore } from '../../stores/game';
import checkMatch from '../../functions';

const game = useGameStore();
const colors = ref(["#ea3556", "blue", "#f658e3", "green"].sort(() => Math.random() - 0.5));
const questionState = ref({});

function formatQuestion() {
    // randomly select to choose correct or incorrect words
    questionState.value.chooseCorrect = [true, false][Math.floor(Math.random() * 2)];
    questionState.value.words = [];
    for (let j = 0; j <= 3; j++) {
        let questionIndex = Math.floor(Math.random() * game.questions.length);
        questionState.value.words.push(game.questions[questionIndex]);
        game.questions.splice(questionIndex, 1);
    }
}

watch(() => game.currentQuestIndex, (newIndex, oldIndex) => {
    if (newIndex > oldIndex) {
        colors.value.sort(() => Math.random() - 0.5);
        formatQuestion();
    }
});

onMounted(() => {
    document.addEventListener('scoreAction', game.handleScore);
    document.addEventListener('timeControl', game.handleTime);
    formatQuestion();
    // Start the countdown timer
    game.startCountDown();
    game.questionAns++;
});

onBeforeUnmount(() => {
    // Cleanup: stop the timer when the component is destroyed
    game.clearCountDown();

    // remove event listener
    document.removeEventListener('scoreAction', game.handleScore);
    document.removeEventListener('timeControl', game.handleTime);
});
</script>

<style scoped>
.checkbox {
    width: 25px;
    height: 25px;
    cursor: pointer;
    border-color: rgba(0, 0, 0, 0.5);
}
</style>