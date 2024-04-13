import { defineStore } from "pinia";
import { gameDefault } from "../data/default";

export const useGameStore = 
defineStore({
    id: 'game',
    state: () => ({...gameDefault}),
    getters: {

    },
    actions: {
        reduce() {
            this.lifes--;
            if (this.lifes >= 0) {
                setTimeout(() => {
                    this.lifesArr[this.lifes].alive = false;
                }, 100);
            }
        }
    }
});