// Selecting elements
const gamer0 = document.querySelector(".gamer--0");
const gamer1 = document.querySelector(".gamer--1");
const dicePlayerValue0 = document.getElementById("dice-player-value--0");
const dicePlayerValue1 = document.getElementById("dice-player-value--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const diceEl = document.querySelector(".dice_block");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".roll_your_dice");
const btnHold = document.querySelector(".lock_your_value");

const diceSound = document.getElementById("diceSound"); // Reference to the rolling dice sound audio element
const winSound = document.getElementById("winSound"); // Reference to the winning sound audio element

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  diceSound.pause(); // Stop playing the dice sound
  diceSound.currentTime = 0; // Reset the dice sound to the beginning for next time

  winSound.pause(); // Stop playing the winning sound
  winSound.currentTime = 0; // Reset the winning sound to the beginning for next time

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  dicePlayerValue0.textContent = 0;
  dicePlayerValue1.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add("hidden");
  gamer0.classList.remove("player--winner");
  gamer1.classList.remove("player--winner");
  gamer0.classList.add("player--active");
  gamer1.classList.remove("player--active");

  diceEl.style.transform = "rotateX(0deg) rotateY(0deg)"; // Adjust these values if needed
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  gamer0.classList.toggle("player--active");
  gamer1.classList.toggle("player--active");
};

const strictRandomDice = () => {
  const randomNum = Math.floor(Math.random() * 6) + 1;
  rollDice(randomNum);
};

const rollDice = randomNum => {
  diceSound.loop = true; // Set loop to true to keep playing the sound while the dice is rolling
  diceSound.play(); // Start playing the sound

  diceEl.style.animation = "rolling 4s";
  document.querySelector(`.gamer--${activePlayer}`).classList.add("dim-in-out");

  setTimeout(() => {
    diceSound.pause(); // Stop playing the sound
    diceSound.currentTime = 0; // Reset the sound to the beginning for next time

    document
      .querySelector(`.gamer--${activePlayer}`)
      .classList.remove("dim-in-out");

    // Switch statement for dice rotation
    switch (randomNum) {
      case 1:
        diceEl.style.transform = "rotateX(0deg) rotateY(0deg)";
        break;
      case 2:
        diceEl.style.transform = "rotateX(-90deg) rotateY(0deg)";
        break;
      case 3:
        diceEl.style.transform = "rotateX(0deg) rotateY(90deg)";
        break;
      case 4:
        diceEl.style.transform = "rotateX(0deg) rotateY(-90deg)";
        break;
      case 5:
        diceEl.style.transform = "rotateX(90deg) rotateY(0deg)";
        break;
      case 6:
        diceEl.style.transform = "rotateX(180deg) rotateY(0deg)";
        break;
      default:
        break;
    }

    diceEl.style.animation = "none";
    document.getElementById(`current--${activePlayer}`).textContent = randomNum;

    if (randomNum !== 1) {
      currentScore += randomNum;
      scores[activePlayer] += randomNum;
      document.getElementById(
        `dice-player-value--${activePlayer}`
      ).textContent = scores[activePlayer];
    } else {
      currentScore = 0;
      document.getElementById(
        `dice-player-value--${activePlayer}`
      ).textContent = scores[activePlayer];
      switchPlayer();
    }
  }, 4050);
};

btnRoll.addEventListener("click", function () {
  if (playing) {
    strictRandomDice();
  }
});

btnHold.addEventListener("click", function () {
  diceSound.pause(); // Stop playing the sound
  diceSound.currentTime = 0; // Reset the sound to the beginning for next time

  if (playing) {
    if (scores[activePlayer] >= 10) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.gamer--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.gamer--${activePlayer}`)
        .classList.remove("player--active");

      // Play the winning sound
      winSound.play();
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
