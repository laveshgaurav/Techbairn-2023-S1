// let data = "Hello World";
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2];
// check
// console.log(Array.isArray(data));

// length
// console.log(data.length);

//
// console.log(data.push(12));
// console.log(data);

// console.log(data.unshift(0));
// console.log(data);

// console.log(data.pop());
// console.log(data);

// console.log(data.shift());
// console.log(data);

// console.log(data.splice(3, 3));
// console.log(data);

// console.log(data.slice(3, 6));
// console.log(data);

// console.log(data.includes(50));

// for (let i = 0; i < data.length; i++) {
//   console.log(data[i]);
// }

let todo = {
  userId: 9,
  id: 174,
  title: "similique aut quo",
  completed: false,
};

// console.log(Object.keys(todo)?.includes("username"));
// console.log(Object.values(todo));
todo.title = "Updated Value";
todo.created = new Date();
console.log(todo.createdAt);
delete todo.completed;
console.log(todo);

// CRUD
// c=>Create
// R=>Read
// U=>Update
// D =>Delete
