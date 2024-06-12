<template>
    <div class="d-flex justify-content-center" :class="small ? 'fw-normal' : 'p-2 pb-0 mb-2 fw-bold'">
        <div class="fs-1 ff-moresugar-regular user-select-none d-flex align-items-center">
            <span v-for="(char, index) in coloredTitle" :key="index" :class="small ? '' : 'pe-1'"
                :style="{ color: getColor(index) }">
                {{ char }}
            </span>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const colors = [
    'rgb(255, 0, 147)',
    'rgb(59, 255, 0)',
    'rgb(0, 194, 255)',
    'rgb(238, 130, 238)',
    'rgb(255, 165, 0)'
];

const props = defineProps({
    title: String,
    small: Boolean
});

function getColor(index) {
    return colors[index % colors.length];
};

const coloredTitle = computed(() => props.title.split(''));

</script>

<style scoped>
span {
    text-shadow: 0 3px 5px #000000;
}
</style>
