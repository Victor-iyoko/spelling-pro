<template>
    <div role="button" class="p-3 p-lg-4 pt-lg-4 d-flex gap-2 flex-column align-items-center w-100 h-100">
        <h6 class="user-select-none fs-2 fw-lighter mb-4">RULES</h6>
        <Instruction color="blue" :title="instruction[0][0]" />
        <Instruction color="#ea3556" :title="instruction[0][1]" />
        <Instruction color="green"
            :title="instruction[0][2] ||
            `${settings.data.time.dependency === 'end game' ? 'INFINTE' : settings.data.question.number} ROUNDS + ${settings.data.lifes} LIFES`" />
    </div>
</template>

<script setup>
import instructionsArr from '../data/instructions.js';
import Instruction from './Instruction.vue';
import { useRoute } from 'vue-router';
import { useSettingsStore } from '../stores/settings';
import { ref } from 'vue';

const instruction = ref(null);
const settings = useSettingsStore();

instruction.value = instructionsArr.filter((item, index) => {
    return Number(useRoute().params.id) - 1 === index;
});

</script>