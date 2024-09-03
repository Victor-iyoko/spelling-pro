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
                    <RouterLink to="/profile">
                        <span data-bs-dismiss="offcanvas">
                            Johnny
                        </span>
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
            <img src="/no-messages.svg" class="empty" alt="no messages">
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

img.empty {
    width: 250px;
    height: 250px;
}
</style>