async function cardSearchHandler(event) {
    event.preventDefault();

const pokemon_name = document.querySelector('input[name="card-name"]').value.trim();
const cardboxEl = document.querySelector('#cardbox');
    if (pokemon_name) {
    var pokeapi = "https://api.pokemontcg.io/v2/cards?q=name:" + pokemon_name
          fetch(pokeapi, {
              "method": "GET",
              "headers": {
                  "x-api-key": "ea75f934-a912-40ea-b15f-25a000c1f799", 
              }
          })
          .then(function(response) {
            if(response.ok) {
              response.json().then(function(data) {
              console.log(data);
            //   console.log(data.data[0].name);
            // var pokename = data.data[0].name;
            // var cardnameEl = document.createElement('p');
            // cardnameEl.textContent = pokename;
            // cardboxEl.appendChild(cardnameEl); 
            document.getElementById('card-pic').src = data.data[0].images.small
              })
            } else {
                console.log('Your card is a fake.')
            }   
          }); 
    };
}

document.querySelector('.home-search').addEventListener('submit', cardSearchHandler);
