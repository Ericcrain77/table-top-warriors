const User = require("./User");
const Game = require("./Game");

//TABLE RELATIONSHIPS WILL GO HERE
User.hasMany(Game, {
    foreignKey: 'host_id'
});

User.hasMany(Deck, {
    foreignKey: 'deck_owner'
});

module.exports = {User, Game};