// Welcome the user to the program
// Ask the user for the first number
// Ask the user for the second number
// Ask the user for the operation to perform
// Perform the operation on the two numbers
// Log the result

const LANGUAGE = "en";

const rlSync = require("readline-sync");

const MESSAGES = require('./calculator_messages.json');

function messages(message, lang = LANGUAGE) {
  return MESSAGES[lang][message];
}

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(num) {
  return num.trimStart() === "" || Number.isNaN(Number(num));
}

let answer = "n";

prompt(messages("welcome"));

do {
  
  prompt(messages("firstNum"));
  let number1 = rlSync.question();
  
  while (invalidNumber(number1)) {
    prompt(messages("validNum"));
    number1 = rlSync.question();
  }
  
  prompt(messages("secondNum"));
  let number2 = rlSync.question();
  
  while (invalidNumber(number2)) {
    prompt(messages("validNum"));
    number2 = rlSync.question();
  }
  
  prompt(messages("operation"));
  let operator = rlSync.question();
  
  while (!["1", "2", "3", "4"].includes(operator)) {
    prompt(messages("validOp"));
    operator = rlSync.question();
  }
  
  let output;
  
  switch (operator) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
  }
  
  prompt(`${messages("result")} ${output}.`);
  
  prompt(messages("continue"));
  answer = rlSync.question();

  while (!["y", "Y", "n", "N"].includes(answer)) {
    prompt(messages("quitError"));
    answer = rlSync.question();
  }

} while (answer === "y" || answer === "Y");