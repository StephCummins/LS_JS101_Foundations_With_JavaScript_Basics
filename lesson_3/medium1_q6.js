/* What do you think the following code will output?

Bonus: How can you reliably test if a value is NaN
- Use the following:
Number.isNaN(value)

Example 1: 
let value1 = NaN
Number.isNaN(value1) // true

Example 2:
let value2 = 11
Number.isNaN(value2) = false

*/

let nanArray = [NaN];

console.log(nanArray[0] === NaN); // false
/* This will log false. You can't use the equality operators to 
determine whether a value is NaN in JavaScript.*/

console.log(Number.isNaN(nanArray[0])); // true