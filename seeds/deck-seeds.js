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
]

const seedDecks = () => Deck.bulkCreate(deckData);

module.exports = seedDecks;
