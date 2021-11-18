allCards = () => {
    const apiUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

    fetch(apiUrl)
    .then(response => {
        if(response.ok){
            response.json()
            .then(data => {
                console.log(data);
            })
        }
        else{
            console.log("you're trash kid");
        }
    })
};

cardByName = name => {
    const apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`;

    fetch(apiUrl)
    .then(response => {
        if(response.ok){
            response.json()
            .then(data => {
                console.log(data);
                console.log(data.data[0].atk);
            })
        }
        else{
            console.log("you're trash kid");
        }
    })
};