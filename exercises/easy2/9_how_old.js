/* Build a program that randomly generates Teddy's age, and logs it to the 
console. Have the age be a random number between 20 and 120 (inclusive). */

function ageGenerator(maxAge, minAge) {
  if (maxAge < minAge) {
    return console.log("Your minimum age must not exceed your maximum age.");
  }
  let age = Math.floor(Math.random() * maxAge);
  age < minAge ? ageGenerator(maxAge) : 
  console.log(`Teddy is ${age} years old.`);
} 

ageGenerator(20, 120);