/* How would you check whether the objects assigned to variables numbers and 
table below are arrays?

Use the isArray() method

*/

let numbers = [1, 2, 3, 4];
let table = { field1: 1, field2: 2, field3: 3, field4: 4 };

console.log(Array.isArray(numbers)); // true
console.log(Array.isArray(table)); // false