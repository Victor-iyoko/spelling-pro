import { defineStore } from "pinia";

export const useGameStore = 
defineStore({
    id: 'game',
    state: () => ({
        lifes: null,
        questionAns: null,
        score: null
    }),
    getters: {

    },
    actions: {

    }
});