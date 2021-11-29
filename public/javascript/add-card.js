let searchedCardListContainerEl = document.querySelector(".searched-cards-container");
let magicData;
let yugiData;
let pokeData;

async function gameCardAPISearch(event) {
    event.preventDefault();

    let game = document.querySelector('section[id="card-game"]').innerHTML.trim();
    let charName = document.querySelector('input[name="card-name"]').value.trim();
    console.log(game, charName);
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
                    magicCardSearchRender(data)
                })
            } else {
                console.log("SPELL AGAIN MAGIC")
            }
        })
    } else if (charName !== null && game === "YuGiOh") {
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
                    yugiCardSearchRender(data)
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
                    pokeCardSearchRender(data)
                })
            } else {
                console.log("SPELL AGAIN POKE")
            }
        })
    }
}

function magicCardSearchRender(data) {

    magicData = data;
    console.log(magicData);

    let listLength = data.cards.length
    for (let i = 0; i < listLength; i++) {
        // Destructure data for input into elements
        let name = magicData.cards[i].name;
        let manaCostMagic = magicData.cards[i].manaCost;
        let cmcMagic = magicData.cards[i].cmc;
        let colorsMagic = magicData.cards[i].colors;
        let colorIdentityMagic = magicData.cards[i].colorIdentity;
        let typeMagic = magicData.cards[i].type;
        let textMagic = magicData.cards[i].text;
        // let cardItPlusOne = i + 1;

        // Create container for card
        let searchedCardContainerEl = document.createElement('div');
        searchedCardContainerEl.classList.add('card_container');
        searchedCardContainerEl.setAttribute('id', `card_container_${i}`);
        searchedCardListContainerEl.appendChild(searchedCardContainerEl);
        // Create div for the card info
        let searchedCardListDiv = document.createElement("div");
        searchedCardListDiv.classList.add('searched_card');
        searchedCardListDiv.setAttribute('id', `searched_card_${i}`)
        searchedCardContainerEl.appendChild(searchedCardListDiv);
        // Create title for the card info
        let magicNameEl = document.createElement("h3");
        magicNameEl.classList.add(`magic_title`);
        magicNameEl.setAttribute('id', `magic_title_${i}`)
        magicNameEl.textContent = `Card Name: ` + name;
        searchedCardListDiv.appendChild(magicNameEl);
        // Create remaining card info elements
        //// Magic Type
        let magicTypeMagicEl = document.createElement("p");
        magicTypeMagicEl.classList.add('magic_p');
        magicTypeMagicEl.setAttribute('id', `magic_type_${i}`);
        magicTypeMagicEl.textContent = `Magic Type: ` + typeMagic;
        searchedCardListDiv.appendChild(magicTypeMagicEl);
        //// Magic Text
        let magicTextMagicEl = document.createElement("p");
        magicTextMagicEl.classList.add('magic_p');
        magicTextMagicEl.setAttribute('id', `magic_text_${i}`)
        magicTextMagicEl.textContent = `Text: ` + textMagic;
        searchedCardListDiv.appendChild(magicTextMagicEl);
        //// Colors Magic
        let magicColorsMagicEl = document.createElement("p");
        magicColorsMagicEl.classList.add('magic_p');
        magicColorsMagicEl.setAttribute('id', `magic_cm_${i}`)
        magicColorsMagicEl.textContent = `Colors: ${colorsMagic}, ${colorIdentityMagic}` ;
        searchedCardListDiv.appendChild(magicColorsMagicEl);
        //// Mana Cost Magic
        let magicManaCostMagicEl = document.createElement("p");
        magicManaCostMagicEl.classList.add('magic_p');
        magicManaCostMagicEl.setAttribute('id', `magic_mcm_${i}`)
        magicManaCostMagicEl.textContent = `Mana Cost: ` + manaCostMagic;
        searchedCardListDiv.appendChild(magicManaCostMagicEl);
        //// CMC
        let magicCMC = document.createElement("p");
        magicCMC.classList.add('magic_p');
        magicCMC.setAttribute('id', `magic_cmc_${i}`)
        magicCMC.textContent = `Converted Mana Cost: `, + cmcMagic;
        searchedCardListDiv.appendChild(magicCMC);

        // Create button to add card to deck
        let magicAddButton = document.createElement("button");
        magicAddButton.classList.add('magic_btn');
        magicAddButton.setAttribute('id', `magic_btn_${i}`)
        magicAddButton.textContent = `Add Card`;
        magicAddButton.type = "submit";
        searchedCardContainerEl.appendChild(magicAddButton);
        
        document.querySelector(`#magic_btn_${i}`).addEventListener('click', magicCardCreationHandler);
    }
}

