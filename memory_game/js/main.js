console.log("Up and running!");

var cards = [
    {
    rank: "Queen",
    suit: "Hearts",
    cardImage: "images/queen-of-hearts.png"
    },
    {
    rank: "Queen",
    suit: "Diamonds",
    cardImage: "images/queen-of-diamonds.png"
    },
    {
    rank: "King",
    suit: "Hearts",
    cardImage: "images/king-of-hearts.png"
    },
    {
    rank: "King",
    suit: "Diamonds",
    cardImage: "images/king-of-diamonds.png"
    }
];
var cardsInPlay = [];

function createBoard(){
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement("img");
        cardElement.setAttribute('src','images/back.png');
        cardElement.setAttribute('data-id',i);
        cardElement.addEventListener('click',flipCard);
        document.getElementById('game-board').appendChild(cardElement);

        
    }
}

function checkForMatch(card,cardId){
    //console.log(document.getElementById(cardId));
    card.setAttribute('src',cards[cardId].cardImage)
    if(cardsInPlay.length>=2){
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else {
            alert("Sorry, try again.");
        }  
    }
}
function flipCard (){
    var cardId = this.getAttribute('data-id');
    var card = this;
    cardsInPlay.push(cards[cardId].rank);
    //console.log(this);
    checkForMatch(card,cardId);
}
createBoard();
