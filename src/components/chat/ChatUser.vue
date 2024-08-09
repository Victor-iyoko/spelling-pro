<template>
    <div class="mb-2">
        <div :style="{ borderColor: 'rgba(240, 255, 255, 0.09) !important' }"
            class="d-flex position-sticky wrapper top-0 bg-dark w-100 py-1 border-top border-bottom justify-content-between align-items-center">
            <svg @click="chat.toggleCurrentChat" role="button" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                fill="currentColor" class="bi bi-chevron-left text-white" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0" />
            </svg>
            <div class="d-flex align-items-center gap-3">
                <div class="d-flex align-items-center">
                    <span class="text-secondary">To: &nbsp;</span>
                    <RouterLink to="/my-profile">
                        Johnny
                    </RouterLink>
                </div>
                <img src="/IMG-20230322-WA0206.jpg" alt="user name" class="rounded-circle border border-secondary">
            </div>
        </div>
        <div v-if="chat.chats.length === 0" class="d-flex wrapper w-100 flex-column gap-3 pt-3">
            <ChatMsg />
            <ChatMsg />
            <ChatMsg />
            <ChatMsg />
            <ChatMsg />
            <ChatMsg />
            <ChatMsg />
            <ChatMsg />
            <ChatMsg />
            <ChatMsg />
            <ChatMsg />
            <ChatMsg />
        </div>
        <div v-else
            class="position-absolute w-100 top-50 start-50 translate-middle d-flex align-items-center flex-column gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="rgba(128, 128, 128, 0.216)" width="200" height="210"
                viewBox="0 0 64 60" x="0px" y="0px">
                <path
                    d="m52.49,43.86c5.42-4.39,8.51-10.85,8.51-17.86,0-12.68-10.32-23-23-23-7.13,0-13.71,3.22-18.11,8.83C10.16,14.52,3,23.43,3,34c0,7.01,3.09,13.47,8.51,17.86-.81,1.77-1.91,3.38-3.28,4.79-.25.26-.34.63-.25.97s.37.61.72.7c.78.19,1.91.4,3.27.4,1.58,0,3.46-.27,5.42-1.15.85-.38,1.66-.85,2.41-1.41,2.01.56,4.09.85,6.2.85,7.33,0,13.87-3.45,18.08-8.81.04-.01.08-.02.12-.03.75.56,1.56,1.03,2.41,1.41,1.96.88,3.84,1.15,5.42,1.15,1.36,0,2.49-.2,3.27-.4.35-.09.62-.35.72-.7s0-.71-.25-.97c-1.37-1.41-2.47-3.01-3.28-4.79Zm-26.49,11.14c-2.09,0-4.15-.31-6.12-.91-.32-.1-.66-.03-.92.18-.73.59-1.54,1.08-2.39,1.46-2.14.96-4.17,1.07-5.69.93,1.15-1.44,2.08-3.02,2.78-4.74.17-.42.04-.9-.32-1.17-5.3-4.01-8.33-10.11-8.33-16.75,0-11.58,9.42-21,21-21s21,9.42,21,21-9.42,21-21,21Zm21.43-7.26c-.75-.33-1.45-.77-2.11-1.27,1.99-3.07,3.26-6.63,3.59-10.47h1.09c.55,0,1-.45,1-1s-.45-1-1-1h-1c0-1.36-.13-2.7-.36-4h1.36c.55,0,1-.45,1-1s-.45-1-1-1h-1.8c-.38-1.39-.87-2.73-1.49-4h3.29c.55,0,1-.45,1-1s-.45-1-1-1h-4.39c-.89-1.45-1.94-2.79-3.11-4h7.5c.55,0,1-.45,1-1s-.45-1-1-1h-9.71c-3.93-3.13-8.89-5-14.29-5-.98,0-1.94.07-2.88.19,3.93-3.96,9.21-6.19,14.88-6.19,11.58,0,21,9.42,21,21,0,6.64-3.04,12.75-8.33,16.75-.36.27-.49.75-.32,1.17.7,1.72,1.63,3.31,2.78,4.74-1.52.14-3.55.03-5.7-.93Zm-28.43-14.95c-.26,0-.51-.1-.71-.29-.39-.39-.39-1.02,0-1.41l1.12-1.12-1.12-1.12c-.39-.39-.39-1.02,0-1.41s1.02-.39,1.41,0l1.12,1.12,1.12-1.12c.39-.39,1.02-.39,1.41,0s.39,1.02,0,1.41l-1.12,1.12,1.12,1.12c.39.39.39,1.02,0,1.41-.2.2-.45.29-.71.29s-.51-.1-.71-.29l-1.12-1.12-1.12,1.12c-.2.2-.45.29-.71.29Zm14.71-3.95l-1.12,1.12,1.12,1.12c.39.39.39,1.02,0,1.41-.2.2-.45.29-.71.29s-.51-.1-.71-.29l-1.12-1.12-1.12,1.12c-.2.2-.45.29-.71.29s-.51-.1-.71-.29c-.39-.39-.39-1.02,0-1.41l1.12-1.12-1.12-1.12c-.39-.39-.39-1.02,0-1.41s1.02-.39,1.41,0l1.12,1.12,1.12-1.12c.39-.39,1.02-.39,1.41,0s.39,1.02,0,1.41Zm-.36,12.29c.26.49.08,1.09-.41,1.35-.15.08-.31.12-.47.12-.36,0-.7-.19-.88-.53-1.1-2.07-3.24-3.35-5.58-3.35s-4.48,1.28-5.58,3.35c-.26.49-.87.67-1.35.41-.49-.26-.67-.87-.41-1.35,1.45-2.72,4.27-4.41,7.35-4.41s5.9,1.69,7.35,4.41Z" />
            </svg>
            <h3 class="fs-4 text-center ff-grandstander-thin" :style="{ color: 'rgba(128, 128, 128, 0.216)' }">
                There are no messages.
            </h3>
        </div>
    </div>
</template>

<script setup>
import ChatMsg from './ChatMsg.vue';
import { useChatStore } from '../../stores/chat.js';

const chat = useChatStore();
</script>

<style scoped>
.wrapper {
    padding-left: 12px !important;
    padding-right: 12px !important;
}

a {
    font-size: 1.1rem;
    color: rgb(185, 178, 178);
    transition: all .3s ease-in-out;
}

a:hover {
    color: white !important;
    text-decoration: underline;
}

img {
    width: 40px;
    height: 40px;
}
</style>