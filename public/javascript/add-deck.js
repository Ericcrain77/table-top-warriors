async function deckCreationHandler(event) {
    event.preventDefault();

    const deck_name = document.querySelector('input[name="deck-name"]').value;
    const game = document.querySelector('input[name="game-name"]').value;

    const response = await fetch(`/api/decks`, {
        method: 'POST',
        body: JSON.stringify({
            deck_name,
            game
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

document.querySelector('.new-deck-form').addEventListener('submit', deckCreationHandler);