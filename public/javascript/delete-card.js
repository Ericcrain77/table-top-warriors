async function deleteCardHandler(event) {
    event.preventDefault();

    const id = document.querySelector("#card-id").innerHTML.trim();

    const response = await fetch(`/api/cards/${id}`,{
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}
if(document.querySelector('.delete-card-btn')) {
document.querySelector('.delete-card-btn').addEventListener('click', deleteCardHandler);
}