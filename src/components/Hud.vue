<template>
    <header @click="reduce"
        class="bg-white p-1 p-md-2 d-flex justify-content-between align-items-center user-select-none">
        <div class="d-flex justify-content-between align-items-center">
            <RouterLink to="/" class="me-auto">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                    class="bi bi-x text-dark" viewBox="0 0 16 16">
                    <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
            </RouterLink>
            <span v-show="game.start" class="fs-4">
                {{ `1 / ${settings.data.time.dependency === 'end game' ? '∞' :
        settings.data.question.number}` }}
            </span>
        </div>
        <Transition name="scale" mode="out-in" class="scale">
            <div v-if="game.start" class="position-relative">
                <div class="position-absolute d-flex">
                    <svg v-for=" heart  in  heartsArr " xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                        fill="currentColor" class="bi bi-heart-fill pe-1 text-danger pe-none"
                        :class="{ 'destroy': storeLife === heart.id - 1, 'opacity-0': heart.alive === false }"
                        viewBox="0 0 16 16">
                        <path v-if="storeLife === heart.id - 1"
                            d="M8.931.586 7 3l1.5 4-2 3L8 15C22.534 5.396 13.757-2.21 8.931.586M7.358.77 5.5 3 7 7l-1.5 3 1.815 4.537C-6.533 4.96 2.685-2.467 7.358.77" />
                        <path v-else fill-rule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314" />
                    </svg>
                </div>
                <div class="position-absolute d-flex">
                    <svg v-for=" heart  in  heartsArr " xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                        fill="currentColor" class="bi bi-heart pe-1 text-danger pe-none" viewBox="0 0 16 16">
                        <path
                            d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                </div>
            </div>
            <h1 v-else class="fs-4 m-0 text-dark user-select-none">HOW TO PLAY</h1>
        </Transition>
        <div class="d-flex justify-content-between align-items-center">
            <Transition><span v-show="game.start" class="fs-4">100</span></Transition>

            <svg @click="settings.handleSettings('sound', !settings.data.sound)" xmlns="http://www.w3.org/2000/svg"
                width="40" height="40" fill="currentColor" class="bi bi-volume-up text-dark ms-auto"
                viewBox="0 0 16 16">
                <template v-if="settings.data.sound">
                    <path
                        d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
                    <path
                        d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
                    <path
                        d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11" />
                </template>
                <path v-else
                    d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06M6 5.04 4.312 6.39A.5.5 0 0 1 4 6.5H2v3h2a.5.5 0 0 1 .312.11L6 10.96zm7.854.606a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0" />
            </svg>
        </div>
    </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted } from 'vue';
import { useSettingsStore } from '../stores/settings';
import { useGameStore } from '../stores/game';

let settings = useSettingsStore();
let game = useGameStore();
const heartsArr = ref([]);
const storeLife = ref(settings.data.lifes);

function reduce() {
    storeLife.value--;
    if (storeLife.value >= 0) {
        setTimeout(() => {
            heartsArr.value[storeLife.value].alive = false;
        }, 100);
    }
}

onMounted(() => {
    for (let index = 1; index <= settings.data.lifes; index++) {
        heartsArr.value.push({ id: index, alive: true });
    }
});
</script>

<style scoped>
.bi {
    transition: color .2s ease-in-out !important;
    cursor: pointer;
}

.bi:hover {
    color: rgb(87, 82, 82) !important;
}

.d-flex .justify-content-between {
    /* width: 10% !important; */
    flex: 0.2;
    max-width: 150px;
}

@keyframes destroy {
    0% {
        transform: translateY(0) rotate(0);
        opacity: 1;
    }

    100% {
        transform: translateY(30px) rotate(60deg);
        opacity: 0;
    }
}

.destroy {
    animation: destroy 1.5s ease;
}

.position-absolute {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>