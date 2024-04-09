<template>
    <div class="p-3 p-lg-4 pt-lg-4 d-flex gap-2 flex-column align-items-center w-100 h-100">
        <h6 class="user-select-none fs-2 fw-lighter mb-4">RULES</h6>
        <Instruction color="blue" :title="instruction[0][0]" />
        <Instruction color="#ea3556" :title="instruction[0][1]" />
        <Instruction color="green" :title="instruction[0][2] || '15 ROUNDS + 5 LIVES'" />
    </div>
</template>

<script setup>
import instructionsArr from '../data/instructions.js';
import Instruction from './Instruction.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const instruction = ref(null);

instruction.value = instructionsArr.filter((item, index) => {
    return Number(useRoute().params.id) - 1 === index;
});

</script>

<style scoped></style>