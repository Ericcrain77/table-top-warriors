const createDeckBtn = document.querySelector('#create-a-deck');
const viewDeckCollectionBtn = document.querySelector('#view-deck-collection');

createDeckBtn.addEventListener('click', function() {
    document.location.replace('/dashboard/create');
});

viewDeckCollectionBtn.addEventListener('click', function() {
    document.location.replace('/dashboard/collection');
});

