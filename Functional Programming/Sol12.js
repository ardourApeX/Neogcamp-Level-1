const arr = [1, 2, 3, 4, 5, 6, 7, 84, 2, 2, 3, 45, 6];
const oddevenObj = (obj, item) => item % 2 === 0 ? ({ ...obj, even: obj.even + item }) : ({ ...obj, odd: obj.odd + item })
console.log(arr.reduce(oddevenObj, { even: 0, odd: 0 }))