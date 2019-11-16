
const cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
}
];
const cardsInPlay = [];

function createBoard (){
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src','images/back.png');
    cardElement.setAttribute('data-id',i);
    cardElement.addEventListener('click',flipCard);
    document.getElementById('game-board').appendChild(cardElement);
}
}
function checkForMatch(){

   if (cardsInPlay[0] === cardsInPlay[1]) {
   alert("You found a match!");
  }
  else { alert("Sorry, try again.");
}

}

function flipCard (){
var id = this.getAttribute('data-id');
var cardOne = cards[id];
cardsInPlay.push(cards[id].rank);
console.log("User flipped " + cards[id].rank);
console.log(cards[id].suit);
console.log(cards[id].cardImage);
this.setAttribute('src',cards[id].cardImage);
if (cardsInPlay.length === 2) {
  checkForMatch()
}
}
createBoard ();
