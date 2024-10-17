<template>
    <Swiper @realIndexChange="toggleProgress" :effect="'coverflow'" :grabCursor="true" :centeredSlides="true"
        :loop="true" :slidesPerView="'auto'" :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 350,
        modifier: 1,
        slideShadows: true,
    }" :pagination="{ el: '.swiper-pagination', clickable: true }" :modules="[EffectCoverflow, Pagination]"
        :autoplay="{ delay: 2000 }" class="mySwiper">
        <swiper-slide
            class="bg-secondarybg p-2 p-md-3 rounded-4 border border-1 border-black d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex flex-column align-items-center">
                <img src="/IMG-20230322-WA0206.jpg" class="rounded-circle" />
                <h2 class="text-yellow mt-2 text-shadow">#1</h2>
                <span class="text-info fs-4">Daniel</span>
            </div>
        </swiper-slide>
        <swiper-slide
            class="bg-secondarybg p-2 p-md-3 rounded-4 border border-1 border-black d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex flex-column align-items-center">
                <img src="/IMG-20230322-WA0206.jpg" class="rounded-circle" />
                <h2 class="text-yellow mt-2 text-shadow">#2</h2>
                <span class="text-info fs-4">Samuel</span>
            </div>
        </swiper-slide>
        <swiper-slide
            class="bg-secondarybg p-2 p-md-3 rounded-4 border border-1 border-black d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex flex-column align-items-center">
                <img src="/IMG-20230322-WA0206.jpg" class="rounded-circle" />
                <h2 class="text-yellow mt-2 text-shadow">#3</h2>
                <span class="text-info fs-4">Francis</span>
            </div>
        </swiper-slide>
        <swiper-slide
            class="bg-secondarybg p-2 p-md-3 rounded-4 border border-1 border-black d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex flex-column align-items-center">
                <img src="/IMG-20230322-WA0206.jpg" class="rounded-circle" />
                <h2 class="text-yellow mt-2 text-shadow">#4</h2>
                <span class="text-info fs-4">Joshua</span>
            </div>
        </swiper-slide>
        <swiper-slide
            class="bg-secondarybg p-2 p-md-3 rounded-4 border border-1 border-black d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex flex-column align-items-center">
                <img src="/IMG-20230322-WA0206.jpg" class="rounded-circle" />
                <h2 class="text-yellow mt-2 text-shadow">#5</h2>
                <span class="text-info fs-4">Emmanuel</span>
            </div>
        </swiper-slide>
        <swiper-slide
            class="bg-secondarybg p-2 p-md-3 rounded-4 border border-1 border-black d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex flex-column align-items-center">
                <img src="/IMG-20230322-WA0206.jpg" class="rounded-circle" />
                <h2 class="text-yellow mt-2 text-shadow">#6</h2>
                <span class="text-info fs-4">Miracle</span>
            </div>
        </swiper-slide>
        <swiper-slide
            class="bg-secondarybg p-2 p-md-3 rounded-4 border border-1 border-black d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex flex-column align-items-center">
                <img src="/IMG-20230322-WA0206.jpg" class="rounded-circle" />
                <h2 class="text-yellow mt-2 text-shadow">#7</h2>
                <span class="text-info fs-4">Armstrong</span>
            </div>
        </swiper-slide>
        <swiper-slide
            class="bg-secondarybg p-2 p-md-3 rounded-4 border border-1 border-black d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex flex-column align-items-center">
                <img src="/IMG-20230322-WA0206.jpg" class="rounded-circle" />
                <h2 class="text-yellow mt-2 text-shadow">#8</h2>
                <span class="text-info fs-4">Victor</span>
            </div>
        </swiper-slide>
        <swiper-slide
            class="bg-secondarybg p-2 p-md-3 rounded-4 border border-1 border-black d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex flex-column align-items-center">
                <img src="/IMG-20230322-WA0206.jpg" class="rounded-circle" />
                <h2 class="text-yellow mt-2 text-shadow">#9</h2>
                <span class="text-info fs-4">Larry</span>
            </div>
        </swiper-slide>
        <swiper-slide
            class="bg-secondarybg p-2 p-md-3 rounded-4 border border-1 border-black d-flex flex-column justify-content-center align-items-center">
            <div class="d-flex flex-column align-items-center">
                <img src="/IMG-20230322-WA0206.jpg" class="rounded-circle" />
                <h2 class="text-yellow mt-2 text-shadow">#10</h2>
                <span class="text-info fs-4">James</span>
            </div>
        </swiper-slide>
        <div class="swiper-pagination"></div>
    </Swiper>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

function toggleProgress(swiper) {
    console.log(swiper.realIndex);
}
</script>

<style scoped>
.swiper-slide {
    width: 230px;
    height: 250px;
    /* aspect-ratio: 1/1; */
}

.swiper-coverflow {
    padding: 30px 0;
}

img {
    height: 130px;
    width: 130px;
    border: 3px solid #a36041e1 !important;
    object-fit: cover;
}

@media screen and (max-width: 767px) {
    .swiper-slide {
        width: 180px;
        height: 200px;
    }

    img {
        height: 100px;
        width: 100px;
    }
}

@media screen and (max-width: 500px) {
    .swiper-slide {
        width: 160px;
        height: 180px;
    }

    img {
        height: 80px;
        width: 80px;
    }


    .swiper-slide span {
        font-size: 1.1rem !important;
    }
}
</style>