<template>
    <p :style="{ color: color }" class="user-select-none fs-4 fw-bold text-center">{{ title }}</p>
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
    letter-spacing: 1px;
}
</style>