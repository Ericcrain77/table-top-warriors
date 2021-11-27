async function deleteDeckHandler(event) {
    event.preventDefault();

    const id = document.querySelector("#deck-id").innerHTML.trim();

    const response = await fetch(`/api/decks/${id}`,{
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

document.querySelector('#delete-deck-btn').addEventListener('click', deleteDeckHandler);