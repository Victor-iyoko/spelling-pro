export default function decide(e, game, timeOut) {
    console.log(e.currentTarget.dataset.answer)
    const options = document.getElementById('decide-options');
    if (timeOut) {
        options.classList.remove('pe-none');
        return;
    }
    options.classList.add('pe-none');
    game.handleClick(e.currentTarget.dataset.answer); //using currentTarget due to event bubbling
    
    setTimeout(() => {
        options.classList.remove('pe-none');
    }, 1800);

}