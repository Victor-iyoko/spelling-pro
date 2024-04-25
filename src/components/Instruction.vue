<template>
    <p :style="{ color: color }" class="ls-1 user-select-none fs-4 fw-bold text-center">{{ title }}</p>
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
</style>