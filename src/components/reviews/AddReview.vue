<template>
    <div class="modal fade user-select-none" id="add-review" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header text-light py-1 border-0 bg-secondarybg">
                    <Title title="Add     review" :small="true" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                        class="bi bi-x text-light ms-auto" role="button" data-bs-dismiss="modal" aria-label="Close"
                        viewBox="0 0 16 16">
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </div>
                <div class="modal-body">
                    <form class="form-floating mb-4">
                        <input type="email" class="form-control" id="floatingInputValue" placeholder="" value="">
                        <label for="email" class="d-flex gap-2 align-items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                                </svg>
                            </span>
                            <span class="align-text-bottom" :style="{ paddingTop: '3px' }">Email</span>
                        </label>
                    </form>
                    <form class="form-floating mb-4">
                        <input type="text" class="form-control" id="floatingInputValue" placeholder="" value="">
                        <label for="username" class="d-flex gap-2 align-items-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                </svg>
                            </span>
                            <span class="align-text-bottom" :style="{ paddingTop: '3px' }">Username</span>
                        </label>
                    </form>
                    <form class="form-floating mb-4">
                        <textarea class="form-control" placeholder="Leave a comment here"
                            :style="{ height: '100px' }"></textarea>
                        <label for="email" class="d-flex gap-2 align-items-start">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-chat-left-quote-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm7.194 2.766a1.7 1.7 0 0 0-.227-.272 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.5 2.5 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.5 2.5 0 0 0-.228-.4 1.7 1.7 0 0 0-.227-.273 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z" />
                                </svg>
                            </span>
                            <span class="align-text-bottom" :style="{ paddingTop: '1px' }">Comment</span>
                        </label>
                    </form>
                    <div class="mb-4">
                        <label for="customRange3" class="form-label d-flex align-items-center">
                            <span class="me-2" :style="{ paddingTop: '3px' }">Ratings:</span>
                            <span :style="{ marginRight: '2px' }" v-for="rating, i in ratings">
                                <svg xmlns="http://www.w3.org/2000/svg" :key="i" width="16" height="16"
                                    fill="currentColor" stroke="#1e292c" class="bi bi-star-fill text-yellow"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </span>
                        </label>
                        <input type="range" class="form-range" min="1" max="5" step="1"
                            @click="(e) => { ratings = Number(e.target.value) }" :value="ratings">
                    </div>
                    <button type="button" class="btn btn-success ms-auto d-block">Send</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Title from '../Title.vue';

const ratings = ref(5);
</script>

<style scoped>
input[type="range"]:focus::-webkit-slider-thumb {
    box-shadow: none;
}

input[type="range"]::-webkit-slider-thumb {
    background-color: #1e292c;
}

/***** Thumb Styles *****/
/***** Firefox *****/
input[type="range"]::-moz-range-thumb {
    background-color: #1e292c;
}

input:focus,
input:active,
textarea:active,
textarea:focus {
    border-color: #1e292c9c;
}
</style>