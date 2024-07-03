<template>
    <div class="p-2">
        <h2 class="mb-4 mt-3">Forgot Password</h2>
        <Transition mode="out-in">
            <p v-if="hasSentCode" class="text-start text-info fs-6">
                Enter the code that was sent to your email.
            </p>
            <p v-else class="text-start text-info fs-6">
                Please enter the email address used to create the account.
            </p>
        </Transition>
        <Transition mode="out-in">
            <input v-if="hasSentCode" type="number"
                class="bg-transparent rounded-2 text-white p-1 mx-auto my-4 text-center fs-5 border border-white">
            <TextInput v-else :auth="true" type="email" placeholder="Email" class="py-3">
                <path
                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </TextInput>
        </Transition>
        <div class="d-flex align-items-center">
            <Transition mode="out-in">
                <a v-show="hasSentCode" class="fs-7" style="color: #EE82EE" role="button">
                    Resend code
                </a>
            </Transition>
            <button @click="sendCode" type="button" class="d-block ls-1 fw-bolder btn btn-light ms-auto">
                {{ hasSentCode ? 'Confirm' : 'Send Code' }}
            </button>
        </div>
        <div class="mt-5 fs-7 ls-1">
            <a>Remembered your password? <span @click.prevent="$emit('authRotate')" @click="hasSentCode = false"
                    :class="isShowOverlay ? '' : 'pe-none'" role="button" style="color: #FFFF00">Try
                    login</span></a>
            <p class="my-1">Or</p>
            <a @click.prevent="$emit('changeAuth')" @click="hasSentCode = false" style="color: #3BFF00"
                role="button">Create a new account</a>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TextInput from '../TextInput.vue';

const props = defineProps({
    isShowOverlay: Boolean
});

const hasSentCode = ref(false);

function sendCode() {
    hasSentCode.value = true;
}

</script>

<style scoped>
a {
    text-decoration: none;
}

a>span:hover,
a[role=button]:hover {
    text-decoration: underline !important;
}
</style>