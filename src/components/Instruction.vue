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
</style>