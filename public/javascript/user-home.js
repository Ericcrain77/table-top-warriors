const createDeckBtn = document.querySelector('#create-btn');
const viewDeckCollectionBtn = document.querySelector('#collection-btn');

createDeckBtn.addEventListener('click', function() {
    document.location.replace('/dashboard/create');
});

viewDeckCollectionBtn.addEventListener('click', function() {
    document.location.replace('/dashboard/collection');
});