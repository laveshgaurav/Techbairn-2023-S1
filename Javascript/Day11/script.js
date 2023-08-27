// let data = [54, 67, 90, 34, 87, 12];

// const add100toEven = (e) => (e % 2 == 0 ? "Even" : "Odd");

// map
// console.log(data.map(add100toEven));
// console.log(data);

// Filter
// console.log(data.filter((e, i) => e > 50));

// reduce
// let temp = [1, 2, 3, 4, 5, 6];
// let sum = temp.reduce((prev, curr) => (curr = curr + prev), 0);
// console.log(sum);

// every
// console.log(data.every((e, i) => e > 500));

// some
// console.log(data.some((e, i) => e > 200));

// let x = data.forEach((e, i) => e + 100);
// let y = data
//   .map((e, i) => e + 100)
//   .reduce((prev, curr) => (curr = curr + prev), 0);

// console.log(y);

// sort
// console.log(data.sort((a, b) => b - a));

// spread operator
// let x = [1, 2, 3, 4];
// let y = [5, 6, 7, 8];

// console.log([11, 12, 13, ...x, 74, 32, ...y]);

// let names = {
//   f_name: "ABC",
// };

// let other = {
//   l_name: "XYZ",
// };

// let user = {
//   ...names,
//   ...other,
// };

// let { f_name } = user;
// console.log(f_name);

// console.log(user);

// rest operator
// let nums = [1, 2, 3, 4, 5];

// let [a, b, ...rest] = nums;
// console.log(rest);

let data = [
  {
    product: "phone",
    qty: 4,
    price: 500,
  },
  {
    product: "Screen Protector",
    qty: 10,
    price: 10,
  },
  {
    product: "Memory Card",
    qty: 5,
    price: 20,
  },
];

// map;
console.table(
  data.map((e, i) => ({
    ...e,
    total: e.qty * e.price,
  }))
);

// reduce
let total = data.reduce(
  (prev, curr) => (curr = curr.qty * curr.price + prev),
  0
);

console.log(total);
