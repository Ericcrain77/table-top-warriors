const router = require('express').Router();
const {Deck, User, Card, Game} = require('../../models');
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
                model: Game,
                attributes: ['game_name']
            }
        ]
    })
    .then(dbCardData => res.json(dbCardData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;