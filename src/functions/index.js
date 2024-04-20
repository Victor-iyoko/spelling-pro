import selectOne from "./selectOne";

export default function checkMatch(e, game, timeOut) {
    if (game.mode === "one-word-two-forms" || game.mode === "find-correct" || game.mode === "find-misspelled") {
        selectOne(e, game, timeOut);
    } else {
        console.log("no game yet");
    }
}