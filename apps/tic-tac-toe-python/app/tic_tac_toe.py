# Initialize the board and current_player variables
board = [" " for _ in range(9)]
current_player = "X"

# Function to print the board
def print_board():
    for i in range(0, 9, 3):
        print(board[i], "|", board[i+1], "|", board[i+2])
        if i < 6:
            print("---------")

# Function to handle player input
def player_input(player):
    print(f"Player {player}, choose your move (1-9):")
    move = int(input()) - 1
    while move < 0 or move > 8 or board[move] != " ":
        print("Invalid move, please try again.")
    board[move] = player

# Function to check for a win
def check_win():
    win_conditions = [(0, 1, 2), (3, 4, 5), (6, 7, 8), (0, 3, 6), (1, 4, 7), (2, 5, 8), (0, 4, 8), (2, 4, 6)]
    for condition in win_conditions:
        if board[condition[0]] == board[condition[1]] == board[condition[2]] != " ":
            return True
    return False

# Function to check for a draw
def check_draw():
    return " " not in board

# Function to swap players
def swap_player():
    global current_player
    current_player = "O" if current_player == "X" else "X"

# Function to ask if the player wants to play again
def play_again():
    print("Do you want to play again? (yes/no)")
    return input().lower() == "yes"

# Main game loop
while True:
    print_board()
    player_input(current_player)
    if check_win():
        print(f"Player {current_player} wins!")
        if not play_again():
            break
    elif check_draw():
        print("It's a draw!")
        if not play_again():
            break
    swap_player()

# Clear the board for a new game
board = [" " for _ in range(9)]
