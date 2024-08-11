<template>
    <div class="offcanvas offcanvas-start bg-secondarybg" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
        id="chat" aria-labelledby="chat">
        <div class="offcanvas-header py-1">
            <Title title="Chat" :small="true" />
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"
                class="bi bi-x text-light ms-auto" role="button" data-bs-dismiss="offcanvas" aria-label="Close"
                viewBox="0 0 16 16">
                <path
                    d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
        </div>
        <div class="offcanvas-body text-white px-0 pt-0">
            <Transition mode="out-in">
                <ChatList v-if="!chat.currentChat" />
                <ChatUser v-else />
            </Transition>
        </div>
        <Transition mode="out-in">
            <div v-if="chat.currentChat" class="offcanvas-footer bg-dark py-2 border-top"
                :style="{ background: '#1b2426', borderColor: 'rgba(240, 255, 255, 0.09) !important' }">
                <form @submit.prevent="" class="d-flex align-items-center gap-2">
                    <input type="text" class="form-control bg-transparent text-light ff-grandstander-thin"
                        placeholder="write a to Johnny..." aria-label="input" aria-describedby="message input">
                    <button class="btn btn-outline-success" type="button">Send</button>
                </form>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import Title from '../Title.vue';
import ChatUser from './ChatUser.vue';
import ChatList from './ChatList.vue';
import { useChatStore } from '../../stores/chat.js';

const chat = useChatStore();

</script>

<style scoped>
.offcanvas-header,
.offcanvas-footer {
    padding-left: 12px !important;
    padding-right: 12px !important;
    padding-top: 4px;
}

input::placeholder {
    color: gray;
}

*::-webkit-scrollbar {
    background-color: transparent;

}

*::-webkit-scrollbar-thumb {
    background-color: rgba(128, 128, 128, 0.216);
    width: 0.4rem;
}
</style>