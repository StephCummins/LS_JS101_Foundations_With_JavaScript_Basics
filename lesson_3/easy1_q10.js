/* Return a new version of this sentence that ends just before the word house. 
Don't worry about spaces or punctuation: remove everything starting from the 
beginning of house to the end of the sentence.

First, use the indexOf() method to identify the first index of "house". 

Next, use the slice method to extract the first part of the array, starting at
index 0 and ending at index house. 

*/

let advice = "Few things in life are as important as house training your pet dinosaur.";

let house = advice.indexOf("house");

let newAdvice = advice.slice(0, house);

console.log(newAdvice);

// Expected return value:
// => 'Few things in life are as important as '