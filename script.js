const board = document.getElementById('chess-board');
let squareElements = [];
const BACK_RANK = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
const squares = createInitialBoard();
let selectedFrom = null;
let selectedTo = null;

function createInitialBoard() {
  const squares = Array(64).fill(null);

  for (let col = 0; col < 8; col++) {
    squares[col] = { type: BACK_RANK[col], color: 'white' };
    squares[8 + col] = { type: 'pawn', color: 'white' };
    squares[48 + col] = { type: 'pawn', color: 'black' };
    squares[56 + col] = { type: BACK_RANK[col], color: 'black' };
  }

  return squares;
}

function drawBoard() {
  for (let i = 0; i < 64; i++) {
    const square = document.createElement('div');
    const row = Math.floor(i / 8);
    const col = i % 8;
    square.classList.add((row + col) % 2 === 1 ? 'dark' : 'light');
    square.dataset.index = i; // useful later for clicks
    board.appendChild(square);
    squareElements.push(square); // same order as squares[i]
  }
}

function renderCanvas() {
  for (let i = 0; i < 64; i++) {
    const piece = squares[i];
    squareElements[i].textContent = piece === null ? '' : piece.color + ' ' + piece.type;
  }
}

function movePiece(square) {
  const ind = parseInt(square.dataset.index);

  if (selectedFrom === null) {
    if (squares[ind] === null) return;
    selectedFrom = ind;
  } else {
    selectedTo = ind;
    makeMove();
    selectedFrom = null;
    selectedTo = null;
  }
}

function makeMove() {
  squares[selectedTo] = squares[selectedFrom];
  squares[selectedFrom] = null;
  renderCanvas();
}

drawBoard();
renderCanvas();

squareElements.forEach((square) => {
  square.addEventListener('click', () => movePiece(square));
});
