const User = require("./User");
const Game = require("./Game");
const Deck = require("./Deck");

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

module.exports = {User, Game, Deck};