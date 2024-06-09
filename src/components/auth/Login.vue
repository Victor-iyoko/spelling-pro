<template>
    <div class="w-100">
        <Title title="LOGIN" class="title" :small="false" />
        <div class="screen__content">
            <form class="login">
                <div class="login__field">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path
                            d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                    </svg>
                    <input type="email" autocomplete="email" name="email" class="login__input" placeholder="Email">
                </div>
                <div class="login__field">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        class="bi bi-key-fill" viewBox="0 0 16 16">
                        <path
                            d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2M2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                    </svg>
                    <input type="password" autocomplete="current-password" id="current-password" class="login__input"
                        placeholder="Password">
                </div>
                <button @click.prevent="handleSubmit" type="button"
                    class="d-block ls-1 fw-bolder btn btn-light mt-3 ms-auto">
                    LOGIN
                </button>
                <!-- <button @click.prevent="handleSubmit"
                    class="d-block w-100 btn rounded-pill px-5 py-2 ls-2 fs-5 lh-sm fw-bolder mx-auto mt-3">
                    LOGIN
                </button> -->
                <p @click.prevent="$emit('authRotate')" class="text-end mt-3 mb-2 fs-7 ls-1" role="button"
                    style="color: #EE82EE">
                    Forgot password?</p>
            </form>
            <p class="link-info fs-7 ls-1">
                Don't have an account? <span @click.prevent="$emit('changeAuth')" class="link-light"
                    role="button">Register</span>
            </p>
        </div>
        <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
        </div>
    </div>
</template>

<script setup>
import Title from '../Title.vue';

const props = defineProps({
    isLogin: Boolean
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

.screen__background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    -webkit-clip-path: inset(0 0 0 0);
    clip-path: inset(0 0 0 0);
}

.screen__background__shape {
    transform: rotate(45deg);
    position: absolute;
    /* border: 1px solid #773516; */
}

.screen__background__shape1 {
    height: 520px;
    width: 520px;
    background-color: #1e292c;
    top: -50px;
    right: 120px;
    border-radius: 0 72px 0 0;
}

.screen__background__shape2 {
    height: 220px;
    width: 220px;
    background: #1e292c;
    top: -172px;
    right: -5px;
    border-radius: 32px;
}

.screen__background__shape3 {
    height: 540px;
    width: 190px;
    background: linear-gradient(270deg, #1e292c, #31393b);
    top: -24px;
    right: 0;
    border-radius: 32px;
}

.screen__background__shape4 {
    height: 400px;
    width: 200px;
    background: #1e292c;
    top: 420px;
    right: 50px;
    border-radius: 60px;
}

.login {
    width: 100%;
    padding: 15px;
    padding-top: 90px;
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
}

.btn:hover {
    color: white;
    background-color: #773516;
} */

p>span:hover,
p.text-end:hover {
    text-decoration: underline;
}
</style>