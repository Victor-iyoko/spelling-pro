import { defineStore } from "pinia";

export const useMultiPlayerStore = 
defineStore({
    id: 'multiplayer',
    state: () => ({
        isRandomMatch: false,
        activeTab: 'lobby',
        inRoom: false
    }),
    getters: {},
    actions: {
    openRandomMatchModal() {
        this.isRandomMatch = true;
    },
    closeRandomMatchModal() {
        this.isRandomMatch = false;
    },
    changeTab(tab) {
        this.activeTab = tab;
    }
    }
});