import { defineStore } from "pinia";
import { gameDefault } from "../data/default";

export const useGameStore = 
defineStore({
    id: 'game',
    state: () => ({...gameDefault}),
    actions: {
        reset() {
            Object.assign(this, gameDefault);
        },
        reduce() {
            this.lifes--;
            if (this.lifes >= 0) {
                setTimeout(() => {
                    this.lifesArr[this.lifes].alive = false;
                }, 100);
            }
            this.score - 10 <= 0 ? this.score = 0 : this.score -= 10;
        },
        isAnswer(option, isReturn) {
            if (isReturn) {
              return this.questions[this.currentQuestIndex].answer === option;  
            } else {
                if (this.questions[this.currentQuestIndex].answer === option) {
                // this.currentQuestIndex++;
                this.questionAns++;
                this.score += 10;
            } else {
                this.reduce();
            }
            }

        }
    }
});