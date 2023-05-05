/* Write a function that returns the number provided as an argument multiplied 
by two, unless the argument is a double number; otherwise, return the double 
number as-is. */

function twice(num) {
  let str = num.toString();
  if (str.length % 2 !== 0) {
    return parseInt(str) * 2;
  } else {
    let half1 = str.slice(0, str.length / 2);
    let half2 = str.slice(str.length / 2);
    if (half1 === half2) {
      return parseInt(str);
    } else {
      return parseInt(str) * 2;
    }
  }
}
console.log(twice(37));
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676