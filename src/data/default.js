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
        lifes: null,
        questionAns: null,
        score: null
    };

export { settingsDefault, gameDefault };