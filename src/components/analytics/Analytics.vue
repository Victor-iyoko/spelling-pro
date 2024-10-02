<template>
    <div :style="{ boxShadow: '3px 0px 4px #000000', width: 'fit-content' }"
        class="charts bg-secondarybg bg-light p-2 border-0 rounded-top-2 ms-auto d-flex gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            :class="dataType === 'table' ? 'text-white' : 'text-secondary'" @click="dataType = 'table'"
            class="bi bi-table" viewBox="0 0 16 16">
            <path
                d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm15 2h-4v3h4zm0 4h-4v3h4zm0 4h-4v3h3a1 1 0 0 0 1-1zm-5 3v-3H6v3zm-5 0v-3H1v2a1 1 0 0 0 1 1zm-4-4h4V8H1zm0-4h4V4H1zm5-3v3h4V4zm4 4H6v3h4z" />
        </svg>
        <svg xml ns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            :class="dataType === 'doughnut' ? 'text-white' : 'text-secondary'" @click="dataType = 'doughnut'"
            class="bi bi-pie-chart" viewBox="0 0 16 16">
            <path
                d="M7.5 1.018a7 7 0 0 0-4.79 11.566L7.5 7.793zm1 0V7.5h6.482A7 7 0 0 0 8.5 1.018M14.982 8.5H8.207l-4.79 4.79A7 7 0 0 0 14.982 8.5M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            :class="dataType === 'bar' ? 'text-white' : 'text-secondary'" @click="dataType = 'bar'"
            class="bi bi-bar-chart-line" viewBox="0 0 16 16">
            <path
                d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1zm1 12h2V2h-2zm-3 0V7H7v7zm-5 0v-3H2v3z" />
        </svg>
    </div>
    <div
        class="data rounded-2 rounded-start-2 rounded-top-0 box-shadow-sharp d-flex flex-column justify-content-center align-items-center overflow-hidden">
        <TableAnalytics v-if="dataType === 'table'" />
        <ChartAnalytics v-else-if="dataType === 'bar'" dataType="bar" />
        <ChartAnalytics v-else dataType="doughnut" />
    </div>
</template>

<script setup>
import TableAnalytics from './TableAnalytics.vue';
import ChartAnalytics from './ChartAnalytics.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const dataType = ref(useRoute().name === 'profile' ? 'bar' : 'doughnut');
</script>

<style scoped>
.data {
    transform: translateY(-3px);
}

.charts svg {
    transition: all .3s ease-in-out;
    cursor: pointer;
}

.charts svg:hover {
    color: white !important;
}
</style>