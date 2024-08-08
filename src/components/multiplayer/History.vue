<template>
    <div v-if="history" class="ff-grandstander-thin">
        <p class="fs-6 ff-grandstander-thin text-yellow text-start mb-3">
            Review the history of previous matches, only a maximum of 40 matches will be saved at once.
        </p>
        <div class="row d-flex g-2 w-100 mx-auto" id="open-challenges">
            <Challenge :history="true" />
            <Challenge :history="true" />
            <Challenge :history="true" />
            <Challenge :history="true" />
            <Challenge :history="true" />
            <Challenge :history="true" />
            <Challenge :history="true" />
            <Challenge :history="true" />
            <Challenge :history="true" />
            <Challenge :history="true" />
        </div>
    </div>
    <div v-else class="w-100 d-flex flex-column gap-3 align-items-center justify-content-center"
        :style="{ height: historyHeight + 'px', maxHeight: '900px' }">
        <img src="/no-history.svg" alt="no history" class="empty opacity-75">
        <h3 class="fs-3 text-center ff-grandstander-thin">
            You do not have any history
        </h3>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Challenge from './Challenge.vue';

const props = defineProps({
    headerHeight: Number
});
const history = ref(true);
const historyHeight = ref(window.innerHeight - props.headerHeight - 40);
</script>

<style scoped>
img.empty {
    width: 450px;
    object-fit: cover;
}

h3 {
    color: #a36041E1;
}

@media screen and (max-width: 575px) {
    img.empty {
        width: 320px;
    }

    div>h3 {
        font-size: 1.3rem !important;
    }

    p {
        font-size: 14px !important;
    }
}
</style>