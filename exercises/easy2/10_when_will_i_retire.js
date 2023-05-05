/* Build a program that logs when the user will retire and how many more years 
the user has to work until retirement. */

const RLSYNC = require("readline-sync");

let age = RLSYNC.question("What is your current age? ");
while (!Number.isInteger(Number(age))) {
  console.log("Error. Enter your age as a valid number.");
  age = RLSYNC.question();
}

let retireAge = RLSYNC.question("At what age would you like to retire? ");
while (!Number.isInteger(Number(retireAge))) {
  console.log("Error. Enter your ideal retirement age as a valid number.");
  retireAge = RLSYNC.question();
}

let yearsToGo = retireAge - age;

let currentYear = new Date().getFullYear();

let retireYear = currentYear + yearsToGo;

console.log(`It's ${currentYear}. You will retire in ${retireYear}.
You still have ${yearsToGo} years of work to go!`);