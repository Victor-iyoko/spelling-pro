<template>
    <swiper :effect="'cards'" :grabCursor="true" :modules="[EffectCards]" class="mySwiper d-none d-sm-block">
        <swiper-slide class="p-2 p-md-3 d-flex flex-column justify-content-center align-items-center">
            <div class="info d-flex flex-column align-items-center">
                <img src="/IMG-20230322-WA0206.jpg" class="rounded-circle border border-3" />
                <h4 class="text-light mt-2 text-shadow">#1</h4>
                <span class="fs-5 fw-normal">Daniel</span>
                <div class="d-flex gap-2">
                    <span class="fs-6 fw-normal ff-grandstander-thin">lvl 2</span>
                    <span class="fs-6">|</span>
                    <span class="fs-6 fw-normal ff-grandstander-thin">2000xp</span>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide class="p-2 p-md-3 d-flex flex-column justify-content-center align-items-center">
            <div class="info d-flex flex-column align-items-center">
                <img src="/IMG-20230322-WA0201.jpg" class="rounded-circle border border-3" />
                <h4 class="text-light mt-2 text-shadow">#2</h4>
                <span class="fs-5 fw-normal">Peter</span>
                <div class="d-flex gap-2">
                    <span class="fs-6 fw-normal ff-grandstander-thin">lvl 3</span>
                    <span class="fs-6">|</span>
                    <span class="fs-6 fw-normal ff-grandstander-thin">2120xp</span>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide class="p-2 p-md-3 d-flex flex-column justify-content-center align-items-center">
            <div class="info d-flex flex-column align-items-center">
                <img src="/public/IMG-20230322-WA0167.jpg" class="rounded-circle border border-3" />
                <h4 class="text-light mt-2 text-shadow">#3</h4>
                <span class="fs-5 fw-normal">Francis</span>
                <div class="d-flex gap-2">
                    <span class="fs-6 fw-normal ff-grandstander-thin">lvl 4</span>
                    <span class="fs-6">|</span>
                    <span class="fs-6 fw-normal ff-grandstander-thin">5643xp</span>
                </div>
            </div>
        </swiper-slide>
        <!-- <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
        <swiper-slide>Slide 10</swiper-slide> -->
    </swiper>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';
</script>

<style scoped>
.swiper {
    width: 180px;
    aspect-ratio: 3/4;
}

.swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 18px;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
}

img {
    height: 110px;
    width: 110px;
    object-fit: cover;
}

.swiper-slide:nth-child(1n) {
    background-color: rgb(206, 17, 17);
}

.swiper-slide:nth-child(2n) {
    background-color: rgb(35, 99, 19);
}

.swiper-slide:nth-child(3n) {
    background-color: rgb(0, 68, 255);
}

@media screen and (max-width: 575px) {
    .swiper {
        width: 150px;
    }

    img {
        width: 90px;
        height: 90px;
    }

    .info>span {
        font-size: 18px !important;
    }

    .info>div>span {
        font-style: 14px !important;
    }
}
</style>