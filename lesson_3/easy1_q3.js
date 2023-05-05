/* Determine whether the following object of people and their age contains an entry for 'Spot':

By using the Object.hasOwn() static method, which will return true if there is a property 
for "Spot" or false if there isn't a property for "Spot".

*/

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(Object.hasOwn(ages, "Spot")); // returns false



