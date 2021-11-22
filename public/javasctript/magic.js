
async function cardSearchHandler(event) {
    event.preventDefault();

const cardname = document.querySelector('textarea[name="card-name"]').value.trim();

    if (cardname) {
        var magicapi = "https://api.magicthegathering.io/v1/cards?name=" + cardname
      
        fetch(magicapi, {
            "method": "GET"
        })

          .then(function(response) {
            response.json().then(function(data) {
              console.log(data);
              console.log(data.cards[0].name);
              console.log(data.cards[0].toughness);
              console.log(data.cards[0].type);
            })
          }); 
    };
}

document.querySelector('.card-name').addEventListener('submit', cardSearchHandler);