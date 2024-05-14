const event = new CustomEvent('showDecidePage', {detail: {decidePage: false}});

export default function decide(e, game, timeOut) {
    const options = document.getElementById('decide-options');
    if (timeOut) {
        options.classList.remove('pe-none');
        return;
    }
    options.classList.add('pe-none');
    game.handleClick(e.currentTarget.dataset.answer); //using currentTarget due to event bubbling
    e.currentTarget.classList.contains('bi-x') && game.isAnswer(e.currentTarget.dataset.answer) && game.mode === "decide-and-correct" && document.dispatchEvent(event);
    
    setTimeout(() => {
        options.classList.remove('pe-none');
    }, 1800);

}