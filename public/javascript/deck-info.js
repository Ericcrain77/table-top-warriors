function gamePictures() {
    console.log("Page Refresh");
    let elem = document.getElementsByClassName('game-span');

    console.log("Elem declaration, ", elem);
    for(let i = 0; i < elem.length; i++) {
        let game = elem[i].innerText;
        if (game === "Magic: The Gathering") {
            elem[i].innerHTML = `<image src="/images/Magic-The-Gathering-Logo.png" alt="MTG Logo" />`;
        } else if (game === "YuGiOh!") {
            elem[i].innerHTML = `<image src="/images/Yu-Gi-Oh!-Logo.png" alt="Yu-Gi-Oh! Logo" />`;
        } else if (game === "Pokemon") {
            elem[i].innerHTML = `<image src="/images/Pokemon-Logo.png" alt="Pokemon Logo" />`;
        } else {
            console.log('HOW DID YOU GET HERE (deck-info.js)');
        }
    }
}

gamePictures();