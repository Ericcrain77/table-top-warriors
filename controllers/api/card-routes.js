const router = require('express').Router();
const {Deck, User, Card, Magic, Yugi, Poke} = require('../../models');
const withAuth = require('../../utils/auth');

//route to get all cards
router.get('/', (req, res) => {
    Card.findAll({
        include: [
            {
                model: Deck,
                attributes: ['deck_name']
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
    .then(dbCardData => res.json(dbCardData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//route to get a single card
router.get('/:id', (req, res) => {
    Card.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Deck,
                attributes: ['deck_name']
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
        if (!dbCardData) {
            res.status(404).json({ message: 'No card found with this id' });
            return;
        }
        res.json(dbCardData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//route to create a new card
router.post('/', withAuth, (req, res) => {
    Card.create({
        name: req.body.name,
        game: req.body.game,
        deck_id: req.body.deck_id
    })
    .then(dbCardData => {
        if(dbCardData.game === "Magic: The Gathering"){
            Magic.create({
                manaCostMagic: req.body.manaCostMagic,
                cmcMagic: req.body.cmcMagic,
                colorsMagic: req.body.colorsMagic,
                colorIdentityMagic: req.body.colorIdentityMagic,
                typeMagic: req.body.typeMagic,
                textMagic: req.body.textMagic,
                card_id: dbCardData.id,
                deck_id: dbCardData.deck_id
            })
            .then(dbCardData => res.json(dbCardData))
        }
        else if(dbCardData.game === "YuGiOh!"){
            Yugi.create({
                levelYugi: req.body.levelYugi,
                attributeYugi: req.body.attributeYugi,
                raceYugi: req.body.raceYugi,
                typeYugi: req.body.typeYugi,
                descYugi: req.body.descYugi,
                atkYugi: req.body.atkYugi,
                defYugi: req.body.defYugi,
                card_id: dbCardData.id,
                deck_id: dbCardData.deck_id
            })
            .then(dbCardData => res.json(dbCardData))
        }
        else{
            Poke.create({
                supertypePoke: req.body.supertypePoke,
                subtypesPoke: req.body.subtypesPoke,
                hpPoke: req.body.hpPoke,
                typesPoke: req.body.typesPoke,
                evolvesToPoke: req.body.evolvesToPoke,
                abilitiesPoke: req.body.abilitiesPoke,
                attacksPoke: req.body.attacksPoke,
                weaknessesPoke: req.body.weaknessesPoke,
                retreatCostPoke: req.body.retreatCostPoke,
                card_id: dbCardData.id,
                deck_id: dbCardData.deck_id
            })
            .then(dbCardData => res.json(dbCardData))
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//route to update a cards data
//NOT SURE IF WE NEED THIS ROUTE, SINCE CARD INFO IS SET IN STONE YOU WOULDN'T NEED TO UPDATE IT 
// router.put('/:id', withAuth, (req, res) => {
//     Card.update(
//         {
//             card_name: req.body.card_name,
//             deck_id: req.body.deck_id
//         },
//         {
//             where: {
//                 id: req.params.id
//             }
//         }
//     )
//     .then(dbCardData => {
//         if (!dbCardData) {
//             res.status(404).json({ message: 'No card found with this id' });
//             return;
//         }
//         res.json(dbCardData);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     });
// });

//route to delete a card
router.delete('/:id', withAuth, (req, res) => {
    Card.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCardData => {
        if (!dbCardData) {
            res.status(404).json({ message: 'No card found with this id' });
            return;
        }
        res.json(dbCardData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;