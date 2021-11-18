const router = require("express").Router();

const userRoutes = require("./user-routes");
const deckRoutes = require('./deck-routes');
//other api routes will go here


router.use("/users", userRoutes);
router.use('/decks', deckRoutes);
//other router.use will go here


module.exports = router;