<template>
    <div class="p-3">
        <h2 class="mb-5 mt-3">Confirm Email</h2>
        <p class="text-start text-info fs-6">
            Click the confirmation link that was sent to your email to complete your registration.
        </p>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// const props = defineProps({
//     isLogin: Boolean
// });

const hasSentCode = ref(false);

function sendCode() {
}

</script>

<style scoped></style>