<template>
    <div class="d-flex justify-content-between align-items-center mb-2 w-100">
        <span class="d-flex align-items-center opacity-0 user-select-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check-lg"
                viewBox="0 0 16 16">
                <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
            </svg>
        </span>
        <span class="option fs-2 user-select-none" :style="{ color: color }">{{ title }}</span>
        <span class="d-flex align-items-center ms-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-check-lg"
                viewBox="0 0 16 16">
                <path
                    d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
            </svg>
        </span>
    </div>
</template>

<script setup>

const props = defineProps({
    title: String,
    color: String
})

</script>

<style scoped>
div {
    letter-spacing: 2px;
}

.option {
    cursor: pointer;
}
</style>