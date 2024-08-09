<template>
    <div class="mb-2 wrapper">
        <p class="text-indigo ff-grandstander-thin">
            Chat with players that were saved or any recent opponent
            that you
            faced.
        </p>
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
                            class="position-absolute d-flex justify-content-center align-items-center top-50 end-0 translate-middle-y badge bg-success rounded-circle">
                            10
                            <span class="visually-hidden">New alerts</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
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