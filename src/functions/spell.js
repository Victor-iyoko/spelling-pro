import { gameDefault } from "../data/default";

export default function spell(e, game, timeOut) {
    if (timeOut) {
        return;
    }
    let time = 300;
    const timeInterval = 500;
    let timeEvent;

    // send an event to pause time
    timeEvent = new CustomEvent('timeControl', { detail: { action: "pause" }});
    document.dispatchEvent(timeEvent);
    
    // this is wrapped in set timeout because div#letters need to be loaded in the dom before any operation is carried out
    setTimeout(() => {        
        const letters = document.getElementById('letters');
        for (let i = 0; i < letters.children.length; i++) {
            setTimeout(() => {
                letters.children[i].children[0]?.classList.remove('opacity-0');
                if (game.word[i]?.toLowerCase() === game.input[i]?.toLowerCase()) {
                    letters.children[i].classList.add('text-success');
                } else {
                    letters.children[i].classList.add('text-danger');
                }

                if (i === letters.children.length - 1) {
                    setTimeout(() => {
                        timeEvent = new CustomEvent('timeControl', { detail: { action: "play" }});
                        document.dispatchEvent(timeEvent);
                    }, 1000);
                }
            }, time);
            time += timeInterval;
        }
    }, 500);
    /* calling the store function here because it changes the currentQuestIndex which
     changes the question and answer thereby preventing the first call from having approrpriate data */
    game.handleClick(game.input);
}