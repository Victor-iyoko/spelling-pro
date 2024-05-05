<template>
    <Transition @click="toggleDecidePage" name="scale" class="scale" mode="out-in">
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


function toggleDecidePage() {
    decidePage.value = !decidePage.value;
}

onMounted(() => {
    console.log("decide-correct")
    // Start the countdown timer
    // game.startCountDown();
    game.questionAns++;
});
onBeforeUnmount(() => {
    // Cleanup: stop the timer when the component is destroyed
    game.clearCountDown();
});
</script>