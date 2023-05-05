// Return a new string that swaps the case of all of the letters:

// Option 1: Using a for loop
let munstersDescription = "The Munsters are creepy and spooky.";
let words = munstersDescription.split("");
let caseSwitch =[];

for (let char = 0; char < words.length; char += 1) {
  if (words[char] === words[char].toUpperCase()) {
    caseSwitch.push(words[char].toLowerCase());
  } else {
    caseSwitch.push(words[char].toUpperCase());
  }
}

console.log(caseSwitch.join(""));

// Option 2: Using the map method
let munstersDescription2 = "The Munsters are creepy and spooky.";
let caseSwitch2 = [];

munstersDescription2.split("").map(char => { 
  if (char === char.toUpperCase()) {
    caseSwitch2.push(char.toLowerCase());
  } else {
    caseSwitch2.push(char.toUpperCase());
  }
});

console.log(caseSwitch2.join(''));
