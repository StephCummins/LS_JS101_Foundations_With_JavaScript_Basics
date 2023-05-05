/* Write a function that takes a string argument and returns a new string that 
contains the value of the original string with all consecutive duplicate 
characters collapsed into a single character. */

function crunch(str) {
  let shortString ="";
  for (let i = 0; i < str.length; i += 1) {
    if (i === 0) {
      shortString += str[i];
    } else if (str[i] !== str[i - 1]) {
      shortString += str[i]
    }
  }
  return shortString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""

