<template>
    <p :style="{ color: color }" class="fs-5 fw-bold text-center">{{ title }}</p>
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