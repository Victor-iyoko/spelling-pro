<template>
    <div
        class="w-100 chart__container bg-secondarybg d-flex gap-3 gap-lg-5 justify-content-center justify-sm-content-between justify-content-md-center align-items-center p-3">
        <canvas :id="dataType === 'line' ? 'line-chart' : 'charts'"></canvas>
        <div v-if="dataType === 'doughnut'" class="ps-2 ps-md-4 pe-md-0 px-lg-4 d-none d-sm-block">
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
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

const props = defineProps({
    dataType: String,
    lineColor: String
});
const canvas = ref(null);

onMounted(() => {
    (async function () {

        new Chart(
            document.getElementById(props.dataType === 'line' ? 'line-chart' : 'charts'),
            {
                type: props.dataType,
                options: {
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                },
                data: {
                    labels: props.dataType === 'line' ? [1, 2, 3, 4, 5, 6, 7, 8] : [
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
                        data: [300, 50, 100, 40, 70, 120, 200, 80],
                        backgroundColor: props.dataType === 'line' ? ['#fff'] : [
                            '#FFD700',
                            '#FF1493',
                            '#32CD32',
                            '#EE82EE',
                            '#FF8C00',
                            '#972BD6',
                            '#00BFFF',
                            '#F8F8FF'
                        ],
                        hoverOffset: 15,
                        borderColor: props.dataType === 'line' ? '#fff' : '#1E292C',
                        borderWidth: props.dataType === 'line' ? 2 : 3,
                        line: {
                            showLine: true
                        },
                        borderRadius: 4
                    }]
                }
            }
        );
    })();

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