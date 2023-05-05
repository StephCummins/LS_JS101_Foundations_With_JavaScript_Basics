/* Write a program that will ask for user's name. The program will then greet 
the user. If the user writes "name!" then the computer yells back to the user.*/

const rlSync = require("readline-sync");

let name = rlSync.question("What is your name? ");

name.endsWith('!') ? 
console.log(`Hello ${name.slice(0, name.length - 1)}. Why are we screaming?`
  .toUpperCase()) : console.log(`Hello ${name}!`);
