<template>
    <div>
        <h3 class="fs-2 my-5">Select correct form</h3>
        <div class="options d-flex flex-column align-items-center">
            <Option title="latitude" />
            <Option title="pteridactyl" />
            <Option title="lamb" />
            <Option title="tales" />
        </div>
    </div>
</template>

<script setup>
import Option from '../Option.vue';

</script>

<style scoped>
.options {
    width: 90%;
}

h3 {
    letter-spacing: 1px;
}
</style>