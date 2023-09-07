let choice = ["rock", "scissor", "paper"];

// this function choose randum choices.
function getComputerChoice() {
  return choice[Math.floor(Math.random() * 3)];
}

// this function called in game() function to check the player-input and computer choice who will win ro loss.
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Drow! ${playerSelection} = ${computerSelection}`;
  } else if (
    (playerSelection === "paper" &&
      computerSelection === "rock") ||
    (playerSelection === "rock" &&
      computerSelection === "scissor") ||
    (playerSelection === "scissor" &&
      computerSelection === "paper")
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let n = 0;
  let lose = 0;
  let win = 0;
  let drow = 0;
  while (n < 5) {
    // 
    let input = prompt(`"Rock", "Paper", "Scissor"`, "Rock");
    let playerSelection = input.toLowerCase();

    // this if else function check that user put right input or not.

    if (playerSelection === "rock" || playerSelection === "scissor" || playerSelection === "paper") {
      let computerSelection = getComputerChoice();

      // here we recall to funtion that check who's win computer or player and give's result
      let result = playRound(playerSelection, computerSelection);
      console.log(result + "\n ")
      if (result.includes("Win")) {
        win++;
        n++;
      } else if (result.includes("Lose")) {
        lose++;
        n++;
      } else {
        drow++;
      }
    }else {
      console.log("Please Put Right one.")
    }

  }
  console.log(`You Win ${win} Games.`);
  console.log(`You Lose ${lose} Games.`);
  console.log(`Total Round of Game: ${n}`);
  console.log(`Drow's in Game: ${drow}`);
  if (win > lose) {
    console.log("\n YOU WON THE GAME!\n ");
  } else {
    console.log("\n YOU LOSE! TryAgain.\n ");
  }
}
game();
