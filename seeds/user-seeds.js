const {User} = require("../models");

const userData = [
    {
        username: "johnboi",
        email: "fakeemail1@gmail.com",
        password: "password"
    },
    {
        username: "timothy",
        email: "fakeemail2@gmail.com",
        password: "password"
    },
    {
        username: "charles",
        email: "fakeemail3@gmail.com",
        password: "password"
    },
    {
        username: "eric",
        email: "fakeemail4@gmail.com",
        password: "password"
    },
    {
        username: "nacho",
        email: "fakeemail5@gmail.com",
        password: "password"
    },
    {
        username: "bandit",
        email: "fakeemail6@gmail.com",
        password: "password"
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;