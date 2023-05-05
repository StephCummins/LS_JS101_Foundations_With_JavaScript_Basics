/* Fix the following code to determine if an input string is an IP address:
-- four dot-separated numbers (i.e. 10.4.5.11)
-- Determine whether a string is a numeric between 0 and 255

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}
*/

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  } 
  while(dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }
  return true;
}

console.log(isDotSeparatedIpAddress("11.22.111.222"));

console.log(isDotSeparatedIpAddress("1.22.111.256"));

console.log(isDotSeparatedIpAddress("1.22.111.-256"));