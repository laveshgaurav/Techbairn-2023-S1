let x = 10;
let y = 45;

let z = x / y;

console.log(z);

// Data types

// string
let str = "Hello World";
// number
let num = 3562;
// big int
let age = 24782547284572835725783523785;
// boolean
let isChecked = false;
// undefined
let abc;
// console.log(abc);
// null
let xyz = null;
// console.log(xyz);
// array
let users = [1, 2, 3, 4, 5, 6, 34.56, "Hello World"];
// console.log(users);
// objects
let user = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
};
console.log(user.username);

// js functions
function checkGrade(marks) {
  let grade;
  if (marks < 34) {
    grade = "Failed";
  } else {
    grade = "Passed";
  }
  return grade;
}
// console.log(grade);

let students = [54, 34, 67, 21, 45, 78, 43, 56, 89, 99];

// let student = {
//   name: "QWERTY",
//   marks: 45,
// };

// let status = checkGrade(student.marks);
// console.log(status);

let statuses = [];

students.forEach((data, index) => {
  let curr = checkGrade(data);
  statuses.push(curr);
});

console.log(statuses);

function multiplier(a = 1, b = 1) {
  return a * b;
}

console.log(multiplier(3));
