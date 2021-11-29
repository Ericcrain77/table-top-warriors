const hideCard = () => {
    const cardContainerLengthEl = document.querySelectorAll(".card_container").length;
    const cardContainerEl = document.querySelectorAll(".card_container")[0];


    console.log(cardContainerLengthEl, cardContainerEl);
    // for (let i = 0; i < cardContainerLengthEl; i++) {
    //     if()
    // }
    cardContainerEl.classList.add("hide");
}


hideCard();