<template>
    <div class="modal fade" id="random-match" ref="myModal" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header border-0">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body position-relative d-flex flex-column align-items-center justify-content-center"
                    :style="{ paddingBottom: '100px', paddingTop: '50px' }">
                    <svg width="60px" height="60px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
                        preserveAspectRatio="xMidYMid" class="lds-ellipsis"
                        style="shape-rendering: auto; animation-play-state: running; animation-delay: 0s; background: none;"><!--circle(cx="16",cy="50",r="10")-->
                        <circle cx="84" cy="50" r="1.34307" fill="#f0ad4e"
                            style="animation-play-state: running; animation-delay: 0s;">
                            <animate attributeName="r" values="10;0;0;0;0" keyTimes="0;0.25;0.5;0.75;1"
                                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s"
                                repeatCount="indefinite" begin="0s"
                                style="animation-play-state: running; animation-delay: 0s;" />
                            <animate attributeName="cx" values="84;84;84;84;84" keyTimes="0;0.25;0.5;0.75;1"
                                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s"
                                repeatCount="indefinite" begin="0s"
                                style="animation-play-state: running; animation-delay: 0s;" />
                        </circle>
                        <circle cx="79.4336" cy="50" r="10" fill="#5cb85c"
                            style="animation-play-state: running; animation-delay: 0s;">
                            <animate attributeName="r" values="0;10;10;10;0" keyTimes="0;0.25;0.5;0.75;1"
                                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s"
                                repeatCount="indefinite" begin="-1s"
                                style="animation-play-state: running; animation-delay: 0s;" />
                            <animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1"
                                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s"
                                repeatCount="indefinite" begin="-1s"
                                style="animation-play-state: running; animation-delay: 0s;" />
                        </circle>
                        <circle cx="45.4336" cy="50" r="10" fill="#5bc0de"
                            style="animation-play-state: running; animation-delay: 0s;">
                            <animate attributeName="r" values="0;10;10;10;0" keyTimes="0;0.25;0.5;0.75;1"
                                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s"
                                repeatCount="indefinite" begin="-0.5s"
                                style="animation-play-state: running; animation-delay: 0s;" />
                            <animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1"
                                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s"
                                repeatCount="indefinite" begin="-0.5s"
                                style="animation-play-state: running; animation-delay: 0s;" />
                        </circle>
                        <circle cx="16" cy="50" r="8.65693" fill="#337ab7"
                            style="animation-play-state: running; animation-delay: 0s;">
                            <animate attributeName="r" values="0;10;10;10;0" keyTimes="0;0.25;0.5;0.75;1"
                                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s"
                                repeatCount="indefinite" begin="0s"
                                style="animation-play-state: running; animation-delay: 0s;" />
                            <animate attributeName="cx" values="16;16;50;84;84" keyTimes="0;0.25;0.5;0.75;1"
                                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s"
                                repeatCount="indefinite" begin="0s"
                                style="animation-play-state: running; animation-delay: 0s;" />
                        </circle>
                        <circle cx="16" cy="50" r="0" fill="#f0ad4e"
                            style="animation-play-state: running; animation-delay: 0s;">
                            <animate attributeName="r" values="0;0;10;10;10" keyTimes="0;0.25;0.5;0.75;1"
                                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s"
                                repeatCount="indefinite" begin="0s"
                                style="animation-play-state: running; animation-delay: 0s;" />
                            <animate attributeName="cx" values="16;16;16;50;84" keyTimes="0;0.25;0.5;0.75;1"
                                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1" calcMode="spline" dur="2s"
                                repeatCount="indefinite" begin="0s"
                                style="animation-play-state: running; animation-delay: 0s;" />
                        </circle>
                    </svg>
                    <h5 class="mt-2">Finding a random match...</h5>
                    <div class="position-absolute d-flex" :style="{ bottom: '12px', right: '12px' }">
                        <button type="button" ref="closeBtn" class="btn btn-secondary me-2"
                            data-bs-dismiss="modal">Close</button>
                        <button @click="closeBtn.click()" data-bs-toggle="modal" data-bs-target="#challenge-details"
                            type="button" class="btn btn-primary d-flex gap-2 align-items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-info-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                <path
                                    d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                            </svg>
                            <span>Match details</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const closeBtn = ref(null);


</script>

<style scoped></style>