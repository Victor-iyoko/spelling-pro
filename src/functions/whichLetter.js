const event = new CustomEvent('showWordPage');

function reset() {
    const options = document.getElementById("letter-options")?.children;
    if (options) {
        for (let i = 0; i < options.length; i++) {
            // removing pointer event none class from all the words
            options[i].classList.remove("pe-none");

            // set opacity to full
            options[i].style.opacity = 1;

            // display the word page
            document.dispatchEvent(event);
        }
    }
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