async function yugiCardSearchRender(data) {

    yugiData = data;
    console.log(yugiData);
    let searchedCardListUl = document.createElement("ul");
    searchedCardListContainerEl.appendChild(searchedCardListUl);

    let listLength = data.data.length;
    for (let i = 0; i < listLength; i++) {
        // Destructure data for input into elements
        let name = yugiData.data[i].name;
        console.log(name);
        let levelYugi = yugiData.data[i].level;
        let attributeYugi = yugiData.data[i].attribute;
        let raceYugi = yugiData.data[i].race;
        let typeYugi = yugiData.data[i].type;
        let descYugi = yugiData.data[i].desc;
        let atkYugi = yugiData.data[i].atk;
        let defYugi = yugiData.data[i].def;

        // Create container for card
        let searchedCardContainerEl = document.createElement('div');
        searchedCardContainerEl.classList.add('card_container');
        searchedCardContainerEl.setAttribute('id', `card_container_${i}`);
        searchedCardListContainerEl.appendChild(searchedCardContainerEl);
        // Create div for the card info
        let searchedCardListDiv = document.createElement("div");
        searchedCardListDiv.classList.add('searched_card');
        searchedCardListDiv.setAttribute('id', `searched_card_${i}`)
        searchedCardContainerEl.appendChild(searchedCardListDiv);

        // Create title for the card info
        let yugiNameEl = document.createElement("h3");
        yugiNameEl.classList.add('yugi_title');
        yugiNameEl.setAttribute('id', `yugi_title_${i}`);
        yugiNameEl.textContent = `Card Title: ` + name;
        searchedCardListDiv.appendChild(yugiNameEl);

        // Create remaining card info elements
        //// Level
        let yugiLevelEl = document.createElement("p");
        yugiLevelEl.classList.add('yugi_p');
        yugiLevelEl.setAttribute('id', `yugi_level_${i}`)
        yugiLevelEl.textContent = `Level: `, + levelYugi;
        searchedCardListDiv.appendChild(yugiLevelEl);
        //// Attribute
        let yugiAttributeEl = document.createElement("p");
        yugiAttributeEl.classList.add('yugi_p');
        yugiAttributeEl.setAttribute('id', `yugi_attribute_${i}`);
        yugiAttributeEl.textContent = `Attributes: ` + attributeYugi;
        searchedCardListDiv.appendChild(yugiAttributeEl);
        //// Race
        let yugiRaceEl = document.createElement("p");
        yugiRaceEl.classList.add('yugi_p');
        yugiRaceEl.setAttribute('id', `yugi_race_${i}`)
        yugiRaceEl.textContent = `Race: ` + raceYugi;
        searchedCardListDiv.appendChild(yugiRaceEl);
        //// Type
        let yugiTypeEl = document.createElement("p");
        yugiTypeEl.classList.add('yugi_p');
        yugiTypeEl.setAttribute('id', `yugi_type_${i}`)
        yugiTypeEl.textContent = `Type: ` + typeYugi;
        searchedCardListDiv.appendChild(yugiTypeEl);
        //// Description
        let yugiDescEl = document.createElement("p");
        yugiDescEl.classList.add('yugi_p');
        yugiDescEl.setAttribute('id', `yugi_desc_${i}`)
        yugiDescEl.textContent = `Description: ` + descYugi;
        searchedCardListDiv.appendChild(yugiDescEl);
        //// Attack
        let yugiAtkEl = document.createElement("p");
        yugiAtkEl.classList.add('yugi_p');
        yugiAtkEl.setAttribute('id', `yugi_atk_${i}`)
        yugiAtkEl.textContent = `Attack: ` + atkYugi;
        searchedCardListDiv.appendChild(yugiAtkEl);
        //// Defense
        let yugiDefEl = document.createElement("p");
        yugiDefEl.classList.add('yugi_p');
        yugiDefEl.setAttribute('id', `yugi_def_${i}`)
        yugiDefEl.textContent = `Defense: ` + defYugi;
        searchedCardListDiv.appendChild(yugiDefEl);

        // Create button to add card to deck
        let yugiAddButton = document.createElement("button");
        yugiAddButton.classList.add('yugi_btn');
        yugiAddButton.setAttribute('id', `yugi_btn_${i}`)
        yugiAddButton.textContent = `Add Card`;
        yugiAddButton.type = "submit";
        searchedCardContainerEl.appendChild(yugiAddButton);
        
        document.querySelector(`#yugi_btn_${i}`).addEventListener('click', yugiCardCreationHandler);
    }
}

