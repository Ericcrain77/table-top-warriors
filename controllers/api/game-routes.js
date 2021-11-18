const router = require('express').Router();
const {Game, Deck, User} = require('../../models');
const withAuth = require('../../utils/auth');

// route to get all games
// -- Pokemon
// -- YuGiOh!
// -- Magic: The Gathering

// Game model needs to be edited to handle decks and new card model

module.exports = router;