let cards = [];
let sum = 0;
let isAlive = false;
let hasBlackJack = false;
let message = "";

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

const getRandomCard = () => {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  if (randomCard === 1) {
    randomCard = 11;
  } else if (randomCard > 10) {
    randomCard = 10;
  }
  return randomCard;
};

const startGame = () => {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
};

const renderGame = () => {
  cardsEl.innerText = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.innerText += " " + cards[i];
  }
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo ! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
    hasBlackJack = false;
    sum;
  }
  messageEl.innerText = message;
};

const newCard = () => {
  if (isAlive && !hasBlackJack && sum <= 20) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  } else {
    messageEl.textContent = "Start a new game!";
  }
};
