<template>
    <div class="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <Transition mode="out-in">
            <svg v-if="hasFetched" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                class="text-success bi bi-check-circle-fill" viewBox="0 0 16 16">
                <path
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
            </svg>
            <div v-else class="spinner-border text-dark" role="status"></div>
        </Transition>
        <h2 class="fs-3 mt-2 text-center">Fetching words from chatgpt...</h2>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useGameStore } from '../stores/game';
import { useRoute } from 'vue-router';

let game = useGameStore();
const hasFetched = ref(false);
const gameMode = useRoute().params.category;

onMounted(() => {
    setTimeout(() => {
        hasFetched.value = true;
        setTimeout(() => {
            if (gameMode === "one-word-two-forms") {
                game.questions = [
                    {
                        options: ["PLAGUE", "PLAGE"],
                        answer: "PLAGUE"
                    },
                    {
                        options: ["RYTHM", "RITHM"],
                        answer: "RYTHM"
                    },
                    {
                        options: ["EXPECT", "ESPECT"],
                        answer: "EXPECT"
                    },
                    {
                        options: ["CATARRH", "CARTARH"],
                        answer: "CATARRH"
                    },
                    {
                        options: ["PESSIMISTIC", "PESIMISTIC"],
                        answer: "PESSIMISTIC"
                    },
                    {
                        options: ["CONCRATE", "CONCRETE"],
                        answer: "CONCRETE"
                    },
                    {
                        options: ["PIACE", "PLACE"],
                        answer: "PLACE"
                    },
                    {
                        options: ["SPOILT", "SOILT"],
                        answer: "SPOILT"
                    },
                    {
                        options: ["FLANGE", "FLANJE"],
                        answer: "FLANGE"
                    },
                    {
                        options: ["SORY", "SORRY"],
                        answer: "SORRY"
                    }
                ];
            } else if (gameMode === "find-misspelled") {
                game.questions = [{
                    options: ["AFTER", "CHALLENGE", "SWIP", "CHANGE"],
                    answer: "SWIP"
                },
                {
                    options: ["FEIGN", "GOURE", "HATE", "RITE"],
                    answer: "GOURE"
                },
                {
                    options: ["ELLITE", "ECLIPSE", "ELLIPSES", "EXUBBERANT"],
                    answer: "ELLITE"
                },
                {
                    options: ["CATASTROPHE", "CATILAGE", "BOLDACIOUS", "ANTONYM"],
                    answer: "CATILAGE"
                },
                {
                    options: ["PTERIDACTYL", "COMMISSION", "ECSTATIC", "ABSOLOTE"],
                    answer: "ABSOLOTE"
                },
                {
                    options: ["CHARACTER", "JUSTICE", "ACCOUNTAMT", "LAMBORGHINI"],
                    answer: "ACCOUNTAMT"
                },
                {
                    options: ["PERPLEXED", "CARDIAC", "SURGEON", "CALORISE"],
                    answer: "CALORISE"
                },
                {
                    options: ["TORTOISE", "METALLURGY", "ACROBATE", "SOLITUDE"],
                    answer: "ACROBATE"
                },
                {
                    options: ["INCORPORATE", "LOUSY", "NOUSAINCE", "ORGANISE"],
                    answer: "NOUSAINCE"
                },
                {
                    options: ["VEXING", "CUSHION", "WHOOPING", "AGREGATE"],
                    answer: "AGREGATE"
                },
                {
                    options: ["CANDIR", "FLAMBOYANT", "YATCH", "TIER"],
                    answer: "CANDIR"
                },
                {
                    options: ["BOUYANCY", "QUIETER", "CHEQUIE", "FRENZY"],
                    answer: "CHEQUIE"
                }];
            } else if (gameMode === "find-correct") {
                game.questions = [
                    {
                        options: ["BOUYANCY", "QUIETE", "CHEQUIE", "FRENZEY"],
                        answer: "BOUYANCY"
                    },
                    {
                        options: ["VACE", "WRENCH", "SOROW", "YESTEDAY"],
                        answer: "WRENCH"
                    },
                    {
                        options: ["EPETEMOLOGY", "BEATIFULLY", "NECROMANSY", "HYACINTH"],
                        answer: "HYACINTH"
                    },
                    {
                        options: ["WIERD", "WIER", "WRIT", "WIRT"],
                        answer: "WIERD"
                    },
                    {
                        options: ["LONLY", "OBNOXIOUS", "ELLITE", "KILLO"],
                        answer: "OBNOXIOUS"
                    },
                    {
                        options: ["ECCOLOGY", "CONECTION", "COMITTEE", "MAINTENANCE"],
                        answer: "MAINTENANCE"
                    },
                    {
                        options: ["ORIFICE", "SOLDIER", "OBSOLUTE", "PLASS"],
                        answer: "SOLDIER"
                    },
                    {
                        options: ["PETROLEUM", "XYLOFONIC", "PIRANA", "SOUCE"],
                        answer: "PETROLEUM"
                    },
                    {
                        options: ["BAILOON", "CODEIN", "MASHMELLO", "ORCA"],
                        answer: "ORCA"
                    },
                    {
                        options: ["OCHESTRAITE", "PENGUINE", "GENUINE", "SOROGAT"],
                        answer: "GENUINE"
                    },
                    {
                        options: ["SPIOL", "COROSIVE", "DIAMMOND", "COBALT"],
                        answer: "COBALT"
                    }];
            } else if (gameMode === "which-letter") {
                game.questions = [
                    { word: "DELICIOUS", position: "third", answer: "L" },
                    { word: "FROG", position: "first", answer: "F" },
                    { word: "AROMA", position: "fifth", answer: "A" },
                    { word: "EASE", position: "second", answer: "A" },
                    { word: "GHOST", position: "fourth", answer: "S" },
                    { word: "QUEEN", position: "first", answer: "Q" },
                    { word: "RHOMBUS", position: "second", answer: "H" },
                    { word: "TANGERINE", position: "seventh", answer: "I" },
                    { word: "COMPETENT", position: "sixth", answer: "T" },
                    { word: "XYLOPHONE", position: "ninth", answer: "E" },
                    { word: "DELICIOUS", position: "third", answer: "L" }
                ];
            } else if (gameMode === "decide") {
                game.questions = [
                    {
                        word: ["acrobate", "correct"],
                        answer: "acrobate"
                    },
                    {
                        word: ["confuse", "correct"],
                        answer: "confuse"
                    },
                    {
                        word: ["peint", "wrong"],
                        answer: "paint"
                    },
                    {
                        word: ["knowledgeable", "correct"],
                        answer: "knowledgeable"
                    },
                    {
                        word: ["feasible", "correct"],
                        answer: "feasible"
                    },
                    {
                        word: ["plain", "wrong"],
                        answer: "plane"
                    },
                    {
                        word: ["phantom", "correct"],
                        answer: "phantom"
                    },
                    {
                        word: ["sample", "correct"],
                        answer: "sample"
                    },
                    {
                        word: ["sele", "wrong"],
                        answer: "sale"
                    },
                    {
                        word: ["brittle", "correct"],
                        answer: "brittle"
                    },
                    {
                        word: ["coincidece", "wrong"],
                        answer: "coincidence"
                    }
                ]
            } else if (gameMode === "decide-and-correct") {
                game.questions = [{
                    word: ["ackrobate", "wrong"],
                    options: ["acrobate", "akrobat", "acrobaite"],
                    answer: "acrobate"
                },
                {
                    word: ["confuse", "correct"],
                    answer: "confuse"
                },
                {
                    word: ["peint", "wrong"],
                    options: ["paaint", "pent", "paint"],
                    answer: "paint"
                },
                {
                    word: ["knowledge", "correct"],
                    answer: "knowledgeable"
                },
                {
                    word: ["feasible", "correct"],
                    answer: "feasible"
                },
                {
                    word: ["plein", "wrong"],
                    options: ["plaine", "pleine", "plain"],
                    answer: "plain"
                },
                {
                    word: ["phantom", "correct"],
                    answer: "phantom"
                },
                {
                    word: ["sammple", "wrong"],
                    options: ["semple", "sampil", "sample"],
                    answer: "sample"
                },
                {
                    word: ["slegde", "wrong"],
                    options: ["slege", "sleige", "sledge"],
                    answer: "sledge"
                },
                {
                    word: ["ecstacy", "correct"],
                    answer: "ecstacy"
                },
                {
                    word: ["slegde", "wrong"],
                    options: ["slege", "sleige", "sledge"],
                    answer: "sledge"
                }
                ]
            }
            game.start = true;
        }, 2500);
    }, 1000);
});
</script>

<style scoped>
div {
    cursor: progress;
}
</style>