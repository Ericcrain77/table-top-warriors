const seedUsers = require("./user-seeds");
const seedGames = require("./game-seeds");
const seedDecks = require("./deck-seeds");
const seedCards = require('./card-seeds');
//other seeds go here


const sequelize = require("../config/connection");

const seedAll = async () => {
    await sequelize.sync({force: true});
    console.log("\n----- DATABASE SYNCED -----\n");

    await seedUsers();
    console.log("\n----- USERS SEEDED -----\n");

    await seedGames();
    console.log("\n----- GAMES SEEDED -----\n");

    await seedDecks();
    console.log("\n----- DECKS SEEDED -----\n");

    await seedCards();
    console.log("\n----- CARDS SEEDED -----\n");

    console.log("\n----- SEEDS COMPLETE -----\n")

    //other seed functions will go here
};

seedAll();