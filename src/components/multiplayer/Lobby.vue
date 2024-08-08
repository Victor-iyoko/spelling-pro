<template>
    <div class="mt-3">
        <Features />
        <Analytics />
        <OpenChallenges />
    </div>
</template>

<script setup>
import OpenChallenges from './OpenChallenges.vue';
import Features from './Features.vue';
import Analytics from './Analytics.vue';
</script>

<style scoped>
p {
    font-size: 15px !important;
}
</style>