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
                if (!this.time.pause) {           
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
                            checkMatch(null, { mode: this.mode, gameDepComponent: this.gameDepComponent, handleClick: this.handleClick }, true);
                        }
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
            // console.log(answer);
            if ((this.mode !== 'decide' && this.mode !== 'decide-and-correct') || this.gameDepComponent === "select-one") {
                if (this.isAnswer(answer)) {
                    // pause the time before next question fully displays for decide and correct game when gameDep is not null
                    this.gameDepComponent ? this.time.pause = true : null;

                    this.score += 10 + this.time.current;
                    this.time.dependency === 'end game' ? null : this.time.current = this.time.initial;
                    setTimeout(() => {
                        this.currentQuestIndex++;
                        this.time.pause ? this.time.pause = false : null;
                        this.checkGameOver(false);
                    }, 500);
                } else {
                    this.reduce();
                }
            } else {
                // pause the time before next question fully displays for decide game
                this.mode === 'decide' || !this.questions[this.currentQuestIndex].options ? this.time.pause = true : null;
                if (this.isAnswer(answer)) {
                    this.score += 10 + this.time.current;
                    if (!this.questions[this.currentQuestIndex].options) {                 
                        setTimeout(() => {
                            this.time.dependency === 'end game' ? null : this.time.current = this.time.initial;
                            this.time.pause = false; // continue countdown after question fully displays
                        }, 1500);
                        setTimeout(() => {
                            this.currentQuestIndex++;
                            this.checkGameOver(false);
                         }, 500);
                    }
                } else {
                    this.reduce();
                    setTimeout(() => {
                        this.time.dependency === 'end game' ? null : this.time.current = this.time.initial;
                        this.time.pause = false; // continue countdown after question fully displays
                    }, 1500);
                    setTimeout(() => {
                        this.currentQuestIndex++;
                        this.checkGameOver(false);
                    }, 500);
                }
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