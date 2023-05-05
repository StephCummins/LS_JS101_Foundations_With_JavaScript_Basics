/* The following function unnecessarily uses two return statements to return
boolean values. Can you rewrite this function so it only has one return 
statement and does not explicitly use either true or false?

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}
*/

function isColorValid(color) {
  return (color === "blue" || color === "green");
}

console.log(isColorValid("blue")); // true
console.log(isColorValid("green")); // true
console.log(isColorValid("black")); // false

const isColorValid2 = color => (color === "blue" || color === "green");

console.log(isColorValid2("blue")); // true
console.log(isColorValid2("green")); // true
console.log(isColorValid2("black")); // false


const isColorValid3 = color => (color.includes("blue") || color.includes("green"));

console.log(isColorValid3("blue")); // true
console.log(isColorValid3("green")); // true
console.log(isColorValid3("black")); // false