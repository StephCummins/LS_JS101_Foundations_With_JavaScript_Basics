// Write a function that determines the mean (average) of the three scores 
// passed to it, and returns the letter associated with that grade.

function getGrade(grade1, grade2, grade3) {
  let average = (grade1 + grade2 + grade3) / 3;
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
