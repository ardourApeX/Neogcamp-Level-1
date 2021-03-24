const arr = [1, 2, 3, 4, 5, 6, 7, 84, 2, 2, 3, 45, 6]
const oddEven = (item) => item % 2 === 0 ? item - 1 : item + 1;
console.log(arr.map(oddEven));