/*eslint no-trailing-spaces: ["error", { "skipBlankLines": true }]*/

const rlSync = require("readline-sync");

function userPrompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

function aprConversion(apr) {
  apr /= 100;
  apr /= 12;
  return apr;
}

function loanToMonths(loanDuration) {
  loanDuration *= 12;
  return loanDuration;
}

function calcPayment(loan, interest, duration) {
  if (interest === 0) {
    return loan / duration;
  } else {
    return loan * (interest / (1 - Math.pow((1 +  interest), (-duration))));
  }
}

let calculateAgain = " ";

userPrompt("Welcome to the loan calculator.");

do {
  userPrompt("Enter your total loan amount.");
  let loan = rlSync.question();
  
  while (invalidNumber(loan)) {
    userPrompt("Error. Enter a valid number. Do not include commas.");
    loan = rlSync.question();
  }
  
  loan = Number(loan);
  
  userPrompt("Enter your Annual Percentage Rate (APR) as a percentage.");
  let apr = rlSync.question();
  
  while (invalidNumber(apr)) {
    userPrompt("Error. Enter a valid number. Do not include the % symbol.");
    apr = rlSync.question();
  }
  
  apr = Number(apr);
  
  userPrompt("Enter your loan duration in years.");
  let loanDuration = rlSync.question();
  
  while (invalidNumber(loanDuration)) {
    userPrompt("Error. Enter your loan duration as a valid number.");
    loanDuration = rlSync.question();
  }
  
  loanDuration = Number(loanDuration);
  
  let monthlyInterest = aprConversion(apr);
  
  let monthlyDuration = loanToMonths(loanDuration);
  
  let monthlyPayment = calcPayment(loan, monthlyInterest, monthlyDuration);
  
  userPrompt(`Your total monthly payment is ${monthlyPayment.toFixed(2)}`);
  
  userPrompt("Would you like to do another calculation?");
  calculateAgain = rlSync.question();
  
  while (!["y", "Y", "n", "N"].includes(calculateAgain)) {
    userPrompt("Error. Please enter Y to continue or N to quit.");
    calculateAgain = rlSync.question();
  }
}
while (calculateAgain === "y" || calculateAgain === "Y");