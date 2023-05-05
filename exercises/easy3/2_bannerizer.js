// Write a function that will take a short line of text, and write it to the 
// console log within a box.

function message(text, boxWidth) {
  if (text.length <= boxWidth) {
    let spaces = (boxWidth - text.length) / 2;
    console.log(`| ${" ".repeat(spaces)}${text}${" ".repeat(spaces)} |`);
  } else if (text.length > boxWidth) {
    let text1 = text.slice(0, (text.length / 2));
    let text2 = text.slice(text.length / 2);
    let spaces1 = (boxWidth - text1.length) / 2;
    let spaces2 = (boxWidth - text2.length) / 2;
    console.log(`| ${" ".repeat(spaces1)}${text1}${" ".repeat(spaces1)}  |`);
    console.log(`| ${" ".repeat(spaces2)}${text2}${" ".repeat(spaces2)}  |`);
  }
}

function logInBox(text, boxWidth) {
  console.log(`+-${"-".repeat(boxWidth)}-+`);
  console.log(`| ${" ".repeat(boxWidth)} |`);
  message(text, boxWidth);
  console.log(`| ${" ".repeat(boxWidth)} |`);
  console.log(`+-${"-".repeat(boxWidth)}-+`);
}

logInBox('To boldly go....', 22);
logInBox('To boldly go where no one has gone before.', 22);


