// import { UpwardsMobility } from "./Game";
//
// const { moves } = UpwardsMobility;

export const eventsArray = [
    {
        id: 1,
        description: "A mysterious raggedy wizard appears before you and asks the question... 'What is the airspeed velocity of an unladen swallow?'",
        options: [
            "What do you mean? African or European swallow?",
            "I don't know that!",
            "What is an unladen swallow?"
        ],
        onCorrect: "The wizard is dumbfounded and spontaneously combusts into 2 coins which are added to your wallet!",
        onIncorrect: "The wizard slaps you and you move back 3 spaces",
        correctAnswer: 0,
        // item: { name: "Staff of MoMoney", description: "staff of mo money description", effect: moves.staffOfMoMoney }
    },
    {
        id: 2,
        description: "You stumble upon a treasure chest buried in the ground.",
        options: [
            "Open the chest",
            "Leave the chest alone",
            "Kick the chest"
        ],
        onCorrect: "You find a 20 currency and add it to your wallet!",
        onIncorrect: "The chest is booby-trapped and you lose 3 coins",
        correctAnswer: 1,
    },
    {
        id: 3,
        description: "Event 3",
        options: [
            "Not answer",
            "Answer",
            "Not Answer"
        ],
        onCorrect: "Good thing happens",
        onIncorrect: "Bad thing happens",
        correctAnswer: 1,
    },
    {
        id: 4,
        description: "You find a cat.",
        options: [
            "Pet the cat",
            "Kick the cat",
            "Feed the cat"
        ],
        onCorrect: "The cat is happy and gives you 2 coins",
        onIncorrect: "The cat becomes violently angry and attacks you, you lose 3 coins",
        correctAnswer: 0,
    },
];