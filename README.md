# Frontend Game 🎲

## Table of Contents

1. [Introduction](#introduction)
2. [Game Overview](#game-overview)
3. [Game Mechanics](#game-mechanics)
4. [How to Win](#how-to-win)
5. [Additional Features](#additional-features)
6. [Installation](#installation)
7. [How to Play](#how-to-play)
8. [Technologies Used](#technologies-used)
9. [Contributing](#contributing)
10. [License](#license)

---

## Introduction 📖

Welcome to **Frontend Game**, a simple yet fun dice game built using HTML, CSS, and JavaScript. This game is perfect for two players but can as well be played by an individual gamer and offers an engaging user interface with sound effects.

---

## Game Overview 🎯

- The game has two players, referred to as "Player 1" and "Player 2."
- Each player has a section on the screen displaying their name and current points.
- There's a 3D dice on the screen that players can "roll" by clicking the "Roll Dice" button.
- Players also have the option to "Lock In" their score or start a "New game."

---

## Game Mechanics ⚙️

1. **Initialization**: When the game starts, both players' scores are set to zero.
2. **Active Player**: One of the players is the "active player," indicated by a visual green light around the player’s box.
3. **Rolling the Dice**: The active player clicks the "Roll Dice" button to roll the dice.
   - A random number between 1 and 6 is generated.
   - The dice visually rotates to show the rolled number.
   - The rolled number is added to the active player's current score.
   - If the player rolls a 1, their current score is reset, and it's the other player's turn.
4. **Locking In**: The active player can choose to "Lock In" their score by clicking the "Lock In" button.
   - If the active player's total score reaches or exceeds 10, they can win the game by clicking locking in or can keep playing but can loose the game to their opponent.
5. **New Game**: Clicking the "New game" button resets the game to its initial state.

---

## How to Win 🏆

- A player wins by accumulating a total score of 10 or more points and then choosing to "Lock In" their score.
- When a player wins, a winning sound is played, and the game stops.

---

## Additional Features 🌈

- Sounds are played during dice rolling and when a player wins.

---

## Installation 🛠️

1. Clone the repository to your local machine.
2. Open `index.html` in your web browser.
3. Enjoy the game!

---

## How to Play 🎮

1. **Roll the Dice**: Click the 'Roll Dice' button to roll the dice.
2. **Lock In**: Click the 'Lock In' button to lock your current score.
3. **New Game**: Click the 'New Game' button to start a new game.
4. **Winning**: The first player to reach a score of 10 can win the game.

---

## Technologies Used 💻

- HTML
- CSS
- JavaScript

---

## Contributing 🤝

Feel free to fork the project and submit a pull request.

---

## License 📝

This project is licensed under the MIT License.
