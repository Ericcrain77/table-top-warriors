const {Deck} = require('../models');

const deckData = [
    {// id: 1
        deck_name: "John's First Magic Deck",
        game: "Magic: The Gathering",
        user_id: 1
    },
    {// id: 2
        deck_name: "John's First YuGiOh! Deck",
        game: "YuGiOh!",
        user_id: 1
    },
    {
        deck_name: "John's First Pokemon Deck",
        game: "Pokemon",
        user_id: 1
    }
    // {id: 3
    //     deck_name: "John's First Pokemon Deck",
    //     game: "Pokemon",
    //     deck: [
    //         {
    //             name: "Alakazam-EX",
    //             supertype: "Pokemon",
    //             subtypes: [
    //                 "Basic",
    //                 "EX"
    //             ],
    //             hp: 160,
    //             types: [
    //                 "Psychic"
    //             ],
    //             evolvesTo: [
    //                 "M Alakazam-EX"
    //             ],
    //             abilities: [
    //                 {
    //                     name: "Kinesis",
    //                     text: "When you play M Alakazam blah blah blah",
    //                     type: "Ability"
    //                 }
    //             ],
    //             attacks: [
    //                 {
    //                     name: "Suppression",
    //                     cost: [
    //                         "Psychic",
    //                         "Colorless"
    //                     ],
    //                     convertedEnergyCost: 2,
    //                     damage: "",
    //                     text: "Put 3 damage on blah blah blah"
    //                 }
    //             ],
    //             weaknesses: [
    //                 {
    //                     type: "Psychic",
    //                     value: "x2"
    //                 }
    //             ],
    //             retreatCost: [
    //                 "Colorless",
    //                 "Colorless"
    //             ]
    //         }
    //     ],
    //     user_id: 1
    // },
    // {// id: 4
    //     deck_name: "Timothy's First Magic Deck",
    //     game: "Magic: The Gathering",
    //     deck: [],
    //     user_id: 2
    // },
    // {// id: 5
    //     deck_name: "Timothy's First YuGiOh! Deck",
    //     game: "YuGiOh!",
    //     deck: [],
    //     user_id: 2
    // },
    // {// id: 6
    //     deck_name: "Timothy's First Pokemon Deck",
    //     game: "Pokemon",
    //     deck: [],
    //     user_id: 2
    // },
    // {// id: 7
    //     deck_name: "Charles' First Magic Deck",
    //     game: "Magic: The Gathering",
    //     deck: [],
    //     user_id: 3
    // },
    // {// id: 8
    //     deck_name: "Charles' First YuGiOh! Deck",
    //     game: "YuGiOh!",
    //     deck: [],
    //     user_id: 3
    // },
    // {// id: 9
    //     deck_name: "Charles' First Pokemon Deck",
    //     game: "Pokemon",
    //     deck: [],
    //     user_id: 3
    // },
    // {// id: 10
    //     deck_name: "Eric's First Magic Deck",
    //     game: "Magic: The Gathering",
    //     deck: [],
    //     user_id: 4
    // },
    // {// id: 11
    //     deck_name: "Eric's First YuGiOh! Deck",
    //     game: "YuGiOh!",
    //     deck: [],
    //     user_id: 4
    // },
    // {// id: 12
    //     deck_name: "Eric's First Pokemon Deck",
    //     game: "Pokemon",
    //     deck: [],
    //     user_id: 4
    // },
    // {// id: 13
    //     deck_name: "Nachos's First Magic Deck",
    //     game: "Magic: The Gathering",
    //     deck: [],
    //     user_id: 5
    // },
    // {// id: 14
    //     deck_name: "Nachos's First YuGiOh! Deck",
    //     game: "YuGiOh!",
    //     deck: [],
    //     user_id: 5
    // },
    // {// id: 15
    //     deck_name: "Nachos's First Pokemon Deck",
    //     game: "Pokemon",
    //     deck: [],
    //     user_id: 5
    // },
    // {// id: 16
    //     deck_name: "Bandit's First Magic Deck",
    //     game: "Magic: The Gathering",
    //     deck: [],
    //     user_id: 6
    // },
    // {// id: 17
    //     deck_name: "Bandit's First YuGiOh! Deck",
    //     game: "YuGiOh!",
    //     deck: [],
    //     user_id: 6
    // },
    // {// id: 18
    //     deck_name: "Bandit's First Pokemon Deck",
    //     game: "Pokemon",
    //     deck: [],
    //     user_id: 6
    // },
]

const seedDecks = () => Deck.bulkCreate(deckData);

module.exports = seedDecks;
