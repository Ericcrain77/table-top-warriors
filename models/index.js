const User = require("./User");
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

module.exports = {User, 
                Deck, 
                Card,
                Magic,
                Yugi,
                Poke
            };