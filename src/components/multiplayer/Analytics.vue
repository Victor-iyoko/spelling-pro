<template>
    <div class="mt-5" id="analytics">
        <h3 class="fs-4 mb-2 text-white text-shadow ls-1">
            Analytics
        </h3>
        <p class="fs-6 ff-grandstander-thin text-yellow mb-2">
            Check out our users' statistics in real-time!
        </p>
        <div class="p-3 mb-3 rounded-2 bg-secondarybg box-shadow-sharp">
            <ul class="m-0 p-0">
                <li class="d-flex justify-content-between mb-2">
                    <div class="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-people text-indigo me-2" viewBox="0 0 16 16">
                            <path
                                d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1zm-7.978-1L7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002-.014.002zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0M6.936 9.28a6 6 0 0 0-1.23-.247A7 7 0 0 0 5 9c-4 0-5 3-5 4q0 1 1 1h4.216A2.24 2.24 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816M4.92 10A5.5 5.5 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" />
                        </svg>
                        <span class="text-shadow text-indigo ff-grandstander-thin ls-1">Total number of players</span>
                    </div>
                    <span class="ls-1 text-indigo">23987</span>
                </li>
                <li class="d-flex justify-content-between mb-2">
                    <div class="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-broadcast-pin text-yellow me-2" viewBox="0 0 16 16">
                            <path
                                d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707m2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708m5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708m2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8" />
                        </svg>
                        <span class="text-shadow text-yellow ff-grandstander-thin ls-1">Players online</span>
                    </div>
                    <span class="ls-1 text-yellow">18765</span>
                </li>
                <li class="d-flex justify-content-between">
                    <div class="d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-joystick text-pink-light me-2" viewBox="0 0 16 16">
                            <path
                                d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2" />
                            <path
                                d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23" />
                        </svg>
                        <span class="text-shadow text-pink-light ff-grandstander-thin ls-1">Players in-game</span>
                    </div>
                    <span class="ls-1 text-pink-light">15094</span>
                </li>
            </ul>
        </div>
        <p class="fs-6 ff-grandstander-thin text-yellow mb-2">
            Know the game players love to play the most.
        </p>
        <div
            class="chart__container bg-secondarybg d-flex gap-3 gap-lg-5 justify-content-center justify-sm-content-between justify-content-md-center align-items-center p-3 rounded-2 box-shadow-sharp">
            <canvas id="doughnut-chart"></canvas>
            <div class="ps-2 ps-md-4 pe-md-0 px-lg-4 d-none d-sm-block">
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
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

const canvas = ref(null);

onMounted(() => {
    (async function () {

        new Chart(
            document.getElementById('doughnut-chart'),
            {
                type: 'doughnut',
                options: {
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                },
                data: {
                    labels: [
                        'Decide',
                        'Find correct',
                        'Decide & correct',
                        'Which letter',
                        'Multiple choice',
                        'Find misspelled',
                        '1 word 2 forms',
                        'Spell it'
                    ],
                    datasets: [{
                        label: 'Plays',
                        data: [300, 50, 100, 40, 70, 120, 200, 80],
                        backgroundColor: [
                            '#FF8C00',
                            '#32CD32',
                            '#972BD6',
                            '#EE82EE',
                            '#00BFFF',
                            '#FF1493',
                            '#FFD700',
                            '#F8F8FF'
                        ],
                        hoverOffset: 15,
                        borderColor: '#1E292C',
                        borderWidth: 3

                    }]
                }
            }
        );
    })();

});
</script>

<style scoped>
p {
    font-size: 15px !important;
}

.chart__container {
    height: 350px;
}

.text-secondary {
    font-size: 14px;
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