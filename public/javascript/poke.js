async function cardSearchHandler(event) {
    event.preventDefault();
console.log("YAY");
const pokemon_name = document.querySelector('input[name="card-name"]').value.trim();
const post_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1git 
  ];
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
              var context = data;
                console.log(data);
              console.log(data.data[0].name)
              console.log(data.data[0].hp)
              console.log(data.data[0].types[0])
              })
            } else {
                console.log('Your card is a fake.')
            }   
          }); 
    };
}

// document.querySelector('.card-search').addEventListener('submit', cardSearchHandler);
document.querySelector('.home-search').addEventListener('submit', cardSearchHandler);