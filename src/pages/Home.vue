<template>
    <Title />
    <div class="container d-flex flex-column justify-content-center align-items-center">
        <Category v-for="(item, index) in categoriesArr" :name="item.name" :score="item.score" :url="item.url"
            :color="item.color" />
        <Footer score="1792" />
        <About />
    </div>
    <Settings />
</template>

<script setup>
import Title from '../components/Title.vue';
import categoriesArr from '../data/categories.js';
import Category from '../components/Category.vue';
import Footer from '../components/Footer.vue';
import Settings from '../components/Settings.vue';
import About from '../components/About.vue';
</script>
