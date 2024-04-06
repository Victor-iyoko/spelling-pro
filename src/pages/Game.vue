<template>
    <Hud />
    <div class="d-flex align-items-center flex-column h-100 w-100">
        <div class="time text-center display-5 fw-bold mb-3">30</div>
        <div class="content w-50 h-75 bg-light">

        </div>
    </div>
</template>

<script setup>
import Hud from '../components/Hud.vue';

</script>

<style scoped>
.content {
    width: 90% !important;
    max-width: 630px;
    max-height: 460px !important;
    box-shadow: 7px 4px 20px rgba(0, 0, 0, .5);
}

.time {
    text-shadow: 0 2px 2px #000;
    color: rgb(59, 255, 0);
    margin-top: 60px;
}
</style>