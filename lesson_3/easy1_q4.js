/* Using the following string, create a new string that contains all lowercase 
letters except for the first character, which should be capitalized. 
(See the example output.)

Option 1:
First, use the charAt() method to isoloate the first "t" at index 0, then use the toUpperCase() method
to capitalize the letter. Concatenate that with the substring() method on index 1 (which will include 
index 1 to the remainder of the sentence) and the toLowerCase() method on the substring.

Option 2:
Using the toLowerCase() method will convert all letters to lowercase, then 
useing the replace() method will replace "the" with "The"

Another option is to use the charAt() method on index 0

*/

// Option 1
let munstersDescription = "the Munsters are CREEPY and Spooky.";

let newMunsters = munstersDescription.charAt(0).toUpperCase() + munstersDescription.substring(1).toLowerCase();

console.log(newMunsters); // The munsters are creepy and spooky

// Option 2:

let munstersLowercase = munstersDescription.toLowerCase().replace("the", "The");

console.log(munstersLowercase); // The munsters are creepy and spooky.