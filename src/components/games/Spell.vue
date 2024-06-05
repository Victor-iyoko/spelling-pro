<template>
    <div class="w-100 px-2 px-md-5" id="spell" @keyup="validateInput">
        <h3 class="fs-2 ls-1 my-5 user-select-none text-center" @click="showInput = true">Spell the Word</h3>
        <AudioVisualizer mySource="/ping-82822.mp3" :rotate="rotate" />
        <form @submit.prevent="handleSubmit">
            <input @change="checkInput" v-if="showInput" v-model="inputValue"
                class="form-control form-control-lg text-center fs-1 bg-light-subtle text-uppercase text-primary"
                type="text" placeholder="Type Word Here" aria-label=".form-control-lg example">
            <div v-else id="letters"
                class="d-flex justify-content-center form-control form-control-lg text-center fs-1 bg-light-subtle text-uppercase">
                <div v-for="  letter, i   in   game.questions[game.currentQuestIndex]  " :key="i" class="text-primary">
                    {{ game.questions[game.currentQuestIndex].length > inputValue.length && i > inputValue.length - 1 ?
        "_" : inputValue[i] }}
                    <span class="bg-primary opacity-0">{{ game.questions[game.currentQuestIndex][i] }}</span>
                </div>
                <div v-if="inputValue.length > game.questions[game.currentQuestIndex].length"
                    v-for="  letter, i   in   inputValue.substring(game.questions[game.currentQuestIndex].length)  "
                    :key="game.questions[game.currentQuestIndex].length + i" class="text-primary">
                    {{ letter }}
                    <span class="bg-primary opacity-0"></span>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, watch } from 'vue';
import { useGameStore } from '../../stores/game';
import checkMatch from '../../functions';
import AudioVisualizer from '../AudioVisualizer.vue';

const game = useGameStore();
const inputValue = ref("");
const showInput = ref(true);
const rotate = ref(false);

function handleSubmit(e) {
    showInput.value = false;
    checkMatch(e, { mode: game.mode, input: inputValue.value, word: game.questions[game.currentQuestIndex], isAnswer: game.isAnswer, handleClick: game.handleClick }, false);
}

function validateInput(e) {
    let validString = /[a-zA-Z]/;
    let stringArr = [];
    let arrString = "";
    for (let i = 0; i < inputValue.value.length; i++) {
        if (validString.test(inputValue.value[i])) {
            stringArr.push(inputValue.value[i]);
        }
    }
    for (let i = 0; i < stringArr.length; i++) {
        arrString += stringArr[i];
    }

    inputValue.value = arrString;
}

watch(() => game.currentQuestIndex, (newIndex, oldIndex) => {
    if (newIndex > oldIndex) {
        showInput.value = true;
        inputValue.value = "";
        rotate.value = true;
        setTimeout(() => rotate.value = false, 600);
    }
});

onMounted(() => {
    document.addEventListener('scoreAction', game.handleScore);
    document.addEventListener('timeControl', game.handleTime);

    game.startCountDown();
    game.questionAns++;
});

onBeforeUnmount(() => {
    // Cleanup: stop the timer when the component is destroyed
    game.clearCountDown();

    // remove event listener
    document.removeEventListener('scoreAction', game.handleScore);
    document.removeEventListener('timeControl', game.handleTime);
});
</script>

<style scoped>
input[type=text]:focus,
div {
    box-shadow: none;
    border-width: 0 !important;
}

input[type=text],
div {
    border-width: 0 !important;
    letter-spacing: 8px;
}

input::placeholder {
    letter-spacing: normal;
    color: rgba(0, 0, 255, 0.2);
    font-size: 1.9rem;
}

form>div>div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    /* min-width: 34.9px; */
}

div>span {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: green;
    top: 0;
    right: 50%;
    transform: translate(30%, -100%);
    color: white;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: normal;
}
</style>