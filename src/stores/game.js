import { defineStore } from "pinia";
import { gameDefault } from "../data/default";

export const useGameStore = 
defineStore({
    id: 'game',
    state: () => ({...gameDefault}),
    getters: {

    },
    actions: {

    }
});