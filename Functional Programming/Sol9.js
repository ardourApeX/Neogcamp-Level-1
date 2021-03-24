const arr = [1, 2, 3, 4, 5, 6, 7]
const biggest = (big, num) => big = num > big ? num : big
arr.reduce(biggest, -1)