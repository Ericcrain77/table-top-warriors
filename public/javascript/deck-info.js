function gamePictures() {
    console.log("Page Refresh");
    let elem = document.getElementsByClassName('game-div');

    console.log("Elem declaration, ", elem);
    for(let i = 0; i < elem.length; i++) {
        let game = elem[i].innerText;
        if (game === "Magic: The Gathering") {
            elem[i].innerHTML = `<image src="../images/Magic-The-Gathering-Logo.png" alt="Game Logo" id="deck-logo" />`;
        } else if (game === "YuGiOh!") {
            elem[i].innerHTML = `<image src="../images/Yu-Gi-Oh!-Logo.png" alt="Game Logo" id="deck-logo" />`;
        } else if (game === "Pokemon") {
            elem[i].innerHTML = `<image src="../images/Pokemon-Logo.png" alt="Game Logo" id="deck-logo" />`;
        } else {
            console.log('HOW DID YOU GET HERE (deck-info.js)');
        }
    }
}

gamePictures();