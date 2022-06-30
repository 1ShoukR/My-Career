const dealerHand = document.getElementById("dealer-hand")
const playerHand = document.getElementById("player-hand")

const dealBtn = document.getElementById("deal-button")
const hitBtn = document.getElementById("hit-button")
const standBtn = document.getElementById("stand-button")

const deck = []
const suits = ["hearts", "spades", "clubs", "diamonds"]
const ranks = [1,2,3,4,5,6,7,8,9,10,11,12,13]
const playerCards = []
const dealerCards = []


window.addEventListener('DOMContentLoaded', () => {
  // Execute after page load
})


const createCard = (rank, suit) =>{
  const card = {
    rank: rank,
    suit: suit,
    pointValue: rank > 10 ? 10: rank,
  }
  deck.push(card)
}

for (let suit of suits){
  for (let rank of ranks) {
    createCard(rank, suit)
  }
}

const playerHandDraw = () =>{
  const randomPlayerCard = Math.floor(Math.random() * deck.length - 1) + 1
  console.log(randomPlayerCard)
  return deck.splice(randomPlayerCard, 1)[0]
}



const addFirstDealerCard = () =>{
  const dealerCardOne = playerHandDraw()
  const dealerCardOneNumber = Object.values(dealerCardOne)[2]
  console.log(dealerCardOne)
  const dealerCardOneSuit = Object.values(dealerCardOne)[1]
  dealerCard1sum = dealerCardOneNumber
  dealerCard1Suit = dealerCardOneSuit
  console.log(deck)
  dealerCards.push(dealerCard1sum + dealerCard1Suit);
  dealerHand.append("dealer first card is the ", dealerCard1sum , " of ", dealerCard1Suit, ". ")
}
const addSecondDealerCard = () =>{
  const dealerCardTwo = playerHandDraw()
  const dealerCardTwoNumber = Object.values(dealerCardTwo)[2]
  console.log(dealerCardTwo)
  const dealerCardTwoSuit = Object.values(dealerCardTwo)[1]
  dealerCard2Sum = dealerCardTwoNumber
  dealerCard2Suit = dealerCardTwoSuit
  console.log(deck)
  dealerCards.push(dealerCard2Sum + dealerCard2Suit)
  dealerHand.append("Dealer second card is the ", dealerCard2Sum, " of ", dealerCard2Suit, ". ")
}

const addFirstPlayerCard = () =>{
  const playerCardOne = playerHandDraw();
  const playerCardOneNumber = Object.values(playerCardOne)[2];
  console.log(playerCardOne);
  const playerCardOneSuit = Object.values(playerCardOne)[1];
  playerCard1Sum = playerCardOneNumber
  playerCard1Suit = playerCardOneSuit
  console.log(deck)
  playerCards.push(playerCard1Sum + playerCard1Suit)
  playerHand.append("your first card is the ", playerCard1Sum, " of ", playerCard1Suit, ". ")
}
const addSecondPlayerCard = () => {
  const playerCardTwo = playerHandDraw();
  const playerCardTwoNumber = Object.values(playerCardTwo)[2];
  console.log(playerCardTwo);
  const playerCardTwoSuit = Object.values(playerCardTwo)[1];
  playerCard2Sum = playerCardTwoNumber
  playerCard2Suit = playerCardTwoSuit
  console.log(deck);
  playerCards.push(playerCard2Sum + playerCard2Suit)
  playerHand.append('Your second card is the ', playerCard2Sum, " of ", playerCard2Suit, ". ");
}


const gameStart = () => {
  dealerHand.innerHTML = null
  playerHand.innerHTML = null
  addFirstDealerCard()
  addFirstPlayerCard()
  addSecondDealerCard()
  addSecondPlayerCard()
  console.log("dealer", dealerCards)
  console.log("player", playerCards)
}

gameStart()

dealBtn.onclick = gameStart




