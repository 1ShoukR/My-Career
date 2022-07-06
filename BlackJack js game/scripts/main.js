window.addEventListener('DOMContentLoaded', () => {
  // Execute after page load
  alert("Welcome to BlackJack! Made by Rahmin Shoukoohi")
  alert("You should probably know that I ripped my hair out making this..")
  alert("But I do hope you enjoy :) ")
  alert("The game might be a little buggy.. So sorry in advance! I will fix it all very soon :3")
})


// Divs where cards are gonna be placed on the table
const dealerHand = document.getElementById("dealer-hand")
const playerHand = document.getElementById("player-hand")
// the points that the player and dealer have
const dealerPoints = document.getElementById("dealer-points")
const playerPoints = document.getElementById("player-points")
// buttons used for the BlackJack table
const dealBtn = document.getElementById("deal-button")
const hitBtn = document.getElementById("hit-button")
const standBtn = document.getElementById("stand-button")
// essential code for storing the created deck of cards and card information
let deck = []
const suits = ["hearts", "spades", "clubs", "diamonds"]
let playerCards = []
let dealerCards = []

// game Functions
const createAdeck = () => {
    for (let rank = 1; rank <= 13; rank++) {
      for (let suit of suits) {
        deck.push(createACard(suit, rank));
      }
      console.log(deck);
    }
};


const createACard = (suit, rank) =>{
    return {
      suit: suit,
      rank: rank,
      value:
        rank === 1 ? { primary: 11, secondary: 1 }: rank > 10 ? { primary: 10 }: { primary: rank },
      // shoutout west for that ^^
    };
}

// get card from deck 
const cardDraw = () =>{
  const randomPlayerCard = Math.floor(Math.random() * deck.length - 1) + 1;
  // console.log(randomPlayerCard)
  return deck.splice(randomPlayerCard, 1)[0];
}

const addPlayerCard = () => {
  const card = cardDraw();
  playerCards.push(card);
  renderCard(card, playerHand);
};

const addDealerCard = () => {
  const card = cardDraw();
  dealerCards.push(card);
  renderCard(card, dealerHand);
};

const renderCard = (card, targetElement) =>{
  const img = document.createElement('img');
  img.src = `./images/${card.rank}_of_${card.suit}.png`;
  targetElement.append(img);
}



const checkForBust = (sum, targetCards) => {
  if (sum > 21) {
    for (let card of targetCards) {
      if (card.rank === 1) {
        sum -= 10;
        console.log(sum);
        return sum;
      }
    }
  }
  return sum;
};

const sumOfcards = (targetCards) =>{
    let sum = 0;
    for (let card of targetCards) {
      sum += card.value.primary;
    }
    return checkForBust(sum, targetCards);
}

const renderDealerSum = () =>{
  const dealerCardSum = sumOfcards(dealerCards)
  dealerPoints.innerText = null
  dealerPoints.append(dealerCardSum)
}

const renderPlayerSum = () =>{
  const playerCardSum = sumOfcards(playerCards)
  playerPoints.innerHTML = null
  playerPoints.append(playerCardSum)
}

const restartGame = () =>{
  deck = []
  dealerCards = []
  playerCards = []
  dealerPoints.innerHTML = null
  playerPoints.innerHTML = null
  dealerHand.innerHTML = null
  playerHand.innerHTML = null
  dealBtn.removeAttribute('disabled', 'disabled')
}

const restartGameFunction = () =>{
  setTimeout(restartGame, 2000)
  setTimeout(createAdeck, 2000)
}
createAdeck()

dealBtn.onclick = () =>{
  // dealBtn.setAttribute("disabled", "disabled")
  dealBtn.setAttribute
  addPlayerCard()
  renderPlayerSum()
  addDealerCard()
  renderDealerSum()
  // console.log(dealerCards)
  // console.log(playerCards)
  if (sumOfcards(playerCards) >= 21){
    alert("You Lost!")
    restartGameFunction()
  }
  if (sumOfcards(dealerCards) >= 21){
    alert("You Won!")
    restartGameFunction()
  }
}

hitBtn.onclick = () =>{
  addPlayerCard()
  renderPlayerSum()
  // console.log(playerCards)
  if(sumOfcards(playerCards) >= 21){
    alert("You Lost!")
    restartGameFunction()
  }
}

standBtn.onclick = () =>{
    while (sumOfcards(dealerCards) < 18) {
      addDealerCard();
      renderDealerSums();
      alert('You Lost!');
    }
    restartGameFunction();
}





