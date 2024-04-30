<template>
    <Transition @before-enter="beforeEnter" @after-enter="afterEnter" name="scale" class="scale" mode="out-in">
        <div @click="toggleWordPage" id="word-page" v-if="wordPage" class="w-100" role="button">
            <h3 class="fs-3 ls-1 my-5 user-select-none text-center">Remember Word</h3>
            <h2 class="fs-1 ls-2 text-center text-danger ">{{ game.questions[game.currentQuestIndex].word }}</h2>
        </div>
        <div v-else class="w-100">
            <h3 class="fs-2 my-2 user-select-none text-center">
                {{ `the ${game.questions[game.currentQuestIndex].position} letter is?` }}
            </h3>
            <div id="letter-options" class="px-2 px-md-5 mt-2 text-center">
                <span v-for="letter in letters"
                    class="fs-3 mx-auto bg-primary rounded-circle text-white d-flex justify-content-center align-items-center"
                    @click="(e) => checkMatch(e, { mode: game.mode, isAnswer: game.isAnswer, handleClick: game.handleClick }, false)"
                    role="button">
                    {{ letter }}
                </span>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';
import { useGameStore } from '../../stores/game';
import checkMatch from '../../functions';

const game = useGameStore();
const wordPage = ref(true);
const transitioning = ref(false);
const tap = document.getElementById('tap-board');

const letters = ref([
    "Q", "W", "E", "R", "T", "Y", "U", "I",
    "O", "P", "A", "S", "D", "F", "G", "H",
    "J", "K", "L", "Z", "X", "C", "V", "B",
    "N", "M"
].sort(() => Math.random() - 0.5));

function toggleWordPage(e) {
    if (!transitioning.value) {
        wordPage.value = !wordPage.value;
        if (!wordPage.value) {
            document.getElementById('word-page').classList.add('pe-none');
        } else {
            document.getElementById('letter-options').classList.add('pe-none');
        }
        tap.classList.toggle('opacity-0');
        tap.classList.toggle('tap');
    }
    if (!transitioning.value && e.detail.reset && !wordPage.value) {
        document.getElementById('word-page').classList.remove('pe-none');

        tap.classList.toggle('opacity-0');
        tap.classList.toggle('tap');
    }
}
// sort letters array and switch pages on question change
watch(() => game.currentQuestIndex, (newIndex, oldIndex) => {
    if (newIndex > oldIndex) {
        wordPage.value = true;
        letters.value.sort(() => Math.random() - 0.5);
    }
});

function beforeEnter() {
    transitioning.value = true;
    console.log("started transition", transitioning.value);
}
function afterEnter() {
    transitioning.value = false;
    console.log("ended transition", transitioning.value);
}

onMounted(() => {
    // show tap board instruction
    tap.classList.toggle('opacity-0');
    tap.classList.toggle('tap');

    // Start the countdown timer
    game.startCountDown();
    game.questionAns++;
    document.addEventListener('showWordPage', toggleWordPage);
});
onBeforeUnmount(() => {
    // Cleanup: stop the timer when the component is destroyed
    game.clearCountDown();

    // remove the event listener
    document.removeEventListener('showWordPage', toggleWordPage);
});
</script>

<style scoped>
h3 {
    line-height: 2;
}

h2 {
    letter-spacing: 2px;
    line-height: 1.5;
}

#letter-options {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
}

span {
    width: 50px;
    height: 50px;
    transition: all .5s ease-in-out;
}

span:hover {
    opacity: 0.6;
}
</style>