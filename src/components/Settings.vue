<template>
    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="staticBackdropLabel">Settings</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="questions based on?" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Dictate what should happen when timer reaches 0" class="d-block fw-bold form-label">
                            Countdown timer
                        </label>
                        <div class="form-check form-check-inline">
                            <input @click="handleTimeDep('new question')" class="form-check-input"
                                :checked="formData.time.dependency === 'new question'" type="radio" name="time"
                                value="new question">
                            <label class="form-check-label" for="new question">New question</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input @click="handleTimeDep('end game')" class="form-check-input"
                                :checked="formData.question.time === 'end game'" type="radio" name="time"
                                value="end game">
                            <label class="form-check-label" for="end game">End game</label>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="number of questions" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Length of time is dependent on the countdown timer settings; New question(seconds), End game(min)"
                            class="form-label">
                            <span class="fw-bold">Time: </span>
                            <span>
                                {{ formData.time.number }}
                                {{ formData.time.dependency === 'new question' ? " Sec" : " Min" }}
                            </span>
                        </label>
                        <input v-if="formData.time.dependency === 'end game'" type="range" :value="formData.time.number"
                            @click="handleTimeNum" class="form-range" min="1" max="5" step="1">
                        <input v-else type="range" :value="formData.time.number" @click="handleTimeNum"
                            class="form-range" min="10" max="30" step="1">
                    </div>
                    <div class="mb-3">
                        <label for="questions based on?" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Set questions based on your age or level of education you are in school"
                            class="fw-bold d-block form-label">Questions should be based on
                            your?</label>
                        <div class="form-check form-check-inline">
                            <input @click="handleQuestionDep('age')" :checked="formData.question.dependency === 'age'"
                                class="form-check-input" type="radio" name="question" value="age">
                            <label class="form-check-label" for="age">Age</label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input @click="handleQuestionDep('class')"
                                :checked="formData.question.dependency === 'class'" class="form-check-input"
                                type="radio" name="question" value="class">
                            <label class="form-check-label" for="class">Class</label>
                        </div>
                    </div>
                    <Transition name="slide-fade">
                        <div v-show="formData.time.dependency === 'new question'" class="mb-3">
                            <label for="number of questions" data-bs-toggle="tooltip" data-bs-placement="right"
                                title="Select the number of questions below within the range of 10 - 30 questions"
                                class="form-label"><span class="fw-bold">Number of questions: </span>
                                <span>{{ formData.question.number }}</span>
                            </label>
                            <input type="range" :value="formData.question.number" @click="handleQuestionNum"
                                class="form-range" min="10" max="30" step="1">
                        </div>
                    </Transition>
                    <div class="form-check form-switch d-flex ps-0">
                        <label for="number of questions" data-bs-toggle="tooltip" data-bs-placement="right"
                            title="Music and sound effects settings" class="form-label fw-bold me-5">
                            Sound:
                        </label>
                        <input class="form-check-input" name="checkbox" type="checkbox" role="switch"
                            :checked="formData.sound" @click="formData.sound = !formData.sound">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    <button type="button" @click="save" class="btn btn-success">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
    question: {
        dependency: "age",
        number: "10"
    },
    time: {
        dependency: "new question",
        number: "10"
    },
    sound: false
});

function handleQuestionDep(val) {
    formData.value.question.dependency = val;
}
function handleQuestionNum(e) {
    formData.value.question.number = e.target.value;
}
function handleTimeDep(val) {
    formData.value.time.dependency = val;
    if (formData.value.time.dependency === 'end game') {
        formData.value.time.number = 1;
    } else {
        formData.value.time.number = 10;
    }
}
function handleTimeNum(e) {
    formData.value.time.number = e.target.value;
}
function save() {
    console.log(formData.value);
}
</script>

<style scoped>
.form-check-input[type=radio] {
    border-width: 2px !important;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>