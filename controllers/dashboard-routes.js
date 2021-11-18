const router = require("express").Router();
const sequelize = require("../config/connection");
const {User, Game, Deck} = require("../models");
//withAuth will go here once we have created the session
// const withAuth = require("../utils/auth");


//render user-home. withAuth will be added to this
router.get("/", (req, res) => {
    res.render("user-home");
});

//render deck collection page. withAuth will be added to this
router.get("/collection", (req, res) => {
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

//render deck creation page. withAuth will be added to this
router.get("/create", (req, res) => {
    res.render("deck-creation");
})

//render deck edit page. withAuth will be added to this
router.get("/edit/:id", (req, res) => {
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