const router = require('express').Router();
const {Deck, User, Card} = require('../../models');
const withAuth = require('../../utils/auth');


//route to get all decks
router.get('/', (req, res) => {
    Deck.findAll({
        include: [
            {
                model: User,
                attributes: ['username']
            },
        ]
    })
    .then(dbDeckData => res.json(dbDeckData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//route to get a single deck
router.get('/:id', (req, res) => {
    Deck.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['username', 'email']
            },
            {
                model: Card,
                attributes: ['id', 'card_name']
            }
        ]
    })
    .then(dbDeckData => {
        if (!dbDeckData) {
            res.status(404).json({ message: 'No deck found with this id' });
            return;
        }
        res.json(dbDeckData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//route to create a deck
router.post('/', withAuth, (req, res) => {
    Deck.create({
        deck_name: req.body.deck_name,
        deck_owner: req.session.deck_owner,
        game_id: req.body.game_id
    })
    .then(dbDeckData => res.json(dbDeckData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//route to updata a deck
router.put('/:id', withAuth, (req, res) => {
    Deck.update(
        {
            deck_name: req.body.deck_name
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbDeckData => {
        if (!dbDeckData) {
            res.status(404).json({ message: 'No deck found with this id' });
            return;
        }
        res.json(dbDeckData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//route to delete a deck
router.delete('/:id', withAuth, (req, res) => {
    Deck.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbDeckData => {
        if (!dbDeckData) {
            res.status(404).json({ message: 'No deck found with this id' });
            return;
        }
        res.json(dbDeckData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;