/* Given the following similar sets of code, what will each code snippet print?

function messWithVars(one, two, three) {
  one = two; // These variables shadow the global variables
  two = three; // Due to shadowing, any reassignments in the function don't impact the global variables
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"]; 

messWithVars(one, two, three);

console.log(`one is: ${one}`); // "One is: one"
console.log(`two is: ${two}`); // "Two is: two"
console.log(`three is: ${three}`); // "Three is: three"

function messWithVars(one, two, three) {
  one = ["two"]; // variable shadowing prevents any changes made in the function
  two = ["three"]; // from impacting the global variables
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // "One is: one"
console.log(`two is: ${two}`); // "Two is: two"
console.log(`three is: ${three}`); // "Three is: three"

function messWithVars(one, two, three) {
  one.splice(0, 1, "two"); // Changes are made directly to the arrays, which are 
  two.splice(0, 1, "three"); // pass-by-reference (different than the previous
  three.splice(0, 1, "one"); // two examples)
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // "One is: two"
console.log(`two is: ${two}`); // "Two is: three"
console.log(`three is: ${three}`); // "Three is: one"
*/