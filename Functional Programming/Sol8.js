const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumOdd = (sum, num, id) => sum += id % 2 === 1 ? num : 0
console.log(arr.reduce(sumOdd, 0));
