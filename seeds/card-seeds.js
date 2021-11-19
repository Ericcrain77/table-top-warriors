const {Card} = require('../models');

const cardData = [
    {// johnboi magic
        card_name: 'Nicol Bolas, God-Pharoah',
        card_owner: 1,
        deck_id: 1,
        game_id: 1
    },
    {
        card_name: 'Nissa, Vastwood Seer',
        card_owner: 1,
        deck_id: 1,
        game_id: 1
    },
    {
        card_name: 'Thassa, God of the Sea',
        card_owner: 1,
        deck_id: 1,
        game_id: 1
    },
    {// johnboi YuGiOh!
        card_name: 'Fairy Tail - Snow',
        card_owner: 1,
        deck_id: 2,
        game_id: 2
    },
    {
        card_name: 'Breakthrough Skill',
        card_owner: 1,
        deck_id: 2,
        game_id: 2
    },
    {
        card_name: 'Gold Sarcophagus',
        card_owner: 1,
        deck_id: 2,
        game_id: 2
    },
    {// johnboi pokemon
        card_name: 'Pangoro',
        card_owner: 1,
        deck_id: 3,
        game_id: 3
    },
    {
        card_name: 'Electrode',
        card_owner: 1,
        deck_id: 3,
        game_id: 3
    },
    {
        card_name: 'Escavalier',
        card_owner: 1,
        deck_id: 3,
        game_id: 3
    },
    {// timothy magic
        card_name: 'Maze of Ith',
        card_owner: 2,
        deck_id: 4,
        game_id: 1
    },
    {
        card_name: 'Skithiryx, the Blight Dragon',
        card_owner: 2,
        deck_id: 4,
        game_id: 1
    },
    {
        card_name: 'Primordial Hydra',
        card_owner: 2,
        deck_id: 4,
        game_id: 1
    },
    {// timothy YuGiOh!
        card_name: 'Golden Ladybug',
        card_owner: 2,
        deck_id: 5,
        game_id: 2
    },
    {
        card_name: 'Foolish Burial',
        card_owner: 2,
        deck_id: 5,
        game_id: 2
    },
    {
        card_name: 'Tragoedia',
        card_owner: 2,
        deck_id: 5,
        game_id: 2
    },
    {// timothy pokemon
        card_name: 'Rhydon',
        card_owner: 2,
        deck_id: 6,
        game_id: 3
    },
    {
        card_name: 'Togepi',
        card_owner: 2,
        deck_id: 6,
        game_id: 3
    },
    {
        card_name: 'Houndoom',
        card_owner: 2,
        deck_id: 6,
        game_id: 3
    },
    {// charles magic
        card_name: 'Purphoros, God of the Forge',
        card_owner: 3,
        deck_id: 7,
        game_id: 1
    },
    {
        card_name: 'Ral Zarek',
        card_owner: 3,
        deck_id: 7,
        game_id: 1
    },
    {
        card_name: 'Frontier Siege',
        card_owner: 2,
        deck_id: 7,
        game_id: 1
    },
    {// charles YuGiOh!
        card_name: 'Nimble Momonga',
        card_owner: 3,
        deck_id: 8,
        game_id: 2
    },
    {
        card_name: 'Breaker the Magical Warrior',
        card_owner: 3,
        deck_id: 8,
        game_id: 2
    },
    {
        card_name: 'D.D. Esper Star Sparrow',
        card_owner: 3,
        deck_id: 8,
        game_id: 2
    },
    {// charles pokemon
        card_name: 'Milotic',
        card_owner: 3,
        deck_id: 9,
        game_id: 3
    },
    {
        card_name: 'Drifloon',
        card_owner: 3,
        deck_id: 9,
        game_id: 3
    },
    {
        card_name: 'Machamp',
        card_owner: 3,
        deck_id: 9,
        game_id: 3
    },
    {// eric magic
        card_name: 'Kiora, Master of the Depths',
        card_owner: 4,
        deck_id: 10,
        game_id: 1
    },
    {
        card_name: 'Return to Dust',
        card_owner: 4,
        deck_id: 10,
        game_id: 1
    },
    {
        card_name: 'Sheoldred, Whispering One',
        card_owner: 4,
        deck_id: 10,
        game_id: 1
    },
    {// eric YuGiOh!
        card_name: 'Dark Hole',
        card_owner: 4,
        deck_id: 11,
        game_id: 2
    },
    {
        card_name: 'Threatening Roar/Waboku',
        card_owner: 4,
        deck_id: 11,
        game_id: 2
    },
    {
        card_name: 'Pot of Duality',
        card_owner: 4,
        deck_id: 11,
        game_id: 2
    },
    {// eric pokemon
        card_name: 'Tyrantrum',
        card_owner: 4,
        deck_id: 12,
        game_id: 3
    },
    {
        card_name: 'Crobat',
        card_owner: 4,
        deck_id: 12,
        game_id: 3
    },
    {
        card_name: 'Vikavolt',
        card_owner: 4,
        deck_id: 12,
        game_id: 3
    },
    {// nacho magic
        card_name: 'Narset Transcendent',
        card_owner: 5,
        deck_id: 13,
        game_id: 1
    },
    {
        card_name: 'NLand Tax',
        card_owner: 5,
        deck_id: 13,
        game_id: 1
    },
    {
        card_name: 'Temporal Mastery',
        card_owner: 5,
        deck_id: 13,
        game_id: 1
    },
    {// nacho YuGiOh!
        card_name: 'Beast King Barbaros',
        card_owner: 5,
        deck_id: 14,
        game_id: 2
    },
    {
        card_name: 'Called by the Grave',
        card_owner: 5,
        deck_id: 14,
        game_id: 2
    },
    {
        card_name: 'The Monarchs Stormforth',
        card_owner: 5,
        deck_id: 14,
        game_id: 2
    },
    {// nacho pokemon
        card_name: 'Talonflame',
        card_owner: 5,
        deck_id: 15,
        game_id: 3
    },
    {
        card_name: 'Smeargle',
        card_owner: 5,
        deck_id: 15,
        game_id: 3
    },
    {
        card_name: 'Mudkip',
        card_owner: 5,
        deck_id: 15,
        game_id: 3
    },
    {// bandit magic
        card_name: 'Utvara Hellkite',
        card_owner: 6,
        deck_id: 16,
        game_id: 1
    },
    {
        card_name: 'Tamiyo, Field Researcher',
        card_owner: 6,
        deck_id: 16,
        game_id: 1
    },
    {
        card_name: 'Barals Expertise',
        card_owner: 6,
        deck_id: 16,
        game_id: 1
    },
    {// bandit YuGiOh!
        card_name: 'Terraforming',
        card_owner: 6,
        deck_id: 17,
        game_id: 2
    },
    {
        card_name: 'Borreload Dragon',
        card_owner: 6,
        deck_id: 17,
        game_id: 2
    },
    {
        card_name: 'Scrap-Iron Scarecrow',
        card_owner: 6,
        deck_id: 17,
        game_id: 2
    },
    {// bandit pokemon
        card_name: 'Porygon',
        card_owner: 6,
        deck_id: 18,
        game_id: 3
    },
    {
        card_name: 'Palossand',
        card_owner: 6,
        deck_id: 18,
        game_id: 3
    },
    {
        card_name: 'Castform',
        card_owner: 6,
        deck_id: 18,
        game_id: 3
    }
]

const seedCards = () => Card.bulkCreate(cardData);

module.exports = seedCards;