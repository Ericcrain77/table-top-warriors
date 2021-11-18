const User = require("./User");
const Game = require("./Game");
const Deck = require("./Deck");
const Card = require('./Card');

//TABLE RELATIONSHIPS WILL GO HERE
User.hasMany(Game, {
    foreignKey: 'host_id'
});

Game.belongsTo(User, {
    foreignKey: "host_id"
});

User.hasMany(Deck, {
    foreignKey: 'deck_owner'
});

Deck.belongsTo(User, {
    foreignKey: "deck_owner"
});

// A card belongs to a deck
// Card.belongsTo(Deck, {

// })
// A deck has many cards
// Deck.hasMany(Card, {

// })

module.exports = {User, Game, Deck, Card};