/* For this practice problem, write a program that outputs The Flintstones 
Rock! 10 times, with each line indented 1 space to the right of the line 
above it.

Option 1:
Declare space as an empty string, then use a for loop to iterate 10 times. On
each iteration, print space + str1, theh add a space " " to space.

Option 2:
The second option uses a for loop with the repeat method.

*/

// Option 1:
let str1 = "The Flintstones Rock!";
const ITERATIONS = 10;
let space =" ";

for (let counter = 0; counter < ITERATIONS; counter += 1) {
  console.log(space + str1);
  space += " ";
}

// Option 2:
let str2 = "The Flintstones Rock!";

for (let padding = 1; padding < ITERATIONS; padding +=1) {
  console.log(" ".repeat(padding) + str2);
}
