const User = require("./User");
const Game = require("./Game");
const Deck = require("./Deck");
const Card = require('./Card');

// TABLE RELATIONSHIPS GO HERE

// Each deck belongs to a certain game (i.e. Magic, Pokemon, YuGiOh)
Deck.belongsTo(Game, {});

// Each deck has a multitude of cards
Deck.hasMany(Card, {});

// Each game (i.e. Magic, Pokemon, YuGiOh) has many decks
Game.hasMany(Deck, {});

// Each game (i.e. Magic, Pokemon, YuGiOh) has many cards
Game.hasMany(Card, {});

// Each card belongs to a game
Card.belongsTo(Game, {});

// Each card belongs to a deck
Card.belongsTo(Deck, {});


module.exports = {User, Game, Deck, Card};