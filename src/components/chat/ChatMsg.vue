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
            <span class="d-block mt-1" :class="randomMsg === 0 ? 'text-end' : 'text-start text-light fw-normal'">
                just now
            </span>
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
</style>