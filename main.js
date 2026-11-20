// main.js - A simple card solitaire game
// This is a basic example using arrays and DOM elements

function initGame() {
  const board = document.getElementById('board');
  const movesDisplay = document.getElementById('moves');

  if (!board || !movesDisplay) return;

  const deck = [];
  let moveCount = 0;

  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  function createDeck() {
    for (const suit of suits) {
      for (const value of values) {
        deck.push({ value, suit });
      }
    }

    shuffleDeck();
  }

  function shuffleDeck() {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }

  function displayBoard() {
    board.innerHTML = '';

    deck.forEach((card, index) => {
      const cardEl = document.createElement('div');
      cardEl.className = 'card';
      cardEl.textContent = `${card.value} of ${card.suit}`;
      cardEl.addEventListener('click', () => moveCard(index));
      board.appendChild(cardEl);
    });
  }

  function moveCard(index) {
    if (index >= deck.length - 1) return;

    const [movedCard] = deck.splice(index, 1);
    deck.splice(index + 1, 0, movedCard);

    moveCount++;
    movesDisplay.textContent = `Moves: ${moveCount}`;
    displayBoard();
  }

  createDeck();
  movesDisplay.textContent = `Moves: ${moveCount}`;
  displayBoard();
}

window.addEventListener('load', initGame);
