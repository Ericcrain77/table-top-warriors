const {User} = require("../models");
require('dotenv').config();
const bcrypt = require('bcrypt');

let userData = [
    {
        username: "johnboi",
        email: "fakeemail1@gmail.com",
        password: process.env.DB_USER1_PW
    },
    {
        username: "timothy",
        email: "fakeemail2@gmail.com",
        password: process.env.DB_USER2_PW
    },
    {
        username: "charles",
        email: "fakeemail3@gmail.com",
        password: process.env.DB_USER3_PW
    },
    {
        username: "eric",
        email: "fakeemail4@gmail.com",
        password: process.env.DB_USER4_PW
    },
    {
        username: "nacho",
        email: "fakeemail5@gmail.com",
        password: process.env.DB_USER5_PW
    },
    {
        username: "bandit",
        email: "fakeemail6@gmail.com",
        password: process.env.DB_USER6_PW
    }
];

function hashSeededPasswords(userData) {

    for (let i = 0; i < userData.length; i++) {
        let password = userData[i].password;

        let hashedPassword = bcrypt.hashSync(password, 10);
        console.log(hashedPassword);

        userData[i].password = hashedPassword;
    }
}

hashSeededPasswords(userData);

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;