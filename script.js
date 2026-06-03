const BACK_RANK = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];

function createInitialBoard() {
  const squares = Array(64).fill(null);

  for (let col = 0; col < 8; col++) {
    squares[col] = { type: BACK_RANK[col], color: 'white' };
    console.log(squares[col]);
  }
}

createInitialBoard();
