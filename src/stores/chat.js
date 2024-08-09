import { defineStore } from "pinia";

export const useChatStore = 
defineStore({
    id: 'chat',
    state: () => ({
        currentChat: false,
        chats: []
    }),
    getters: {},
    actions: {
    toggleCurrentChat() {
        this.currentChat = !this.currentChat;
    }
    }
});