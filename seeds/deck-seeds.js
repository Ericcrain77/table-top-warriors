const {Deck} = require('../models');

const deckData = [
    {
        deck_name: "John's First Magic Deck",
        deck_owner: 1,
        game_id: 1
    },
    {
        deck_name: "John's First YuGiOh! Deck",
        deck_owner: 1,
        game_id: 3
    },
    {
        deck_name: "John's First Pokemon Deck",
        deck_owner: 1,
        game_id: 2
    },
    {
        deck_name: "Timothy's First Magic Deck",
        deck_owner: 2,
        game_id: 1
    },
    {
        deck_name: "Timothy's First YuGiOh! Deck",
        deck_owner: 2,
        game_id: 3
    },
    {
        deck_name: "Timothy's First Pokemon Deck",
        deck_owner: 2,
        game_id: 2
    },
    {
        deck_name: "Charles' First Magic Deck",
        deck_owner: 3,
        game_id: 1
    },
    {
        deck_name: "Charles' First YuGiOh! Deck",
        deck_owner: 3,
        game_id: 3
    },
    {
        deck_name: "Charles' First Pokemon Deck",
        deck_owner: 3,
        game_id: 2
    },
    {
        deck_name: "Eric's First Magic Deck",
        deck_owner: 4,
        game_id: 1
    },
    {
        deck_name: "Eric's First YuGiOh! Deck",
        deck_owner: 4,
        game_id: 3
    },
    {
        deck_name: "Eric's First Pokemon Deck",
        deck_owner: 4,
        game_id: 2
    },
    {
        deck_name: "Nachos's First Magic Deck",
        deck_owner: 5,
        game_id: 1
    },
    {
        deck_name: "Nachos's First YuGiOh! Deck",
        deck_owner: 5,
        game_id: 3
    },
    {
        deck_name: "Nachos's First Pokemon Deck",
        deck_owner: 5,
        game_id: 2
    },
    {
        deck_name: "Bandit's First Magic Deck",
        deck_owner: 6,
        game_id: 1
    },
    {
        deck_name: "Bandit's First YuGiOh! Deck",
        deck_owner: 6,
        game_id: 3
    },
    {
        deck_name: "Bandit's First Pokemon Deck",
        deck_owner: 6,
        game_id: 2
    },
]

const seedDecks = () => Deck.bulkCreate(deckData);

module.exports = seedDecks;
