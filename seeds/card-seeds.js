const {Card, Magic, Yugi, Poke} = require('../models');

const cardData = [
    {// johnboi magic
        name: "Archangel Avacyn",
        deck_id: 1
    },
    {
        name: "Parallel Lives",
        deck_id: 1
    },
    {// johnboi YuGiOh!
        name: "Blaster, Dragon Ruler of Infernos",
        deck_id: 2
    },
    {
        name: "Burner, Dragon Ruler of Sparks",
        deck_id: 2
    },
    {// johnboi pokemon
        name: "Alakazam-EX",
        deck_id: 3,
    },
    // {// timothy magic
    //     card_name: 'Maze of Ith',
    //     user_id: 2,
    //     deck_id: 4,
    //     game_id: 1
    // },
    // {
    //     card_name: 'Skithiryx, the Blight Dragon',
    //     user_id: 2,
    //     deck_id: 4,
    //     game_id: 1
    // },
    // {
    //     card_name: 'Primordial Hydra',
    //     user_id: 2,
    //     deck_id: 4,
    //     game_id: 1
    // },
    // {// timothy YuGiOh!
    //     card_name: 'Golden Ladybug',
    //     user_id: 2,
    //     deck_id: 5,
    //     game_id: 2
    // },
    // {
    //     card_name: 'Foolish Burial',
    //     user_id: 2,
    //     deck_id: 5,
    //     game_id: 2
    // },
    // {
    //     card_name: 'Tragoedia',
    //     user_id: 2,
    //     deck_id: 5,
    //     game_id: 2
    // },
    // {// timothy pokemon
    //     card_name: 'Rhydon',
    //     user_id: 2,
    //     deck_id: 6,
    //     game_id: 3
    // },
    // {
    //     card_name: 'Togepi',
    //     user_id: 2,
    //     deck_id: 6,
    //     game_id: 3
    // },
    // {
    //     card_name: 'Houndoom',
    //     user_id: 2,
    //     deck_id: 6,
    //     game_id: 3
    // },
    // {// charles magic
    //     card_name: 'Purphoros, God of the Forge',
    //     user_id: 3,
    //     deck_id: 7,
    //     game_id: 1
    // },
    // {
    //     card_name: 'Ral Zarek',
    //     user_id: 3,
    //     deck_id: 7,
    //     game_id: 1
    // },
    // {
    //     card_name: 'Frontier Siege',
    //     user_id: 2,
    //     deck_id: 7,
    //     game_id: 1
    // },
    // {// charles YuGiOh!
    //     card_name: 'Nimble Momonga',
    //     user_id: 3,
    //     deck_id: 8,
    //     game_id: 2
    // },
    // {
    //     card_name: 'Breaker the Magical Warrior',
    //     user_id: 3,
    //     deck_id: 8,
    //     game_id: 2
    // },
    // {
    //     card_name: 'D.D. Esper Star Sparrow',
    //     user_id: 3,
    //     deck_id: 8,
    //     game_id: 2
    // },
    // {// charles pokemon
    //     card_name: 'Milotic',
    //     user_id: 3,
    //     deck_id: 9,
    //     game_id: 3
    // },
    // {
    //     card_name: 'Drifloon',
    //     user_id: 3,
    //     deck_id: 9,
    //     game_id: 3
    // },
    // {
    //     card_name: 'Machamp',
    //     user_id: 3,
    //     deck_id: 9,
    //     game_id: 3
    // },
    // {// eric magic
    //     card_name: 'Kiora, Master of the Depths',
    //     user_id: 4,
    //     deck_id: 10,
    //     game_id: 1
    // },
    // {
    //     card_name: 'Return to Dust',
    //     user_id: 4,
    //     deck_id: 10,
    //     game_id: 1
    // },
    // {
    //     card_name: 'Sheoldred, Whispering One',
    //     user_id: 4,
    //     deck_id: 10,
    //     game_id: 1
    // },
    // {// eric YuGiOh!
    //     card_name: 'Dark Hole',
    //     user_id: 4,
    //     deck_id: 11,
    //     game_id: 2
    // },
    // {
    //     card_name: 'Threatening Roar/Waboku',
    //     user_id: 4,
    //     deck_id: 11,
    //     game_id: 2
    // },
    // {
    //     card_name: 'Pot of Duality',
    //     user_id: 4,
    //     deck_id: 11,
    //     game_id: 2
    // },
    // {// eric pokemon
    //     card_name: 'Tyrantrum',
    //     user_id: 4,
    //     deck_id: 12,
    //     game_id: 3
    // },
    // {
    //     card_name: 'Crobat',
    //     user_id: 4,
    //     deck_id: 12,
    //     game_id: 3
    // },
    // {
    //     card_name: 'Vikavolt',
    //     user_id: 4,
    //     deck_id: 12,
    //     game_id: 3
    // },
    // {// nacho magic
    //     card_name: 'Narset Transcendent',
    //     user_id: 5,
    //     deck_id: 13,
    //     game_id: 1
    // },
    // {
    //     card_name: 'NLand Tax',
    //     user_id: 5,
    //     deck_id: 13,
    //     game_id: 1
    // },
    // {
    //     card_name: 'Temporal Mastery',
    //     user_id: 5,
    //     deck_id: 13,
    //     game_id: 1
    // },
    // {// nacho YuGiOh!
    //     card_name: 'Beast King Barbaros',
    //     user_id: 5,
    //     deck_id: 14,
    //     game_id: 2
    // },
    // {
    //     card_name: 'Called by the Grave',
    //     user_id: 5,
    //     deck_id: 14,
    //     game_id: 2
    // },
    // {
    //     card_name: 'The Monarchs Stormforth',
    //     user_id: 5,
    //     deck_id: 14,
    //     game_id: 2
    // },
    // {// nacho pokemon
    //     card_name: 'Talonflame',
    //     user_id: 5,
    //     deck_id: 15,
    //     game_id: 3
    // },
    // {
    //     card_name: 'Smeargle',
    //     user_id: 5,
    //     deck_id: 15,
    //     game_id: 3
    // },
    // {
    //     card_name: 'Mudkip',
    //     user_id: 5,
    //     deck_id: 15,
    //     game_id: 3
    // },
    // {// bandit magic
    //     card_name: 'Utvara Hellkite',
    //     user_id: 6,
    //     deck_id: 16,
    //     game_id: 1
    // },
    // {
    //     card_name: 'Tamiyo, Field Researcher',
    //     user_id: 6,
    //     deck_id: 16,
    //     game_id: 1
    // },
    // {
    //     card_name: 'Barals Expertise',
    //     user_id: 6,
    //     deck_id: 16,
    //     game_id: 1
    // },
    // {// bandit YuGiOh!
    //     card_name: 'Terraforming',
    //     user_id: 6,
    //     deck_id: 17,
    //     game_id: 2
    // },
    // {
    //     card_name: 'Borreload Dragon',
    //     user_id: 6,
    //     deck_id: 17,
    //     game_id: 2
    // },
    // {
    //     card_name: 'Scrap-Iron Scarecrow',
    //     user_id: 6,
    //     deck_id: 17,
    //     game_id: 2
    // },
    // {// bandit pokemon
    //     card_name: 'Porygon',
    //     user_id: 6,
    //     deck_id: 18,
    //     game_id: 3
    // },
    // {
    //     card_name: 'Palossand',
    //     user_id: 6,
    //     deck_id: 18,
    //     game_id: 3
    // },
    // {
    //     card_name: 'Castform',
    //     user_id: 6,
    //     deck_id: 18,
    //     game_id: 3
    // }
]

