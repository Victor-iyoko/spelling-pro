<template>
    <p :style="{ color: color }" class="fs-4 text-center">{{ title }}</p>
</template>

<script setup>
const props = defineProps({
    title: String,
    color: String,
});
</script>

<style scoped>
p {
    width: 90%;
}

@media (max-width: 991px) {
    p {
        font-size: 22px !important;
    }
}

@media (max-width: 576px) {
    p {
        font-size: 20px !important;
    }
}

@media (max-width: 450px) {
    p {
        font-size: 18px !important;
    }
}
</style>