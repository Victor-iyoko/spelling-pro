<template>
    <div class="container mt-6 ff-grandstander-thin">
        <h3 class="fs-4 fw-bold mb-2 text-white text-shadow ls-1">
            Progress
        </h3>
        <span class="fs-6 text-yellow mb-1">
            Check out your player's progress over the last 50 matches.
        </span>
        <div :style="{ boxShadow: '3px 0px 4px #000000', width: 'fit-content' }"
            class="charts bg-secondarybg bg-light p-2 border-0 rounded-top-2 ms-auto d-flex gap-3">
            <svg v-for="data, i in categoriesArr" width="16" height="16" xmlns="http://www.w3.org/2000/svg"
                fill="currentColor" :style="activeMode.colorIndex === i ? { color: data.color } : { color: 'grey' }"
                @click="handleChartTypeClick(i)" class="bi bi-table" viewBox="0 0 24 24">
                <path :d="data.img" />
            </svg>
        </div>
        <div
            class="data position-relative rounded-2 rounded-start-2 rounded-top-0 box-shadow-sharp d-flex flex-column justify-content-center align-items-center overflow-hidden">
            <div @click="handleChartAnimation" role="button"
                class="p-0 d-flex align-items-center mt-1 btn btn-secondary position-absolute z-3 text-light top-0 start-50 translate-middle-x">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                    class="bi bi-play-fill" viewBox="0 0 16 16">
                    <path v-if="!play"
                        d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393" />
                    <path v-else
                        d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5" />
                </svg>
            </div>
            <ChartAnalytics :activeMode="activeMode" />
        </div>
    </div>
</template>

<script setup>
import ChartAnalytics from '../analytics/ChartAnalytics.vue';
import categoriesArr from '../../data/categories';
import { ref, onMounted } from 'vue';

const activeMode = ref({
    chartType: 'line',
    colorIndex: 0,
    data: [200, 30, 70, 20, 70, 170, 280, 20]
});

const play = ref(true);

const data = [
    [200, 30, 70, 20, 70, 170, 280, 20],
    [30, 10, 100, 30, 60, 20, 50, 30],
    [40, 50, 300, 4, 80, 20, 70, 20],
    [320, 150, 100, 230, 70, 120, 200, 80],
    [10, 5, 15, 42, 71, 20, 24, 45],
    [30, 50, 10, 40, 5, 12, 20, 80],
    [260, 5, 10, 230, 20, 60, 30, 80],
    [30, 55, 130, 410, 30, 20, 200, 80]
]

let animationTimeInterval;

function handleChartTypeClick(index) {
    activeMode.value = {
        chartType: 'line',
        colorIndex: index,
        data: data[index]
    }
}

function handleChartAnimation() {
    play.value = !play.value;
    play.value ? startChartAnimation() : stopChartAnimation();
}

function startChartAnimation() {
    animationTimeInterval = setInterval(() => {
        activeMode.value = {
            chartType: 'line',
            colorIndex: activeMode.value.colorIndex === 7 ? 0 : activeMode.value.colorIndex + 1,
            data: data[activeMode.value.colorIndex === 7 ? 0 : activeMode.value.colorIndex + 1]
        }
    }, 3000);
}

function stopChartAnimation() {
    clearInterval(animationTimeInterval);
}

onMounted(() => {
    startChartAnimation();
});
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