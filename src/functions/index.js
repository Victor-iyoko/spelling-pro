import selectOne from "./selectOne";
import whichLetter from "./whichLetter";

export default function checkMatch(e, game, timeOut) {
    if (game.mode === "one-word-two-forms" || game.mode === "find-correct" || game.mode === "find-misspelled") {
        selectOne(e, game, timeOut);
    } else if (game.mode === "which-letter") {
        whichLetter(e, game, timeOut);
    }
}