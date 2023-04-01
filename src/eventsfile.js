import { UpwardsMobility } from "./Game";
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
        // item name:
        // item description:
        // item effect:
        item: { name: "Staff of MoMoney", description: "staff of mo money description", effect: UpwardsMobility.moves.staffOfMoMoney }
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
        // apply buff or we pick up item
        // eventResult: { description: "The wizard also drops his staff which you can use to magically " +
        //         "generate a random currency between 0 and 10!", action: moves.pickUpItem(1)},
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
        // inCorrectEffect: UpwardsMobility.moves.loseCurrency(3),
        correctAnswer: 0,
    },
];

export const itemsArray = [
    {
        id: 1,
        name: "Staff of MoMoney",
        description: "Randomly generate currency between 0 and 10",
        // effect: UpwardsMobility.moves.staffOfMoMoney
    }
    ];

export const buffsArray = [
    {
        id: 1,
        name: "Buff of MoMoney",
        description: "For your next 3 turns, you will gain 2 currency per turn.",
        effect: "",
        duration: 5,
    }
    ];
