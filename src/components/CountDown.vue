<template>
    <h2 :class="game.start ? 'opacity-1 time' : 'opacity-0'"
        class="user-select-none text-shadow text-center display-6 fw-bold my-2 my-xl-3">
        {{ formatTime }}
    </h2>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import { useGameStore } from '../stores/game';
import { useSettingsStore } from '../stores/settings';

const game = useGameStore();
const settings = useSettingsStore();

const formatTime = computed(() => {
    // Calculate minutes and seconds
    const minutes = Math.floor(game.time.current / 60);
    const seconds = game.time.current % 60;
    // Format minutes and seconds as string with leading zeros
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    return settings.data.time.dependency === 'end game' ? `${formattedMinutes}:${formattedSeconds}` : formattedSeconds;
});

onMounted(() => {
    // initialize time from settings
    game.time.initial = settings.data.time.dependency === 'end game' ? settings.data.time.number * 60 : settings.data.time.number;
    game.time.current = game.time.initial;
    game.time.dependency = settings.data.time.dependency;

    console.log(game.time.current);
});
</script>