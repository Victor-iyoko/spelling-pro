<template>
    <div class="d-flex gap-4 justify-content-between align-items-center mb-2">
        <span class="d-flex align-items-center user-select-none pe-none fs-4 opacity-0">
            {{ index + 1 }}.
        </span>
        <span
            @click="(e) => checkMatch(e, { mode: game.mode, isAnswer: game.isAnswer, handleClick: game.handleClick, gameDepComponent: game.gameDepComponent }, false)"
            class="option fs-2 user-select-none" role="button" :style="{ color: color }">
            {{ title }}
        </span>
        <span class="opacity-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                class="bi bi-check-lg text-success" viewBox="0 0 16 16">
                <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
            </svg>
        </span>

    </div>
</template>

<script setup>
import { useGameStore } from '../stores/game';
import checkMatch from '../functions';

const game = useGameStore();
const props = defineProps({
    title: String,
    color: String,
    index: Number
});
</script>

<style scoped>
div {
    letter-spacing: 2px;
}

.option:hover {
    text-decoration: underline;
}
</style>