function reset(options) {
 for (let i = 0; i < options.length; i++) {
        options[i].children[0].checked = false;
        options[i].children[2].classList.add('opacity-0');
        options[i].children[2].classList.remove('text-success');
        options[i].children[2].classList.remove('text-danger');
    }
}

export default function multipleChoice(e, game, timeOut) {
    const optionsTag = document.getElementById("multi-choice").children;
    const checkboxes = [];  
    for (let i = 0; i < optionsTag.length; i++) {
        checkboxes.push(optionsTag[i].children[0]);
    }
    
    if (timeOut) {
        reset(optionsTag);
        return;
    }
    
    let time = 500;
    const timeInterval = 1000;
    let scoreEvent;
    let timeEvent;

    if (e.target.dataset.clicked === "false") {
        e.target.classList.add('pe-none');
        timeEvent = new CustomEvent('timeControl', { detail: { action: "pause" }});
        document.dispatchEvent(timeEvent);
        scoreEvent = new CustomEvent('scoreAction', { detail: { action: "time" }});
        document.dispatchEvent(scoreEvent);
        e.target.dataset.clicked = "true";
        e.target.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="30" height="30"><circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" r="20" cx="40" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;"keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" r="20" cx="100" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#FFFFFF" stroke="#FFFFFF" stroke-width="2" r="20" cx="160" cy="65"><animate attributeName="cy" calcMode="spline" dur="2" values="65;135;65;"keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>';

        if (game.questionState.chooseCorrect) {
            for (let i = 0; i < optionsTag.length; i++) {
                setTimeout(() => {
                    optionsTag[i].children[2].classList.remove('opacity-0');
                    if (game.questionState.words[i][1] === checkboxes[i].checked) {
                        optionsTag[i].children[2].textContent = "+5";
                        optionsTag[i].children[2].classList.add('text-success');
                        scoreEvent = new CustomEvent('scoreAction', { detail: { action: "plus" }});
                        document.dispatchEvent(scoreEvent);
                    } else {
                        optionsTag[i].children[2].textContent = "-5";
                        optionsTag[i].children[2].classList.add('text-danger');
                        scoreEvent = new CustomEvent('scoreAction', { detail: { action: "minus" }});
                        document.dispatchEvent(scoreEvent);
                    }
                }, time);
                time += timeInterval;
            }
        } else {
            for (let i = 0; i < optionsTag.length; i++) {
                setTimeout(() => {
                optionsTag[i].children[2].classList.remove('opacity-0');
                if (game.questionState.words[i][1] === !checkboxes[i].checked) {
                    optionsTag[i].children[2].textContent = "+5";
                    optionsTag[i].children[2].classList.add('text-success');
                    scoreEvent = new CustomEvent('scoreAction', { detail: { action: "plus" }});
                    document.dispatchEvent(scoreEvent);
                } else {
                    optionsTag[i].children[2].textContent = "-5";
                    optionsTag[i].children[2].classList.add('text-danger');
                    scoreEvent = new CustomEvent('scoreAction', { detail: { action: "minus" }});
                    document.dispatchEvent(scoreEvent);
                }
            }, time);
            time += timeInterval;
            }
        }
        setTimeout(() => {
            e.target.dataset.clicked = "false";
            setTimeout(() => {
                reset(optionsTag);
                timeEvent = new CustomEvent('timeControl', { detail: { action: "play" }});
                document.dispatchEvent(timeEvent);
                e.target.classList.remove('pe-none');
                e.target.innerHTML = '';
                e.target.textContent = 'DONE';
            }, 1000);
        }, timeInterval * 5);
    } else {
      alert("Processing answers...");
    }
    /* calling the store function here because it changes the currentQuestIndex which
     changes the question and answer thereby preventing the first call from having approrpriate data */
    // game.handleClick(e.target.textContent);
}