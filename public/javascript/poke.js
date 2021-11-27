function displayCards() {
  for (var i = 0; i < data.length; i += 1) {
    document.getElementById('card_pic').src = data.data[i].images.small
}





async function cardSearchHandler(event) {
    event.preventDefault();

const card_name = document.querySelector('input[name="card-name"]').value.trim();
const game_name = document.querySelector('select[name="game-select"]').value;


if (game_name === "pokemon") {
  console.log(game_name);
    if (card_name) {
    var pokeapi = "https://api.pokemontcg.io/v2/cards?q=!name:" + card_name
          fetch(pokeapi, {
              "method": "GET",
              "headers": {
                  "x-api-key": "ea75f934-a912-40ea-b15f-25a000c1f799", 
              }
          })
          .then(function(response) {
            if(response.ok) {
              response.json().then(function(data) {
                for (var i = 0; i < data.length; i += 1) {
                  var card_display = document.createElement('img');
                  card_display.setAttribute('class', 'displaycard');
                  card_display.src = data.data[i].images.small;
                  document.body.appendChild(card_display);
                }
              })
            } else {
                console.log('Your card is a fake.')
            }   
          }); 
    };
}

else if (game_name === "yugi") {
   console.log("yugi");
   if (card_name) {
    var yugiapi = "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=" + card_name
  
    fetch(yugiapi, {
        "method": "GET"
    })
      .then(function(response) {
          if(response.ok) {
        response.json().then(function(data) {
        document.getElementById('card-pic').src = data.data[0].card_images[0].image_url
        })
    } else {
        console.log('Try to spell it correctly next time.')
    }
      }); 
  };

}
else if (game_name === "magic") {
  if (card_name) {
    var magicapi = "https://api.magicthegathering.io/v1/cards?name=" + card_name
  
    fetch(magicapi, {
        "method": "GET"
    })
      .then(function(response) {
          if(response.ok) {
        response.json().then(function(data) {
          document.getElementById('card-pic').src = data.cards[0].imageUrl
        })
    } else {
        console.log('Try to spell it correctly next time.')
    }
      }); 
};
}
else {
  console.log("Please try a different card");
}
}
document.querySelector('.home-search').addEventListener('submit', cardSearchHandler);
