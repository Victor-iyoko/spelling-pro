<template>
    <div>
        <Title title="REGISTER" class="title" :small="false" />
        <div class="screen__content">
            <form class="login">
                <TextInput :auth="true" type="text" placeholder="Username" class="pb-3">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                </TextInput>
                <TextInput :auth="true" type="email" placeholder="Email" class="py-3">
                    <path
                        d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </TextInput>

                <TextInput :auth="true" type="password" placeholder="Password" class="py-3">
                    <path
                        d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </TextInput>
                <TextInput :auth="true" type="password" placeholder="Confirm Password" class="py-3">
                    <path
                        d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </TextInput>
                <button @click.prevent="handleSubmit" type="button"
                    class="d-block ls-1 fw-bolder btn btn-light mt-2 ms-auto">
                    REGISTER
                </button>
            </form>
            <p class="link-info mt-2 mb-0 fs-7 ls-1">
                Already have an account? <span @click.prevent="$emit('changeAuth')" :class="isLogin ? 'pe-none' : ''"
                    class="link-light" role="button">Login</span>
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
    isLogin: Boolean
});
const emit = defineEmits(['authRotate', 'changeAuth']);

function handleSubmit() {
    // alert("You have been successfully registered");
    setTimeout(() => {
        emit('authRotate');
    }, 1000);
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
    padding: 20px 15px;
    padding-top: 80px;
}

.login__field {
    padding: 15px 0px;
    position: relative;
    display: flex;
    justify-content: start;
    z-index: 1;
}

.bi {
    position: absolute;
    top: 27px;
    color: white;
}

.login__input {
    border: none;
    border-bottom: 1px solid #D1D1D4;
    background: none;
    padding: 10px;
    padding-left: 24px;
    font-weight: 500;
    width: 100%;
    transition: .3s ease-in-out;
    color: white;
    letter-spacing: 1px;
}

.login__input:active,
.login__input:focus,
.login__input:hover {
    outline: none;
    border-bottom-color: #773516;
}

.login__input::placeholder {
    color: #D1D1D4;
    letter-spacing: 1px;
    transition: color .3s ease-in-out;
}

/* .btn {
    background-color: white;
    color: #1e292c;
    transition: .3s ease-in-out;
} */

/* .btn:hover {
    color: white;
    background-color: #773516;
} */

p>span:hover {
    text-decoration: underline;
}
</style>