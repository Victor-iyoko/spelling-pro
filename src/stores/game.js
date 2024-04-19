import { defineStore } from "pinia";
import { gameDefault } from "../data/default";

export const useGameStore = 
defineStore({
    id: 'game',
    state: () => ({...gameDefault}),
    actions: {
        reset() {
            this.clearCountDown();
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
        startCountDown() {
            // Start the countdown timer
            this.timer = setInterval(() => {
                if (this.time.current > 0) {
                        this.time.current--; // Decrement time by 1 second
                } else {
                    if (this.time.dependency === 'end game') {
                        clearInterval(this.timer);  // Stop the timer when time reaches 0
                    } else {
                        this.reduce();  // reduce player's life when time reaches 0
                        this.questionAns++; // increase number of answered questions
                        this.currentQuestIndex++; // get new question when time reaches 0
                        this.time.current = this.time.initial; // reset time to initial value if the game questions are limited
                    }
                }
            }, 1000); // Update timer every second (1000 milliseconds)
        },
        clearCountDown() {
            clearInterval(this.timer);
        },
        isAnswer(option, isReturn) {
            if (isReturn) {
              return this.questions[this.currentQuestIndex].answer === option;  
            } else {
                if (this.questions[this.currentQuestIndex].answer === option) {
                this.time.dependency === 'end game' ? null : this.time.current = this.time.initial;
                setTimeout(() => {
                    this.currentQuestIndex++;
                    this.questionAns++;
                    this.score += 10;
                }, 500);
                } else {
                    this.reduce();
                }
            }

        },
        selectOneMatch() {
            const option = document.getElementById('option');
            console.log(option);
        }
    }
});