async function cardSearchHandler(event) {
    event.preventDefault();

const cardname = document.querySelector('input[name="card-name"]').value.trim();
const gamename = document.querySelector('select[name="game-select"]').value;
const cardbox = document.querySelector('#cardbox');

if (gamename === "pokemon") {
  console.log(gamename);
    if (cardname) {
    var pokeapi = "https://api.pokemontcg.io/v2/cards?q=!name:" + cardname
          fetch(pokeapi, {
              "method": "GET",
              "headers": {
                  "x-api-key": "ea75f934-a912-40ea-b15f-25a000c1f799", 
              }
          })
          .then(function(response) {
            if(response.ok) {
              response.json().then(function(data) {
                for (var i = 0; i < data.count; i++) {
                  var card_display = document.createElement('img');
                  card_display.setAttribute('class', 'displaycard');
                  card_display.setAttribute('src', data.data[i].images.small);
                  cardbox.appendChild(card_display);
                }
              })
            } else {
                console.log('Your card is a fake.')
            }   
          }); 
    };
}

else if (gamename === "yugi") {

   if (cardname) {
    var yugiapi = "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=" + cardname
  
    fetch(yugiapi, {
        "method": "GET"
    })
      .then(function(response) {
          if(response.ok) {
        response.json().then(function(data) {
          console.log(data);
          for (var i = 0; i < data.data.length; i++) {
          var card_display = document.createElement('img');
          card_display.setAttribute('class', 'displaycard');
          card_display.setAttribute('src', data.data[i].card_images[0].image_url);
          cardbox.appendChild(card_display);
        }
        })
    } else {
        console.log('Try to spell it correctly next time.')
    }
      }); 
  };

}
else if (gamename === "magic") {
  if (cardname) {
    var magicapi = "https://api.magicthegathering.io/v1/cards?name=" + cardname
  
    fetch(magicapi, {
        "method": "GET"
    })
      .then(function(response) {
          if(response.ok) {
        response.json().then(function(data) {
          console.log(data);

          for (var i = 0; i < data.cards.length; i++) {
            console.log(i)
            var card_display = document.createElement('img');
            card_display.setAttribute('class', 'displaycard');
            card_display.setAttribute('src', data.cards[i].imageUrl);
            cardbox.appendChild(card_display);
          }
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
