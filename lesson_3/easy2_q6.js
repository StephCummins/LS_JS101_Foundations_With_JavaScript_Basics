/* Create a new array that contains all of the above values, but in an un-nested format:

-- Using the forEach method to iterate through the array, then the concat method
-- Using the flat method
-- Using the concat method

*/

let flintstones = ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Option 1:
let newFlintstones1 =[];

flintstones.forEach(person => {
  newFlintstones1 = newFlintstones1.concat(person);
});

console.log(newFlintstones1);

// Option 2:
let newFlintstones2 = flintstones.flat();
console.log(newFlintstones2);

// Option 3:
let newFlintstones3 = [].concat(...flintstones);
console.log(newFlintstones3);