const magicData = [
    {
        manaCostMagic: "{3}{W}{W}",
        cmcMagic: 5,
        colorsMagic: [
            "White"
        ],
        colorIdentityMagic: [
            "W"
        ],
        typeMagic: "Legendary Creature - Angel",
        textMagic: "Flash\nFlying, vigilance\nWhen Archangel Avacyn enters the battlefield, creatures you control gain indestructible until end of turn.\nWhen a non-Angel creature you control dies, transform Archangel Avacyn at the beginning of the next upkeep.",
        card_id: 1
    },
    {
        manaCostMagic: "{3}{G}",
        cmcMagic: 4,
        colorsMagic: [
            "Green"
        ],
        colorIdentityMagic: [
            "G"
        ],
        typeMagic: "Enchantment",
        textMagic: "If an effect would create one or more tokens under your control, it creates twice as many of those tokens instead.",
        card_id: 2
    }
]

const yugiData = [
    {
        levelYugi: 7,
        attributeYugi: "FIRE",
        raceYugi: "Dragon",
        typeYugi: "Effect Monster",
        descYugi: `If this card is in your hand or Graveyard: You can banish a total of 2 FIRE and/or Dragon-Type monsters from your hand and/or Graveyard, except this card; Special Summon this card. During your opponent's End Phase, if this card was Special Summoned: Return it to the hand. You can discard this card and 1 FIRE monster to the Graveyard, then target 1 card on the field; destroy that target. If this card is banished: You can add 1 FIRE Dragon-Type monster from your Deck to your hand. You can only use 1 "Blaster, Dragon Ruler of Infernos" effect per turn, and only once that turn.`,
        atkYugi: 2800,
        defYugi: 1800,
        card_id: 3
    },
    {
        levelYugi: 3,
        attributeYugi: "FIRE",
        raceYugi: "Dragon",
        typeYugi: "Effect Monster",
        descYugi: `You can discard this card AND 1 Dragon-Type or FIRE monster; Special Summon 1 "Blaster, Dragon Ruler of Infernos" from your Deck. It cannot attack this turn. You can only use the effect of "Burner, Dragon Ruler of Sparks" once per turn.`,
        atkYugi: 1000,
        defYugi: 200,
        card_id: 4
    }
]

const pokeData = [
    {
        supertypePoke: "Pokemon",
        subtypesPoke: [
            "Basic",
            "EX"
        ],
        hpPoke: 160,
        typesPoke: [
            "Psychic"
        ],
        evolvesToPoke: [
            "M Alakazam-EX"
        ],
        abilitiesPoke: [
            {
                name: "Kinesis",
                text: "When you play M Alakazam blah blah blah",
                type: "Ability"
            }
        ],
        attacksPoke: [
            {
                name: "Suppression",
                cost: [
                    "Psychic",
                    "Colorless"
                ],
                convertedEnergyCost: 2,
                damage: "",
                text: "Put 3 damage on blah blah blah"
            }
        ],
        weaknessesPoke: [
            {
                type: "Psychic",
                value: "x2"
            }
        ],
        retreatCostPoke: [
            "Colorless",
            "Colorless"
        ],
        card_id: 5
    }
]

const seedCards = () => {
    Card.bulkCreate(cardData);
    Magic.bulkCreate(magicData);
    Yugi.bulkCreate(yugiData);
    Poke.bulkCreate(pokeData);
}

module.exports = seedCards;