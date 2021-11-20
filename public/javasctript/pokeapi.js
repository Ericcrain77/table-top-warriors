
async function cardSearchHandler(event) {
    event.preventDefault();

const pokemon_name = document.querySelector('textarea[name="card-name"]').value.trim();

    if (pokemon_name) {
    var pokeapi = "https://api.pokemontcg.io/v2/cards?q=name:" + pokemon_name + " set.id:base1"
          fetch(pokeapi, {
              "method": "GET",
              "headers": {
                  "x-api-key": "ea75f934-a912-40ea-b15f-25a000c1f799", 
              }
          })
          .then(function(response) {
            response.json().then(function(data) {
              console.log(data);
              console.log(data.data[0].name)
              console.log(data.data[0].hp)
              console.log(data.data[0].types[0])
            })
          }); 
    };
}

document.querySelector('.card-name').addEventListener('submit', cardSearchHandler);
