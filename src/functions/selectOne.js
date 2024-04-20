function reset() {
    const options = document.getElementById("select-one-options").children;
      setTimeout(() => {
            for (let i = 0; i < options.length; i++) {
                // removing line-through class from all the words
                options[i].children[1].classList.remove("text-decoration-line-through");
                // hide icon after a delay
                options[i].children[2].classList.add('opacity-0');
                setTimeout(() => {                    
                    // removing line-through class from all the words
                    options[i].children[1].classList.remove("pe-none");
                }, 500);
            }
        }, 300);
}

export default function selectOne(e, game, timeOut) {
    if(timeOut) {
        reset();
        return;
    }
    const isAnswer = game.isAnswer(e.target.textContent);

    // prevent user from clicking options rapidly
    e.target.classList.add("pe-none");

    // contains correct and miss icon
    const iconSpan = e.target.nextSibling;

    // show icon indicating option is correct or not
    iconSpan.classList.remove('opacity-0');

    if (isAnswer) {
        iconSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-check-lg text-success" viewBox = "0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" /></svg>';
        reset();
    } else {
        iconSpan.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x text-danger" viewBox="0 0 16 16"><path d = "M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" /></svg>';
        e.target.classList.add("text-decoration-line-through");
        setTimeout(() => {
            // hide icon after a delay
            iconSpan.classList.add('opacity-0');
        }, 350);
    }
    /* calling the store function here because it changes the currentQuestIndex which
     changes the question and answer thereby preventing the first call from having approrpriate data */
    game.handleClick(e.target.textContent);
}