// Take an object with your mother's name and age. Now, create an object for your sibling by age difference
const myMother = { name: "Laxmi Gupta", age: 50 }
const brother = { ...myMother, age: myMother.age - 30 }
console.log(myMother);
console.log(brother);
