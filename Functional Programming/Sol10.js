const arr = [1, 10, 20, 12, 450, 340, 56]
const divBy10 = (item) => item % 10 === 0
console.log(arr.filter(divBy10))