const {Deck} = require('../models');

const deckData = [
    {// id: 1
        deck_name: "John's First Magic Deck",
        game: "Magic: The Gathering",
        deck: [
            {
                name: "Archangel Avacyn",
                manaCost: "{3}{W}{W}",
                cmc: 5,
                colors: [
                    "White"
                ],
                colorIdentity: [
                    "W"
                ],
                type: "Legendary Creature - Angel",
                text: "Flash\nFlying, vigilance\nWhen Archangel Avacyn enters the battlefield, creatures you control gain indestructible until end of turn.\nWhen a non-Angel creature you control dies, transform Archangel Avacyn at the beginning of the next upkeep."
            }
        ],
        user_id: 1
    },
    {// id: 2
        deck_name: "John's First YuGiOh! Deck",
        game: "YuGiOh!",
        deck: [
            {
                name: "Blaster, Dragon Ruler of Infernos",
                level: 7,
                attribute: "FIRE",
                race: "Dragon",
                type: "Effect Monster",
                desc: `If this card is in your hand or Graveyard: You can banish a total of 2 FIRE and/or Dragon-Type monsters from your hand and/or Graveyard, except this card; Special Summon this card. During your opponent's End Phase, if this card was Special Summoned: Return it to the hand. You can discard this card and 1 FIRE monster to the Graveyard, then target 1 card on the field; destroy that target. If this card is banished: You can add 1 FIRE Dragon-Type monster from your Deck to your hand. You can only use 1 "Blaster, Dragon Ruler of Infernos" effect per turn, and only once that turn.`,
                atk: 2800,
                def: 1800
            },
            {
                name: "Burner, Dragon Ruler of Sparks",
                level: 3,
                attribute: "FIRE",
                race: "Dragon",
                type: "Effect Monster",
                desc: `You can discard this card AND 1 Dragon-Type or FIRE monster; Special Summon 1 "Blaster, Dragon Ruler of Infernos" from your Deck. It cannot attack this turn. You can only use the effect of "Burner, Dragon Ruler of Sparks" once per turn.`,
                atk: 1000,
                def: 200
            }
        ],
        user_id: 1
    },
    {// id: 3
        deck_name: "John's First Pokemon Deck",
        game: "Pokemon",
        deck: [
            {
                name: "Alakazam-EX",
                supertype: "Pokemon",
                subtypes: [
                    "Basic",
                    "EX"
                ],
                hp: 160,
                types: [
                    "Psychic"
                ],
                evolvesTo: [
                    "M Alakazam-EX"
                ],
                abilities: [
                    {
                        name: "Kinesis",
                        text: "When you play M Alakazam blah blah blah",
                        type: "Ability"
                    }
                ],
                attacks: [
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
                weaknesses: [
                    {
                        type: "Psychic",
                        value: "x2"
                    }
                ],
                retreatCost: [
                    "Colorless",
                    "Colorless"
                ]
            }
        ],
        user_id: 1
    },
    // {// id: 4
    //     deck_name: "Timothy's First Magic Deck",
    //     game: "Magic: The Gathering",
    //     deck: [],
    //     user_id: 2
    // },
    // {// id: 5
    //     deck_name: "Timothy's First YuGiOh! Deck",
    //     game: "YuGiOh!",
    //     deck: [],
    //     user_id: 2
    // },
    // {// id: 6
    //     deck_name: "Timothy's First Pokemon Deck",
    //     game: "Pokemon",
    //     deck: [],
    //     user_id: 2
    // },
    // {// id: 7
    //     deck_name: "Charles' First Magic Deck",
    //     game: "Magic: The Gathering",
    //     deck: [],
    //     user_id: 3
    // },
    // {// id: 8
    //     deck_name: "Charles' First YuGiOh! Deck",
    //     game: "YuGiOh!",
    //     deck: [],
    //     user_id: 3
    // },
    // {// id: 9
    //     deck_name: "Charles' First Pokemon Deck",
    //     game: "Pokemon",
    //     deck: [],
    //     user_id: 3
    // },
    // {// id: 10
    //     deck_name: "Eric's First Magic Deck",
    //     game: "Magic: The Gathering",
    //     deck: [],
    //     user_id: 4
    // },
    // {// id: 11
    //     deck_name: "Eric's First YuGiOh! Deck",
    //     game: "YuGiOh!",
    //     deck: [],
    //     user_id: 4
    // },
    // {// id: 12
    //     deck_name: "Eric's First Pokemon Deck",
    //     game: "Pokemon",
    //     deck: [],
    //     user_id: 4
    // },
    // {// id: 13
    //     deck_name: "Nachos's First Magic Deck",
    //     game: "Magic: The Gathering",
    //     deck: [],
    //     user_id: 5
    // },
    // {// id: 14
    //     deck_name: "Nachos's First YuGiOh! Deck",
    //     game: "YuGiOh!",
    //     deck: [],
    //     user_id: 5
    // },
    // {// id: 15
    //     deck_name: "Nachos's First Pokemon Deck",
    //     game: "Pokemon",
    //     deck: [],
    //     user_id: 5
    // },
    // {// id: 16
    //     deck_name: "Bandit's First Magic Deck",
    //     game: "Magic: The Gathering",
    //     deck: [],
    //     user_id: 6
    // },
    // {// id: 17
    //     deck_name: "Bandit's First YuGiOh! Deck",
    //     game: "YuGiOh!",
    //     deck: [],
    //     user_id: 6
    // },
    // {// id: 18
    //     deck_name: "Bandit's First Pokemon Deck",
    //     game: "Pokemon",
    //     deck: [],
    //     user_id: 6
    // },
]

const seedDecks = () => Deck.bulkCreate(deckData);

module.exports = seedDecks;
