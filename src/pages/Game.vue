<template>
    <Hud />
    <h2 class="time user-select-none text-shadow text-center display-6 fw-bold my-2 my-xl-3">30</h2>
    <Board>
        <Transition mode="out-in">
            <Instructions @click="loadQuestions = true"
                v-if="loadQuestions === false && game.start === false && game.questions.length === 0" />
            <LoadingQuestions
                v-else-if="loadQuestions === true && game.start === false && game.questions.length === 0" />
            <div class="d-flex justify-content-center w-100 h-100"
                v-else-if="loadQuestions === true && game.questions.length > 0 && game.start === true">
                <SelectOne
                    v-if="gameMode === 'one-word-two-forms' || gameMode === 'find-correct' || gameMode === 'find-misspelled'" />
                <Decide v-else-if="gameMode === 'decide' || gameMode === 'decide-and-correct'" />
                <WhichLetter v-else-if="gameMode === 'which-letter'" />
                <MultipleChoice v-else-if="gameMode === 'multiple-choice'" />
                <Spell v-else-if="gameMode === 'spell-it'" />
                <h2 v-else>IT DOES NOT EXIST</h2>
            </div>
        </Transition>
    </Board>
    <h3 :class="[!loadQuestions ? 'tap' : 'opacity-0']"
        class="text-shadow mx-auto text-center fw-bold text-white mt-2 mt-xl-4 mb-1 mb-xl-3 fs-3">TAP THE BOARD
    </h3>
</template>

<script setup>
import Board from '../components/Board.vue';
import Hud from '../components/Hud.vue';
import Instructions from '../components/Instructions.vue';
import LoadingQuestions from '../components/LoadingQuestions.vue';
import SelectOne from '../components/games/SelectOne.vue';
import Decide from '../components/games/Decide.vue';
import WhichLetter from '../components/games/WhichLetter.vue';
import MultipleChoice from '../components/games/MultipleChoice.vue';
import Spell from '../components/games/Spell.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useGameStore } from '../stores/game';
import { useSettingsStore } from '../stores/settings';
import { gameDefault } from '../data/default';

let game = useGameStore();
let settings = useSettingsStore();
const gameMode = useRoute().params.category;
const loadQuestions = ref(false);

onMounted(() => {
    game.$state = { lifes: settings.data.lifes, questionAns: 0, score: 0 };
    console.log(game.$state);
});
onUnmounted(() => {
    game.$state = { ...gameDefault };
});
</script>

<style scoped>
.time {
    color: rgb(59, 255, 0);
}

div {
    font-family: 'PermanentMarker-Regular';
}

@keyframes blink {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.tap {
    animation-name: blink;
    animation-duration: 450ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}

.v-enter-active,
.v-leave-active {
    transition: opacity .7s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>