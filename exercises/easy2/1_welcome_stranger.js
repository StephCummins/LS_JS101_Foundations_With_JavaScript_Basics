/* Create a function that takes 2 arguments, an array and an object. The array 
will contain 2 or more elements that, when combined with adjoining spaces, will 
produce a person's name. The object will contain two keys, "title" and 
"occupation", and the appropriate values. Your function should return a 
greeting that uses the person's full name, and mentions the person's title. */

/* LONG OPTION

function greetings(array, object) {
  let name = "";
  array.forEach(item => {
    (item !== array[array.length - 1])? name += item + " " : name += item;
  });
  
  let job = Object.values(object);
  
  return `Hello there, ${name}! Nice to have a ${job[0]} ${job[1]} around.`;
} */

function greetings(array, object) {
  return `Hello there ${array.join(" ")}! Nice to have a ${object.title} ${object.occupation} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
console.log(
  greetings(["Steph", "A", "Cummins"], { title: "Badass", occupation: "Software Enginneer" })
);
console.log(
  greetings(["Howard", "the", "Duck"], { title: "Awesome", occupation: "Duck" })
);