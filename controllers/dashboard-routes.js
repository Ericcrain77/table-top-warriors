const router = require("express").Router();
const sequelize = require("../config/connection");
const {User, Game, Deck} = require("../models");
const withAuth = require("../utils/auth");


//render user-home
router.get("/", withAuth, (req, res) => {
    res.render("user-home");
});

//render deck collection page
router.get("/collection", withAuth, (req, res) => {
    //WILL LOOK SOMETHING LIKE THIS ONCE DECK MODEL AND SESSION ARE FINISHED
    // Deck.findAll({
    //     where: {
    //         deck_owner: req.session.deck_owner
    //     }
    // })
    // .then(dbDeckData => {
    //     const decks = dbDeckData.map(deck => deck.get({plain: true}));
    //     res.render("collection", {
    //         decks,
    //         loggedIn: true
    //     });
    // })
    // .catch(err => {
    //     console.log(err);
    //     res.status(500).json(err);
    // });
    res.render("collection");
});

//render deck creation page
router.get("/create", withAuth, (req, res) => {
    res.render("deck-creation");
})

//render deck edit page
router.get("/edit/:id", withAuth, (req, res) => {
    //WILL LOOK SOMETHING LIKE THIS ONCE DECK MODEL AND SESSION ARE FINISHED
    // Deck.findOne({
    //     where: {
    //         id: req.params.id
    //     }
    // })
    // .then(dbDeckData => {
    //     if(dbDeckData){
    //         const deck = dbDeckData.get({plain: true});

    //         res.render("deck-edit", {
    //             deck,
    //             loggedIn: true
    //         });
    //     }
    //     else{
    //         res.status(404).end();
    //     }
    // })
    // .catch(err => {
    //     res.status(500).json(err);
    // });
    res.render("deck-edit");
});


module.exports = router;