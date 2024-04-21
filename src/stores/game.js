import { defineStore } from "pinia";
import { gameDefault } from "../data/default";
import checkMatch from "../functions";

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
            this.checkGameOver(true);
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
                        this.game0ver = true;   // Load game over page
                        clearInterval(this.timer);  // Stop the timer when time reaches 0
                    } else {
                        this.reduce();
                        this.currentQuestIndex++; // get new question when time reaches 0
                        setTimeout(() => {
                          //  this.questionAns++; // increase number of answered questions
                            this.checkGameOver(false);
                        }, 500);
                        this.time.current = this.time.initial; // reset time to initial value if the game questions are limited
                        checkMatch(null, { mode: this.mode, handleClick: this.handleClick }, true);
                    }
                }
            }, 1000); // Update timer every second (1000 milliseconds)
        },
        clearCountDown() {
            clearInterval(this.timer);
        },
        isAnswer(option) {
            return this.questions[this.currentQuestIndex].answer === option;
        },
        handleClick(answer) {
            if (this.isAnswer(answer)) {
                this.time.dependency === 'end game' ? null : this.time.current = this.time.initial;
                setTimeout(() => {
                    this.currentQuestIndex++;
                    this.checkGameOver(false);
                }, 500);
                this.score += 10;
            } else {
                this.reduce();
            }
    },
    checkGameOver(onLifeReduce) {
        if (this.currentQuestIndex + 1 > this.maxQuestion || this.lifes === 0) {
            this.game0ver = true;
            this.clearCountDown();
            return;
        } else {
                !onLifeReduce && this.questionAns++;
            }
        }
    }
});