const settingsDefault = {
        question: {
            dependency: "age",
            number: 10
        },
        time: {
            dependency: "new question",
            number: 10
        },
        class: 1,
        age: 7,
        lifes: 5,
        sound: false
    };

const gameDefault = {
        mode: null,
        start: false,
        questions: [],
        lifes: 0,
        time: {initial: null, current: null, pause: false, dependency: null},
        timer: null,
        lifesArr: [],
        questionAns: 0,
        currentQuestIndex: 0,
        score: 0,
        game0ver: false,
        maxQuestion: null
    };

export { settingsDefault, gameDefault };