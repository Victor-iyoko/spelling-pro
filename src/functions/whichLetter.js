const event = new CustomEvent('showWordPage', {detail: {reset: true}});

function reset() {
    // display the word page only since both  options and word page gets remounted, there is no need for custom reset
    document.dispatchEvent(event);
}

export default function whichLetter(e, game, timeOut) {
    if (timeOut) {
        reset();
        return;
    }

    const isAnswer = game.isAnswer(e.target.textContent);
 
    if (isAnswer) {
        reset();
    } else {
    // prevent user from clicking options rapidly
    e.target.classList.add("pe-none");

    // reduce opacity of clicked buttons
    e.target.style.opacity = 0.6;
    }
    /* calling the store function here because it changes the currentQuestIndex which
     changes the question and answer thereby preventing the first call from having approrpriate data */
    game.handleClick(e.target.textContent);

}