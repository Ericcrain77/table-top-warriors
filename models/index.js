const User = require("./User");
const Game = require('./Game');

//TABLE RELATIONSHIPS WILL GO HERE
User.hasMany(Game, {
    foreignKey: 'host_id'
})

module.exports = {User, Game};