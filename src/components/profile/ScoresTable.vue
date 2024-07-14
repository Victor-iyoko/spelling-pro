<template>
    <div class="container mt-6">
        <h3 class="fs-4 mb-3 text-white text-shadow ls-1">
            Ranked Game Scores
        </h3>
        <div
            class="rounded-4 box-shadow-sharp d-flex flex-column justify-content-center align-items-center overflow-hidden">
            <table class="table table-bordered table-dark table-striped mb-0 w-100 h-100"
                :class="isSmallTable ? 'table-sm' : ''">
                <thead>
                    <tr class="border-top-0">
                        <th class="border-start-0" scope="col">#</th>
                        <th class="ls-1" scope="col">Game</th>
                        <th class="ls-1" scope="col">Last Score</th>
                        <th class="border-end-0 ls-1" scope="col">High Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th class="border-start-0" scope="row">1</th>
                        <td class="" :style="{ color: 'yellow' }">one word 2 forms</td>
                        <td class="">234</td>
                        <td class="border-end-0">335</td>
                    </tr>
                    <tr>
                        <th class="border-start-0" scope="row">2</th>
                        <td class="text-pink-dark">find misspelled</td>
                        <td class="">442</td>
                        <td class="border-end-0">134</td>
                    </tr>
                    <tr>
                        <th class="border-start-0" scope="row">3</th>
                        <td class="text-green">find correct</td>
                        <td class="">675</td>
                        <td class="border-end-0">342</td>
                    </tr>
                    <tr>
                        <th class="border-start-0" scope="row">4</th>
                        <td class="text-pink-light">which letter</td>
                        <td class="">645</td>
                        <td class="border-end-0">311</td>
                    </tr>
                    <tr>
                        <th class="border-start-0" scope="row">5</th>
                        <td class="text-yellow">decide</td>
                        <td class="">645</td>
                        <td class="border-end-0">311</td>
                    </tr>
                    <tr>
                        <th class="border-start-0" scope="row">6</th>
                        <td class="text-purple">decide & correct</td>
                        <td class="">645</td>
                        <td class="border-end-0">311</td>
                    </tr>
                    <tr>
                        <th class="border-start-0" scope="row">7</th>
                        <td class="text-info">multiple choice</td>
                        <td class="">645</td>
                        <td class="border-end-0">311</td>
                    </tr>
                    <tr>
                        <th class="border-start-0" scope="row">8</th>
                        <td class="">spell it</td>
                        <td class="">645</td>
                        <td class="border-end-0">311</td>
                    </tr>
                    <tr class="border-bottom-0">
                        <th colspan="3" class="border-start-0 ls-1 text-center" scope="col">TOTAL</th>
                        <th class="ls-1 border-end-0" scope="col">1040</th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const isSmallTable = ref(false);

function showSmallTable(e) {
    e.target.innerWidth < 576 ? isSmallTable.value = true : isSmallTable.value = false;
}

onMounted(() => {
    window.innerWidth < 576 ? isSmallTable.value = true : isSmallTable.value = false;
    window.addEventListener('resize', showSmallTable);
});

onUnmounted(() => {
    document.removeEventListener('resize', showSmallTable);
});
</script>

<style scoped>
.mt-6 {
    margin-top: 60px;
}

th,
td {
    font-size: 18px;
}

tbody>tr>th.border-start-0,
thead>tr>th.border-start-0 {
    padding-left: 14px;
}

@media screen and (max-width: 575px) {

    th,
    td {
        font-size: 1rem;
    }
}
</style>