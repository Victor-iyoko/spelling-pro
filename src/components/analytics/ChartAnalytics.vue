<template>
    <div
        class="w-100 chart__container bg-secondarybg d-flex gap-3 gap-lg-5 justify-content-center justify-sm-content-between justify-content-md-center align-items-center p-3">
        <canvas :id="activeMode.chartType === 'line' ? 'line-chart' : 'charts'"></canvas>
        <div v-if="activeMode.chartType === 'doughnut'" class="ps-2 ps-md-4 pe-md-0 px-lg-4 d-none d-sm-block">
            <div class="label d-flex align-items-center gap-2 mb-1"><span class="tag"></span><span
                    class="text-secondary">1 word 2
                    forms</span>
            </div>
            <div class="label d-flex align-items-center gap-2 mb-1"><span class="tag"></span><span
                    class="text-secondary">Find correct</span>
            </div>
            <div class="label d-flex align-items-center gap-2 mb-1"><span class="tag"></span><span
                    class="text-secondary">Find
                    misspelled</span>
            </div>
            <div class="label d-flex align-items-center gap-2 mb-1"><span class="tag"></span><span
                    class="text-secondary">Which letter</span>
            </div>
            <div class="label d-flex align-items-center gap-2 mb-1"><span class="tag"></span><span
                    class="text-secondary">Decide</span></div>
            <div class="label d-flex align-items-center gap-2 mb-1"><span class="tag"></span><span
                    class="text-secondary">
                    Decide &
                    correct</span>
            </div>
            <div class="label d-flex align-items-center gap-2 mb-1"><span class="tag"></span><span
                    class="text-secondary">Multiple
                    choice</span>
            </div>
            <div class="label d-flex align-items-center gap-2 mb-1"><span class="tag"></span><span
                    class="text-secondary">Spell it</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps({
    activeMode: Object
});
const canvas = ref(null);
let chartInstance;
const chartColors = [
    '#FFD700',
    '#FF1493',
    '#32CD32',
    '#EE82EE',
    '#FF8C00',
    '#972BD6',
    '#00BFFF',
    '#F8F8FF'
];

function initChart() {
    chartInstance = new Chart(
        document.getElementById(props.activeMode.chartType === 'line' ? 'line-chart' : 'charts'),
        {
            type: props.activeMode.chartType,
            options: {
                plugins: {
                    legend: {
                        display: false
                    }
                }
            },
            data: {
                labels: props.activeMode.chartType === 'line' ? [1, 2, 3, 4, 5, 6, 7, 8] : [
                    '1 word 2 forms',
                    'Find misspelled',
                    'Find correct',
                    'Which letter',
                    'Decide',
                    'Decide & correct',
                    'Multiple choice',
                    'Spell it'
                ],
                datasets: [{
                    label: 'Plays',
                    data: props.activeMode.chartType === 'line' ? props.activeMode.data : [300, 50, 100, 40, 70, 120, 200, 80],
                    backgroundColor: props.activeMode.chartType === 'line' ? [chartColors[props.activeMode.colorIndex]] : chartColors,
                    hoverOffset: 15,
                    borderColor: props.activeMode.chartType === 'line' ? chartColors[props.activeMode.colorIndex] : '#1E292C',
                    borderWidth: props.activeMode.chartType === 'line' ? 1 : 3,
                    line: {
                        showLine: true
                    }
                }]
            }
        }
    );
}

watch(() => props.activeMode, (newValue, oldValue) => {
    if (newValue.chartType === 'line') {
        chartInstance.data.datasets[0].data = newValue.data;
        chartInstance.data.datasets[0].backgroundColor[0] = chartColors[newValue.colorIndex];
        chartInstance.data.datasets[0].borderColor = chartColors[newValue.colorIndex];
    }
    chartInstance.update();
});

onMounted(() => {
    initChart();
});
</script>

<style scoped>
.chart__container {
    height: 350px;
}

.tag {
    width: 10px;
    height: 10px;
}

.label:nth-child(1n) .tag {
    background-color: #FFD700;
}

.label:nth-child(2n) .tag {
    background-color: #32CD32;
}

.label:nth-child(3n) .tag {
    background-color: #FF1493;
}

.label:nth-child(4n) .tag {
    background-color: #EE82EE;
}

.label:nth-child(5n) .tag {
    background-color: #FF8C00;
}

.label:nth-child(6n) .tag {
    background-color: #972BD6;
}

.label:nth-child(7n) .tag {
    background-color: #00BFFF;
}

.label:nth-child(8n) .tag {
    background-color: #F8F8FF;
}

@media screen and (max-width: 575px) {
    .chart__container {
        height: 250px;
    }

    p {
        font-size: 14px !important;
    }
}
</style>