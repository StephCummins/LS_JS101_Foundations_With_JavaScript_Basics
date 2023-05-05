/* Create an array from this object that contains only two elements: Barney's name and Barney's number:

First, use the object.entries method to turn the object into an array with nested arrays for each pair.
Next, filter for the pair that is assigned "Barney" at index 0;
Then, shift to remove the outer array

*/

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };
let barneyArray = Object.entries(flintstones).filter(pairs => pairs[0] === "Barney").shift();
console.log(barneyArray);