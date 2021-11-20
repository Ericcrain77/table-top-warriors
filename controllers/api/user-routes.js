const router = require("express").Router();
const {User, Deck, Card} = require("../../models");
//login authentication will go here

//route to get all users
router.get("/", (req, res) => {
    User.findAll({
        attributes: {exclude: ["password"]}
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//route to get a single user
router.get('/:id', (req, res) => {
    User.findOne({
        attributes: { exclude: ['password'] },
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Deck,
                attributes: [
                    'id',
                    'deck_name',
                    'game_id'
                ],
                include: {
                    model: Card,
                    attributes: [
                        'id',
                        'card_name',
                        'game_id'
                    ]
                }
            }
        ]
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({ message: 'No user found with this id' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;