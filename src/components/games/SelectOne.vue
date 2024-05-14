<template>
    <div>
        <h3 class="fs-2 ls-1 my-5 user-select-none text-center">{{ getInstruction() }}</h3>
        <div class="options d-flex flex-column align-items-center mx-auto" id="select-one-options">
            <SelectOneOption v-for="(option, i) in game.questions[game.currentQuestIndex].options" :color="colors[i]"
                :title="option" :index="i" />
        </div>
    </div>
</template>

<script setup>
import SelectOneOption from '../SelectOneOption.vue';
import { useGameStore } from '../../stores/game';
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';

const game = useGameStore();
const colors = ref(["#ea3556", "blue", "#f658e3", "green"].sort(() => Math.random() - 0.5));

function getInstruction() {
    if (game.mode === 'one-word-two-forms') {
        return 'Select Correct Form';
    } else if (game.mode === 'find-misspelled') {
        return 'Find Misspelled Word';
    } else {
        return 'Find Correct Word';
    }
}

watch(() => game.currentQuestIndex, (newIndex, oldIndex) => {
    if (newIndex > oldIndex) {
        colors.value.sort(() => Math.random() - 0.5);
    }
});

onMounted(() => {
    // Start the countdown timer
    if (game.mode !== "decide-and-correct") {
        game.startCountDown();
        game.questionAns++;
    }
});

onBeforeUnmount(() => {
    // Cleanup: stop the timer when the component is destroyed
    if (game.mode !== "decide-and-correct") {
        game.clearCountDown();
    }
});
</script>

<style scoped>
.options {
    width: 90%;
}
</style>