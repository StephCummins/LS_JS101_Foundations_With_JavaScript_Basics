/* What will the following code output?

Since the slice() method is called with no parameters, arr2 initially is an
exact copy of arr1. 

When arr2 changes the value of the 0 index, which is the first object key-value
pair, it changes the value assigned to the "first" property to the number 42. 

Because arr1 and arr2 both point to the same array, this change also impacts arr1.

This will log the following to the console:

[{ first: 42 }, { second: "value2" }, 3, 4, 5]

*/

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);