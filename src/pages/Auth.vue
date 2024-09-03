<template>
    <div v-ActivePage="useRoute().name"
        class="text-center text-white d-flex align-items-center justify-content-center w-100 h-100">
        <main class="w-100 h-100 d-flex align-items-center justify-content-center overflow-hidden position-relative">
            <div id="login" class="position-absolute">
                <div class="screen position-relative overflow-hidden rounded-3">
                    <div id="login-overlay">
                        <div class="d-none">
                            <ForgotPW @changeAuth="handleAuthChange" @authRotate="handleAuthRotate(login, loginOverlay)"
                                :isShowOverlay="isShowOverlay" />
                        </div>
                    </div>
                    <Login @changeAuth="handleAuthChange" @authRotate="handleAuthRotate(login, loginOverlay)"
                        :isLogin="isLogin" :isShowOverlay="isShowOverlay" />
                </div>
            </div>
            <div id="register" class="position-absolute">
                <div class="screen position-relative overflow-hidden rounded-3">
                    <div id="register-overlay">
                        <div class="d-none">
                            <ConfirmEmail @changeAuth="handleAuthChange" />
                        </div>
                    </div>
                    <Register @changeAuth="handleAuthChange" @authRotate="handleAuthRotate(register, registerOverlay)"
                        :isLogin="isLogin" />
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>
import Login from '../components/auth/Login.vue';
import Register from '../components/auth/Register.vue';
import ForgotPW from '../components/auth/ForgotPW.vue';
import ConfirmEmail from '../components/auth/ConfirmEmail.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRoute } from 'vue-router';
import ActivePage from '../directives/activePage.js';

const isLogin = ref(true);
const isShowOverlay = ref(false);
const vActivePage = ActivePage;

let body, login, register, registerOverlay, loginOverlay;

function handleAuthRotate(auth, overlay) {
    isShowOverlay.value = !isShowOverlay.value;
    if (isShowOverlay.value) {
        auth.style.transform = 'rotateY(180deg)';
        overlay.style.transform = 'rotateY(-180deg)';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.padding = '15px';
        overlay.style.backgroundColor = '#1E292C';
        setTimeout(() => {
            auth.children[0].style.boxShadow = '-3px 3px 4px #000000';
            overlay.children[0].classList.remove('d-none');
        }, 300);
    } else {

        setTimeout(() => {
            auth.children[0].style.boxShadow = 'none';
            auth.children[0].style.boxShadow = '3px 3px 4px #000000';
            overlay.style.width = '0%';
            overlay.style.height = '0%';
            // overlay.style.transform = 'rotateY(-180deg)';
            overlay.style.backgroundColor = 'transparent';
            overlay.children[0].classList.add('d-none');
            // overlay.children[0].style.transform = 'rotateY(0)';
        }, 200);
        overlay.children[0].style.backFaceVisibilty = 'hidden';
        auth.style.transform = 'rotateY(0deg)';
        // overlay.style.transform = 'rotateY(0deg)';
    }

}

function handleAuthChange() {
    isLogin.value = !isLogin.value;
    if (isLogin.value) {
        login.style.transform = 'translate(-55%, 0%) scale(0.9)';

        register.style.transform = 'translate(50%, -10%)';

        setTimeout(() => {
            login.style.transform = 'translate(-55%, 0%) scale(1)';
            login.style.zIndex = 10;
            loginOverlay.style.backgroundColor = 'transparent';

            register.style.zIndex = 5;
            register.style.transform = 'translate(50%, -10%) scale(0.9)';
            registerOverlay.style.width = '100%';
            registerOverlay.style.height = '100%';
            registerOverlay.style.backgroundColor = '#121516';

            setTimeout(() => {
                loginOverlay.style.width = 0;
                loginOverlay.style.height = 0;
                login.style.transform = 'translate(0, 0)';

                register.style.transform = 'translate(10%, 0%) scale(0.9)';
            }, 500);
        }, 500);
    } else {
        isShowOverlay.value = false;
        setTimeout(() => {
            login.children[0].style.boxShadow = 'none';
            login.children[0].style.boxShadow = '3px 3px 4px #000000';
            loginOverlay.style.backgroundColor = 'transparent';
            loginOverlay.children[0].classList.add('d-none');
        }, 200);
        login.style.transform = 'rotateY(0deg)';
        // loginOverlay.style.transform = 'rotateY(0deg)';

        register.style.transform = 'translate(55%, 0) scale(0.9)';

        login.style.transform = 'translate(-65%, 15%)';
        loginOverlay.style.width = '100%';
        loginOverlay.style.height = '100%';
        setTimeout(() => {
            register.style.transform = 'translate(55%, 0%) scale(1)';
            register.style.zIndex = 10;
            registerOverlay.style.backgroundColor = 'transparent';

            login.style.zIndex = 5;
            login.style.transform = 'translate(-65%, 15%) scale(0.9)';
            loginOverlay.style.backgroundColor = '#121516';

            setTimeout(() => {
                registerOverlay.style.width = 0;
                registerOverlay.style.height = 0;
                register.style.transform = 'translate(0, 0)';

                login.style.transform = 'translate(-9%, 18%) scale(0.9)';
            }, 500);
        }, 500);
    }
}

onMounted(() => {
    // set the height of body to 100vh for just auth pages for layout reasons
    body = document.getElementsByTagName('body');
    body[0].style.height = '100vh';

    register = document.getElementById('register');
    login = document.getElementById('login');
    registerOverlay = document.getElementById('register-overlay');
    loginOverlay = document.getElementById('login-overlay');
});

onBeforeUnmount(() => {
    setTimeout(() => {
        // reset the height of body
        body[0].style.height = '100%';
    }, 500);
});
</script>

<style scoped>
main {
    perspective: 120rem;
}

.screen {
    background: linear-gradient(90deg, #1e292c, #31393b);
    position: relative;
    height: 520px;
    width: 100%;
    /* max-width: 360px; */
    box-shadow: 3px 3px 4px #000000;
    padding: 15px;
    margin: auto;
}

#login>.screen {
    height: 430px !important;
}

#login,
#register {
    width: 360px;
    /* backface-visibility: hidden; */
    transition: all .5s ease-in-out;
}

#register-overlay,
#login-overlay {
    background-color: transparent;
    position: absolute;
    width: 0;
    height: 0;
    left: 0;
    top: 0;
    transition: background-color .5s ease-in-out;
    z-index: 50;
}

#register {
    transform: scale(0.9) translate(10%, 0);
    z-index: -1;
}

#register-overlay {
    width: 100%;
    height: 100%;
    background-color: #121516;
}
</style>