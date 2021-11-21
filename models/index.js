const User = require("./User");
// const Game = require("./Game");
const Deck = require("./Deck");
const Card = require('./Card');
const Magic = require("./Magic");
const Yugi = require("./Yugi");
const Poke = require("./Poke");

// TABLE RELATIONSHIPS GO HERE

// Each user has many decks
User.hasMany(Deck, {
    foreignKey: 'user_id'
});

// Each user has many cards
// User.hasMany(Card, {
//     foreignKey: 'user_id'
// })

// Each deck belongs to a user
Deck.belongsTo(User, {
    foreignKey: 'user_id'
});

Deck.hasMany(Card, {
    foreignKey: "deck_id"
});

Card.belongsTo(Deck, {
    foreignKey: "deck_id"
});

Card.hasMany(Magic, {
    foreignKey: "card_id"
});

Magic.belongsTo(Card, {
    foreignKey: "card_id"
});

Card.hasMany(Yugi, {
    foreignKey: "card_id"
});

Yugi.belongsTo(Card, {
    foreignKey: "card_id"
});

Card.hasMany(Poke, {
    foreignKey: "card_id"
});

Poke.belongsTo(Card, {
    foreignKey: "card_id"
});

// Each deck belongs to a certain game (i.e. Magic, Pokemon, YuGiOh)
// Deck.belongsTo(Game, {
//     foreignKey: 'game_id'
// });

// Each deck has a multitude of cards
// Deck.hasMany(Card, {
//     foreignKey: 'deck_id'
// });

// Each game (i.e. Magic, Pokemon, YuGiOh) has many decks
// Game.hasMany(Deck, {
//     foreignKey: 'game_id'
// });

// Each game (i.e. Magic, Pokemon, YuGiOh) has many cards
// Game.hasMany(Card, {
//     foreignKey: 'game_id'
// });

// Each card belongs to a game
// Card.belongsTo(Game, {
//     foreignKey: 'game_id'
// });

// Each card belongs to a certain user
// Card.belongsTo(User, {
//     foreignKey: 'user_id'
// });

// Each card belond to a specific deck
// Card.belongsTo(Deck, {
//     foreignKey: 'deck_id'
// });

module.exports = {User, 
                // Game, 
                Deck, 
                Card,
                Magic,
                Yugi,
                Poke
            };