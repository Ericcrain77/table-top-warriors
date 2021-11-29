// allCards = () => {
//     const apiUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php";

//     fetch(apiUrl)
//     .then(response => {
//         if(response.ok){
//             response.json()
//             .then(data => {
//                 console.log(data);
//             })
//         }
//         else{
//             console.log("you're trash kid");
//         }
//     })
// };

// cardByName = name => {
//     const apiUrl = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${name}`;

//     fetch(apiUrl)
//     .then(response => {
//         if(response.ok){
//             response.json()
//             .then(data => {
//                 console.log(data);
//                 console.log(data.data[0].atk);
//             })
//         }
//         else{
//             console.log("you're trash kid");
//         }
//     })
// };

// async function cardSearchHandler(event) {
//     event.preventDefault();

// const cardname = document.querySelector('input[name="card-name"]').value.trim();

//     if (cardname) {
//         var yugiapi = "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=" + cardname
      
//         fetch(yugiapi, {
//             "method": "GET"
//         })

//           .then(function(response) {
//               if(response.ok) {
//             response.json().then(function(data) {
//               console.log(data);

//             document.getElementById('card-pic').src = data.data[0].card_images[0].image_url
//             })
//         } else {
//             console.log('Try to spell it correctly next time.')
//         }
//           }); 
//     };
// }

// document.querySelector('.home-search').addEventListener('submit', cardSearchHandler);