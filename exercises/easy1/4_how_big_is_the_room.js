/* Build a program that asks the user to enter the length and width of a room, 
and then logs the area of the room to the console in both square meters and square feet.*/

const rlSync = require("readline-sync");

const SQ_FT_CONVERSION = 10.7639;

let measurementType = rlSync.question("What input type? Feet or Meters? ").toLowerCase();

let length = rlSync.question("Enter the length of room: ");
length = parseInt(length, 10);

let width = rlSync.question("Enter the width of the room: ");
width = parseInt(width, 10);

if (measurementType === "meters") {
  let squareMeters = length * width;
  let squareFeet = (squareMeters * SQ_FT_CONVERSION).toFixed(2);
  console.log(`The area of the room is ${squareMeters} square meters (${squareFeet} squqre feet.)`);
} else if (measurementType === "feet") {
  let squareFeet = length * width;
  let squareMeters = (squareFeet / 10.7639).toFixed(2);
  console.log(`The area of the room is ${squareFeet} square feet (${squareMeters} square meters.)`);
}