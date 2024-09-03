import { defineStore } from "pinia";

export const useAppStore = 
defineStore({
    id: 'app',
    state: () => ({
        activeMenu: ''
    }),
    getters: {},
    actions: {
    toggleActiveMenu(menu) {
        this.activeMenu = menu;
    }
    }
});