<template>
    <div class="select-wrapper rounded-2 d-flex align-items-center p-1 ps-3"
        :class="inLeaderBoard ? 'leaderboard' : 'not-in-leaderboard ms-1'"
        :style="inLeaderBoard ? { background: '#31393b' } : {}">
        <span class="text-white py-1" :class="inLeaderBoard ? 'd-none d-md-block' : ''">
            {{ label + ':' }}
        </span>
        <select role="button" v-model="model"
            class="form-select ps-1 text-info form-select-sm bg-transparent border-0 w-auto fs-6"
            :style="{ paddingRight: '27px' }">
            <option v-for=" option, i  in  options " :value="option.value" class="text-info bg-dark">
                {{ option.option }}
            </option>
        </select>
    </div>
</template>

<script setup>
const model = defineModel();
const props = defineProps({
    label: String,
    options: Array,
    inLeaderBoard: Boolean
});
</script>

<style scoped>
.select-wrapper {
    width: fit-content;
    transition: all 300ms ease-in-out;

}

.form-select {
    --bs-form-select-bg-img: url("data: image/svg+xml, <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' ><path fill='none' stroke='%23ffffff' %20stroke-linecap='round' %20stroke-linejoin='round' %20stroke-width='2' %20d='m2%205%206%206%206-6' /></svg>") !important;
}

.not-in-leaderboard.select-wrapper:hover {
    background-color: #31393b;
}

select:focus {
    box-shadow: none;
}

@media screen and (max-width: 575px) {

    .not-in-leaderboard select,
    .not-in-leaderboard.select-wrapper span {
        font-size: .8rem !important;
    }

    .not-in-leaderboard.select-wrapper {
        padding: 0;
    }
}

@media screen and (max-width: 500px) {

    .leaderboard select,
    .leaderboard.select-wrapper span {
        font-size: .9rem !important;
    }

    .leaderboard.select-wrapper {
        padding: 0;
    }

}

@media screen and (max-width: 370px) {
    .not-in-leaderboard.select-wrapper {
        padding-left: .6rem !important;
        padding-right: 0 !important;
    }

    .not-in-leaderboard.select-wrapper select,
    .not-in-leaderboard.select-wrapper span {
        font-size: 12px !important;
    }
}
</style>