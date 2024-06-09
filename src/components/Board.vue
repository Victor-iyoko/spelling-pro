<template>
    <div class="outer rounded-3 w-50 h-75 d-flex justify-content-center align-items-center bg-light mx-auto">
        <div class="inner rounded-3 bg-light-subtle">
            <slot></slot>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
.outer {
    width: 90% !important;
    max-width: 630px;
    height: 460px !important;
    background-color: #773516 !important;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2),
        -5px -5px 5px rgba(255, 255, 255, 0.1);
    overflow: hidden;
}

.inner {
    width: 92%;
    height: 90%;
    box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.5),
        inset -5px -5px 5px rgba(255, 255, 255, 0.1);
}
</style>