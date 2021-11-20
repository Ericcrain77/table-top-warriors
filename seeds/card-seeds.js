const {Card} = require('../models');

const cardData = [
    {// johnboi magic
        card_name: 'Nicol Bolas, God-Pharoah',
        user_id: 1,
        deck_id: 1,
        game_id: 1
    },
    {
        card_name: 'Nissa, Vastwood Seer',
        user_id: 1,
        deck_id: 1,
        game_id: 1
    },
    {
        card_name: 'Thassa, God of the Sea',
        user_id: 1,
        deck_id: 1,
        game_id: 1
    },
    {// johnboi YuGiOh!
        card_name: 'Fairy Tail - Snow',
        user_id: 1,
        deck_id: 2,
        game_id: 2
    },
    {
        card_name: 'Breakthrough Skill',
        user_id: 1,
        deck_id: 2,
        game_id: 2
    },
    {
        card_name: 'Gold Sarcophagus',
        user_id: 1,
        deck_id: 2,
        game_id: 2
    },
    {// johnboi pokemon
        card_name: 'Pangoro',
        user_id: 1,
        deck_id: 3,
        game_id: 3
    },
    {
        card_name: 'Electrode',
        user_id: 1,
        deck_id: 3,
        game_id: 3
    },
    {
        card_name: 'Escavalier',
        user_id: 1,
        deck_id: 3,
        game_id: 3
    },
    {// timothy magic
        card_name: 'Maze of Ith',
        user_id: 2,
        deck_id: 4,
        game_id: 1
    },
    {
        card_name: 'Skithiryx, the Blight Dragon',
        user_id: 2,
        deck_id: 4,
        game_id: 1
    },
    {
        card_name: 'Primordial Hydra',
        user_id: 2,
        deck_id: 4,
        game_id: 1
    },
    {// timothy YuGiOh!
        card_name: 'Golden Ladybug',
        user_id: 2,
        deck_id: 5,
        game_id: 2
    },
    {
        card_name: 'Foolish Burial',
        user_id: 2,
        deck_id: 5,
        game_id: 2
    },
    {
        card_name: 'Tragoedia',
        user_id: 2,
        deck_id: 5,
        game_id: 2
    },
    {// timothy pokemon
        card_name: 'Rhydon',
        user_id: 2,
        deck_id: 6,
        game_id: 3
    },
    {
        card_name: 'Togepi',
        user_id: 2,
        deck_id: 6,
        game_id: 3
    },
    {
        card_name: 'Houndoom',
        user_id: 2,
        deck_id: 6,
        game_id: 3
    },
    {// charles magic
        card_name: 'Purphoros, God of the Forge',
        user_id: 3,
        deck_id: 7,
        game_id: 1
    },
    {
        card_name: 'Ral Zarek',
        user_id: 3,
        deck_id: 7,
        game_id: 1
    },
    {
        card_name: 'Frontier Siege',
        user_id: 2,
        deck_id: 7,
        game_id: 1
    },
    {// charles YuGiOh!
        card_name: 'Nimble Momonga',
        user_id: 3,
        deck_id: 8,
        game_id: 2
    },
    {
        card_name: 'Breaker the Magical Warrior',
        user_id: 3,
        deck_id: 8,
        game_id: 2
    },
    {
        card_name: 'D.D. Esper Star Sparrow',
        user_id: 3,
        deck_id: 8,
        game_id: 2
    },
    {// charles pokemon
        card_name: 'Milotic',
        user_id: 3,
        deck_id: 9,
        game_id: 3
    },
    {
        card_name: 'Drifloon',
        user_id: 3,
        deck_id: 9,
        game_id: 3
    },
    {
        card_name: 'Machamp',
        user_id: 3,
        deck_id: 9,
        game_id: 3
    },
    {// eric magic
        card_name: 'Kiora, Master of the Depths',
        user_id: 4,
        deck_id: 10,
        game_id: 1
    },
    {
        card_name: 'Return to Dust',
        user_id: 4,
        deck_id: 10,
        game_id: 1
    },
    {
        card_name: 'Sheoldred, Whispering One',
        user_id: 4,
        deck_id: 10,
        game_id: 1
    },
    {// eric YuGiOh!
        card_name: 'Dark Hole',
        user_id: 4,
        deck_id: 11,
        game_id: 2
    },
    {
        card_name: 'Threatening Roar/Waboku',
        user_id: 4,
        deck_id: 11,
        game_id: 2
    },
    {
        card_name: 'Pot of Duality',
        user_id: 4,
        deck_id: 11,
        game_id: 2
    },
    {// eric pokemon
        card_name: 'Tyrantrum',
        user_id: 4,
        deck_id: 12,
        game_id: 3
    },
    {
        card_name: 'Crobat',
        user_id: 4,
        deck_id: 12,
        game_id: 3
    },
    {
        card_name: 'Vikavolt',
        user_id: 4,
        deck_id: 12,
        game_id: 3
    },
    {// nacho magic
        card_name: 'Narset Transcendent',
        user_id: 5,
        deck_id: 13,
        game_id: 1
    },
    {
        card_name: 'NLand Tax',
        user_id: 5,
        deck_id: 13,
        game_id: 1
    },
    {
        card_name: 'Temporal Mastery',
        user_id: 5,
        deck_id: 13,
        game_id: 1
    },
    {// nacho YuGiOh!
        card_name: 'Beast King Barbaros',
        user_id: 5,
        deck_id: 14,
        game_id: 2
    },
    {
        card_name: 'Called by the Grave',
        user_id: 5,
        deck_id: 14,
        game_id: 2
    },
    {
        card_name: 'The Monarchs Stormforth',
        user_id: 5,
        deck_id: 14,
        game_id: 2
    },
    {// nacho pokemon
        card_name: 'Talonflame',
        user_id: 5,
        deck_id: 15,
        game_id: 3
    },
    {
        card_name: 'Smeargle',
        user_id: 5,
        deck_id: 15,
        game_id: 3
    },
    {
        card_name: 'Mudkip',
        user_id: 5,
        deck_id: 15,
        game_id: 3
    },
    {// bandit magic
        card_name: 'Utvara Hellkite',
        user_id: 6,
        deck_id: 16,
        game_id: 1
    },
    {
        card_name: 'Tamiyo, Field Researcher',
        user_id: 6,
        deck_id: 16,
        game_id: 1
    },
    {
        card_name: 'Barals Expertise',
        user_id: 6,
        deck_id: 16,
        game_id: 1
    },
    {// bandit YuGiOh!
        card_name: 'Terraforming',
        user_id: 6,
        deck_id: 17,
        game_id: 2
    },
    {
        card_name: 'Borreload Dragon',
        user_id: 6,
        deck_id: 17,
        game_id: 2
    },
    {
        card_name: 'Scrap-Iron Scarecrow',
        user_id: 6,
        deck_id: 17,
        game_id: 2
    },
    {// bandit pokemon
        card_name: 'Porygon',
        user_id: 6,
        deck_id: 18,
        game_id: 3
    },
    {
        card_name: 'Palossand',
        user_id: 6,
        deck_id: 18,
        game_id: 3
    },
    {
        card_name: 'Castform',
        user_id: 6,
        deck_id: 18,
        game_id: 3
    }
]

const seedCards = () => Card.bulkCreate(cardData);

module.exports = seedCards;