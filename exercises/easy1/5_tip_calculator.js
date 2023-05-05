/* Create a simple tip calculator. The program should prompt for a bill amount 
and a tip rate. The program must compute the tip, and then log both the tip and 
the total amount of the bill to the console. You can ignore input validation and 
assume that the user will enter numbers. */

const rlSync = require("readline-sync");

let billTotal = parseFloat(rlSync.question("How much is your bill total? "));

let tipRate = parseFloat(rlSync.question("What is the tip percentage? "));

let tip = (billTotal * (tipRate/100));

let total = billTotal + tip;

console.log(`The tip is ${tip.toFixed(2)}.`);
console.log(`The total is ${total.toFixed(2)}.`);
