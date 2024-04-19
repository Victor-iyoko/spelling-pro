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
        start: false,
        questions: [],
        lifes: 0,
        time: {initial: null, current: null, dependency: null},
        timer: null,
        lifesArr: [],
        questionAns: 0,
        currentQuestIndex: 0,
        score: 0
    };

export { settingsDefault, gameDefault };