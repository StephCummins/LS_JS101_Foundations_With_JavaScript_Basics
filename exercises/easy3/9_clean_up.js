/*Given a string that consists of some words and an assortment of non-alphabetic 
characters, write a function that returns that string with all of the non-
-alphabetic characters replaced by spaces. If one or more non-alphabetic 
characters occur in a row, you should only have one space in the result (i.e., 
the result string should never have consecutive spaces).*/

// SOLUTION 1:
function cleanUp(string) {
  let newString = "";
  for (let i = 0; i < string.length; i += 1) {
    if (string.charCodeAt(i) < 65 || string.charCodeAt(i) > 172) {
      newString += " ";
    } else {
      newString += string.charAt(i);
    }
  }
  let finalString = "";
  for (let i = 0; i < newString.length - 1; i += 1){
    if (newString.charAt(i) === " " && newString.charAt(i + 1) === " ") {
      continue;
    } else {
      finalString += newString.charAt(i);
    }
  }
  return finalString;
} 

console.log(cleanUp("---what's my +*& line?"));    // " what s my line

// CLEANER SOLUTION

function cleanUp2(str) {
  return str.replace(/[^a-z]/gi, " ").replace(/\s+/gi, " ");
}
console.log(cleanUp2("---what's my +*& line?")); // " what s my line "