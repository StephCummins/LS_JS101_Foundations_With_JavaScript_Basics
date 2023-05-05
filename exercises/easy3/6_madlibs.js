/*Create a simple madlib program that prompts for a noun, a verb, an adverb,
and an adjective, and injects them into a story that you create. */

const RLSYNC = require("readline-sync");

let noun = RLSYNC.question("Enter a noun: ");

let verb = RLSYNC.question("Enter a verb: ");

let adjective = RLSYNC.question("Enter an adjective: ");

let adverb = RLSYNC.question("Enter an adverb: ");

console.log(`The ${adjective} ${noun} likes to ${verb} ${adverb}.`);



