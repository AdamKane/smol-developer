Below is the plan for creating a Python-based Tic Tac Toe game. The game will be a console-based application, so there are no DOM elements or message names involved.

Structure of the app:

1. `tic_tac_toe.py`: This is the main Python file that will contain the game logic, game loop, and user interaction.

Variables it exports:

- `board`: A list representing the game board. It will contain 9 elements representing the 9 cells on a Tic Tac Toe board.

- `current_player`: A string variable indicating the current player. It will either be 'X' or 'O'.

Functions:

- `print_board()`: This function will print the current state of the game board.

- `player_input(player)`: This function will take the current player as an argument and handle the player input.

- `check_win()`: This function will check if there's a winner.

- `check_draw()`: This function will check if the game is a draw.

- `swap_player()`: This function will switch turns between the players.

- `play_again()`: This function will ask the user if they want to play again.

Data schemas: 

There are no databases involved in this console-based game, so no data schemas are required. However, the board could be viewed as a kind of data schema, with 9 cells arranged in a 3x3 grid.

Id names:

Since this is a console-based game, there won't be any DOM elements, and therefore no id names.

Message names:

All user interaction will be handled by print statements and input prompts in the console. There won't be any separate message names.

The game will start by displaying an empty game board and asking the first player (X) to choose a cell. The game will continue by alternating turns between the players, updating and displaying the board after each turn. The game will end when either one player has three of their symbols in a row (horizontally, vertically, or diagonally) or the board is filled up (in which case the game is a draw). After the game ends, the program will ask if the user wants to play again.