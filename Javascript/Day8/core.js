// conditional statement
let marks = 9;

function checkGrade(marks) {
  if (marks < 20) {
    console.log("D");
  } else if (marks < 40) {
    console.log("C");
  } else if (marks < 60) {
    console.log("B");
  } else if (marks < 80) {
    console.log("A");
  } else {
    console.log("A+");
  }
}

console.log(checkGrade(marks));
