<template>
    <table class="table table-bordered border-dark mb-0 w-100 h-100" :class="isSmallTable ? 'table-sm' : ''">
        <thead>
            <tr class="border-top-0 text-light">
                <th v-for="title, i in tableData.th" class="bg-secondarybg ls-1 fw-normal text-light"
                    :class="i !== 1 || 2 ? i === 0 ? 'border-start-0' : 'border-end-0' : ''" scope="col">{{ title }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data, i in tableData.data">
                <th :class="(i + 1) % 2 == 0 ? 'bg-secondarybg' : 'bg-secondarybg-light'"
                    class="border-start-0 fs-6 text-light" scope="row">{{ i + 1 }}</th>
                <td class="fs-6 ls-1 text-shadow text-capitalize"
                    :class="data.color && (i + 1) % 2 == 0 ? data.color + ' ' + 'bg-secondarybg' : data.color + ' ' + 'bg-secondarybg-light'"
                    :style="{ color: data.color }">{{ data.game }}</td>
                <td :class="(i + 1) % 2 == 0 ? 'bg-secondarybg' : 'bg-secondarybg-light'" class="fs-6 text-light">{{
        data.lastScore
    }}
                </td>
                <td :class="(i + 1) % 2 == 0 ? 'bg-secondarybg' : 'bg-secondarybg-light'"
                    class="border-end-0 fs-6 text-light">{{
        data.highScore }}</td>
            </tr>
            <tr class="border-bottom-0">
                <th colspan="3" class="bg-secondarybg-light border-start-0 ls-1 text-center text-light" scope="col">
                    TOTAL</th>
                <th class="bg-secondarybg-light ls-1 border-end-0 text-light" scope="col">1040</th>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Analytics from '../analytics/Analytics.vue';

const isSmallTable = ref(false);
const tableData = {
    th: ["#", "Game", "Last Score", "High Score"],
    data: [
        { game: "1 word 2 forms", color: "yellow", lastScore: 322, highScore: 433 },
        { game: "find misspelled", color: "text-pink-dark", lastScore: 322, highScore: 433 },
        { game: "find correct", color: "text-green", lastScore: 322, highScore: 433 },
        { game: "which letter", color: "text-pink-light", lastScore: 322, highScore: 433 },
        { game: "decide", color: "text-yellow", lastScore: 322, highScore: 433 },
        { game: "decide & correct", color: "text-purple", lastScore: 322, highScore: 433 },
        { game: "multiple choice", color: "text-info", lastScore: 322, highScore: 433 },
        { game: "spell it", color: "text-light", lastScore: 322, highScore: 433 },
    ]
};

function showSmallTable(e) {
    e.target.innerWidth < 576 ? isSmallTable.value = true : isSmallTable.value = false;
}

onMounted(() => {
    window.innerWidth < 576 ? isSmallTable.value = true : isSmallTable.value = false; window.addEventListener('resize',
        showSmallTable);
}); onUnmounted(() => {
    document.removeEventListener('resize', showSmallTable);
});
</script>

<style scoped>
th {
    font-size: 18px;
}

tbody>tr>th.border-start-0,
thead>tr>th.border-start-0 {
    padding-left: 14px;
}

@media screen and (max-width: 575px) {

    thead>tr>th {
        font-size: 1rem;
    }

    tbody>tr>th {
        font-weight: normal;
    }

    th,
    td {
        letter-spacing: normal;
    }
}
</style>