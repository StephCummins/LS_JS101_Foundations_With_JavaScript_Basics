/* Write a one-line expression to count the number of lower-case t characters 
in each of the following strings:

- Use the split() method the string into an array, with each character 
separated by a comma

- Use the filter method to narrow down array to only include elements that are 
character "t"

- Check length of remaining array (this will be your amount of "t" characters)


*/

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split("").filter(char => char === "t").length);
console.log(statement2.split("").filter(char => char === "t").length);


/*

let step1 = statement1.split("");

let step2 = step1.filter(char => char === "t");

let step3 = step2.length;

console.log(step3); 

*/
