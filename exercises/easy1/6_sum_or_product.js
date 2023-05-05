/* Write a program that asks the user to enter an integer greater than 0, then 
asks whether the user wants to determine the sum or the product of all numbers 
between 1 and the entered integer, inclusive. Change program to take an input
of arrays*/

const rlSync = require("readline-sync");
// Input a single integer
/*function sum(number) {
  let total = 0;
  for (let counter = 1; counter <= number; counter += 1) {
    total += counter;
  } return total;
}

function product(number) {
  let total = 1;
  for (let counter = 1; counter <= number; counter += 1) {
    total *= counter;
  } return total;
}

let num = rlSync.question("Enter an integer greater than 0: ");
while((Number(num) === 0) || (!Number.isInteger(Number(num)))) {
  console.log("Error. Please enter a positive integer.");
  num = rlSync.question();
}

num = Number(num);

let operation = rlSync.question("Enter s to compute the sum, or p to compute the product: ").toLowerCase();
while(!["s", "p"].includes(operation)) {
  console.log("Error. Please enter s or p.");
  operation = rlSync.question();
}

if (operation === "s") {
  let total = sum(num);
  console.log(`The sum of all integers between 1 and ${num} is ${total}.`);
} else if (operation === "p") {
  let total = product(num);
  console.log(`The product of all integers between 1 and ${num} is ${total}.`);
} */

// Input an array of integers

function sumArray(arr) {
  return arr.reduce((accumulator, element) => accumulator + parseInt(element, 10), 0);
}
  
function productArray(arr) {
  return arr.reduce((accumulator, element) => accumulator * parseInt(element, 10), 1);
}

let input = rlSync.question("Enter an array of integers: ");

let array = Array.from(input).filter(char => Number.isInteger(parseInt(char, 10)));

let operator = rlSync.question("Enter s to compute the sum, or p to compute" +
" the product of all elements in the array: ").toLowerCase();
while(!["s", "p"].includes(operator)) {
  console.log("Error. Please enter s or p.");
  operator = rlSync.question();
}

if (operator === "s") {
  let totalSum = sumArray(array);
  console.log(`The sum of all array elements is ${totalSum}.`);
} else if (operator === "p") {
  let totalProduct = productArray(array);
  console.log(`The product of all array elements is ${totalProduct}.`);
}