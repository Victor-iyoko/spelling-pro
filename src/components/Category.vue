<template>
    <RouterLink :style="{ color: color }"
        class="category d-block position-relative text-decoration-none text-center mb-2 p-2 d-flex flex-column rounded-3"
        :to="`/game/${url}`">
        <h2 class="fs-5 fw-bold m-0">{{ name }}</h2>
        <h6 class="fw-bold m-0" :style="{ 'color': name === 'PRACTICE' ? 'yellow' : 'white' }">{{ `YOUR BEST: ${score}` }}
        </h6>
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-star-fill"
            viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
    name: String,
    score: String,
    url: String,
    color: String
});
</script>

<style scoped>
a {
    background-color: #31393b;
    width: 100%;
    max-width: 500px;
}

svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 7px;
    color: yellow;
}

.category {
    box-shadow: 3px 3px 4px #000000;
}

h2 {
    word-spacing: 10px;
    line-height: 1.3;
}

h6 {
    font-size: 11px;
}
</style>