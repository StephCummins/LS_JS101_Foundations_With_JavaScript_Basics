/* Will the following functions return the same code?

No. The first function will return {prop1: "hi there"}.

The second function returns with returning anything to be logged to the console.
This happens because the return statement appears on the line alone, and the 
brackets for the object to be returned aren't on the same line. JS automatically
adds a semicolon after the return statement, and when the second function is 
called, it will log undefined.

*/

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first()); // {prop1: "hi there"}
console.log(second()); // undefined