async function deleteDeckHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch(`api/decks/${id}`,{
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.replace('?????'); //CHECK THIS ROUTE
    } else {
        alert(response.statusText);
    }
}

document.querySelector('.delete-deck-btn').addEventListener('click', deleteDeckHandler);