<template>
    <RouterLink :style="{ color: color, transform: 'translateX(150px) scale(0)' }"
        class="category position-relative text-decoration-none text-center mb-2 p-2 d-flex flex-column justify-content-center rounded-3 opacity-0"
        :class="{ 'animate': animatedTiles.includes(id) }" :id="url.substring(2, undefined)" :to="`/game/${url}`">
        <h2 v-if="id !== 8" class="fs-5 m-0 ls-1 text-shadow ff-moresugar-regular">{{ name }}</h2>
        <div v-else class="d-flex justify-content-center">
            <span v-for="(char, i) in name" class="fs-5 m-0 ls-1 text-shadow ff-moresugar-regular"
                :style="{ color: getColor(i) }">
                {{ char }}
            </span>
        </div>
        <h6 class="fw-bold m-0 mt-1 ls-1" :style="{ 'color': id === 7 ? 'yellow' : 'white' }">{{ `YOUR BEST: ${score}`
            }}
        </h6>
        <svg v-if="id !== 8" xmlns="http://www.w3.org/2000/svg" :class="id === 5 ? 'vertical opacity-0 ' : 'opacity-0'"
            :fill="color" width="80" height="80" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
            <path :d="img" />
        </svg>
        <img v-else class="opacity-0" src="/random.svg" alt="random">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
            class="d-none bi bi-star-fill position-absolute top-50 end-0 translate-middle-y me-2" stroke-width="0.2"
            stroke="#000000" viewBox="0 0 16 16" :style="{ color: '#FFFF00' }">
            <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
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

const colors = [
    'rgb(255, 0, 147)',
    'rgb(59, 255, 0)',
    'rgb(0, 194, 255)',
    'rgb(238, 130, 238)',
    'rgb(255, 165, 0)'
];
function getColor(index) {
    return colors[index % colors.length];
};

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

svg,
img {
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
    box-shadow: 3px 3px 4px #000000ce;
    transition: all .4s ease-in-out;
    overflow: hidden;
}

.animate {
    opacity: 1 !important;
    transform: translateX(0) scale(1) !important;
}

h2,
div {
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
    grid-column: 2 / 4;
}

#multiple-choice {
    grid-row: 12 / 18;
    grid-column: 3 / 4;
}

#random {
    grid-row: 18 / 24;
    grid-column: 1 / 2;
}

.category:hover {
    background-color: #31393b;
    box-shadow: none;
}

@media screen and (max-width: 400px) {

    .category h2,
    .category div>span {
        font-size: 14px !important;
    }

    h6 {
        font-size: 9px !important;
    }

    .bi-star-fill {
        width: 20px;
        height: 20px;
    }
}

@media screen and (max-width: 599px) {
    a {
        max-width: 500px;
        margin-bottom: 10px !important;
    }

    .bi-star-fill {
        display: block !important;
        transition: all .5s ease-in-out;
    }

    .category:hover .bi-star-fill {
        transform: translateY(-50%) rotate(90deg) !important;
    }
}

@media screen and (min-width: 401px) and (max-width: 767px) {

    .category h2,
    .category div>span {
        font-size: 16px !important;
    }
}

@media screen and (min-width: 600px) {
    .category:hover svg.vertical {
        top: 60%;
        left: 50%;
        transform: translateX(-50%);
    }

    .category:hover svg,
    .category:hover img {
        opacity: 0.4 !important;
        top: 20%;
        right: 10%;
        transform: rotate(0);
    }

    .category:hover h2,
    .category:hover div {
        transform: scale(0.6);
        /* opacity: 0; */
    }

    .category:hover h6 {
        transform: scale(1.3);
    }

}
</style>