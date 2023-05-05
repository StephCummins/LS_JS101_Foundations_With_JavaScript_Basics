/* What will the following code output?

The first line will use implicit coercion because the expression uses the
non-strict equality operator. This coerces false (a boolean) to the number 0,
and the string "0" to the number 0. 0 == 0 is true, so it will output true.

The second line will return false. Because the strict equality operator is 
used, no coercion will occur, and "0" is a string, which is a truthy value.

*/

console.log(false == '0');
console.log(false === '0');