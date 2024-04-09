<template>
    <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <div class="spinner-border text-dark" role="status"></div>
        <h2 class="fs-3 mt-2 text-center">Fetching words from chatgpt...</h2>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

const emit = defineEmits(['loadQuestions']);

onMounted(() => {
    setTimeout(() => {
        // console.log(props.questions);
        emit('loadQuestions', [
            {
                options: ["PLAGUE", "PLAGE"],
                answer: "PLAGUE"
            },
            {
                options: ["RYTHM", "RITHM"],
                answer: "RYTHM"
            },
            {
                options: ["EXPECT", "ESPECT"],
                answer: "EXPECT"
            },
            {
                options: ["CATARRH", "CARTARH"],
                answer: "CATARRH"
            },
            {
                options: ["PESSIMISTIC", "PESIMISTIC"],
                answer: "PESSIMISTIC"
            },
            {
                options: ["CONCRATE", "CONCRETE"],
                answer: "CONCRETE"
            },
            {
                options: ["PIACE", "PLACE"],
                answer: "PLACE"
            },
            {
                options: ["SPOILT", "SOILT"],
                answer: "SPOILT"
            },
            {
                options: ["FLANGE", "FLANJE"],
                answer: "FLANGE"
            },
            {
                options: ["SORY", "SORRY"],
                answer: "SORRY"
            },
            {
                options: ["CLAY", "CLEY"],
                answer: "CLAY"
            }
        ]);
    }, 3000);
});
</script>

<style scoped></style>