<template>
    <div ref="outerBoard" class="outer rounded-3 d-flex justify-content-center align-items-center mx-auto mb-4">
        <div ref="innerBoard" class="inner rounded-3 bg-light-subtle">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const outerBoard = ref(null);
const innerBoard = ref(null);

function setBoardDimenisions() {
    if (window.innerWidth < 700) {
        innerBoard.value.style.width = (outerBoard.value.clientWidth - 38) + 'px';
        innerBoard.value.style.height = (outerBoard.value.clientHeight - 38) + 'px';
    } else {
        innerBoard.value.style.width = (outerBoard.value.clientWidth - 48) + 'px';
        innerBoard.value.style.height = (outerBoard.value.clientHeight - 48) + 'px';
    }
}

onMounted(() => {
    setBoardDimenisions();
    window.addEventListener('resize', setBoardDimenisions)
});

onUnmounted(() => window.removeEventListener('resize', setBoardDimenisions));
</script>

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
    box-shadow: inset 4px 4px 8px rgba(0, 0, 0, 0.5),
        inset -5px -5px 5px rgba(170, 102, 68, 0.852);
}

@media screen and (max-width: 992px) {
    .outer {
        width: 600px !important;
        height: 430px !important;
    }
}

@media screen and (max-width: 768px) {
    .outer {
        width: 510px !important;
        height: 480px !important;
    }
}

@media screen and (max-width: 700px) {
    .outer {
        width: 430px !important;
        height: 450px !important;
    }
}

@media screen and (max-width: 576px) {
    .outer {
        width: 90% !important;
        height: 400px !important;
    }
}
</style>