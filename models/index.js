const User = require("./User");
const Game = require("./Game");
const Deck = require("./Deck");
const Card = require('./Card');

// TABLE RELATIONSHIPS GO HERE

// User has a multitude of decks that belong to them
User.hasMany(Deck, {
    foreignKey: 'deck_owner'
});

// User has a multitude of cards that belong to them
User.hasMany(Card, {
    foreignKey: 'card_owner'
});

// Each deck belongs to a user
Deck.belongsTo(User, {
    foreignKey: 'id'
});

// Each deck belongs to a certain game (i.e. Magic, Pokemon, YuHiOh)
Deck.belongsTo(Game, {
    foreignKey: 'id'
});

// Each deck has a multitude of cards
Deck.hasMany(Card, {
    foreignKey: 'deck_id'
});

// Each game (i.e. Magic, Pokemon, YuHiOh) has many decks
Game.hasMany(Deck, {
    foreignKey: 'game_id'
});

// Each game (i.e. Magic, Pokemon, YuHiOh) has many cards////////////////////////////
Game.hasMany(Card, {
    foreignKey: 'game_id'
});

// Each card belongs to a game///////////////////////////////
Card.belongsTo(Game, {
    foreignKey: 'id'
});

// Each card belongs to a deck
Card.belongsTo(Deck, {
    foreignKey: 'deck_id'
})

// Each card belongs to a user
Card.belongsTo(User, {
    foreignKey: 'id'
});

module.exports = {User, Game, Deck, Card};