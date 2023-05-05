/* Will the code below raise an error?

No. It will will assign index 6 of the numbers array a new value, number 5. 
Indexes 0-2 and 6 all have elements with assigned values, while indexes 3-5
are empty and will display <3 empty items> when the array is logged to the
console.

For the bonus question, numbers[4] will return undefined. Index 4 is empty.

*/

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];
console.log(numbers);