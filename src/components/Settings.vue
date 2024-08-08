<template>
    <!-- Modal -->
    <div class="modal fade user-select-none" id="settings" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header text-light py-1" :class="inRoom ? 'bg-secondarybg' : 'bg-brown-dark'">
                    <!-- <h5 class="modal-title fw-bold" id="staticBackdropLabel">Settings</h5> -->
                    <Title :title="inRoom ? 'Create     room' : 'Settings'" :small="true" />
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                        class="bi bi-x text-light ms-auto" role="button" data-bs-dismiss="modal" aria-label="Close"
                        viewBox="0 0 16 16">
                        <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                    </svg>
                </div>
                <div class="modal-body">
                    <div v-if="inRoom" class="mb-3">
                        <label v-tooltip for="game type" data-bs-placement="right" data-bs-toggle="tooltip"
                            title="select your game type?" class="fw-bold form-label mb-1">Game type?</label>
                        <select class="form-select" aria-label="game type">
                            <option selected value="1">One word two forms</option>
                            <option value="2">Find correct</option>
                            <option value="3">Find misspelled</option>
                            <option value="4">Decide</option>
                            <option value="5">Decide and correct</option>
                            <option value="6">Which letter</option>
                            <option value="7">Multiple choices</option>
                            <option value="8">Spell it</option>
                        </select>
                    </div>
                    <div v-if="inRoom" class="mb-3 form-check form-switch d-flex ps-0">
                        <label v-tooltip for="ranked match" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="play a ranked match?" class="form-label fw-bold me-5">
                            Ranked Match:
                        </label>
                        <input class="form-check-input" name="checkbox" type="checkbox" :checked="true" role="switch"
                            @click="">
                    </div>
                    <div v-if="inRoom" class="mb-3">
                        <label v-tooltip for="max players" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Select max players" class="form-label mb-1">
                            <span class="fw-bold">
                                Max No of players:
                            </span>
                            <span>
                                4
                            </span>
                        </label>
                        <input type="range" :value="settings.data.age" class="form-range" min="2" max="4" step="1">
                    </div>
                    <div class="mb-3">
                        <label v-tooltip for="questions based on?" data-bs-placement="right" data-bs-toggle="tooltip"
                            title="Customize the words shown" class="fw-bold form-label mb-1">Questions should be based
                            on
                            your?</label>
                        <div class="flex">
                            <div class="form-check form-check-inline">
                                <input @click="settings.handleSettings('question', 'age')"
                                    :checked="settings.data.question.dependency === 'age'" class="form-check-input"
                                    type="radio" name="question" value="age">
                                <label class="form-check-label" for="age">Age</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input @click="settings.handleSettings('question', 'class')"
                                    :checked="settings.data.question.dependency === 'class'" class="form-check-input"
                                    type="radio" name="question" value="class">
                                <label class="form-check-label" for="class">Class</label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label v-tooltip for="number of questions" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Select your age or grade" class="form-label mb-1">
                            <Transition mode="out-in">
                                <span class="fw-bold" v-if="settings.data.question.dependency === 'class'">
                                    Class:
                                </span>
                                <span class="fw-bold" v-else>
                                    Age:
                                </span>
                            </Transition>
                            <Transition mode="out-in">
                                <span v-if="settings.data.question.dependency === 'class'">
                                    {{ " Grade " + settings.data.class }}
                                </span>
                                <span v-else>
                                    {{ " " + settings.data.age + " years" }}
                                </span>
                            </Transition>
                        </label>
                        <Transition mode="out-in">
                            <input v-if="settings.data.question.dependency === 'class'" type="range"
                                :value="settings.data.class"
                                @click="(e) => { settings.handleSettings('class', e.target.value) }" class="form-range"
                                min="1" max="12" step="1">
                            <input v-else type="range" :value="settings.data.age"
                                @click="(e) => { settings.handleSettings('age', e.target.value) }" class="form-range"
                                min="7" max="20" step="1">
                        </Transition>
                    </div>
                    <div class="mb-3">
                        <label v-tooltip for="questions based on?" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="What happens when time ends" class="fw-bold form-label mb-1">
                            Countdown timer
                        </label>
                        <div class="d-flex">
                            <div class="form-check form-check-inline">
                                <input @click="settings.handleSettings('time', 'new question')" class="form-check-input"
                                    :checked="settings.data.time.dependency === 'new question'" type="radio" name="time"
                                    value="new question">
                                <label class="form-check-label" for="new question">New question</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input @click="settings.handleSettings('time', 'end game')" class="form-check-input"
                                    :checked="settings.data.time.dependency === 'end game'" type="radio" name="time"
                                    value="end game">
                                <label class="form-check-label" for="end game">End game</label>
                            </div>
                        </div>
                    </div>
                    <Transition>
                        <div v-show="settings.data.time.dependency === 'new question'" class="mb-3">
                            <label v-tooltip for="number of questions" data-bs-toggle="tooltip"
                                data-bs-placement="right" title="Select the number of questions"
                                class="form-label mb-1"><span class="fw-bold">Number of questions: </span>
                                <span>{{ settings.data.question.number }}</span>
                            </label>
                            <input type="range" :value="settings.data.question.number"
                                @click="(e) => { settings.handleSettings('question', e.target.value) }"
                                class="form-range" min="10" max="30" step="1">
                        </div>
                    </Transition>
                    <div class="mb-3">
                        <label v-tooltip for="time" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Time in (s) or (min)" class="form-label mb-1">
                            <span class="fw-bold">Time: </span>
                            <span>
                                {{ settings.data.time.number }}
                                {{ settings.data.time.dependency === 'new question' ? " Sec" : " Min" }}
                            </span>
                        </label>
                        <input v-if="settings.data.time.dependency === 'end game'" type="range"
                            :value="settings.data.time.number"
                            @click="(e) => { settings.handleSettings('time', e.target.value) }" class="form-range"
                            min="1" max="5" step="1">
                        <input v-else type="range" :value="settings.data.time.number"
                            @click="(e) => { settings.handleSettings('time', e.target.value) }" class="form-range"
                            min="10" max="30" step="1">
                    </div>
                    <div class="mb-3">
                        <label v-tooltip for="lifes" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Select number of attempts" class="form-label mb-1">
                            <span class="fw-bold">Lifes: </span>
                            <span>
                                {{ settings.data.lifes }}
                            </span>
                        </label>
                        <input type="range" :value="settings.data.lifes"
                            @click="(e) => { settings.handleSettings('lifes', e.target.value) }" class="form-range"
                            min="1" max="7" step="1">
                    </div>
                    <div v-if="!inRoom" class="form-check form-switch d-flex ps-0">
                        <label v-tooltip for="number of questions" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Toggle music and sound" class="form-label fw-bold me-5">
                            Sound:
                        </label>
                        <input class="form-check-input" name="checkbox" type="checkbox" role="switch"
                            :checked="settings.data.sound"
                            @click="settings.handleSettings('sound', !settings.data.sound)">
                    </div>
                </div>
                <div v-if="inRoom" class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button @click="multiPlayer.inRoom = true" data-bs-dismiss="modal" type="button"
                        class="btn btn-success">Done</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useSettingsStore } from '../stores/settings';
