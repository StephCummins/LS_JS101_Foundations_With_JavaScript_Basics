/* Write a program that prompts the user for two positive integers, and then 
prints the results of the following operations on those two numbers: addition, 
subtraction, product, quotient, remainder, and power. Do not worry about 
validating the input. */

const RLSYNC = require("readline-sync");

let int1 = parseInt(RLSYNC.question("Enter the first positive integer: "));

let int2 = parseInt(RLSYNC.question("Enter the second positive integer: "));

console.log(`${int1} + ${int2} = ${int1 + int2}`);
console.log(`${int1} - ${int2} = ${int1 - int2}`);
console.log(`${int1} * ${int2} = ${int1 * int2}`);
console.log(`${int1} / ${int2} = ${Math.round(int1 / int2)}`);
console.log(`${int1} % ${int2} = ${int1 % int2}`);
console.log(`${int1} ** ${int2} = ${Math.pow(int1,int2)}`);