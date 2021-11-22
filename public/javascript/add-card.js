const db = require('../../config/connection')

// initialize this as a global variable so it can be recalled
let deckNameList;

// This function updates the list of deck names from a sql call.
// It allows the following async function to collect the name from the input,
// and search for its appropriate index in the array. Once it has the 
// appropriate index, it stores the integer as the deck_id, what the 'POST' 
// method in the /api/cards route needs to create a new card.
deckNameListUpdate = () => {
    const sql = `SELECT * FROM deck`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        // Set length to 0 in order to erase the info from within everytime 
        // so no duplicates are created
        deckNameList.length = 0;
        for(let i = 0; i < rows.length; i++) {
            // destructure rows data, specifically deck_name from each row
            let { deck_name } = rows[i];
            let actualDeckName = `${deck_name}`;
            // each deck_name will be pushed to the array
            actualDeckName.push(deckNameList);
        }

        console.log(deckNameList);
    })

}

async function cardCreationHandler(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="card-name"]').value;
    const deck_name = document.querySelector('input[name="deck-name"]').value;
    
    deckNameListUpdate();
    
    // Go through array of deck_name(s) and find where the specific deck_name is, 
    // grab the index, and set it as the variable needed for the 'POST' method
    let deck_id = deckNameList.indexOf(deck_name) + 1;

    const response = await fetch(`/api/cards`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            deck_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('?????') //CHECK THIS ROUTE
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.new-card-form').addEventListener('submit', cardCreationHandler);