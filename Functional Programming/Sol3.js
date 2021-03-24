const beforeBday = { name: "Joy", age: 20 };
const afterBday = { ...beforeBday, age: beforeBday.age + 1 };
console.log(beforeBday);
console.log(afterBday);