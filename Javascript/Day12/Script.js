// const data = [54, 78, 32, 56, 98, 12, 67];

// let str = "Hello World";

// console.log(str.split(" "));

// console.log(data.join("-"));
console.clear();

let data = [
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];

// CREATE
data = [
  ...data,
  {
    id: 4,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
];

console.table(data);

// update
data = data.map((e, i) =>
  e.id === 2
    ? {
        ...e,
        completed: true,
        xyz: "Checked",
      }
    : {
        ...e,
        xyz: "Skipped",
      }
);
console.table(data);

// delete
data = data.filter((e, i) => e.id !== 2);
console.table(data);

console.table(
  data.map((e, i) => ({
    ...e,
    custom_id: i + 1,
  }))
);
