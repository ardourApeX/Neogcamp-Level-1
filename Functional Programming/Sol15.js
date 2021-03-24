const words = ["cats", "boil", "fry", "try"]
const counter = (obj, item) => ({ ...obj, [item]: item.length })
console.log(words.reduce(counter, {}))