async function pokeCardSearchRender(data) {

    pokeData = data;
    let searchedCardListUl = document.createElement("ul");
    searchedCardListContainerEl.appendChild(searchedCardListUl);

    let listLength = data.data.length
    for (let i = 0; i < listLength; i++) {
        // Destructure data for input into elements
        let name = pokeData.data[i].name;
        let supertypePoke = pokeData.data[i].supertype;
        let subtypesPoke = pokeData.data[i].subtypes;
        let hpPoke = pokeData.data[i].hp;
        let typesPoke = pokeData.data[i].types;
        let evolvesToPoke = pokeData.data[i].evolvesTo;
        // Abilities
        let abilName;
        let abilText;
        let abilType;
        if (pokeData.data[i].abilities === undefined) {
            abilName = "";
        } else {
            abilName = pokeData.data[i].abilities[0].name
        }
        if (pokeData.data[i].abilities === undefined) {
            abilText = "";
        } else {
            abilText = pokeData.data[i].abilities[0].text
        }
        if (pokeData.data[i].abilities === undefined) {
            abilType = "";
        } else {
            abilType = pokeData.data[i].abilities[0].type
        }

        // Attacks
        let atkName = pokeData.data[i].attacks[0].name;
        let atkCost = pokeData.data[i].attacks[0].cost;
        let atkConvertedEnergyCost = pokeData.data[i].attacks[0].convertedEnergyCost;
        let atkDamage = pokeData.data[i].attacks[0].damage;
        let atkText = pokeData.data[i].attacks[0].text;
        // Weaknesses
        let wkType = pokeData.data[i].weaknesses[0].type;
        let wkValue = pokeData.data[i].weaknesses[0].value;

        let retreatCostPoke = pokeData.data[i].retreatCost;

        // Create container for card
        let searchedCardContainerEl = document.createElement('div');
        searchedCardContainerEl.classList.add('card_container');
        searchedCardContainerEl.setAttribute('id', `card_container_${i}`);
        searchedCardListContainerEl.appendChild(searchedCardContainerEl);
        // Create div for the card info
        let searchedCardListDiv = document.createElement("div");
        searchedCardListDiv.classList.add('searched_card');
        searchedCardListDiv.setAttribute('id', `searched_card_${i}`)
        searchedCardContainerEl.appendChild(searchedCardListDiv);
        // Create title for the card info
        let pokeNameEl = document.createElement("h3");
        pokeNameEl.classList.add('poke_title');
        pokeNameEl.setAttribute('id', `yugi_btn_${i}`);
        pokeNameEl.textContent = `Card Title: ` + name;
        searchedCardListDiv.appendChild(pokeNameEl);
        // Create remaining card info elements
        //// HP
        let pokeHpEl = document.createElement("p");
        pokeHpEl.classList.add('poke_p');
        pokeHpEl.setAttribute('id', `poke_hp_${i}`)
        pokeHpEl.textContent = `HP: ` + hpPoke;
        searchedCardListDiv.appendChild(pokeHpEl);
        //// Super Types
        let pokeSuperTypeEl = document.createElement("p");
        pokeSuperTypeEl.classList.add('poke_p');
        pokeSuperTypeEl.setAttribute('id', `poke_supt_${i}`)
        pokeSuperTypeEl.textContent = `SuperType: ` + supertypePoke;
        searchedCardListDiv.appendChild(pokeSuperTypeEl);
        //// Types
        let pokeTypesEl = document.createElement("p");
        pokeTypesEl.classList.add('poke_p');
        pokeTypesEl.setAttribute('id', `poke_type_${i}`)
        pokeTypesEl.textContent = `Types: ` + typesPoke;
        searchedCardListDiv.appendChild(pokeTypesEl);
        //// Sub Types
        let pokeSubtypesEl = document.createElement("p");
        pokeSubtypesEl.classList.add('poke_p');
        pokeSubtypesEl.setAttribute('id', `poke_subt_${i}`)
        pokeSubtypesEl.textContent = `SubType: `, + subtypesPoke;
        searchedCardListDiv.appendChild(pokeSubtypesEl);


        //// Evolves To
        let pokeEvolvesToEl = document.createElement("p");
        pokeEvolvesToEl.classList.add('poke_p');
        pokeEvolvesToEl.setAttribute('id', `poke_evolve_${i}`)
        pokeEvolvesToEl.textContent = `Evolves to: ` + evolvesToPoke;
        searchedCardListDiv.appendChild(pokeEvolvesToEl);
        //////// Ability Name
        let pokeAbilNameEl = document.createElement("p");
        pokeAbilNameEl.classList.add('poke_p');
        pokeAbilNameEl.setAttribute('id', `poke_abil_name_${i}`);
        pokeAbilNameEl.textContent = `Ability Name: ` + abilName;
        searchedCardListDiv.appendChild(pokeAbilNameEl);
        //////// Ability Text
        let pokeAbilTextEl = document.createElement("p");
        pokeAbilTextEl.classList.add('poke_p');
        pokeAbilTextEl.setAttribute('id', `poke_abil_text_${i}`);
        pokeAbilTextEl.textContent = `Ability Text: ` + abilText;
        searchedCardListDiv.appendChild(pokeAbilTextEl);
        //////// Ability Type
        let pokeAbilTypeEl = document.createElement("p");
        pokeAbilTypeEl.classList.add('poke_p');
        pokeAbilTypeEl.setAttribute('id', `poke_abil_type_${i}`);
        pokeAbilTypeEl.textContent = `Ability Type: ` + abilType;
        searchedCardListDiv.appendChild(pokeAbilTypeEl);

        //////// Attack Name
        let pokeAtkNameEl = document.createElement("p");
        pokeAtkNameEl.classList.add('poke_p');
        pokeAtkNameEl.setAttribute('id', `poke_atk_name_${i}`);
        pokeAtkNameEl.textContent = `Attack Name: ` + atkName;
        searchedCardListDiv.appendChild(pokeAtkNameEl);
        //////// Attack Cost
        let pokeAtkCostEl = document.createElement("p");
        pokeAtkCostEl.classList.add('poke_p');
        pokeAtkCostEl.setAttribute('id', `poke_atk_cost_${i}`);
        pokeAtkCostEl.textContent = `Attack Cost: ` + atkCost;
        searchedCardListDiv.appendChild(pokeAtkCostEl);
        //////// Attack CEC
        let pokeAtkCECEl = document.createElement("p");
        pokeAtkCECEl.classList.add('poke_p');
        pokeAtkCECEl.setAttribute('id', `poke_atk_cec_${i}`);
        pokeAtkCECEl.textContent = `Attack CEC: ` + atkConvertedEnergyCost
        searchedCardListDiv.appendChild(pokeAtkCECEl);
        //////// Attack Damage
        let pokeAtkDamageEl = document.createElement("p");
        pokeAtkDamageEl.classList.add('poke_p');
        pokeAtkDamageEl.setAttribute('id', `poke_atk_dam_${i}`);
        pokeAtkDamageEl.textContent = `Attack Damage: ` + atkDamage;
        searchedCardListDiv.appendChild(pokeAtkDamageEl);
        //////// Attack Text
        let pokeAtkTextEl = document.createElement("p");
        pokeAtkTextEl.classList.add('poke_p');
        pokeAtkTextEl.setAttribute('id', `poke_atk_txt_${i}`)
        pokeAtkTextEl.textContent = `Attack Text: ` + atkText;
        searchedCardListDiv.appendChild(pokeAtkTextEl);

        //////// Weakness Type
        let pokeWkTypeEl = document.createElement("p");
        pokeWkTypeEl.classList.add('poke_p');
        pokeWkTypeEl.setAttribute('id', `poke_weak_type_${i}`)
        pokeWkTypeEl.textContent = `Weakness Type: ` + wkType;
        searchedCardListDiv.appendChild(pokeWkTypeEl);
        //////// Weakness Value
        let pokeWkValEl = document.createElement("p");
        pokeWkValEl.classList.add('poke_p');
        pokeWkValEl.setAttribute('id', `poke_weak_val_${i}`)
        pokeWkValEl.textContent = `Weakness Value: ` + wkValue;
        searchedCardListDiv.appendChild(pokeWkValEl);
        //// Retreat Cost
        let pokeRetreatCostEl = document.createElement("p");
        pokeRetreatCostEl.classList.add('poke_p');
        pokeRetreatCostEl.setAttribute('id', `poke_rt_cost_${i}`)
        pokeRetreatCostEl.textContent = `Retreat Cost: ` + retreatCostPoke;
        searchedCardListDiv.appendChild(pokeRetreatCostEl);

        // Create button to add card to deck
        let pokeAddButton = document.createElement("button");
        pokeAddButton.classList.add('poke_btn');
        pokeAddButton.setAttribute('id', `poke_btn_${i}`);
        pokeAddButton.textContent = `Add Card`;
        pokeAddButton.type = "submit";
        searchedCardContainerEl.appendChild(pokeAddButton);
        
        document.querySelector(`#poke_btn_${i}`).addEventListener('click', pokeCardCreationHandler)
    }
}

