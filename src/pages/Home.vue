<template>
    <div v-ActivePage="useRoute().name" class="wrapper">
        <div class="mb-1">
            <Title title="SPELLING   PRO." :small="false" />
        </div>
        <div class="container categories-grid h-100 d-flex flex-column justify-content-center align-items-center">
            <Category v-for="(item, index) in categoriesArr" :key="index" :id="index" :name="item.name"
                :score="item.score" :url="item.url" :color="item.color" :img="item.img" />
        </div>
        <HomeFooter score="1792" />
    </div>
    <About />
    <Settings />
</template>

<script setup>
import Title from '../components/Title.vue';
import categoriesArr from '../data/categories.js';
import Category from '../components/Category.vue';
import HomeFooter from '../components/HomeFooter.vue';
import Settings from '../components/Settings.vue';
import About from '../components/About.vue';
import ActivePage from '../directives/activePage.js';
import { useRoute } from 'vue-router';

const vActivePage = ActivePage;
</script>

<style scoped>
@media screen and (min-width: 600px) {
    .wrapper {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-rows: auto 83% auto;
    }

    .categories-grid {
        width: 85%;
        max-width: 800px;
        height: 100%;
        min-height: 500px;
        display: grid !important;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(24, 1fr);
        justify-content: center;
        gap: 10px;
    }
}

@media screen and (max-width: 599px) {
    .categories-grid {
        margin: 15px auto;
    }
}
</style>