/* The following code fails when the input is zero or a negative number. Fix it...

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

*** Use a while loop instead

Bonus: What is the purpose of number % divisor === 0 in that code?
- If there is no remainder when you divide the number by the divisor, it is a 
factor of that number and will be added to the array

Bonus 2: How does the result differ if you replace line 3 with factors.push(divisor);?
- The elements in the factors array will be in reverse order

*/

function factors(number) {
  let divisor = number;
  let factors = [];
  while (number > 0 && divisor !== 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } return factors;
}

console.log(factors(6));
console.log(factors(0));
console.log(factors(100));
console.log(factors(-2));
