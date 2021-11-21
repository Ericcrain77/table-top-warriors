const router = require("express").Router();

const userRoutes = require("./user-routes");
const cardRoutes = require('./card-routes');
const deckRoutes = require('./deck-routes');
// const gameRoutes = require('./game-routes');
//other api routes will go here


router.use("/users", userRoutes);
router.use('/cards', cardRoutes);
router.use('/decks', deckRoutes);
// router.use('/games', gameRoutes);
//other router.use will go here


module.exports = router;