/* Write a function that computes the sum of all numbers between 1 and some 
other number, inclusive, that are multiples of 3 or 5. For instance, if the 
supplied number is 20, the result should be 98 
(3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20). */

function multisum(number) {
  let total = 0;
  for (let count = 1; count <= number; count += 1) {
    if ((count % 3 === 0) || (count % 5 === 0)) {
      total += count;
    }
  } return total;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

