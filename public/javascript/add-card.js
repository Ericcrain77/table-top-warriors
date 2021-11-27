async function gameCardAPISearch(event) {
    event.preventDefault();
    const game = document.querySelector('#card-game').innerText;
    const charName = document.querySelector('input[name="card-name"]').value.trim();
    const deck_id = document.querySelector('#deck-id').innerText;

    console.log("GAME: ", game)
    console.log("NAME: ", charName)
    console.log("DECK ID: ", deck_id);
    
    if (charName !== null && game === "Magic: The Gathering") {
        console.log("MAGIC API INIT")
        var magicapi = "https://api.magicthegathering.io/v1/cards?name=" + charName;

        await fetch(magicapi, {
            "method": "GET"
        })
        .then(function(response) {
            if (response.ok) {
                response.json()
                .then(function(data) {
                    console.log(data);
                    cardCreationHandler(event, game, deck_id, data)
                })
            } else {
                console.log("SPELL AGAIN MAGIC")
            }
        })
    } else if (charName !== null && game === "YuGiOh!") {
        console.log("YUGI API INIT")
        var yugiapi = "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=" + charName;

        await fetch(yugiapi, {
            "method": "GET"
        })
        .then(function(response) {
            if (response.ok) {
                response.json()
                .then(function(data) {
                    console.log(data);
                    cardCreationHandler(event, game, deck_id, data);
                })
            } else {
                console.log("SPELL AGAIN YUGI")
            }
        })
    } else if (charName !== null && game === "Pokemon") {
        console.log("POKE API INIT")
        var pokeapi = "https://api.pokemontcg.io/v2/cards?q=!name:" + charName;

        await fetch(pokeapi, {
            "method": "GET",
            "headers": {
                "x-api-key": "ea75f934-a912-40ea-b15f-25a000c1f799"
            }
        })
        .then(function(response) {
            if (response.ok) {
                response.json()
                .then(function(data) {
                    console.log(data);
                    cardCreationHandler(event, game, deck_id, data);
                })
            } else {
                console.log("SPELL AGAIN POKE")
            }
        })
    }
}

async function cardCreationHandler(event, game, deck_id, data) {
    event.preventDefault();
    console.log("IN CARD CREATION HANDLER")
    if (game === "Magic: The Gathering") {
        let name = data.cards[0].name;
        let manaCostMagic = data.cards[0].manaCost;
        let cmcMagic = data.cards[0].cmc;
        let colorsMagic = data.cards[0].colors;
        let colorIdentityMagic = data.cards[0].colorIdentity;
        let typeMagic = data.cards[0].type;
        let textMagic = data.cards[0].text;
        const response = await fetch(`/api/cards`, {
            method: 'POST',
            body: JSON.stringify({
                name,
                game,
                deck_id,
                manaCostMagic, 
                cmcMagic,
                colorsMagic,
                colorIdentityMagic,
                typeMagic,
                textMagic
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        okResponse(response, deck_id);
    } else if (game === "YuGiOh!") {
        let name = data.data[0].name;
        let levelYugi = data.data[0].level;
        let attributeYugi = data.data[0].attribute;
        let raceYugi = data.data[0].race;
        let typeYugi = data.data[0].type;
        let descYugi = data.data[0].desc;
        let atkYugi = data.data[0].atk;
        let defYugi = data.data[0].def;
        const response = await fetch(`/api/cards`, {
            method: 'POST',
            body: JSON.stringify({
                name,
                game,
                deck_id,
                levelYugi,
                attributeYugi,
                raceYugi,
                typeYugi,
                descYugi,
                atkYugi,
                defYugi
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        okResponse(response, deck_id);
    } else if (game === "Pokemon") {
        let name = data.data[0].name;
        let supertypePoke = data.data[0].supertype;
        let subtypesPoke = data.data[0].subtypes;
        let hpPoke = data.data[0].hp;
        let typesPoke = data.data[0].types;
        let evolvesToPoke = data.data[0].evolvesTo;
        let abilName = data.data[0].abilities[0].name;
        console.log(abilName);
        let abilText = data.data[0].abilities[0].text;
        let abilType = data.data[0].abilities[0].type;
        let abilitiesPoke = [
            {
                name: abilName,
                text: abilText,
                type: abilType
            }
        ]
        console.log(abilitiesPoke);
        let atkName = data.data[0].attacks[0].name;
        let atkCost = data.data[0].attacks[0].cost;
        let atkConvertedEnergyCost = data.data[0].attacks[0].convertedEnergyCost;
        let atkDamage = data.data[0].attacks[0].damage;
        let atkText = data.data[0].attacks[0].text;
        let attacksPoke = [
            {
                name: atkName,
                cost: atkCost,
                convertedEnergyCost: atkConvertedEnergyCost,
                damage: atkDamage,
                text: atkText
            }
        ]
        let wkType = data.data[0].weaknesses[0].type;
        let wkValue = data.data[0].weaknesses[0].value;
        let weaknessesPoke = [
            {
                type: wkType,
                value: wkValue
            }
        ]
        let retreatCostPoke = data.data[0].retreatCost;

        const response = await fetch(`/api/cards`, {
            method: 'POST',
            body: JSON.stringify({
                name,
                game,
                deck_id,
                supertypePoke,
                subtypesPoke,
                hpPoke,
                typesPoke,
                evolvesToPoke,
                abilitiesPoke,
                attacksPoke,
                weaknessesPoke,
                retreatCostPoke
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        okResponse(response, deck_id);
    } else {
        console.log("HOW DID YOU GET HERE (190 add-card.js")
    }

    function okResponse(response, deck_id) {
        if (response.ok) {
            document.location.replace(`/dashboard/edit/${deck_id}`) //CHECK THIS ROUTE
        } else {
            alert(response.statusText);
        }
    }

}

document.querySelector('.new-card-form').addEventListener('submit', gameCardAPISearch);