/* Add entires for Marilyn and Spot to the ages object:

Use the Object.assign() static method, which copies all properties from a 
source object (in this case, additionalAges) to the target object (in this 
case, ages).

*/

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

let additionalAges = { Marilyn: 22, Spot: 237 };

Object.assign(ages, additionalAges);

console.log(ages); 

/* {
    Herman: 32,
    Lily: 30,
    Grandpa: 5843,
    Eddie: 10,
    Marilyn: 22,
    Spot: 237
  }
*/