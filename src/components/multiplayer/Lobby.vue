<template>
    <div class="mt-3">
        <Features />
        <MpAnalytics />
        <OpenChallenges />
    </div>
</template>

<script setup>
import OpenChallenges from './OpenChallenges.vue';
import Features from './Features.vue';
import MpAnalytics from './MpAnalytics.vue';
</script>

<style scoped>
p {
    font-size: 15px !important;
}
</style>