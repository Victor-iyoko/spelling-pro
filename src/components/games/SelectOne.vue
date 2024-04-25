<template>
    <div>
        <h3 class="fs-2 ls-1 my-5 user-select-none text-center">{{ getInstruction() }}</h3>
        <div class="options d-flex flex-column align-items-center mx-auto" id="select-one-options">
            <Option @resetOption="" v-for="(option, i) in game.questions[game.currentQuestIndex].options"
                :color="getColor(i)" :title="option" :index="i" />
        </div>
    </div>
</template>

<script setup>
import Option from '../Option.vue';
import { useGameStore } from '../../stores/game';
import { onMounted, onBeforeUnmount } from 'vue';

const game = useGameStore();

function getInstruction() {
    if (game.mode === 'one-word-two-forms') {
        return 'Select Correct Form';
    } else if (game.mode === 'find-misspelled') {
        return 'Find Misspelled Word';
    } else {
        return 'Find Correct Word';
    }
}
function getColor(index) {
    let colors = ["#ea3556", "blue, #f658e3", "green"];
    colors = colors.sort(() => Math.random() - 0.5);
    if (index === 0) {
        return '#ea3556';
    } else if (index === 1) {
        return 'blue';
    } else if (index === 2) {
        return '#f658e3';
    } else {
        return 'green';
    }
}

onMounted(() => {
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
.options {
    width: 90%;
}
</style>