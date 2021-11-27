const router = require("express").Router();
const sequelize = require("../config/connection");

const {Magic, Poke, Yugi, Deck, Card, User} = require("../models");

const withAuth = require("../utils/auth");


//render user-home
router.get("/", withAuth, (req, res) => {
    res.render("user-home", {
        loggedIn: true
    });
});

//render deck collection page
router.get("/collection", withAuth, (req, res) => {
    //WILL LOOK SOMETHING LIKE THIS ONCE DECK MODEL AND SESSION ARE FINISHED
    Deck.findAll({
        where: {
            user_id: req.session.user_id
        }
    })
    .then(dbDeckData => {
        const decks = dbDeckData.map(deck => deck.get({plain: true}));
        res.render("collection", {
            decks,
            loggedIn: true
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    // res.render("collection");
});

//render deck creation page
router.get("/create", withAuth, (req, res) => {

    res.render("deck-creation", {
        loggedIn: true
    });
})

//render deck edit page
router.get("/edit/:id", withAuth, (req, res) => {
    Card.findAll({
        where: {
            deck_id: req.params.id
        },
        include: [
            {
                model: Deck,
                attributes: ['id', 'deck_name', "game"]
            },
            {
                model: Magic,
                attributes: [
                    "manaCostMagic",
                    "cmcMagic",
                    "colorsMagic",
                    "colorIdentityMagic",
                    "typeMagic",
                    "textMagic",
                    "card_id",
                    "deck_id"
                ]
            },
            {
                model: Yugi,
                attributes: [
                    "levelYugi",
                    "attributeYugi",
                    "raceYugi",
                    "typeYugi",
                    "descYugi",
                    "atkYugi",
                    "defYugi",
                    "card_id",
                    "deck_id"
                ]
            },
            {
                model: Poke,
                attributes: [
                    "supertypePoke",
                    "subtypesPoke",
                    "hpPoke",
                    "typesPoke",
                    "evolvesToPoke",
                    "abilitiesPoke",
                    "attacksPoke",
                    "weaknessesPoke",
                    "retreatCostPoke",
                    "card_id",
                    "deck_id"
                ]
            }
        ]
    })
    .then(dbCardData => {
        const cards = dbCardData.map(card => card.get({plain: true}));
        res.render("deck-edit", {
            cards,
            loggedIn: true
        });
    })
});


module.exports = router;