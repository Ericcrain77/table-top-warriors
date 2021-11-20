
async function cardSearchHandler(event) {
    event.preventDefault();

const cardname = document.querySelector('textarea[name="card-name"]').value.trim();

    if (cardname) {
    var pokeapi = "https://api.pokemontcg.io/v2/cards?q=name:" + cardname + " set.id:base1"
          fetch(pokeapi, {
              "method": "GET",
              "headers": {
                  "x-api-key": "ea75f934-a912-40ea-b15f-25a000c1f799", 
              }
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