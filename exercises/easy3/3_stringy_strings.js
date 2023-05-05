/*Write a function that takes one argument, a positive integer, and returns a 
string of alternating '1's and '0's, always starting with a '1'. The length of 
the string should match the given integer. */

function stringy(number) {
  let output = "";
  for (let i = 0; i < number; i += 1) {
    (i === 0 || i % 2 === 0) ? output += "1" : output += "0";
  }
  return output;
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"
console.log(stringy(1));   // "1"
