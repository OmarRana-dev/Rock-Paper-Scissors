const userContainer = document.querySelector("#user-container");
const computerContainer = document.querySelector("#auto-container");
const resultContainer = document.querySelector("#result-container");
const btnRock = document.querySelector("#btn-rock");
const btnScissor = document.querySelector("#btn-scissor");
const btnPaper = document.querySelector("#btn-paper");
const finelResult = document.querySelector("#finel-result");
const humanWinsRound = document.querySelector("#win-rounds");
const computerWindsRound = document.querySelector("#lose-rounds");
const roundCounter = document.querySelector("#roundCounter");

btnRock.addEventListener("click", function (e) {
  userContainer.textContent = e.target.textContent;
  game();
});

btnScissor.addEventListener("click", function (e) {
  userContainer.textContent = e.target.textContent;
  game();
});

btnPaper.addEventListener("click", function (e) {
  userContainer.textContent = e.target.textContent;
  game();
});

// this function choose randum choices.
let choice = ["Rock", "Scissor", "Paper"];
function getComputerChoice() {
  return choice[Math.floor(Math.random() * 3)];
}

// this function called in game() function to check the player-input and computer choice who will win ro loss.

let n = 0;
let win = 0;
let lose = 0;
let wImjs = "&#129395;&#129395;&#129395;";
let lImjs = "&#128557;&#128557;&#128557;";
let tImjs = "&#129309;&#129309;&#129309;";
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    n++;
    roundCounter.textContent = n;
    return `Drow!`;
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    n++;
    win++;
    humanWinsRound.textContent = win;
    roundCounter.textContent = n;
    return `Win!`;
  } else {
    n++;
    lose++;
    computerWindsRound.textContent = lose;
    roundCounter.textContent = n;
    return `Lose!`;
  }
}

const matchDetails = document.querySelector("#detailed-result");

function game() {
  let playerSelection = userContainer.textContent.toLowerCase();
  let computerSelection = getComputerChoice();
  computerContainer.textContent = computerSelection;

  // here we call to funtion that will check who's win's the game computer or player and give's result
  let result = playRound(playerSelection, computerSelection.toLowerCase());
  resultContainer.textContent = result;
  if (win === 5 || lose === 5) {
    if (win > lose) {
      finelResult.textContent =
        "You Won the fucking Game! Your Father pround on you.";
      matchDetails.textContent = `You Win ${win} rounds out of ${n} & lose ${lose} rounds`;
      resultContainer.innerHTML = wImjs;
      restart();
    } else if (lose > win) {
      finelResult.textContent = "Fuck You! You'r loser BigAssHole.";
      resultContainer.innerHTML = lImjs;
      matchDetails.textContent = `You Win ${win} rounds out of ${n} & lose ${lose} rounds`;
      restart();
    } else {
      finelResult.textContent = "Game is Drow! Try Again and win AssHole.";
      matchDetails.textContent = `You Win ${win} rounds out of ${n} & lose ${lose} rounds`;
      resultContainer.innerHTML = tImjs;
      restart();
    }
  }
}

function restart() {
  n = 0;
  win = 0;
  lose = 0;
  computerWindsRound.textContent = lose;
  humanWinsRound.textContent = win;
}

// Author: Omar Rana
// Date Created: 07/09/2023
