const {Game} = require('../models');

const gameData = [
    {
        game_name: 'Magic: The Gathering'
    },
    {
        game_name: 'Pokemon'
    },
    {
        game_name: 'YuGiOh!'
    }
]

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;