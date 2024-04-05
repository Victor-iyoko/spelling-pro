<template>
    <Title />
    <div class="container d-flex flex-column justify-content-center align-items-center">
        <Category name="ONE WORD 2 FORMS" score="271" url="one-word-2-forms" color="rgb(255, 255, 0)" />
        <Category name="FIND MISSPELLED" score="271" url="find-misspelled" color="rgb(255, 0, 147)" />
        <Category name="FIND CORRECT" score="271" url="find-correct" color="rgb(59, 255, 0)" />
        <Category name="WHICH LETTER" score="271" url="which-letter" color="rgb(238, 130, 238)" />
        <Category name="DECIDE" score="271" url="decide" color="rgb(255, 165, 0)" />
        <Category name="DECIDE & CORRECT" score="271" url="decide-and-correct" color="rgb(151, 43, 214)" />
        <Category name="MULTIPLE CHOICE" score="271" url="multiple-choice" color="rgb(0, 194, 255)" />
        <Category name="PRACTICE" score="271" url="practice" color="rgb(255, 255, 255)" />
        <Footer score="1792" />
    </div>
    <Modal />
</template>

<script setup>
import Title from '../components/Title.vue';
import Category from '../components/Category.vue';
import Footer from '../components/Footer.vue';
import Modal from '../components/Modal.vue';

</script>
