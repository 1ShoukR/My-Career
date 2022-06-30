window.addEventListener('DOMContentLoaded', function () {
    buildDeck();
    shuffleDeck();
});

dealerPoints = 0;
playerPoints = 0;

const dealerHand = document.getElementById('dealer-hand');
const playerHand = document.getElementById('player-hand');
const hitButton = document.getElementById('hit-button');
const standButton = document.getElementById('stand-button');
const dealButton = document.getElementById('deal-button');

const buildDeck = () => {
    const cardNumber = [
    'ace',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'jack',
    'king',
    'queen',
    ];
    const cardSuit = ['clubs', 'diamonds', 'hearts', 'spades'];
    deck = [];

    for (let i = 0; i < cardSuit.length; i++) {
    for (let j = 0; j < cardNumber.length; j++) {
        deck.push(cardNumber[j] + '_' + 'of' + '_' + cardSuit[i]);
    }
    }
  // console.log(deck)
};

const shuffleDeck = () => {
    for (let i = 0; i < deck.length; i++) {
    const j = Math.floor(Math.random() * deck.length);
    const temporary = deck[i];
    deck[i] = deck[j];
    deck[j] = temporary;
    }
    console.log(deck);
};

const gameStart = () => {
    for (let i = 0; i < 2; i++) {
    const cardImg = document.createElement('img');
    const card = deck.pop();
    cardImg.src = './images/' + card + '.png';
    }
};
