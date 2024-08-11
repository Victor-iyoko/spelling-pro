<template>
    <!-- <div class="w-100"> -->
    <div class="message d-flex gap-2" :class="randomMsg === 0 ? 'me-auto' : 'ms-auto'">
        <div class="px-1" :class="randomMsg === 0 ? 'order-0' : 'order-1'">
            <img :src="randomMsg === 0 ? '/IMG-20230322-WA0167.jpg' : '/IMG-20230322-WA0201.jpg'" alt="avatar"
                class="rounded-circle border border-secondary">
        </div>
        <div class="ff-grandstander-thin rounded-2 mb-0 p-2"
            :class="randomMsg === 0 ? 'sender bg-dark order-1 border' : 'receiver bg-secondary fw-bolder text-black border order-0'">
            A simple secondary alert. check it out! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            <div class="d-flex align-items-center mt-1 fw-normal ls-1"
                :class="randomMsg === 0 ? 'justify-content-end' : 'justify-content-start text-light'">
                <span class="me-1">
                    <svg v-if="randomMsg === 0" xmlns=" http://www.w3.org/2000/svg" width="14" height="14"
                        fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                        <path
                            d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor"
                        class="bi bi-check-all" viewBox="0 0 16 16">
                        <path
                            d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                    </svg>
                </span>
                <span>
                    just now
                </span>
            </div>
        </div>
    </div>
    <!-- </div> -->
</template>

<script setup>
import { ref } from 'vue';

const randomMsg = ref(Math.round(Math.random()));
</script>

<style scoped>
.message {
    width: 80%;
}

.message img {
    width: 30px;
    height: 30px;
    object-fit: cover;
}

.message>div {
    font-size: 13px;
}

.message span {
    font-size: 10px;
}

.sender {
    border-color: rgba(240, 255, 255, 0.09) !important;
    color: #e0d9d9;
}

.sender span {
    color: rgb(171, 171, 171);
}

.receiver {
    border-color: rgba(98, 94, 94, 0.722) !important;

}

@media screen and (max-width: 380px) {
    .message {
        width: 100%;
    }
}
</style>