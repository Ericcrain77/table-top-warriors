const {Game} = require('../models');

const gameData = [
    {
        host_id: 1,
        lobby_name: "johnboi's game room"
    },
    {
        host_id: 2,
        lobby_name: "timothy's game room"
    },
    {
        host_id: 3,
        lobby_name: "charles' game room"
    },
    {
        host_id: 4,
        lobby_name: "eric's game room"
    },
    {
        host_id: 5,
        lobby_name: "jnachos's game room"
    },
    {
        host_id: 6,
        lobby_name: "bandit's game room"
    },
]

const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;