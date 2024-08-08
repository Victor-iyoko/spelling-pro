<template>
    <div class="col-12 col-md-6">
        <div class="d-flex align-items-center py-2 px-3 rounded-3"
            :class="history ? 'bg-brown-light shadow-sm' : ' bg-secondarybg box-shadow-sharp'">
            <div :class="history ? 'bg-secondarybg rounded-2 border' : ''"
                class="position-relative me-2 me-sm-3 avatar__container d-flex align-items-center justify-content-center">
                <svg xmlns="http://www.w3.org/2000/svg" :fill="category.color" width="40" height="40"
                    viewBox="0 0 24 24">
                    <path :d="category.img" />
                </svg>
            </div>
            <div class="player__tile d-flex flex-grow-1 gap-1 align-items-center justify-content-between">
                <div class="w-100 position-relative d-flex flex-column me-1 gap-1 me-md-2">
                    <div class="d-flex align-items-center">
                        <img src="/IMG-20230322-WA0167.jpg" :class="history ? 'history' : 'challenge'"
                            class="border border-2 rounded-circle" alt="avatar">
                        <img src="/IMG-20230322-WA0201.jpg" :class="history ? 'history' : 'challenge'"
                            class="border border-2 rounded-circle" :style="{ marginLeft: '-8px' }" alt="avatar">
                        <img src="/IMG-20230322-WA0206.jpg" :class="history ? 'history' : 'challenge'"
                            class="border border-2 rounded-circle" :style="{ marginLeft: '-8px' }" alt="avatar">
                        <span v-if="Math.floor(Math.random() * 2) === 1"
                            class="badge ms-auto me-sm-2 ff-grandstander-thin"
                            :class="history ? 'bg-secondarybg' : 'bg-secondary'">Ranked</span>
                    </div>
                    <img v-if="history && Math.floor(Math.random() * 2) === 1" src="/medal.svg" alt="medal"
                        class="medal position-absolute">
                    <span v-if="history" class="p-1 text-white ff-grandstander-thin" :style="{ fontSize: '12px' }">
                        2 min ago
                    </span>
                    <span v-else class="p-1 text-white-50 ff-grandstander-thin"
                        :style="{ textShadow: '0 2px 2px #3e3c3c', fontSize: '10px' }">
                        Lorem ipsum dolor sit amet consectetur...
                    </span>
                </div>
                <div class="d-flex align-items-center">
                    <button :style="!history ? { boxShadow: '2px 2px 2px #000000c2' } : {}" type="button"
                        data-bs-toggle="modal" data-bs-target="#challenge-details" v-tooltip data-bs-placement="top"
                        title="match details" :class="history ? '' : 'me-2 me-sm-3'"
                        class="p-md-1 btn btn-sm btn-outline-light d-flex align-items-center justify-content-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-info-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path
                                d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                        </svg>

                    </button>
                    <button v-if="!history" :style="{ boxShadow: '2px 2px 2px #000000c2' }" type="button" v-tooltip
                        data-bs-placement="top" title="join game"
                        class="p-md-1 ls-1 btn btn-sm d-flex align-items-center justify-content-center btn-success">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-plus-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import categoriesArr from '../../data/categories';
import tooltip from '../../directives/tooltip';

const vTooltip = tooltip;

const props = defineProps({
    history: Boolean
});
const category = categoriesArr[Math.floor(Math.random() * 7)];
</script>

<style scoped>
.avatar__container {
    width: 70px;
    height: 70px;
    border-color: rgba(222, 184, 135, 0.816) !important;
}

img {
    width: 30px;
    height: 30px;
}

img.history {
    border-color: rgba(222, 184, 135, 0.816) !important;
}

img.challenge {
    border-color: #a36041e1 !important;
}

button:hover {
    box-shadow: none !important;
}

.box-shadow-sharp {
    transition: box-shadow .3s ease-in-out;
}

.box-shadow-sharp:hover {
    box-shadow: none;
}

.medal {
    width: 25px;
    height: 25px;
    right: 3px;
    bottom: 3px;
}

@media screen and (max-width: 400px) {
    .avatar__container {
        width: 50px;
        height: 50px;
    }

    img {
        width: 25px;
        height: 25px;
    }
}
</style>