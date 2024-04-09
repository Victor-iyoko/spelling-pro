<template>
    <div>
        <h3 class="fs-2 my-5 user-select-none">Select correct form</h3>
        <div class="options d-flex flex-column align-items-center">
            <Option color="#ea3556" title="lamb" />
            <Option color="blue" title="pteridactyl" />
            <Option color="#f658e3" title="tales" />
            <Option color="green" title="latitude" />
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