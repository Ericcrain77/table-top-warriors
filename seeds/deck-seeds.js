const {Deck} = require('../models');

const deckData = [
    {// id: 1
        deck_name: "John's First Magic Deck",
        user_id: 1,
        game_id: 1
    },
    {// id: 2
        deck_name: "John's First YuGiOh! Deck",
        user_id: 1,
        game_id: 2
    },
    {// id: 3
        deck_name: "John's First Pokemon Deck",
        user_id: 1,
        game_id: 3
    },
    {// id: 4
        deck_name: "Timothy's First Magic Deck",
        user_id: 2,
        game_id: 1
    },
    {// id: 5
        deck_name: "Timothy's First YuGiOh! Deck",
        user_id: 2,
        game_id: 2
    },
    {// id: 6
        deck_name: "Timothy's First Pokemon Deck",
        user_id: 2,
        game_id: 3
    },
    {// id: 7
        deck_name: "Charles' First Magic Deck",
        user_id: 3,
        game_id: 1
    },
    {// id: 8
        deck_name: "Charles' First YuGiOh! Deck",
        user_id: 3,
        game_id: 2
    },
    {// id: 9
        deck_name: "Charles' First Pokemon Deck",
        user_id: 3,
        game_id: 3
    },
    {// id: 10
        deck_name: "Eric's First Magic Deck",
        user_id: 4,
        game_id: 1
    },
    {// id: 11
        deck_name: "Eric's First YuGiOh! Deck",
        user_id: 4,
        game_id: 2
    },
    {// id: 12
        deck_name: "Eric's First Pokemon Deck",
        user_id: 4,
        game_id: 3
    },
    {// id: 13
        deck_name: "Nachos's First Magic Deck",
        user_id: 5,
        game_id: 1
    },
    {// id: 14
        deck_name: "Nachos's First YuGiOh! Deck",
        user_id: 5,
        game_id: 2
    },
    {// id: 15
        deck_name: "Nachos's First Pokemon Deck",
        user_id: 5,
        game_id: 3
    },
    {// id: 16
        deck_name: "Bandit's First Magic Deck",
        user_id: 6,
        game_id: 1
    },
    {// id: 17
        deck_name: "Bandit's First YuGiOh! Deck",
        user_id: 6,
        game_id: 2
    },
    {// id: 18
        deck_name: "Bandit's First Pokemon Deck",
        user_id: 6,
        game_id: 3
    },
]

const seedDecks = () => Deck.bulkCreate(deckData);

module.exports = seedDecks;
