<template>
    <RouterLink :style="{ color: color, transform: 'translateX(150px) scale(0)' }"
        class="category position-relative text-decoration-none text-center mb-2 p-2 d-flex flex-column justify-content-center rounded-3 opacity-0"
        :class="{ 'animate': animatedTiles.includes(id) }" :id="url.substring(2, undefined)" :to="`/game/${url}`">
        <h2 class="fs-5 m-0 ls-1 text-shadow ff-moresugar-regular">{{ name }}</h2>
        <h6 class="fw-bold m-0 mt-1 ls-1" :style="{ 'color': id === 7 ? 'yellow' : 'white' }">{{ `YOUR BEST: ${score}`
            }}
        </h6>
        <svg xmlns="http://www.w3.org/2000/svg" :class="id === 5 || id === 6 ? 'vertical opacity-0 ' : 'opacity-0'"
            :fill="color" width="80" height="80" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
            <path :d="img" />
        </svg>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { onMounted, ref } from 'vue';
import categoriesArr from '../data/categories';

const props = defineProps({
    name: String,
    id: Number,
    score: String,
    url: String,
    color: String,
    img: String
});

let hoverAnimationInterval;
const animatedTiles = ref([]);

onMounted(() => {

    categoriesArr.forEach((_, i) => {
        setTimeout(() => {
            animatedTiles.value.push(i);
        }, i * 300);
    });

});

</script>

<style scoped>
a {
    perspective: 150rem !important;
    background-color: #1e292c;
    width: 100%;
    height: 100%;
}

svg {
    position: absolute;
    opacity: 1;
    right: -30%;
    top: 100%;
    transform: rotate(-70deg);
    transition: all .8s ease-in-out;
}

svg.vertical {
    right: 100%;
    left: 0;
    top: 100%;
}

.category {
    box-shadow: 3px 3px 4px #000000;
    transition: all .4s ease-in-out;
    overflow: hidden;
}

.animate {
    opacity: 1 !important;
    transform: translateX(0) scale(1) !important;
}

h2 {
    word-spacing: 10px;
    line-height: 1.3;
    transition: all .8s ease-in-out;
}

h6 {
    font-size: 11px;
    transition: all .8s ease-in-out;
}

#decide {
    grid-row: 1 / 5;
    grid-column: 1 / 2;
}

#find-correct {
    grid-row: 5 / 12;
    grid-column: 1 / 2;
}

#decide-and-correct {
    grid-row: 1 / 12;
    grid-column: 2 / 3;
}

#which-letter {
    grid-row: 7 / 12;
    grid-column: 3 / 4;
}

#spell-it {
    grid-row: 1 / 7;
    grid-column: 3 / 4;
}

#one-word-two-forms {
    grid-row: 12 / 18;
    grid-column: 1 / 3;
}

#find-misspelled {
    grid-row: 18 / 24;
    grid-column: 1 / 3;
}

#multiple-choice {
    grid-row: 12 / 24;
    grid-column: 3 / 4;
}

.category:hover {
    background-color: #31393b;
    box-shadow: none;
}

@media screen and (max-width: 600px) {
    a {
        max-width: 500px;
    }
}

@media screen and (max-width: 600px) and (min-height: 700px) {
    a {
        margin-bottom: 10px !important;
        padding: 12px !important;
    }

    h2 {
        margin-bottom: 5px !important;
    }
}

@media screen and (min-width: 600px) {

    .category:hover svg.vertical {
        top: 60%;
        left: 50%;
        transform: translateX(-50%);
    }

    .category:hover svg {
        opacity: 0.4 !important;
        top: 20%;
        right: 10%;
        transform: rotate(0);
    }

    .category:hover h2 {
        transform: scale(0.6);
        /* opacity: 0; */
    }

    .category:hover h6 {
        transform: scale(1.3);
    }

}
</style>