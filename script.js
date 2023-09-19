const userContainer = document.querySelector("#user-container");
const computerContainer = document.querySelector("#auto-container");
const resultContainer = document.querySelector("#result-container");
const btnRock = document.querySelector("#btn-rock");
const btnScissor = document.querySelector("#btn-scissor");
const btnPaper = document.querySelector("#btn-paper");


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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Drow!`;
  } else if (
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    n++;
    return `You Win!`;
  } else {
    n++;
    return `You Lose!`;
  }
}

function game() {
  let playerSelection = userContainer.textContent.toLowerCase();
  let computerSelection = getComputerChoice();
  computerContainer.textContent = computerSelection;

  // here we call to funtion that will check who's win's the game computer or player and give's result
  let result = playRound(playerSelection, computerSelection.toLowerCase());
  resultContainer.textContent = result;
  if (n === 5){
    console.log("You Play 5 ROUND'S.")
    n = 0;
  }
}

// Author: Omar Rana
// Date Created: 07/09/2023