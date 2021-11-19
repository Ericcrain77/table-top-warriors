const {Game} = require('../models');

const gameData = [
    {
        game_name: 'Magic: The Gathering'
    },
    {
        game_name: 'TuGiOh!'
    },
    {
        game_name: 'Pokemon'
    }
]

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;