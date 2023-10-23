const computerWinsRound = document.querySelector("#lose-rounds");
const humanWinsRound = document.querySelector("#win-rounds");
const userContainer = document.querySelector("#user-container");

// buttons for choose choice and store it in userContainer and start game.
const btnRock = document.querySelector("#btn-rock");
btnRock.addEventListener("click", function (e) {
  userContainer.textContent = e.target.textContent;
  game();
});
const btnScissor = document.querySelector("#btn-scissor");
btnScissor.addEventListener("click", function (e) {
  userContainer.textContent = e.target.textContent;
  game();
});
const btnPaper = document.querySelector("#btn-paper");
btnPaper.addEventListener("click", function (e) {
  userContainer.textContent = e.target.textContent;
  game();
});


// this function choose randum choices for computer.
let choice = ["Rock", "Scissor", "Paper"];
function getComputerChoice() {
  return choice[Math.floor(Math.random() * 3)];
}



// variables for store all data like wins, loses and rounds
let n = 0;
let win = 0;
let lose = 0;
let wImjs = "&#129395;&#129395;&#129395;";
let lImjs = "&#128557;&#128557;&#128557;";
let tImjs = "&#129309;&#129309;&#129309;";


// this function called in game() function to check the player-input and computer choice who will win or loss.
function playRound(playerSelection, computerSelection) {
  // var for round Counting that who much rounds you play. 
  const roundCounter = document.querySelector("#roundCounter");
  
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
      computerWinsRound.textContent = lose;
      roundCounter.textContent = n;
      return `Lose!`;
    }
  }
  
  
  function game() {
    let playerSelection = userContainer.textContent.toLowerCase();
    let computerSelection = getComputerChoice();
    
    const computerContainer = document.querySelector("#auto-container");
    computerContainer.textContent = computerSelection;
    
    // here we call to funtion that will check who's win's the game computer or player and give's result
    let result = playRound(playerSelection, computerSelection.toLowerCase());
    
    // this var to show live time possible result Win, lose or Drow.
    const resultContainer = document.querySelector("#result-container");
    resultContainer.textContent = result;
    if (win === 5 || lose === 5) {
      // var for show Result after game 
      const finelResult = document.querySelector("#finel-result");

      // After Match details show that how much wins in how much rounds and how much lose
      const matchDetails = document.querySelector("#detailed-result");
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


// this function triger after complete 1 game and it will set all properties newly like on 0;
function restart() {
  n = 0;
  win = 0;
  lose = 0;
  computerWinsRound.textContent = lose;
  humanWinsRound.textContent = win;
}

// Author: Omar Rana
// Date Created: 07/09/2023
