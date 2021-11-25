async function cardCreationHandler(event) {
    event.preventDefault();

    const name = document.querySelector('input[name="card-name"]').value;
    const deck_name = document.querySelector('input[name="deck-name"]').value;

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