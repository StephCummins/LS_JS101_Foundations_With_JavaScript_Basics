/* What will the following code output?

The following code will output "hello there". str1 and str2 are strings, 
which are primitive data types. They are immutable and independent of each 
other, so even though they are initially assigned the same value, when str2 is
reassigned a value of "goodbye!" it does not affect the value of str1

*/

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);