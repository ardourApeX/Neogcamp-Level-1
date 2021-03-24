const sumofOdd = (sum = 0, num) => sum += num % 2 !== 0 ? num : 0
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr.reduce(sumofOdd))