<template>
    <div v-if="chat.chats.length === 0" class="mb-2 wrapper">
        <p class="text-indigo fw-bold ff-grandstander-thin mt-3">
            Chat with players that were saved or any recent opponent
            that you
            faced.
        </p>
        <div role="button" class="clear d-flex justify-content-end text-light align-items-center mb-2">
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor"
                    class="bi bi-check-all" viewBox="0 0 16 16">
                    <path
                        d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
                </svg>
            </span>
            <div class="ms-1 align-bottom ff-grandstander-thin">
                Mark all as read
            </div>
        </div>
        <div class="d-flex flex-column gap-2">
            <div @click="chat.toggleCurrentChat" v-for="i in 10" class="chat d-flex gap-2 p-2 rounded-2">
                <img src="/IMG-20230322-WA0201.jpg" alt="avatar"
                    class="rounded-circle border border-2 border-secondary">
                <div class="d-flex flex-column flex-fill justify-content-between border-bottom pb-1">
                    <div class="d-flex justify-content-between align-items-center">
                        <p class="mb-0">Johnny</p>
                        <span class="time text-secondary">
                            10 min ago
                        </span>
                    </div>
                    <div class="message position-relative w-100">
                        <span class="text-secondary">
                            Lorem ipsum dolor sit amet, consectet...
                        </span>
                        <span
                            class="position-absolute fw-light d-flex justify-content-center align-items-center top-50 end-0 translate-middle-y badge bg-success rounded-circle">
                            10
                            <span class="visually-hidden">New alerts</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else
        class="position-absolute w-100 top-50 start-50 translate-middle d-flex align-items-center flex-column gap-2">
        <img src="/no-conversations.svg" alt="no notifications" class="empty">
        <h3 class="fs-4 text-center ff-grandstander-thin" :style="{ color: 'rgba(128, 128, 128, 0.216)' }">
            You have no conversations.
        </h3>
    </div>
</template>

<script setup>
import { useChatStore } from '../../stores/chat.js';

const chat = useChatStore();
</script>

<style scoped>
.wrapper {
    padding-left: 12px !important;
    padding-right: 12px !important;
}

p.text-indigo {
    font-size: 14px;
}

.clear {
    font-size: 12px;
    transition: all .3s ease-in-out;
}

.clear:hover {
    color: rgb(198, 198, 198) !important;
}

.chat {
    cursor: pointer;
    transition: .3s ease-in-out;
    /* background: rgba(128, 128, 128, 0.163); */
}

.chat:hover {
    background: rgba(128, 128, 128, 0.216);
}

.chat>div {
    border-color: rgba(240, 255, 255, 0.09) !important;
}

.chat:hover>div {
    border-color: transparent !important;
}

.chat img {
    width: 50px;
    height: 50px;
}

.chat p {
    font-size: 1.1rem;
}

.chat span {
    font-size: 13px;
}

.chat span.time {
    font-size: 12px;
}

.message span.badge {
    width: 22px;
    height: 22px;
    font-size: 10px;
}

@media screen and (max-width: 400px) {
    p.text-indigo {
        font-size: 13px;
    }

    .chat img {
        width: 45px;
        height: 45px;
    }

    .chat p {
        font-size: 1.02rem;
    }

    .chat span {
        font-size: 12px;
    }

    .chat span.time {
        font-size: 11px;
    }
}
</style>