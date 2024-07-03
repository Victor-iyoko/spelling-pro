<template>
    <div class="w-100">
        <Title title="LOGIN" class="title" :small="false" />
        <div class="screen__content">
            <form class="login">
                <TextInput :auth="true" type="email" placeholder="Email" class="py-3">
                    <path
                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </TextInput>
                <TextInput :auth="true" type="password" placeholder="Password" class="py-3">
                    <path
                        d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </TextInput>
                <button @click.prevent="handleSubmit" type="button"
                    class="d-block ls-1 fw-bold btn btn-light mt-3 ms-auto">
                    LOGIN
                </button>
                <p @click.prevent="$emit('authRotate')" :class="isShowOverlay ? 'pe-none' : ''"
                    class="text-end mt-3 mb-2 fs-7 ls-1" role="button" style="color: #EE82EE">
                    Forgot password?</p>
            </form>
            <p class="link-info fs-7 ls-1">
                Don't have an account? <span @click.prevent="$emit('changeAuth')" :class="isLogin ? '' : 'pe-none'"
                    class="link-light" role="button">Register</span>
            </p>
        </div>
        <ScreenBackground />
    </div>
</template>

<script setup>
import TextInput from '../TextInput.vue';
import Title from '../Title.vue';
import ScreenBackground from './ScreenBackground.vue';

const props = defineProps({
    isLogin: Boolean,
    isShowOverlay: Boolean
});

function handleSubmit() {
    alert("Login successful");
}
</script>

<style scoped>
.screen__content {
    z-index: 1;
    position: relative;
}

.title {
    position: absolute !important;
    top: 15px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
}

.login {
    width: 100%;
    padding: 15px;
    padding-top: 90px;
}

p>span:hover,
p.text-end:hover {
    text-decoration: underline;
}
</style>