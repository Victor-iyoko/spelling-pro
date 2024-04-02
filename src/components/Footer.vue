<template>
    <div style="width: 80%; max-width: 500px;"
        class="mt-3 w-100 d-flex ms-auto me-auto align-items-center justify-content-between">
        <svg xmlns="http://www.w3.org/2000/svg" style="color: yellow" width="30" height="30" fill="currentColor"
            class="bi bi-star-fill m-2 settings" viewBox="0 0 16 16">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg>
        <div id="overall" class="pb-1 fs-4 fw-bold  text-light border-bottom border-3">OVERALL: {{ score }}</div>
        <svg xmlns="http://www.w3.org/2000/svg" style="color: rgb(59, 255, 0)" width="35" height="35"
            fill="currentColor" class="bi bi-check2 m-2" viewBox="0 0 16 16">
            <path
                d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
        </svg>
    </div>
</template>

<script setup>
const props = defineProps({
    score: String
});
</script>

<style scoped>
#overall {
    border-color: rgb(59, 255, 0) !important;
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes size-change {
    0% {
        transform: scale(1.0);
    }

    100% {
        transform: scale(1.5);
    }
}

.bi-star-fill {
    animation: rotate 3s infinite;
}

.bi-check2 {
    animation: size-change 0.7s infinite alternate;
}
</style>