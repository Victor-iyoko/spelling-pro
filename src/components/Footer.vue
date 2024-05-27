<template>
    <div style="width: 80%; max-width: 500px;"
        class="mt-2 w-100 d-flex ms-auto me-auto align-items-center justify-content-between ff-moresugar-thin">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
            class="bi bi-gear m-2 text-light" data-bs-toggle="modal" data-bs-target="#settings" role="button"
            viewBox="0 0 16 16">
            <path
                d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z" />

        </svg>
        <div id="overall" class="text-shadow pb-1 fs-4 fw-bold ls-1 text-light border-bottom border-3">OVERALL: {{ score
            }}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor"
            class="bi bi-check-lg text-light" data-bs-toggle="modal" data-bs-target="#about" role="button"
            viewBox="0 0 16 16">
            <path
                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
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
        transform: scale(1.2);
    }
}

.bi-gear {
    animation: rotate 1.8s infinite alternate;
}

.bi-check-lg {
    animation: size-change 0.7s infinite alternate;
}
</style>