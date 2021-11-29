async function deleteCardHandler(event) {
    event.preventDefault();

    const id = event.target.id

    const response = await fetch(`/api/cards/${id}`,{
        method: 'DELETE'
    });

    if (response.ok) {
        document.location.reload();
    } else {
        alert(response.statusText);
    }
}
<<<<<<< HEAD
if(document.querySelector('.delete-card-btn')) {
document.querySelector('.delete-card-btn').addEventListener('click', deleteCardHandler);
=======

const buttons = document.getElementsByClassName("delete-card-btn");

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", deleteCardHandler);
>>>>>>> 642b11531c94751373ccd49a168b7111a5590bd8
}