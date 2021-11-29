async function deckEditHandler(event) {
    event.preventDefault();

    const deck_name = document.querySelector('input[name="deck-name"]').value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`/api/decks/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            deck_name
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload(); 
    } else {
        alert(response.statusText)
    }
}

document.querySelector('.edit-deck-form').addEventListener('submit', deckEditHandler);