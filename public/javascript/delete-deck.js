async function deleteDeckHandler(event) {
    event.preventDefault();

    const id = event.target.id;

    const response = await fetch(`/api/decks/${id}`,{
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}

const buttons = document.getElementsByClassName("delete-deck-btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", deleteDeckHandler);
};

