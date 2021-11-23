async function deckEditHandler(event) {
    event.preventDefault();

    const deck_name = document.querySelector('input[name="deck-name"]').value.trim();
    const game = document.querySelector('input[name="game-name"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/decks/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            deck_name,
            game
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('?????'); //CHECK THIS ROUTE
    } else {
        alert(response.statusText)
    }
}

document.querySelector('.edit-deck-form').addEventListener('submit', deckEditHandler);