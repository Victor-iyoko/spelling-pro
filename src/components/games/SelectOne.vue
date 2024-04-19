<template>
    <div id="option">
        <h3 class="fs-2 my-5 user-select-none">Select correct form</h3>
        <div class="options d-flex flex-column align-items-center mx-auto">
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

h3 {
    letter-spacing: 1px;
}
</style>