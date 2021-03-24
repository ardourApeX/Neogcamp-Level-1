const input = ["apple", "banana", "mango", "papaya", "orange"]
const filterbyLength = (filterobj, item) => filterobj[item.length] === undefined ? ({ ...filterobj, [item.length]: 1 }) : ({ ...filterobj, [item.length]: filterobj[item.length] + 1 });
console.log(input.reduce(filterbyLength, {}));