<template>
    <div class="p-3">
        <h2 class="mb-5 mt-3">Confirm Email</h2>
        <p class="text-start text-info fs-6">
            Click the confirmation link that was sent to your email to complete your registration.
        </p>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="feather feather-home">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
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