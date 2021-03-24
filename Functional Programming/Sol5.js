const numArray = [10, 9, 8, 7, 6];
var inc = 1;
const convert2Obj = (item) => ({ [item]: inc++ })
const mappedArr = numArray.map(convert2Obj)
console.log(mappedArr)