/*Write a function that takes a year as input and returns the century. The 
return value should be a string that begins with the century number, and ends 
with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000 
comprise the 20th century.*/

function determineSuffix(centuryNum) {
  centuryNum = centuryNum.toString();
  if (centuryNum === "1" || centuryNum.endsWith("01")) {
    return "st";
  } else if (centuryNum === "2" || centuryNum.endsWith("02")) {
    return "nd";
  } else if (centuryNum === "3" || centuryNum.endsWith("03")) {
    return "rd";
  } else {
    return "th";
  }
}

function century(year) {
  let centuryNum = Math.ceil(year / 100);
  let suffix = determineSuffix(centuryNum);
  return centuryNum + suffix;
}

console.log(century(2000));   // "20th"
console.log(century(2001));   // "21st"
console.log(century(1965));   // "20th"
console.log(century(256));    // "3rd"
console.log(century(5));      // "1st"
console.log(century(10103));  // "102nd"
console.log(century(1052));   // "11th"
console.log(century(1127));   // "12th"
console.log(century(11201));  // "113th"