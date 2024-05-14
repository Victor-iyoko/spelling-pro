<template>
    <Transition name="scale" class="scale" mode="out-in">
        <Decide v-if="decidePage" />
        <SelectOne v-else />
    </Transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useGameStore } from '../../stores/game';
import SelectOne from './SelectOne.vue';
import Decide from './Decide.vue';

const game = useGameStore();
const decidePage = ref(true);

function toggleDecidePage(e) {
    decidePage.value = e.detail.decidePage;
    decidePage.value ? game.gameDepComponent = "decide" : game.gameDepComponent = "select-one";
}

onMounted(() => {
    // set game component dependency for use in check match function
    game.gameDepComponent = "decide";

    // Start the countdown timer
    game.startCountDown();
    game.questionAns++;

    // add event listener for switching between pages
    document.addEventListener('showDecidePage', toggleDecidePage);
});
onBeforeUnmount(() => {
    // Cleanup: stop the timer when the component is destroyed
    game.clearCountDown();

    // remove event listener
    document.removeEventListener('showDecidePage', toggleDecidePage);
});
</script>