/* What will the following output return?

This will return "no"

bar(foo())
> the foo function returns "yes"
>> bar("yes")
>>> param !== "no", so it will return "no"

*/

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

bar(foo());


