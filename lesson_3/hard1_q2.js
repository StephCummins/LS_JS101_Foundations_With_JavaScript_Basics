/* What does the last line in the following code output?

The last line of code will log {first: [1, 2]}, because object and numArray are
mutable and point to the same array. When a change is made to numArray, this is
the same array that object points to, so the changes will also be reflected in
object.

*/

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); // {first: [1, 2]} 