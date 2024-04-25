<template>
    <Hud />
    <CountDown />
    <Board>
        <Transition mode="out-in">
            <Instructions @click="loadQuestions = true"
                v-if="!loadQuestions && !game.start && game.questions.length === 0 && !game.game0ver" />
            <LoadingQuestions
                v-else-if="loadQuestions && !game.start && game.questions.length === 0 && !game.game0ver" />
            <div class="d-flex justify-content-center w-100 h-100 p-3"
                v-else-if="loadQuestions && game.questions.length > 0 && game.start && !game.game0ver">
                <SelectOne
                    v-if="gameMode === 'one-word-two-forms' || gameMode === 'find-correct' || gameMode === 'find-misspelled'" />
                <Decide v-else-if="gameMode === 'decide' || gameMode === 'decide-and-correct'" />
                <WhichLetter v-else-if="gameMode === 'which-letter'" />
                <MultipleChoice v-else-if="gameMode === 'multiple-choice'" />
                <Spell v-else-if="gameMode === 'spell-it'" />
                <h3 v-else>IT DOES NOT EXIST</h3>
            </div>
            <GameOver v-else />
        </Transition>
    </Board>
    <h3 id="tap-board" :class="[!loadQuestions ? 'tap' : 'opacity-0']"
        class="text-shadow mx-auto text-center fw-bold text-white mt-2 mt-xl-4 mb-1 mb-xl-3 fs-3">TAP THE BOARD
    </h3>
</template>

<script setup>
import Board from '../components/Board.vue';
import Hud from '../components/Hud.vue';
import Instructions from '../components/Instructions.vue';
import LoadingQuestions from '../components/LoadingQuestions.vue';
import GameOver from '../components/GameOver.vue';
import SelectOne from '../components/games/SelectOne.vue';
import Decide from '../components/games/Decide.vue';
import WhichLetter from '../components/games/WhichLetter.vue';
import MultipleChoice from '../components/games/MultipleChoice.vue';
import Spell from '../components/games/Spell.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import { useGameStore } from '../stores/game';
import { useSettingsStore } from '../stores/settings';
import CountDown from '../components/CountDown.vue';

let game = useGameStore();
let settings = useSettingsStore();
const gameMode = useRoute().params.category;
const loadQuestions = ref(false);

function setLifes() {
    let lifes = [];
    for (let i = 1; i <= settings.data.lifes; i++) {
        lifes.push({ id: i, alive: true });
    }
    game.$state = {
        lifesArr: lifes,
        lifes: settings.data.lifes,
        questionAns: 0,
        score: 0,
        mode: gameMode,
        maxQuestion: settings.data.question.number
    };
}

onMounted(() => {
    setLifes();
});
onBeforeUnmount(() => {
    game.reset();
});
</script>

<style scoped>
h2 {
    color: rgb(59, 255, 0);
}

div {
    font-family: 'PermanentMarker-Regular', Arial, Helvetica, sans-serif;
}

@keyframes show {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

h2.time {
    animation: show 1s ease-in 1;
}
</style>