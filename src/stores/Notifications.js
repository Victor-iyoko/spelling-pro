import { defineStore } from "pinia";

export const useNotificationsStore = 
defineStore({
    id: 'notifications',
    state: () => ({
        alerts: []
    }),
    getters: {},
    actions: {
    }
});