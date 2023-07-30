// Store the game board as a 2D array
let board = [
  ['','',''], 
  ['','',''], 
  ['','','']
];

// Store the current player
let currentPlayer = 'X';

// Initialize the game board and set the current player
function init() {
  board = [
    ['','',''], 
    ['','',''], 
    ['','','']
  ];
  currentPlayer = 'X';
}

// Handle the click event on a cell of the game board
function handleClick(event) {
  const cell = event.target;
  const id = cell.id;
  const x = id[5];
  const y = id[6];
  
  if(board[x][y] !== '') return;
  
  board[x][y] = currentPlayer;
  
  checkWin();
  
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

// Check if the current player has won
function checkWin() {
  // check rows
  for(let i = 0; i < 3; i++) {
    if(board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
      document.getElementById('message').textContent = `${currentPlayer} Wins!`;
      return;
    }
  }
  
  // check columns
  for(let i = 0; i < 3; i++) {
    if(board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
      document.getElementById('message').textContent = `${currentPlayer} Wins!`;
      return;
    }
  }
  
  // check diagonals
  if(board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
    document.getElementById('message').textContent = `${currentPlayer} Wins!`;
    return;
  }
  
  if(board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
    document.getElementById('message').textContent = `${currentPlayer} Wins!`;
    return;
  }
}

// Reset the game board and the current player
function resetGame() {
  init();
  document.getElementById('message').textContent = '';
}

// Event listener for the cells
for(let x = 0; x < 3; x++) {
  for(let y = 0; y < 3; y++) {
    document.getElementById(`cell-${x}${y}`).addEventListener('click', handleClick);
  }
}

// Event listener for the reset button
document.getElementById('reset-button').addEventListener('click', resetGame);

// Initialize the game
init();