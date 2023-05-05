/* Write three different ways to remove all of the elements from the following 
array:

- Use the splice method with a single parameterst 0. This begins the splice at
index 0. Becuase there are no other parameters for deleteCount or item, it will
delete the entire array

- Use a do/while or while loop with pop or shift

- assign the array a length of zero

*/

let numbers1 = [1, 2, 3, 4];
numbers1.splice(0);
console.log(numbers1);

let numbers2 = [1, 2, 3, 4];
do {
  numbers2.shift();
} while (numbers2.length !== 0);
console.log(numbers2);

let numbers3 = [1, 2, 3, 4];
while (numbers3.length !== 0) {
  numbers3.pop();
}
console.log(numbers3);

let numbers4 = [1, 2, 3, 4];
numbers4.length = 0;
console.log(numbers4);