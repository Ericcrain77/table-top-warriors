const {Card, Magic, Yugi, Poke} = require('../models');

const cardData = [
    {// johnboi magic
        name: "Archangel Avacyn",
        game: "Magic: The Gathering",
        deck_id: 1
    },
    {
        name: "Parallel Lives",
        game: "Magic: The Gathering",
        deck_id: 1
    },
    {// johnboi YuGiOh!
        name: "Blaster, Dragon Ruler of Infernos",
        game: "YuGiOh!",
        deck_id: 2
    },
    {
        name: "Burner, Dragon Ruler of Sparks",
        game: "YuGiOh!",
        deck_id: 2
    },
    {// johnboi pokemon
        name: "Alakazam-EX",
        game: "Pokemon",
        deck_id: 3,
    },
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
        card_id: 1,
        deck_id: 1
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
        card_id: 2,
        deck_id: 1
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
        card_id: 3,
        deck_id: 2
    },
    {
        levelYugi: 3,
        attributeYugi: "FIRE",
        raceYugi: "Dragon",
        typeYugi: "Effect Monster",
        descYugi: `You can discard this card AND 1 Dragon-Type or FIRE monster; Special Summon 1 "Blaster, Dragon Ruler of Infernos" from your Deck. It cannot attack this turn. You can only use the effect of "Burner, Dragon Ruler of Sparks" once per turn.`,
        atkYugi: 1000,
        defYugi: 200,
        card_id: 4,
        deck_id: 2
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
        card_id: 5,
        deck_id: 3
    }
]

const seedCards = () => {
    Card.bulkCreate(cardData);
    Magic.bulkCreate(magicData);
    Yugi.bulkCreate(yugiData);
    Poke.bulkCreate(pokeData);
}

module.exports = seedCards;