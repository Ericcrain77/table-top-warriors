// async function cardSearchHandler(event) {
//     event.preventDefault();

// const cardname = document.querySelector('input[name="card-name"]').value.trim();

//     if (cardname) {
//         var magicapi = "https://api.magicthegathering.io/v1/cards?name=" + cardname
      
//         fetch(magicapi, {
//             "method": "GET"
//         })

//           .then(function(response) {
//               if(response.ok) {
//             response.json().then(function(data) {
//               console.log(data);
//               // console.log(data.cards[0].name);
//               // console.log(data.cards[0].toughness);
//               // console.log(data.cards[0].type);
//               document.getElementById('card-pic').src = data.cards[0].imageUrl
//             })
//         } else {
//             console.log('Try to spell it correctly next time.')
//         }
//           }); 
//     };
// }

// document.querySelector('.home-search').addEventListener('submit', cardSearchHandler);
// const webcamElement = document.getElementById('webcam');
// const canvasElement = document.getElementById('canvas');
// const savepic = document.querySelector('#canvas');
// const webcam = new Webcam(webcamElement, 'user', canvasElement);
// webcam.start();
// let photo = webcam.snap();
// console.log(photo);
// // var image = new Image();
// // //Just getting the source from the span. It was messy in JS.
// // image.src = photo
// // document.body.appendChild(image);
// var img = document.createElement('img');
// img.setAttribute('class', 'displaycard');
// img.setAttribute('src', photo);
// savepic.appendChild(img);
// // document.getElementById('save-photo').innerHTML = 
// // '<img src="'+photo+'"/>';

// function profilePic() {
//     webcam.start();


    
