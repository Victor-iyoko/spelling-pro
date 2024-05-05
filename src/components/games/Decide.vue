<template>
    <div class="w-100 overflow-hidden">
        <h3 class="fs-3 lh-base ls-1 my-5 user-select-none text-center">is this word correct?</h3>
        <h2 id="decide-word" class="fs-1 lh-base ls-2 text-center" :style="{ 'color': textColor }">
            {{ word }}
        </h2>
        <div id="decide-options" class="mt-3 mx-auto w-50 d-flex justify-content-between align-items-center">
            <svg @click="(e) => checkMatch(e, { mode: game.mode, isAnswer: game.isAnswer, handleClick: game.handleClick }, false)"
                role="button" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                class="bi bi-check-lg text-success" :data-answer="assignOptions(true)" viewBox="0 0 16 16">
                <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
            </svg>
            <svg @click="(e) => checkMatch(e, { mode: game.mode, isAnswer: game.isAnswer, handleClick: game.handleClick }, false)"
                role="button" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor"
                class="bi bi-x text-danger" :data-answer="assignOptions(false)" viewBox="0 0 16 16">
                <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
        </div>
    </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useGameStore } from '../../stores/game';
import checkMatch from '../../functions';

const game = useGameStore();
const word = ref(game.questions[game.currentQuestIndex].word[0]);
const textColor = ref(getRandomColor());
let wordElm;

function getRandomColor() {
    let colors = ["#ea3556", "blue", "#f658e3", "green"];
    return colors[Math.floor(Math.random() * colors.length)];
}

const assignOptions = ((checkMark) => {
    if (game.questions[game.currentQuestIndex].word[1] === "correct") {
        return checkMark ? game.questions[game.currentQuestIndex].answer : null;
    } else {
        return checkMark ? null : game.questions[game.currentQuestIndex].answer;
    }
});

watch(() => game.currentQuestIndex, (newIndex, oldIndex) => {
    wordElm.style.transform = 'translateX(500px)';
    setTimeout(() => {
        word.value = game.questions[oldIndex].word[0];
        wordElm.style.transition = 'none';
        wordElm.style.transform = 'translateX(-500px)';
    }, 500);
    setTimeout(() => {
        textColor.value = getRandomColor();
        word.value = game.questions[newIndex].word[0];
        wordElm.style.transition = 'all 0.5s ease-in-out';
        wordElm.style.transform = 'translateX(0)';
        // console.log(game.questions[game.currentQuestIndex])
    }, 800);
});

onMounted(() => {
    wordElm = document.getElementById('decide-word');
    // Start the countdown timer
    game.startCountDown();
    game.questionAns++;
});
onBeforeUnmount(() => {
    // Cleanup: stop the timer when the component is destroyed
    game.clearCountDown();
});
</script>

<style scoped>
h2 {
    transition: all 0.5s ease-in-out;
}

svg {
    transition: opacity 0.5s ease-in-out;
}

svg:hover {
    opacity: 0.7;
}
</style>