async function magicCardCreationHandler(event) {
    event.preventDefault();

    let deck_id = document.querySelector('#deck-id').innerText.trim();
    let game = document.querySelector('#card-game').innerText.trim();

    let dataI = event.target.id.split('_')[2];

    let name = magicData.cards[dataI].name;
    let manaCostMagic = magicData.cards[dataI].manaCost;
    let cmcMagic = magicData.cards[dataI].cmc;
    let colorsMagic = magicData.cards[dataI].colors;
    let colorIdentityMagic = magicData.cards[dataI].colorIdentity;
    let typeMagic = magicData.cards[dataI].type;
    let textMagic = magicData.cards[dataI].text;

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

    if (response.ok) {
        document.location.replace(`/dashboard/edit/${deck_id}`) //CHECK THIS ROUTE
    } else {
        alert(response.statusText);
    }
}

async function yugiCardCreationHandler(event) {
    event.preventDefault();

    let deck_id = document.querySelector('#deck-id').innerText.trim();
    let game = document.querySelector('section[id="card-game"]').innerHTML.trim();

    let dataI = event.target.id.split('_')[2];

    let name = yugiData.data[dataI].name;
    let levelYugi = yugiData.data[dataI].level;
    let attributeYugi = yugiData.data[dataI].attribute;
    let raceYugi = yugiData.data[dataI].race;
    let typeYugi = yugiData.data[dataI].type;
    let descYugi = yugiData.data[dataI].desc;
    let atkYugi = yugiData.data[dataI].atk;
    let defYugi = yugiData.data[dataI].def;

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

    if (response.ok) {
        document.location.replace(`/dashboard/edit/${deck_id}`) //CHECK THIS ROUTE
    } else {
        alert(response.statusText);
    }
}

