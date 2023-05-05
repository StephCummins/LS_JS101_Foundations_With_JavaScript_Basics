/* What will the following code output?

This will output 34. The function returns a value for the variable newAnswer,
which is independent of the variable answer. The console logs answer - 8, or
42 - 8, which is 34.

*/

let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