import tooltip from '../directives/tooltip';
import Title from './Title.vue';
import { useMultiPlayerStore } from '../stores/multiplayer';
// import { Tooltip } from 'bootstrap/dist/js/bootstrap.esm.min.js';

const props = defineProps({
    inRoom: Boolean
});

const multiPlayer = useMultiPlayerStore();

let settings = useSettingsStore();

const vTooltip = tooltip;
</script>

<style scoped>
/* .modal {
    z-index: 100 !important;
} */

label {
    color: #31393b;
}

.form-check-input[type=radio],
.form-check-input[type=checkbox] {
    border-width: 2px;
    border-color: #7735168a;
}

.form-check-input:checked {
    background-color: #773516;
    /* border-color: #773516; */
}

.form-select:focus {
    border-color: #773516;
}

*::-webkit-scrollbar {
    background-color: #fff;
}

input[type=radio]:focus,
input[type=checkbox]:focus {
    box-shadow: none;
}

input[type="range"]::-webkit-slider-runnable-track {
    background: #77351633;
}

/******** Firefox ********/
input[type="range"]::-moz-range-track {
    background: #77351633;
}

input[type="range"]:focus::-webkit-slider-thumb {
    box-shadow: none;
}

input[type="range"]::-webkit-slider-thumb {
    background-color: #773516;
}

/***** Thumb Styles *****/
/***** Firefox *****/
input[type="range"]::-moz-range-thumb {
    background-color: #773516;
}
</style>