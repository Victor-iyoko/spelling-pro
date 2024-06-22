<template>
    <div class="w-100 w-md-50 mb-3">
        <h3 class="fs-4 mb-3 text-white text-shadow ls-1">
            {{ isSavedPlayers ? 'Saved Players' : 'Recently Played' }}
        </h3>
        <div
            class="rounded-4 box-shadow-sharp bg-secondarybg p-3 d-flex flex-column justify-content-center align-items-center">
            <PlayerTile :isSavedPlayers="isSavedPlayers" v-for="i in 5" :class="i === 5 ? '' : 'mb-3'" />
        </div>
    </div>
</template>

<script setup>
import PlayerTile from './PlayerTile.vue';

const props = defineProps({
    isSavedPlayers: Boolean
});
</script>