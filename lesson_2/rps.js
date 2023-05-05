/*eslint no-trailing-spaces: ["error", { "skipBlankLines": true }]*/

const rlSync = require("readline-sync");

const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];

let userScore = 0;
let compScore = 0;
let playAgain = "";
let winner = "";

function prompt(message) {
  console.log(`=> ${message}\n`);
}

function validChoice(userChoice) {
  if (Number(userChoice) > 0 && Number(userChoice) < VALID_CHOICES.length) {
    return true;
  } else {
    return false;
  }
}

function userWins(userChoice, compChoice) {
  return  (userChoice === "rock" && compChoice === "scissors") ||
          (userChoice === "rock" && compChoice === "lizard") ||
          (userChoice === "paper" && compChoice === "rock") ||
          (userChoice === "paper" && compChoice === "spock") ||
          (userChoice === "scissors" && compChoice === "paper") ||
          (userChoice === "scissors" && compChoice === "lizard") ||
          (userChoice === "lizard" && compChoice === "spock") ||
          (userChoice === "lizard" && compChoice === "paper") ||
          (userChoice === "spock" && compChoice === "rock") ||
          (userChoice === "spock" && compChoice === "scissors");
}

function displayWinner(userChoice, compChoice) {
  prompt(`You picked ${userChoice}, and the computer picked ${compChoice}.`);
  
  if (userWins(userChoice, compChoice)) {
    prompt("You win!");
    winner = "user";
  } else if (userChoice === compChoice) {
    prompt("It's a tie!");
    winner = " ";
  } else {
    prompt("You lose!");
    winner = "comp";
  }
}

function calculateScore(winner) {
  if (winner === "user") {
    userScore += 1;
  } else if (winner === "comp") {
    compScore += 1;
  }
}

function displayChampion(userScore, compScore) {
  if (userScore >= 3) {
    prompt(`You won ${userScore} games! You are the ultimate champion!`);
  } else {
    prompt(`The computer won ${compScore} games! AI is the ultimate champ!`);
  }
}

function resetScore() {
  userScore = 0;
  compScore = 0;
}

prompt("Let's play Rock Paper Scissors: Lizard Spock Edition!");

do {
  prompt("It's best of 5! First to win 3 games is the champion!");
  
  while (userScore < 3 && compScore < 3) {
    prompt("Enter the number for your choice:");
    prompt("1) rock  2) paper  3) scissors  4) lizard  5) spock");
    let userChoice = rlSync.question();
    console.log("\n");
    
    while (!validChoice(userChoice)) {
      prompt("That's not a valid choice. Select again!");
      userChoice = rlSync.question();
      console.log("\n");
    }
    
    userChoice = VALID_CHOICES[Number(userChoice)];
    
    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    
    let computerChoice = VALID_CHOICES[randomIndex];
    
    displayWinner(userChoice, computerChoice);
    
    calculateScore(winner);
    
  }
  
  displayChampion(userScore, compScore);
  
  resetScore();

  prompt("Would you like to play again? y/n");
  playAgain = rlSync.question().toLowerCase();
  console.log("\n");
  
  while (playAgain !== "y" && playAgain !== "n") {
    prompt("Type y to play again or n to quit.");
    playAgain = rlSync.question().toLowerCase();
    console.log("\n");
  }
} while (playAgain === "y");