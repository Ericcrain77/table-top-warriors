const router = require("express").Router();
const sequelize = require("../config/connection");
const {User, Deck, Game} = require("../models");

//render homepage. Maybe we could get and display all 3 games here?
router.get("/", (req, res) => {
    res.render("homepage");
});

//render login page
router.get("/login", (req, res) => {
    //if user is logged in they are redirected to the homepage
    //leave this commented out until session has been created
    // if(req.session.loggedIn){
    //     res.redirect("/");
    //     return;
    // }

    res.render("login");
})

module.exports = router;