async function pokeCardCreationHandler(event) {
    event.preventDefault();

    let deck_id = document.querySelector('#deck-id').innerText.trim();
    let game = document.querySelector('#card-game').innerText.trim();

    console.log(deck_id, game)

    let dataI = event.target.id.split('_')[2];

    let name = pokeData.data[dataI].name;
    let supertypePoke = pokeData.data[dataI].supertype;
    let subtypesPoke = pokeData.data[dataI].subtypes;
    let hpPoke = pokeData.data[dataI].hp;
    let typesPoke = pokeData.data[dataI].types;
    let evolvesToPoke = pokeData.data[dataI].evolvesTo;
    let abilName;
    let abilText;
    let abilType;
    if (pokeData.data[dataI].abilities === undefined) {
        abilName = "";
    } else {
        abilName = pokeData.data[dataI].abilities[0].name
    }
    if (pokeData.data[dataI].abilities === undefined) {
        abilText = "";
    } else {
        abilText = pokeData.data[dataI].abilities[0].text
    }
    if (pokeData.data[dataI].abilities === undefined) {
        abilType = "";
    } else {
        abilType = pokeData.data[dataI].abilities[0].type
    }
    let abilitiesPoke = [
        {
            name: abilName,
            text: abilText,
            type: abilType
        }
    ]
    let atkName = pokeData.data[dataI].attacks[0].name;
    let atkCost = pokeData.data[dataI].attacks[0].cost;
    let atkConvertedEnergyCost = pokeData.data[dataI].attacks[0].convertedEnergyCost;
    let atkDamage = pokeData.data[dataI].attacks[0].damage;
    let atkText = pokeData.data[dataI].attacks[0].text;
    let attacksPoke = [
        {
            name: atkName,
            cost: atkCost,
            convertedEnergyCost: atkConvertedEnergyCost,
            damage: atkDamage,
            text: atkText
        }
    ]
    let wkType = pokeData.data[dataI].weaknesses[0].type;
    let wkValue = pokeData.data[dataI].weaknesses[0].value;
    let weaknessesPoke = [
        {
            type: wkType,
            value: wkValue
        }
    ]
    let retreatCostPoke = pokeData.data[dataI].retreatCost;

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

    if (response.ok) {
        document.location.replace(`/dashboard/edit/${deck_id}`) //CHECK THIS ROUTE
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-card-form').addEventListener('submit', gameCardAPISearch);
