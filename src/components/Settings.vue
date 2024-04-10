<template>
    <!-- Modal -->
    <div class="modal fade user-select-none" id="settings" data-bs-backdrop="static" data-bs-keyboard="false"
        tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title fw-bold" id="staticBackdropLabel" style="color: #773516">Settings</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="questions based on?" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Set questions based on your age or level of education you are in school"
                            class="fw-bold d-block form-label">Questions should be based on
                            your?</label>
                        <div class="form-check form-check-inline">
                            <input @click="handleSettings('question', 'age')"
                                :checked="settings.$state.question.dependency === 'age'" class="form-check-input"
                                type="radio" name="question" value="age">
                            <label class="form-check-label" for="age">Age</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input @click="handleSettings('question', 'class')"
                                :checked="settings.$state.question.dependency === 'class'" class="form-check-input"
                                type="radio" name="question" value="class">
                            <label class="form-check-label" for="class">Class</label>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="number of questions" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Select the age or grade you belong to" class="form-label">
                            <Transition mode="out-in">
                                <span class="fw-bold" v-if="settings.$state.question.dependency === 'class'">
                                    Class:
                                </span>
                                <span class="fw-bold" v-else>
                                    Age:
                                </span>
                            </Transition>
                            <Transition mode="out-in">
                                <span v-if="settings.$state.question.dependency === 'class'">
                                    {{ " Grade " + settings.$state.class }}
                                </span>
                                <span v-else>
                                    {{ " " + settings.$state.age + " years" }}
                                </span>
                            </Transition>
                        </label>
                        <Transition mode="out-in">
                            <input v-if="settings.$state.question.dependency === 'class'" type="range"
                                :value="settings.$state.class"
                                @click="(e) => { handleSettings('class', e.target.value) }" class="form-range" min="1"
                                max="12" step="1">
                            <input v-else type="range" :value="settings.$state.age"
                                @click="(e) => { handleSettings('age', e.target.value) }" class="form-range" min="7"
                                max="20" step="1">
                        </Transition>
                    </div>
                    <div class="mb-3">
                        <label for="questions based on?" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Dictate what should happen when timer reaches 0" class="d-block fw-bold form-label">
                            Countdown timer
                        </label>
                        <div class="form-check form-check-inline">
                            <input @click="handleSettings('time', 'new question')" class="form-check-input"
                                :checked="settings.$state.time.dependency === 'new question'" type="radio" name="time"
                                value="new question">
                            <label class="form-check-label" for="new question">New question</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input @click="handleSettings('time', 'end game')" class="form-check-input"
                                :checked="settings.$state.time.dependency === 'end game'" type="radio" name="time"
                                value="end game">
                            <label class="form-check-label" for="end game">End game</label>
                        </div>
                    </div>
                    <Transition>
                        <div v-show="settings.$state.time.dependency === 'new question'" class="mb-3">
                            <label for="number of questions" data-bs-toggle="tooltip" data-bs-placement="right"
                                title="Select the number of questions below within the range of 10 - 30 questions"
                                class="form-label"><span class="fw-bold">Number of questions: </span>
                                <span>{{ settings.$state.question.number }}</span>
                            </label>
                            <input type="range" :value="settings.$state.question.number"
                                @click="(e) => { handleSettings('question', e.target.value) }" class="form-range"
                                min="10" max="30" step="1">
                        </div>
                    </Transition>
                    <div class="mb-3">
                        <label for="time" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Length of time is dependent on the countdown timer settings; New question(seconds), End game(min)"
                            class="form-label">
                            <span class="fw-bold">Time: </span>
                            <span>
                                {{ settings.$state.time.number }}
                                {{ settings.$state.time.dependency === 'new question' ? " Sec" : " Min" }}
                            </span>
                        </label>
                        <input v-if="settings.$state.time.dependency === 'end game'" type="range"
                            :value="settings.$state.time.number"
                            @click="(e) => { handleSettings('time', e.target.value) }" class="form-range" min="1"
                            max="5" step="1">
                        <input v-else type="range" :value="settings.$state.time.number"
                            @click="(e) => { handleSettings('time', e.target.value) }" class="form-range" min="10"
                            max="30" step="1">
                    </div>
                    <div class="mb-3">
                        <label for="lifes" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="The number of attempts before game over" class="form-label">
                            <span class="fw-bold">Lifes: </span>
                            <span>
                                {{ settings.$state.lifes }}
                            </span>
                        </label>
                        <input type="range" :value="settings.$state.lifes"
                            @click="(e) => { handleSettings('lifes', e.target.value) }" class="form-range" min="1"
                            max="7" step="1">
                    </div>
                    <div class="form-check form-switch d-flex ps-0">
                        <label for="number of questions" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Music and sound effects settings" class="form-label fw-bold me-5">
                            Sound:
                        </label>
                        <input class="form-check-input" name="checkbox" type="checkbox" role="switch"
                            :checked="settings.$state.sound" @click="handleSettings('sound', !settings.$state.sound)">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useSettingsStore } from '../stores/settings';

let settings = useSettingsStore();

function handleSettings(key, val) {
    if (key === 'question' || key === 'time') {
        ['new question', 'end game', 'age', 'class'].includes(val) ? settings.$state[key].dependency = val : settings.$state[key].number = Number(val);

        if (['new question', 'end game'].includes(val)) {
            val === 'end game' ? settings.$state.time.number = 1 : settings.$state.time.number = 10;
        }
    } else {
        key === 'sound' ? settings.$state[key] = val : settings.$state[key] = Number(val);
    }
    localStorage.setItem("settings", JSON.stringify(settings.$state));
}
</script>

<style scoped>
.form-check-input[type=radio],
.form-check-input[type=checkbox] {
    border-width: 2px;
    border-color: #7735168a;
}

.form-check-input:checked {
    background-color: #773516;
    border-color: #773516;
}

input[type=radio]:focus,
input[type=checkbox]:focus {
    box-shadow: none;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
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